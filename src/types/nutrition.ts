export interface NutritionInfo {
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  fiber?: number; // grams
  sugar?: number; // grams
  sodium?: number; // mg
}

export interface Food {
  id: string;
  name: string;
  brand?: string;
  barcode?: string;
  category: FoodCategory;
  nutritionPer100g: NutritionInfo;
  commonServings?: ServingSize[];
  isCustom?: boolean;
  createdAt?: Date;
}

export interface ServingSize {
  name: string; // e.g., "1 slice", "1 cup", "1 piece"
  grams: number;
}

export type FoodCategory = 
  | 'fruits'
  | 'vegetables'
  | 'grains'
  | 'protein'
  | 'dairy'
  | 'fats'
  | 'sweets'
  | 'beverages'
  | 'other';

export interface FoodEntry {
  id: string;
  foodId: string;
  foodName: string;
  date: string; // ISO date
  meal: MealType;
  quantity: number; // in grams
  nutrition: NutritionInfo;
  customFood?: Food; // For quick-added foods
  timestamp: Date;
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface DailyNutrition {
  date: string;
  targetCalories: number;
  targetProtein: number;
  targetCarbs: number;
  targetFat: number;
  consumed: NutritionInfo;
  remaining: NutritionInfo;
  meals: {
    breakfast: FoodEntry[];
    lunch: FoodEntry[];
    dinner: FoodEntry[];
    snack: FoodEntry[];
  };
}

export interface NutritionGoals {
  dailyCalories: number;
  proteinPercentage: number; // percentage of daily calories
  carbsPercentage: number;
  fatPercentage: number;
  weightGoal: 'lose' | 'maintain' | 'gain';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
}