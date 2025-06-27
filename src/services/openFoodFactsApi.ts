import { Food, NutritionInfo } from '../types/nutrition';

const OPENFOODFACTS_API_URL = 'https://world.openfoodfacts.org/api/v0/product';

interface OpenFoodFactsProduct {
  status: number;
  status_verbose: string;
  product?: {
    product_name: string;
    product_name_de?: string;
    brands?: string;
    code: string;
    nutriments: {
      energy_100g?: number;
      'energy-kcal_100g'?: number;
      proteins_100g?: number;
      carbohydrates_100g?: number;
      fat_100g?: number;
      fiber_100g?: number;
      sugars_100g?: number;
      sodium_100g?: number;
    };
    serving_size?: string;
    nutrition_data_per?: string;
  };
}

export const fetchProductByBarcode = async (barcode: string): Promise<Food | null> => {
  try {
    const response = await fetch(`${OPENFOODFACTS_API_URL}/${barcode}.json`);
    const data: OpenFoodFactsProduct = await response.json();

    if (data.status !== 1 || !data.product) {
      return null;
    }

    const product = data.product;
    
    // Convert OpenFoodFacts data to our Food format
    const nutritionPer100g: NutritionInfo = {
      calories: Math.round(product.nutriments['energy-kcal_100g'] || product.nutriments.energy_100g || 0),
      protein: Math.round((product.nutriments.proteins_100g || 0) * 10) / 10,
      carbs: Math.round((product.nutriments.carbohydrates_100g || 0) * 10) / 10,
      fat: Math.round((product.nutriments.fat_100g || 0) * 10) / 10,
      fiber: product.nutriments.fiber_100g ? Math.round(product.nutriments.fiber_100g * 10) / 10 : undefined,
      sugar: product.nutriments.sugars_100g ? Math.round(product.nutriments.sugars_100g * 10) / 10 : undefined,
      sodium: product.nutriments.sodium_100g ? Math.round(product.nutriments.sodium_100g * 1000) : undefined // Convert g to mg
    };

    const food: Food = {
      id: `barcode-${product.code}`,
      name: product.product_name_de || product.product_name || 'Unbekanntes Produkt',
      brand: product.brands,
      barcode: product.code,
      category: 'other',
      nutritionPer100g,
      commonServings: product.serving_size ? [
        {
          name: 'Portion',
          grams: parseServingSize(product.serving_size)
        }
      ] : undefined
    };

    return food;
  } catch (error) {
    console.error('Error fetching product from OpenFoodFacts:', error);
    return null;
  }
};

// Helper function to parse serving size from string (e.g., "30g" -> 30)
const parseServingSize = (servingSize: string): number => {
  const match = servingSize.match(/(\d+(?:\.\d+)?)\s*g/i);
  return match ? parseFloat(match[1]) : 100;
};

// Search for products by name
export const searchProductsByName = async (query: string): Promise<Food[]> => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
        query
      )}&search_simple=1&action=process&json=1&page_size=20&page=1&lc=de`
    );
    const data = await response.json();

    if (!data.products || data.products.length === 0) {
      return [];
    }

    return data.products
      .filter((product: any) => product.nutriments && product.nutriments['energy-kcal_100g'])
      .map((product: any) => {
        const nutritionPer100g: NutritionInfo = {
          calories: Math.round(product.nutriments['energy-kcal_100g'] || 0),
          protein: Math.round((product.nutriments.proteins_100g || 0) * 10) / 10,
          carbs: Math.round((product.nutriments.carbohydrates_100g || 0) * 10) / 10,
          fat: Math.round((product.nutriments.fat_100g || 0) * 10) / 10,
          fiber: product.nutriments.fiber_100g ? Math.round(product.nutriments.fiber_100g * 10) / 10 : undefined,
          sugar: product.nutriments.sugars_100g ? Math.round(product.nutriments.sugars_100g * 10) / 10 : undefined,
          sodium: product.nutriments.sodium_100g ? Math.round(product.nutriments.sodium_100g * 1000) : undefined
        };

        return {
          id: `barcode-${product.code}`,
          name: product.product_name_de || product.product_name || 'Unbekanntes Produkt',
          brand: product.brands,
          barcode: product.code,
          category: 'other' as const,
          nutritionPer100g,
          commonServings: product.serving_size ? [
            {
              name: 'Portion',
              grams: parseServingSize(product.serving_size)
            }
          ] : undefined
        } as Food;
      });
  } catch (error) {
    console.error('Error searching products on OpenFoodFacts:', error);
    return [];
  }
};