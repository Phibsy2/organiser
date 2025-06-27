import { Exercise } from '../types';

export const exercisesDatabase: Exercise[] = [
  // Brust
  {
    id: 'bench-press',
    name: 'Bankdrücken',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate'
  },
  {
    id: 'incline-bench-press',
    name: 'Schrägbankdrücken',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate'
  },
  {
    id: 'dumbbell-fly',
    name: 'Kurzhantel-Fliegende',
    category: 'strength',
    muscleGroups: ['chest'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner'
  },
  {
    id: 'push-ups',
    name: 'Liegestütze',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  
  // Rücken
  {
    id: 'lat-pulldown',
    name: 'Latzug',
    category: 'strength',
    muscleGroups: ['back', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner'
  },
  {
    id: 'pull-ups',
    name: 'Klimmzüge',
    category: 'strength',
    muscleGroups: ['back', 'biceps'],
    equipment: ['pull-up-bar'],
    difficulty: 'intermediate'
  },
  {
    id: 'rowing',
    name: 'Rudern',
    category: 'strength',
    muscleGroups: ['back', 'biceps'],
    equipment: ['barbell'],
    difficulty: 'intermediate'
  },
  {
    id: 'cable-row',
    name: 'Kabelzug-Rudern',
    category: 'strength',
    muscleGroups: ['back', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner'
  },
  {
    id: 'deadlifts',
    name: 'Kreuzheben',
    category: 'strength',
    muscleGroups: ['back', 'glutes', 'hamstrings'],
    equipment: ['barbell'],
    difficulty: 'advanced'
  },
  
  // Schultern
  {
    id: 'shoulder-press',
    name: 'Schulterdrücken',
    category: 'strength',
    muscleGroups: ['shoulders'],
    equipment: ['barbell'],
    difficulty: 'intermediate'
  },
  {
    id: 'lateral-raises',
    name: 'Seitheben',
    category: 'strength',
    muscleGroups: ['shoulders'],
    equipment: ['dumbbell'],
    difficulty: 'beginner'
  },
  {
    id: 'front-raises',
    name: 'Frontheben',
    category: 'strength',
    muscleGroups: ['shoulders'],
    equipment: ['dumbbell'],
    difficulty: 'beginner'
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    category: 'strength',
    muscleGroups: ['shoulders', 'back'],
    equipment: ['cable-machine'],
    difficulty: 'beginner'
  },
  
  // Arme
  {
    id: 'bicep-curls',
    name: 'Bizeps-Curls',
    category: 'strength',
    muscleGroups: ['biceps'],
    equipment: ['barbell'],
    difficulty: 'beginner'
  },
  {
    id: 'hammer-curls',
    name: 'Hammer-Curls',
    category: 'strength',
    muscleGroups: ['biceps'],
    equipment: ['dumbbell'],
    difficulty: 'beginner'
  },
  {
    id: 'tricep-dips',
    name: 'Trizeps-Dips',
    category: 'strength',
    muscleGroups: ['triceps'],
    equipment: ['dip-station'],
    difficulty: 'intermediate'
  },
  {
    id: 'tricep-pushdown',
    name: 'Trizeps-Drücken',
    category: 'strength',
    muscleGroups: ['triceps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner'
  },
  {
    id: 'overhead-tricep',
    name: 'Überkopf-Trizeps',
    category: 'strength',
    muscleGroups: ['triceps'],
    equipment: ['dumbbell'],
    difficulty: 'beginner'
  },
  
  // Beine
  {
    id: 'squats',
    name: 'Kniebeugen',
    category: 'strength',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    equipment: ['barbell'],
    difficulty: 'intermediate'
  },
  {
    id: 'front-squats',
    name: 'Frontkniebeugen',
    category: 'strength',
    muscleGroups: ['quadriceps', 'glutes'],
    equipment: ['barbell'],
    difficulty: 'advanced'
  },
  {
    id: 'lunges',
    name: 'Ausfallschritte',
    category: 'strength',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    equipment: ['dumbbell'],
    difficulty: 'beginner'
  },
  {
    id: 'leg-press',
    name: 'Beinpresse',
    category: 'strength',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    equipment: ['machine'],
    difficulty: 'beginner'
  },
  {
    id: 'leg-curls',
    name: 'Beinbeuger',
    category: 'strength',
    muscleGroups: ['hamstrings'],
    equipment: ['machine'],
    difficulty: 'beginner'
  },
  {
    id: 'leg-extensions',
    name: 'Beinstrecker',
    category: 'strength',
    muscleGroups: ['quadriceps'],
    equipment: ['machine'],
    difficulty: 'beginner'
  },
  {
    id: 'calf-raises',
    name: 'Wadenheben',
    category: 'strength',
    muscleGroups: ['calves'],
    equipment: ['barbell'],
    difficulty: 'beginner'
  },
  {
    id: 'romanian-deadlifts',
    name: 'Rumänisches Kreuzheben',
    category: 'strength',
    muscleGroups: ['hamstrings', 'glutes', 'back'],
    equipment: ['barbell'],
    difficulty: 'intermediate'
  },
  
  // Core
  {
    id: 'planks',
    name: 'Planks',
    category: 'core',
    muscleGroups: ['abs', 'core'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  {
    id: 'side-planks',
    name: 'Seitliche Planks',
    category: 'core',
    muscleGroups: ['abs', 'obliques'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  {
    id: 'crunches',
    name: 'Crunches',
    category: 'core',
    muscleGroups: ['abs'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  {
    id: 'bicycle-crunches',
    name: 'Fahrrad-Crunches',
    category: 'core',
    muscleGroups: ['abs', 'obliques'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  {
    id: 'russian-twists',
    name: 'Russische Drehungen',
    category: 'core',
    muscleGroups: ['abs', 'obliques'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate'
  },
  {
    id: 'hanging-knee-raises',
    name: 'Hängende Knieheben',
    category: 'core',
    muscleGroups: ['abs'],
    equipment: ['pull-up-bar'],
    difficulty: 'intermediate'
  },
  {
    id: 'ab-wheel',
    name: 'Ab-Roller',
    category: 'core',
    muscleGroups: ['abs', 'core'],
    equipment: ['ab-wheel'],
    difficulty: 'advanced'
  },
  
  // Cardio
  {
    id: 'treadmill',
    name: 'Laufband',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['treadmill'],
    difficulty: 'beginner'
  },
  {
    id: 'cycling',
    name: 'Radfahren',
    category: 'cardio',
    muscleGroups: ['legs'],
    equipment: ['bike'],
    difficulty: 'beginner'
  },
  {
    id: 'rowing-machine',
    name: 'Rudermaschine',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['rowing-machine'],
    difficulty: 'intermediate'
  },
  {
    id: 'elliptical',
    name: 'Ellipsentrainer',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['elliptical'],
    difficulty: 'beginner'
  },
  {
    id: 'jumping-rope',
    name: 'Seilspringen',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['jump-rope'],
    difficulty: 'intermediate'
  },
  {
    id: 'burpees',
    name: 'Burpees',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['none'],
    difficulty: 'intermediate'
  },
  {
    id: 'mountain-climbers',
    name: 'Bergsteiger',
    category: 'cardio',
    muscleGroups: ['full-body', 'core'],
    equipment: ['none'],
    difficulty: 'intermediate'
  },
  {
    id: 'jumping-jacks',
    name: 'Hampelmänner',
    category: 'cardio',
    muscleGroups: ['full-body'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  
  // Mobilität/Flexibilität
  {
    id: 'foam-rolling',
    name: 'Faszienrolle',
    category: 'flexibility',
    muscleGroups: ['full-body'],
    equipment: ['foam-roller'],
    difficulty: 'beginner'
  },
  {
    id: 'stretching',
    name: 'Dehnen',
    category: 'flexibility',
    muscleGroups: ['full-body'],
    equipment: ['none'],
    difficulty: 'beginner'
  },
  {
    id: 'yoga',
    name: 'Yoga',
    category: 'flexibility',
    muscleGroups: ['full-body'],
    equipment: ['yoga-mat'],
    difficulty: 'beginner'
  }
];

// Helper functions
export const getExerciseById = (id: string): Exercise | undefined => {
  return exercisesDatabase.find(exercise => exercise.id === id);
};

export const getExercisesByCategory = (category: string): Exercise[] => {
  return exercisesDatabase.filter(exercise => exercise.category === category);
};

export const getExercisesByMuscleGroup = (muscleGroup: string): Exercise[] => {
  return exercisesDatabase.filter(exercise => 
    exercise.muscleGroups.includes(muscleGroup)
  );
};

export const getExercisesByEquipment = (equipment: string): Exercise[] => {
  return exercisesDatabase.filter(exercise => 
    exercise.equipment.includes(equipment)
  );
};

export const getExercisesByDifficulty = (difficulty: string): Exercise[] => {
  return exercisesDatabase.filter(exercise => 
    exercise.difficulty === difficulty
  );
};