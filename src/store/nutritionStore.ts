import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Food, FoodEntry, NutritionGoals, DailyNutrition, NutritionInfo, MealType } from '../types/nutrition';

interface NutritionState {
  // Food database
  foods: Food[];
  customFoods: Food[];
  
  // Daily entries
  foodEntries: FoodEntry[];
  
  // Goals
  nutritionGoals: NutritionGoals;
  
  // Actions
  setNutritionGoals: (goals: NutritionGoals) => void;
  addFood: (food: Food) => void;
  addCustomFood: (food: Omit<Food, 'id' | 'isCustom' | 'createdAt'>) => void;
  searchFoods: (query: string) => Food[];
  getFoodById: (id: string) => Food | undefined;
  getFoodByBarcode: (barcode: string) => Food | undefined;
  
  // Food logging
  logFood: (entry: Omit<FoodEntry, 'id' | 'timestamp'>) => void;
  updateFoodEntry: (id: string, updates: Partial<FoodEntry>) => void;
  deleteFoodEntry: (id: string) => void;
  copyMeal: (fromDate: string, fromMeal: MealType, toDate: string, toMeal: MealType) => void;
  
  // Daily nutrition
  getDailyNutrition: (date: string) => DailyNutrition;
  getWeeklyAverage: () => NutritionInfo;
  getCalorieDeficit: (date: string) => number;
}

