import { LearningModule, Exercise, ExerciseType } from '../types/learning';
import { kurseinheit1Units } from './propaedeutikum/kurseinheit1';
import { kurseinheit2Units } from './propaedeutikum/kurseinheit2';
import { kurseinheit3Units } from './propaedeutikum/kurseinheit3';
import { zusatzmaterial1Units } from './propaedeutikum/zusatzmaterial1';
import { zusatzmaterial2Units } from './propaedeutikum/zusatzmaterial2';

export const propaedeutikumModule: LearningModule = {
  id: 'propaedeutikum',
  title: 'Propädeutikum - Grundlagen der Rechtswissenschaft (Modul 55100)',
  description: 'Umfassende Einführung in die juristische Arbeitsweise, Methodik und alle Rechtsgebiete. 10 ECTS-Punkte, 300 Stunden Workload.',
  category: 'propaedeutikum',
  difficulty: 'beginner',
  prerequisites: [],
  estimatedHours: 300, // 10 ECTS × 30 Stunden
  credits: 10,
  moduleCode: '55100',
  responsibleProfessor: 'Prof. Dr. Katharina Gräfin von Schlieffen',
  examType: 'Klausur (4 Stunden) oder Hausarbeit',
  units: [
    ...kurseinheit1Units,
    ...kurseinheit2Units, 
    ...kurseinheit3Units,
    ...zusatzmaterial1Units,
    ...zusatzmaterial2Units
  ]
};

// Helper function to get all exercises for spaced repetition
export function getAllExercisesAsCards() {
  const cards = [];
  
  for (const unit of propaedeutikumModule.units) {
    for (const exercise of unit.exercises) {
      // Convert exercises to spaced repetition cards
      if (exercise.type === 'multipleChoice' || exercise.type === 'fillInBlanks') {
        cards.push({
          id: `card-${exercise.id}`,
          contentType: 'exercise' as const,
          contentId: exercise.id,
          front: exercise.content.question,
          back: exercise.solution.explanation,
          unitId: unit.id,
          difficulty: exercise.difficulty
        });
      }
    }
    
    // Add glossary terms as cards
    for (const term of unit.content.glossary) {
      cards.push({
        id: `card-glossary-${unit.id}-${term.term}`,
        contentType: 'definition' as const,
        contentId: term.term,
        front: `Was bedeutet: ${term.term}?`,
        back: term.definition,
        unitId: unit.id,
        difficulty: 'beginner' as const
      });
    }
  }
  
  return cards;
}