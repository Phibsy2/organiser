import { LearningModule } from '../../types/learning';
import { kurseinheit1BGBUnits } from './kurseinheit1';
import { kurseinheit2BGBUnits } from './kurseinheit2';
import { kurseinheit3BGBUnits } from './kurseinheit3';
import { kurseinheit4BGBUnits } from './kurseinheit4';
import { kurseinheit5BGBUnits } from './kurseinheit5';
import { kurseinheit6BGBUnits } from './kurseinheit6';
import { kurseinheit7BGBUnits } from './kurseinheit7';
import { kurseinheit8BGBUnits } from './kurseinheit8';

export const bgbATModule: LearningModule = {
  id: 'bgb-at',
  title: 'BGB Allgemeiner Teil (Modul 55101)',
  description: 'Der Allgemeine Teil des BGB bildet das Fundament des deutschen Zivilrechts. Lernen Sie Rechtsgeschäfte, Willenserklärungen, Vertragsschluss, Stellvertretung und vieles mehr.',
  category: 'zivilrecht',
  difficulty: 'intermediate',
  prerequisites: ['propaedeutikum'],
  estimatedHours: 300, // 10 ECTS × 30 Stunden
  credits: 10,
  moduleCode: '55101',
  responsibleProfessor: 'Prof. Dr. jur. habil. Ulrich Wackerbarth',
  examType: 'Klausur (4 Stunden)',
  units: [
    ...kurseinheit1BGBUnits,
    ...kurseinheit2BGBUnits,
    ...kurseinheit3BGBUnits,
    ...kurseinheit4BGBUnits,
    ...kurseinheit5BGBUnits,
    ...kurseinheit6BGBUnits,
    ...kurseinheit7BGBUnits,
    ...kurseinheit8BGBUnits
  ]
};

// Helper function for spaced repetition cards
export function getAllBGBATCards() {
  const cards = [];
  
  for (const unit of bgbATModule.units) {
    // Generate cards from exercises
    for (const exercise of unit.exercises) {
      if (exercise.type === 'multipleChoice' || exercise.type === 'fillInBlanks') {
        cards.push({
          id: `card-bgb-${exercise.id}`,
          contentType: 'exercise' as const,
          contentId: exercise.id,
          front: exercise.content.question,
          back: exercise.solution.explanation,
          unitId: unit.id,
          difficulty: exercise.difficulty
        });
      }
    }
    
    // Generate cards from glossary terms
    for (const term of unit.content.glossary) {
      cards.push({
        id: `card-bgb-glossary-${unit.id}-${term.term}`,
        contentType: 'definition' as const,
        contentId: term.term,
        front: `Was bedeutet: ${term.term}?`,
        back: term.definition,
        unitId: unit.id,
        difficulty: 'intermediate' as const
      });
    }
  }
  
  return cards;
}