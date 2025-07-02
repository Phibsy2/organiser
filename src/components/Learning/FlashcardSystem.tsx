import React, { useState, useEffect } from 'react';
import {
  AcademicCapIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import useLearningStore from '../../store/learningStore';
import useGamificationStore from '../../store/gamificationStore';

interface Flashcard {
  id: string;
  unitId: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: Date;
  nextReview?: Date;
  reviewCount: number;
  correctCount: number;
  incorrectCount: number;
  confidence: number; // 0-1
}

const FlashcardSystem: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<Flashcard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [dailyProgress, setDailyProgress] = useState({ reviewed: 0, correct: 0, goal: 20 });
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const { currentModule } = useLearningStore();
  const { addXP, profile, updateStreak } = useGamificationStore();
  
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadFlashcards();
    updateStreak();
  }, []);

  const loadFlashcards = async () => {
    if (!currentModule) return;
    
    setLoading(true);
    try {
      // Generate flashcards from module content
      const cards = generateFlashcardsFromModule(currentModule);
      
      // Sort by spaced repetition algorithm
      const sortedCards = sortCardsBySpacedRepetition(cards);
      setFlashcards(sortedCards);
      
      if (sortedCards.length > 0) {
        setCurrentCard(sortedCards[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const generateFlashcardsFromModule = (module: any): Flashcard[] => {
    const cards: Flashcard[] = [];
    
    // Generate cards from glossary terms
    module.units.forEach((unit: any) => {
      unit.content.glossary?.forEach((term: any) => {
        cards.push({
          id: `glossary-${unit.id}-${term.term}`,
          unitId: unit.id,
          front: `Was bedeutet: ${term.term}?`,
          back: term.definition,
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0,
          incorrectCount: 0,
          confidence: 0
        });
      });
      
      // Generate cards from key concepts in sections
      unit.content.sections?.forEach((section: any, idx: number) => {
        // Extract key concepts from section content
        const keyPoints = extractKeyPoints(section.content);
        keyPoints.forEach((point, pidx) => {
          cards.push({
            id: `concept-${unit.id}-${idx}-${pidx}`,
            unitId: unit.id,
            front: point.question,
            back: point.answer,
            difficulty: point.difficulty || 'medium',
            reviewCount: 0,
            correctCount: 0,
            incorrectCount: 0,
            confidence: 0
          });
        });
      });
    });
    
    return cards;
  };

  const extractKeyPoints = (content: string) => {
    const keyPoints = [];
    
    // Extract definitions (text between ** markers)
    const definitions = content.match(/\*\*(.*?)\*\*/g);
    if (definitions) {
      definitions.forEach(def => {
        const term = def.replace(/\*\*/g, '');
        const context = content.split(def)[1]?.split('\n')[0]?.trim();
        if (context) {
          keyPoints.push({
            question: `Was ist ${term}?`,
            answer: context,
            difficulty: 'medium' as const
          });
        }
      });
    }
    
    // Extract numbered lists as concepts
    const numberedLists = content.match(/\d+\.\s*(.*?)(?=\n|$)/g);
    if (numberedLists && numberedLists.length > 1) {
      keyPoints.push({
        question: `Nenne die wichtigsten Punkte zu diesem Thema`,
        answer: numberedLists.join('\n'),
        difficulty: 'hard' as const
      });
    }
    
    return keyPoints;
  };

  const sortCardsBySpacedRepetition = (cards: Flashcard[]): Flashcard[] => {
    const now = new Date();
    
    return cards.sort((a, b) => {
      // Cards that need review come first
      if (a.nextReview && b.nextReview) {
        return a.nextReview.getTime() - b.nextReview.getTime();
      }
      
      // New cards (no review date) come after due cards
      if (!a.nextReview && b.nextReview && b.nextReview < now) return 1;
      if (a.nextReview && a.nextReview < now && !b.nextReview) return -1;
      
      // Sort by confidence (lower confidence first)
      return a.confidence - b.confidence;
    });
  };

  const handleAnswer = (difficulty: 'easy' | 'medium' | 'hard' | 'again') => {
    if (!currentCard) return;
    
    const isCorrect = difficulty !== 'again';
    const updatedCard = { ...currentCard };
    
    // Update card statistics
    updatedCard.reviewCount++;
    if (isCorrect) {
      updatedCard.correctCount++;
    } else {
      updatedCard.incorrectCount++;
    }
    
    // Update confidence based on answer
    const confidenceChange = {
      easy: 0.15,
      medium: 0.1,
      hard: 0.05,
      again: -0.2
    };
    
    updatedCard.confidence = Math.max(0, Math.min(1, 
      updatedCard.confidence + confidenceChange[difficulty]
    ));
    
    // Calculate next review date (simplified spaced repetition)
    const intervals = {
      easy: updatedCard.confidence > 0.8 ? 7 : 4,
      medium: updatedCard.confidence > 0.5 ? 3 : 2,
      hard: 1,
      again: 0.25 // 6 hours
    };
    
    const nextReviewDays = intervals[difficulty] * (1 + updatedCard.confidence);
    updatedCard.lastReviewed = new Date();
    updatedCard.nextReview = new Date(Date.now() + nextReviewDays * 24 * 60 * 60 * 1000);
    
    // Update flashcards array
    const updatedCards = flashcards.map(card => 
      card.id === updatedCard.id ? updatedCard : card
    );
    setFlashcards(updatedCards);
    
    // Update daily progress
    setDailyProgress(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      correct: isCorrect ? prev.correct + 1 : prev.correct
    }));
    
    // Award XP only for correct answers
    if (isCorrect) {
      const xpReward = {
        easy: 5,
        medium: 10,
        hard: 15
      };
      addXP(xpReward[difficulty as keyof typeof xpReward], 'flashcard_review');
    }
    
    // Move to next card
    moveToNextCard();
  };

  const moveToNextCard = () => {
    setShowAnswer(false);
    
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentCard(flashcards[currentIndex + 1]);
    } else {
      // All cards reviewed
      handleSessionComplete();
    }
  };

  const handleSessionComplete = () => {
    // Award bonus XP for completing daily goal
    if (dailyProgress.reviewed >= dailyProgress.goal) {
      addXP(50, 'daily_flashcard_goal');
    }
    
    // Show completion message
    setCurrentCard(null);
  };

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          {flashcards.length === 0 ? 'Keine Karteikarten verfügbar' : 'Alle Karten wiederholt!'}
        </h3>
        {dailyProgress.reviewed >= dailyProgress.goal && (
          <p className="text-gray-600">
            Tagesziel erreicht! +50 XP 🎉
          </p>
        )}
        <button
          onClick={loadFlashcards}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Neue Sitzung starten
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <FireIcon className="w-5 h-5" />
              <span className="text-sm">Strähne</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">{profile?.streaks.current || 0}</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <ChartBarIcon className="w-5 h-5" />
              <span className="text-sm">Heute</span>
            </div>
            <p className="text-2xl font-bold text-indigo-600">
              {dailyProgress.reviewed}/{dailyProgress.goal}
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <StarIcon className="w-5 h-5" />
              <span className="text-sm">Korrekt</span>
            </div>
            <p className="text-2xl font-bold text-green-600">
              {dailyProgress.reviewed > 0 
                ? Math.round((dailyProgress.correct / dailyProgress.reviewed) * 100) 
                : 0}%
            </p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Fortschritt</span>
            <span>{Math.round((dailyProgress.reviewed / dailyProgress.goal) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${Math.min(100, (dailyProgress.reviewed / dailyProgress.goal) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-6">
        <div 
          className="relative bg-white rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
          onClick={flipCard}
          style={{ minHeight: '300px' }}
        >
          <div className="absolute top-4 right-4">
            <ArrowPathIcon className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center max-w-lg">
              {!showAnswer ? (
                <>
                  <AcademicCapIcon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frage</h3>
                  <p className="text-lg text-gray-800">{currentCard.front}</p>
                </>
              ) : (
                <>
                  <LightBulbIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Antwort</h3>
                  <p className="text-lg text-gray-800 whitespace-pre-wrap">{currentCard.back}</p>
                </>
              )}
            </div>
          </div>
          
          {/* Card Stats */}
          <div className="absolute bottom-4 left-4 text-xs text-gray-500">
            <span>Karte {currentIndex + 1} von {flashcards.length}</span>
            {currentCard.reviewCount > 0 && (
              <span className="ml-3">
                Wiederholt: {currentCard.reviewCount}x | 
                Konfidenz: {Math.round(currentCard.confidence * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Answer Buttons */}
      {showAnswer && (
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => handleAnswer('again')}
            className="flex flex-col items-center p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
          >
            <XCircleIcon className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Nochmal</span>
            <span className="text-xs">0 XP</span>
          </button>
          
          <button
            onClick={() => handleAnswer('hard')}
            className="flex flex-col items-center p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <ClockIcon className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Schwer</span>
            <span className="text-xs">+15 XP</span>
          </button>
          
          <button
            onClick={() => handleAnswer('medium')}
            className="flex flex-col items-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <CheckCircleIcon className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Gut</span>
            <span className="text-xs">+10 XP</span>
          </button>
          
          <button
            onClick={() => handleAnswer('easy')}
            className="flex flex-col items-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
          >
            <StarIcon className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Leicht</span>
            <span className="text-xs">+5 XP</span>
          </button>
        </div>
      )}

      {!showAnswer && (
        <div className="text-center text-gray-500 text-sm">
          Klicken Sie auf die Karte, um die Antwort zu sehen
        </div>
      )}
    </div>
  );
};

export default FlashcardSystem;