// Pre-populated food database (German foods)
const initialFoods: Food[] = [
  // Proteins
  {
    id: 'chicken-breast',
    name: 'Hähnchenbrust',
    category: 'protein',
    nutritionPer100g: { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    commonServings: [{ name: '1 Portion', grams: 150 }]
  },
  {
    id: 'eggs',
    name: 'Eier',
    category: 'protein',
    nutritionPer100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    commonServings: [{ name: '1 Ei', grams: 60 }]
  },
  {
    id: 'salmon',
    name: 'Lachs',
    category: 'protein',
    nutritionPer100g: { calories: 208, protein: 20, carbs: 0, fat: 13 },
    commonServings: [{ name: '1 Filet', grams: 150 }]
  },
  {
    id: 'quark',
    name: 'Magerquark',
    category: 'dairy',
    nutritionPer100g: { calories: 67, protein: 12, carbs: 4, fat: 0.3 },
    commonServings: [{ name: '1 Becher', grams: 250 }]
  },
  
  // Carbs
  {
    id: 'rice',
    name: 'Reis (gekocht)',
    category: 'grains',
    nutritionPer100g: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    commonServings: [{ name: '1 Portion', grams: 150 }]
  },
  {
    id: 'pasta',
    name: 'Nudeln (gekocht)',
    category: 'grains',
    nutritionPer100g: { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
    commonServings: [{ name: '1 Portion', grams: 200 }]
  },
  {
    id: 'oats',
    name: 'Haferflocken',
    category: 'grains',
    nutritionPer100g: { calories: 372, protein: 13.5, carbs: 58.7, fat: 7 },
    commonServings: [{ name: '1 Portion', grams: 50 }]
  },
  {
    id: 'bread',
    name: 'Vollkornbrot',
    category: 'grains',
    nutritionPer100g: { calories: 250, protein: 8.5, carbs: 43, fat: 3.5 },
    commonServings: [{ name: '1 Scheibe', grams: 40 }]
  },
  
  // Vegetables
  {
    id: 'broccoli',
    name: 'Brokkoli',
    category: 'vegetables',
    nutritionPer100g: { calories: 35, protein: 2.8, carbs: 7, fat: 0.4 },
    commonServings: [{ name: '1 Portion', grams: 200 }]
  },
  {
    id: 'spinach',
    name: 'Spinat',
    category: 'vegetables',
    nutritionPer100g: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    commonServings: [{ name: '1 Portion', grams: 100 }]
  },
  {
    id: 'tomatoes',
    name: 'Tomaten',
    category: 'vegetables',
    nutritionPer100g: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    commonServings: [{ name: '1 Tomate', grams: 120 }]
  },
  
  // Fruits
  {
    id: 'banana',
    name: 'Banane',
    category: 'fruits',
    nutritionPer100g: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    commonServings: [{ name: '1 Banane', grams: 120 }]
  },
  {
    id: 'apple',
    name: 'Apfel',
    category: 'fruits',
    nutritionPer100g: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    commonServings: [{ name: '1 Apfel', grams: 150 }]
  },
  {
    id: 'berries',
    name: 'Beeren (gemischt)',
    category: 'fruits',
    nutritionPer100g: { calories: 57, protein: 0.7, carbs: 14, fat: 0.3 },
    commonServings: [{ name: '1 Handvoll', grams: 100 }]
  },
  
  // Fats
  {
    id: 'olive-oil',
    name: 'Olivenöl',
    category: 'fats',
    nutritionPer100g: { calories: 884, protein: 0, carbs: 0, fat: 100 },
    commonServings: [{ name: '1 EL', grams: 10 }]
  },
  {
    id: 'nuts',
    name: 'Nüsse (gemischt)',
    category: 'fats',
    nutritionPer100g: { calories: 607, protein: 20, carbs: 21, fat: 54 },
    commonServings: [{ name: '1 Handvoll', grams: 30 }]
  },
  {
    id: 'avocado',
    name: 'Avocado',
    category: 'fats',
    nutritionPer100g: { calories: 160, protein: 2, carbs: 9, fat: 15 },
    commonServings: [{ name: '1/2 Avocado', grams: 100 }]
  }
];

const useNutritionStore = create<NutritionState>()(
  persist(
    (set, get) => ({
      foods: initialFoods,
      customFoods: [],
      foodEntries: [],
      nutritionGoals: {
        dailyCalories: 2000,
        proteinPercentage: 30,
        carbsPercentage: 40,
        fatPercentage: 30,
        weightGoal: 'maintain',
        activityLevel: 'moderate'
      },

      setNutritionGoals: (goals) => set({ nutritionGoals: goals }),

      addFood: (food) => set((state) => ({
        foods: [...state.foods, food]
      })),

      addCustomFood: (foodData) => set((state) => {
        const customFood: Food = {
          ...foodData,
          id: `custom-${Date.now()}`,
          isCustom: true,
          createdAt: new Date()
        };
        return {
          customFoods: [...state.customFoods, customFood]
        };
      }),

      searchFoods: (query) => {
        const state = get();
        const allFoods = [...state.foods, ...state.customFoods];
        const searchTerm = query.toLowerCase();
        
        return allFoods.filter(food => 
          food.name.toLowerCase().includes(searchTerm) ||
          (food.brand && food.brand.toLowerCase().includes(searchTerm))
        );
      },

      getFoodById: (id) => {
        const state = get();
        return [...state.foods, ...state.customFoods].find(f => f.id === id);
      },

      getFoodByBarcode: (barcode) => {
        const state = get();
        return [...state.foods, ...state.customFoods].find(f => f.barcode === barcode);
      },

      logFood: (entry) => set((state) => ({
        foodEntries: [...state.foodEntries, {
          ...entry,
          id: `entry-${Date.now()}`,
          timestamp: new Date()
        }]
      })),

      updateFoodEntry: (id, updates) => set((state) => ({
        foodEntries: state.foodEntries.map(entry =>
          entry.id === id ? { ...entry, ...updates } : entry
        )
      })),

      deleteFoodEntry: (id) => set((state) => ({
        foodEntries: state.foodEntries.filter(entry => entry.id !== id)
      })),

      copyMeal: (fromDate, fromMeal, toDate, toMeal) => set((state) => {
        const entriesToCopy = state.foodEntries.filter(
          entry => entry.date === fromDate && entry.meal === fromMeal
        );
        
        const copiedEntries = entriesToCopy.map(entry => ({
          ...entry,
          id: `entry-${Date.now()}-${Math.random()}`,
          date: toDate,
          meal: toMeal,
          timestamp: new Date()
        }));
        
        return {
          foodEntries: [...state.foodEntries, ...copiedEntries]
        };
      }),

      getDailyNutrition: (date) => {
        const state = get();
        const dayEntries = state.foodEntries.filter(entry => entry.date === date);
        
        const consumed: NutritionInfo = {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0,
          sugar: 0,
          sodium: 0
        };
        
        const meals = {
          breakfast: [] as FoodEntry[],
          lunch: [] as FoodEntry[],
          dinner: [] as FoodEntry[],
          snack: [] as FoodEntry[]
        };
        
        dayEntries.forEach(entry => {
          consumed.calories += entry.nutrition.calories;
          consumed.protein += entry.nutrition.protein;
          consumed.carbs += entry.nutrition.carbs;
          consumed.fat += entry.nutrition.fat;
          consumed.fiber = (consumed.fiber || 0) + (entry.nutrition.fiber || 0);
          consumed.sugar = (consumed.sugar || 0) + (entry.nutrition.sugar || 0);
          consumed.sodium = (consumed.sodium || 0) + (entry.nutrition.sodium || 0);
          
          meals[entry.meal].push(entry);
        });
        
        const goals = state.nutritionGoals;
        const targetProtein = (goals.dailyCalories * goals.proteinPercentage / 100) / 4;
        const targetCarbs = (goals.dailyCalories * goals.carbsPercentage / 100) / 4;
        const targetFat = (goals.dailyCalories * goals.fatPercentage / 100) / 9;
        
        const remaining: NutritionInfo = {
          calories: goals.dailyCalories - consumed.calories,
          protein: targetProtein - consumed.protein,
          carbs: targetCarbs - consumed.carbs,
          fat: targetFat - consumed.fat,
          fiber: 30 - (consumed.fiber || 0), // 30g daily recommendation
          sugar: 50 - (consumed.sugar || 0), // 50g daily limit
          sodium: 2300 - (consumed.sodium || 0) // 2300mg daily limit
        };
        
        return {
          date,
          targetCalories: goals.dailyCalories,
          targetProtein,
          targetCarbs,
          targetFat,
          consumed,
          remaining,
          meals
        };
      },

      getWeeklyAverage: () => {
        const state = get();
        const today = new Date();
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        
        const weekEntries = state.foodEntries.filter(entry => {
          const entryDate = new Date(entry.date);
          return entryDate >= weekAgo && entryDate <= today;
        });
        
        if (weekEntries.length === 0) {
          return { calories: 0, protein: 0, carbs: 0, fat: 0 };
        }
        
        const totals = weekEntries.reduce((acc, entry) => ({
          calories: acc.calories + entry.nutrition.calories,
          protein: acc.protein + entry.nutrition.protein,
          carbs: acc.carbs + entry.nutrition.carbs,
          fat: acc.fat + entry.nutrition.fat
        }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
        
        const days = 7;
        return {
          calories: Math.round(totals.calories / days),
          protein: Math.round(totals.protein / days),
          carbs: Math.round(totals.carbs / days),
          fat: Math.round(totals.fat / days)
        };
      },

      getCalorieDeficit: (date) => {
        const state = get();
        const daily = get().getDailyNutrition(date);
        return state.nutritionGoals.dailyCalories - daily.consumed.calories;
      }
    }),
    {
      name: 'nutrition-storage'
    }
  )
);

export default useNutritionStore;