import React, { useState, useEffect } from 'react';
import { 
  AcademicCapIcon,
  ClockIcon,
  FireIcon,
  TrophyIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { LearningButton, LearningCardButton } from '../LearningButton';
import MnemonicGenerator from './MnemonicGenerator';

interface Definition {
  id: string;
  term: string;
  definition: string;
  category?: string;
  mnemonic?: {
    type: 'acronym' | 'story' | 'rhyme' | 'visualization' | 'association';
    content: string;
    explanation?: string;
  };
}

interface MnemonicTrainerProps {
  definitions: Definition[];
  onProgress?: (definitionId: string, success: boolean) => void;
  onComplete?: (results: { correct: number; total: number }) => void;
}

type TrainingMode = 'learn' | 'practice' | 'test';

const MnemonicTrainer: React.FC<MnemonicTrainerProps> = ({ 
  definitions, 
  onProgress,
  onComplete 
}) => {
  const [mode, setMode] = useState<TrainingMode>('learn');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [results, setResults] = useState<{ correct: number; incorrect: number }>({ 
    correct: 0, 
    incorrect: 0 
  });
  const [showMnemonicGenerator, setShowMnemonicGenerator] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);

  const currentDefinition = definitions[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentIndex < definitions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setUserAnswer('');
    } else if (onComplete) {
      onComplete({ 
        correct: results.correct, 
        total: definitions.length 
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
      setUserAnswer('');
    }
  };

  const handleCheckAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().includes(currentDefinition.term.toLowerCase());
    
    if (isCorrect) {
      setResults(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setResults(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    
    if (onProgress) {
      onProgress(currentDefinition.id, isCorrect);
    }
    
    setShowAnswer(true);
  };

  const saveMnemonic = (mnemonic: Definition['mnemonic']) => {
    // Hier würde die Mnemotechnik gespeichert werden
    console.log('Saving mnemonic:', mnemonic);
    setShowMnemonicGenerator(false);
  };

  const renderLearnMode = () => (
    <div className="space-y-6">
      {/* Definition Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{currentDefinition.term}</h3>
            {currentDefinition.category && (
              <span className="text-sm text-gray-500">{currentDefinition.category}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {definitions.length}
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{currentDefinition.definition}</p>
        
        {/* Mnemonic Display */}
        {currentDefinition.mnemonic && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">
                  {currentDefinition.mnemonic.type === 'acronym' && '🔤'}
                  {currentDefinition.mnemonic.type === 'story' && '📖'}
                  {currentDefinition.mnemonic.type === 'rhyme' && '🎵'}
                  {currentDefinition.mnemonic.type === 'visualization' && '🎨'}
                  {currentDefinition.mnemonic.type === 'association' && '🔗'}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-purple-900">
                  {currentDefinition.mnemonic.content}
                </p>
                {currentDefinition.mnemonic.explanation && (
                  <p className="text-sm text-purple-700 mt-1">
                    {currentDefinition.mnemonic.explanation}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Actions */}
        <div className="flex gap-3">
          <LearningButton
            onClick={() => setShowMnemonicGenerator(!showMnemonicGenerator)}
            variant="secondary"
            size="small"
          >
            {currentDefinition.mnemonic ? 'Eselsbrücke ändern' : 'Eselsbrücke erstellen'}
          </LearningButton>
        </div>
      </div>
      
      {/* Mnemonic Generator */}
      {showMnemonicGenerator && (
        <MnemonicGenerator
          definition={{
            term: currentDefinition.term,
            definition: currentDefinition.definition,
            category: currentDefinition.category
          }}
          onSave={saveMnemonic}
        />
      )}
    </div>
  );

  const renderPracticeMode = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Definition:</h3>
          <p className="text-gray-700">{currentDefinition.definition}</p>
        </div>
        
        {currentDefinition.mnemonic && !showAnswer && (
          <div className="bg-yellow-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-yellow-800 mb-1">Tipp - Eselsbrücke:</p>
            <p className="text-yellow-700">{currentDefinition.mnemonic.content}</p>
          </div>
        )}
        
        {!showAnswer ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Welcher Begriff wird hier definiert?
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCheckAnswer()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Gib deine Antwort ein..."
              />
            </div>
            
            <LearningButton
              onClick={handleCheckAnswer}
              disabled={!userAnswer.trim()}
              fullWidth
            >
              Antwort prüfen
            </LearningButton>
          </>
        ) : (
          <div className="space-y-4">
            <div className={`rounded-lg p-4 ${
              userAnswer.toLowerCase().includes(currentDefinition.term.toLowerCase())
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {userAnswer.toLowerCase().includes(currentDefinition.term.toLowerCase()) ? (
                  <>
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Richtig!</span>
                  </>
                ) : (
                  <>
                    <XMarkIcon className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-800">Leider falsch</span>
                  </>
                )}
              </div>
              <p className="text-gray-700">
                Die richtige Antwort ist: <span className="font-semibold">{currentDefinition.term}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderTestMode = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Testmodus</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">Zeit: {formatTime(sessionTime)}</span>
              <span className="text-gray-500">
                Frage {currentIndex + 1} / {definitions.length}
              </span>
            </div>
          </div>
          
          <p className="text-gray-700">{currentDefinition.definition}</p>
        </div>
        
        {!showAnswer ? (
          <>
            <div className="mb-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCheckAnswer()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Begriff eingeben..."
                autoFocus
              />
            </div>
            
            <LearningButton
              onClick={handleCheckAnswer}
              disabled={!userAnswer.trim()}
              fullWidth
            >
              Antwort abgeben
            </LearningButton>
          </>
        ) : (
          <div className="space-y-4">
            <div className={`rounded-lg p-4 ${
              userAnswer.toLowerCase().includes(currentDefinition.term.toLowerCase())
                ? 'bg-green-50'
                : 'bg-red-50'
            }`}>
              <p className="font-medium">
                {userAnswer.toLowerCase().includes(currentDefinition.term.toLowerCase())
                  ? '✓ Korrekt!'
                  : `✗ Richtige Antwort: ${currentDefinition.term}`}
              </p>
            </div>
            
            <LearningButton onClick={handleNext} fullWidth>
              {currentIndex < definitions.length - 1 ? 'Nächste Frage' : 'Test beenden'}
            </LearningButton>
          </div>
        )}
      </div>
      
      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-green-600">Richtig: {results.correct}</span>
          <span className="text-red-600">Falsch: {results.incorrect}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ 
              width: `${((results.correct + results.incorrect) / definitions.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Mnemotechnik-Training</h2>
            <p className="text-purple-100">
              Lerne Definitionen mit cleveren Eselsbrücken
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <FireIcon className="w-6 h-6" />
              {results.correct}
            </div>
            <p className="text-sm text-purple-100">Punkte</p>
          </div>
        </div>
      </div>
      
      {/* Mode Selection */}
      <div className="flex gap-3 mb-6">
        <LearningButton
          onClick={() => setMode('learn')}
          variant={mode === 'learn' ? 'primary' : 'outline'}
          icon={<AcademicCapIcon className="w-4 h-4" />}
          iconPosition="left"
        >
          Lernen
        </LearningButton>
        <LearningButton
          onClick={() => setMode('practice')}
          variant={mode === 'practice' ? 'primary' : 'outline'}
          icon={<FireIcon className="w-4 h-4" />}
          iconPosition="left"
        >
          Üben
        </LearningButton>
        <LearningButton
          onClick={() => setMode('test')}
          variant={mode === 'test' ? 'primary' : 'outline'}
          icon={<TrophyIcon className="w-4 h-4" />}
          iconPosition="left"
        >
          Testen
        </LearningButton>
      </div>
      
      {/* Content */}
      {mode === 'learn' && renderLearnMode()}
      {mode === 'practice' && renderPracticeMode()}
      {mode === 'test' && renderTestMode()}
      
      {/* Navigation */}
      {mode !== 'test' && (
        <div className="flex justify-between mt-6">
          <LearningButton
            onClick={handlePrevious}
            variant="outline"
            disabled={currentIndex === 0}
            icon={<ArrowLeftIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            Zurück
          </LearningButton>
          <LearningButton
            onClick={handleNext}
            disabled={currentIndex === definitions.length - 1}
            icon={<ArrowRightIcon className="w-4 h-4" />}
          >
            Weiter
          </LearningButton>
        </div>
      )}
    </div>
  );
};

export default MnemonicTrainer;