import React, { useState, useEffect } from 'react';
import useNutritionStore from '../../store/nutritionStore';
import { Food } from '../../types/nutrition';
import BarcodeScanner from './BarcodeScanner';
import { fetchProductByBarcode, searchProductsByName } from '../../services/openFoodFactsApi';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  QrCodeIcon,
  XMarkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface FoodSearchProps {
  onSelectFood: (food: Food, quantity: number) => void;
  onClose: () => void;
}

const FoodSearch: React.FC<FoodSearchProps> = ({ onSelectFood, onClose }) => {
  const { searchFoods, addCustomFood, addFood } = useNutritionStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [showCustomFood, setShowCustomFood] = useState(false);
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [isLoadingBarcode, setIsLoadingBarcode] = useState(false);
  const [customFood, setCustomFood] = useState({
    name: '',
    brand: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchFoods(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, searchFoods]);

  const handleBarcodeScanned = async (barcode: string) => {
    setShowBarcodeScanner(false);
    setIsLoadingBarcode(true);
    
    try {
      const product = await fetchProductByBarcode(barcode);
      if (product) {
        // Add to local database for future use
        addFood(product);
        setSelectedFood(product);
      } else {
        alert('Produkt nicht gefunden. Bitte versuchen Sie es erneut oder erstellen Sie es manuell.');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      alert('Fehler beim Abrufen der Produktdaten.');
    } finally {
      setIsLoadingBarcode(false);
    }
  };

  const searchOnlineProducts = async () => {
    if (searchQuery.length < 2) return;
    
    setIsSearchingOnline(true);
    try {
      const onlineResults = await searchProductsByName(searchQuery);
      if (onlineResults.length > 0) {
        // Merge with local results, avoiding duplicates
        const localResults = searchFoods(searchQuery);
        const mergedResults = [...localResults];
        
        onlineResults.forEach(onlineFood => {
          if (!mergedResults.some(food => food.barcode === onlineFood.barcode)) {
            mergedResults.push(onlineFood);
          }
        });
        
        setSearchResults(mergedResults);
      }
    } catch (error) {
      console.error('Error searching online:', error);
    } finally {
      setIsSearchingOnline(false);
    }
  };

  const handleAddFood = () => {
    if (selectedFood && quantity > 0) {
      onSelectFood(selectedFood, quantity);
    }
  };

  const handleCreateCustomFood = () => {
    if (customFood.name && customFood.calories >= 0) {
      addCustomFood({
        name: customFood.name,
        brand: customFood.brand,
        category: 'other',
        nutritionPer100g: {
          calories: customFood.calories,
          protein: customFood.protein,
          carbs: customFood.carbs,
          fat: customFood.fat
        }
      });
      setShowCustomFood(false);
      setCustomFood({
        name: '',
        brand: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
      });
      setSearchQuery(customFood.name);
    }
  };

  const calculateNutrition = (food: Food, grams: number) => {
    const factor = grams / 100;
    return {
      calories: Math.round(food.nutritionPer100g.calories * factor),
      protein: Math.round(food.nutritionPer100g.protein * factor * 10) / 10,
      carbs: Math.round(food.nutritionPer100g.carbs * factor * 10) / 10,
      fat: Math.round(food.nutritionPer100g.fat * factor * 10) / 10
    };
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Lebensmittel suchen</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Lebensmittel suchen..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setShowBarcodeScanner(true)}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <QrCodeIcon className="w-5 h-5" />
              Barcode scannen
            </button>
            <button
              onClick={() => setShowCustomFood(true)}
              className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Eigenes erstellen
            </button>
          </div>
          {searchQuery.length >= 2 && (
            <button
              onClick={searchOnlineProducts}
              disabled={isSearchingOnline}
              className="w-full mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearchingOnline ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Suche online...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="w-5 h-5" />
                  Online suchen (OpenFoodFacts)
                </>
              )}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {!selectedFood && !showCustomFood && (
            <div className="p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map(food => (
                    <button
                      key={food.id}
                      onClick={() => setSelectedFood(food)}
                      className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{food.name}</h4>
                          {food.brand && (
                            <p className="text-sm text-gray-600">{food.brand}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{food.nutritionPer100g.calories} kcal</p>
                          <p className="text-xs text-gray-600">pro 100g</p>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-2 text-xs text-gray-600">
                        <span>P: {food.nutritionPer100g.protein}g</span>
                        <span>K: {food.nutritionPer100g.carbs}g</span>
                        <span>F: {food.nutritionPer100g.fat}g</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : searchQuery.length >= 2 ? (
                <p className="text-center py-8 text-gray-500">
                  Keine Lebensmittel gefunden
                </p>
              ) : (
                <p className="text-center py-8 text-gray-500">
                  Geben Sie mindestens 2 Buchstaben ein
                </p>
              )}
            </div>
          )}

          {/* Selected Food Details */}
          {selectedFood && !showCustomFood && (
            <div className="p-4">
              <button
                onClick={() => setSelectedFood(null)}
                className="text-blue-600 mb-4 hover:underline"
              >
                ← Zurück zur Suche
              </button>

              <h3 className="text-lg font-semibold mb-2">{selectedFood.name}</h3>
              {selectedFood.brand && (
                <p className="text-gray-600 mb-4">{selectedFood.brand}</p>
              )}

              {/* Quantity Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Menge
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="self-center text-gray-600">Gramm</span>
                </div>
                {selectedFood.commonServings && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedFood.commonServings.map((serving, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuantity(serving.grams)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                      >
                        {serving.name} ({serving.grams}g)
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Nutrition Display */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-900 mb-3">Nährwerte für {quantity}g</h4>
                <div className="space-y-2">
                  {(() => {
                    const nutrition = calculateNutrition(selectedFood, quantity);
                    return (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kalorien</span>
                          <span className="font-semibold">{nutrition.calories} kcal</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Protein</span>
                          <span>{nutrition.protein}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kohlenhydrate</span>
                          <span>{nutrition.carbs}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fett</span>
                          <span>{nutrition.fat}g</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              <button
                onClick={handleAddFood}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Hinzufügen
              </button>
            </div>
          )}

          {/* Custom Food Form */}
          {showCustomFood && (
            <div className="p-4">
              <button
                onClick={() => setShowCustomFood(false)}
                className="text-blue-600 mb-4 hover:underline"
              >
                ← Zurück zur Suche
              </button>

              <h3 className="text-lg font-semibold mb-4">Eigenes Lebensmittel erstellen</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={customFood.name}
                    onChange={(e) => setCustomFood({ ...customFood, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. Protein Shake"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Marke (optional)
                  </label>
                  <input
                    type="text"
                    value={customFood.brand}
                    onChange={(e) => setCustomFood({ ...customFood, brand: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="z.B. MyProtein"
                  />
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Nährwerte pro 100g</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Kalorien *</label>
                      <input
                        type="number"
                        value={customFood.calories}
                        onChange={(e) => setCustomFood({ ...customFood, calories: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Protein (g)</label>
                      <input
                        type="number"
                        value={customFood.protein}
                        onChange={(e) => setCustomFood({ ...customFood, protein: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Kohlenhydrate (g)</label>
                      <input
                        type="number"
                        value={customFood.carbs}
                        onChange={(e) => setCustomFood({ ...customFood, carbs: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Fett (g)</label>
                      <input
                        type="number"
                        value={customFood.fat}
                        onChange={(e) => setCustomFood({ ...customFood, fat: parseFloat(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCreateCustomFood}
                  disabled={!customFood.name}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Lebensmittel erstellen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Loading overlay */}
      {isLoadingBarcode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <ArrowPathIcon className="w-8 h-8 animate-spin text-blue-600 mb-2" />
            <p className="text-gray-700">Lade Produktdaten...</p>
          </div>
        </div>
      )}

      {/* Barcode Scanner */}
      {showBarcodeScanner && (
        <BarcodeScanner
          onScan={handleBarcodeScanned}
          onClose={() => setShowBarcodeScanner(false)}
        />
      )}
    </div>
  );
};

export default FoodSearch;