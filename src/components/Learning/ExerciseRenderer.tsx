import React, { useState } from 'react';
import {
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { Exercise, ExerciseAttempt } from '../../types/learning';

interface ExerciseRendererProps {
  exercise: Exercise;
  onComplete: (answer: any) => Promise<ExerciseAttempt>;
  onSkip?: () => void;
}

const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({ exercise, onComplete, onSkip }) => {
  const [answer, setAnswer] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ExerciseAttempt | null>(null);
  const [hintsUsed, setHintsUsed] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (answer === null || answer === '') return;
    
    setLoading(true);
    try {
      const attemptResult = await onComplete(answer);
      setResult(attemptResult);
      setShowResult(true);
    } catch (error) {
      console.error('Error submitting answer:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    setAnswer(null);
    setShowResult(false);
    setResult(null);
    setHintsUsed([]);
  };

  const showHint = (hintId: string) => {
    if (!hintsUsed.includes(hintId)) {
      setHintsUsed([...hintsUsed, hintId]);
    }
  };

  const renderMultipleChoice = () => {
    const { question, options } = exercise.content;
    
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-900">{question}</p>
        
        <div className="space-y-2">
          {options?.map((option, index) => (
            <label
              key={index}
              className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                answer === index
                  ? showResult
                    ? result?.isCorrect && answer === index
                      ? 'border-green-500 bg-green-50'
                      : !result?.isCorrect && answer === index
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300'
                    : 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 hover:border-gray-400'
              } ${showResult ? 'cursor-not-allowed' : ''}`}
            >
              <input
                type="radio"
                name="answer"
                value={index}
                checked={answer === index}
                onChange={() => setAnswer(index)}
                disabled={showResult}
                className="sr-only"
              />
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{option}</span>
                {showResult && index === exercise.solution.correct && (
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderFillInBlanks = () => {
    const { question, template } = exercise.content;
    const blanks = template?.match(/\[BLANK\d+\]/g) || [];
    const blankAnswers: Record<string, string> = answer || {};
    
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-900">{question}</p>
        
        <div className="space-y-3">
          {blanks.map((blank, index) => {
            const blankId = blank.replace(/[\[\]]/g, '');
            return (
              <div key={blankId} className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  Lücke {index + 1}:
                </span>
                <input
                  type="text"
                  value={blankAnswers[blankId] || ''}
                  onChange={(e) => setAnswer({
                    ...blankAnswers,
                    [blankId]: e.target.value
                  })}
                  disabled={showResult}
                  className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    showResult
                      ? result?.isCorrect
                        ? 'bg-green-50 border-green-500'
                        : 'bg-red-50 border-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="Ihre Antwort..."
                />
                {showResult && (
                  <span className="text-sm text-gray-600">
                    Richtig: {exercise.solution.correct[blankId]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCaseAnalysis = () => {
    const { question, sachverhalt, context } = exercise.content;
    
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Sachverhalt:</h4>
          <p className="text-gray-700 whitespace-pre-wrap">{sachverhalt}</p>
        </div>
        
        {context && (
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-900">{context}</p>
          </div>
        )}
        
        <p className="text-lg font-medium text-gray-900">{question}</p>
        
        <textarea
          value={answer || ''}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={showResult}
          rows={8}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            showResult
              ? 'bg-gray-50 border-gray-300'
              : 'border-gray-300'
          }`}
          placeholder="Ihre Antwort..."
        />
      </div>
    );
  };

  const renderGutachten = () => {
    const gutachtenAnswer = answer || {
      obersatz: '',
      voraussetzung: '',
      definition: '',
      subsumtion: '',
      ergebnis: ''
    };
    
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Sachverhalt:</h4>
          <p className="text-gray-700 whitespace-pre-wrap">{exercise.content.sachverhalt}</p>
        </div>
        
        <p className="text-lg font-medium text-gray-900">{exercise.content.question}</p>
        
        <div className="space-y-4">
          {[
            { key: 'obersatz', label: '1. Obersatz' },
            { key: 'voraussetzung', label: '2. Voraussetzung' },
            { key: 'definition', label: '3. Definition' },
            { key: 'subsumtion', label: '4. Subsumtion' },
            { key: 'ergebnis', label: '5. Ergebnis' }
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <textarea
                value={gutachtenAnswer[key]}
                onChange={(e) => setAnswer({
                  ...gutachtenAnswer,
                  [key]: e.target.value
                })}
                disabled={showResult}
                rows={3}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  showResult
                    ? 'bg-gray-50 border-gray-300'
                    : 'border-gray-300'
                }`}
                placeholder={`${label} eingeben...`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTrueFalse = () => {
    const { question } = exercise.content;
    
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-900">{question}</p>
        
        <div className="space-y-2">
          {[true, false].map((option, index) => (
            <label
              key={index}
              className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                answer === option
                  ? showResult
                    ? result?.isCorrect && answer === option
                      ? 'border-green-500 bg-green-50'
                      : !result?.isCorrect && answer === option
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300'
                    : 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 hover:border-gray-400'
              } ${showResult ? 'cursor-not-allowed' : ''}`}
            >
              <input
                type="radio"
                name="answer"
                value={option.toString()}
                checked={answer === option}
                onChange={() => setAnswer(option)}
                disabled={showResult}
                className="sr-only"
              />
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{option ? 'Richtig' : 'Falsch'}</span>
                {showResult && option === exercise.solution.correct && (
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderExerciseContent = () => {
    switch (exercise.type) {
      case 'multipleChoice':
        return renderMultipleChoice();
      case 'trueFalse':
        return renderTrueFalse();
      case 'fillInBlanks':
        return renderFillInBlanks();
      case 'caseAnalysis':
        return renderCaseAnalysis();
      case 'gutachten':
        return renderGutachten();
      default:
        return (
          <div className="text-center text-gray-500 py-8">
            <QuestionMarkCircleIcon className="w-12 h-12 mx-auto mb-2" />
            <p>Dieser Übungstyp wird noch entwickelt.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Exercise Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{exercise.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{exercise.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2 py-1 text-xs rounded-full ${
            exercise.difficulty === 'beginner'
              ? 'bg-green-100 text-green-700'
              : exercise.difficulty === 'intermediate'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {exercise.difficulty === 'beginner' ? 'Einfach' : 
             exercise.difficulty === 'intermediate' ? 'Mittel' : 'Schwer'}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {exercise.points} Punkte
          </span>
        </div>
      </div>

      {/* Exercise Content */}
      {renderExerciseContent()}

      {/* Hints */}
      {exercise.hints && exercise.hints.length > 0 && !showResult && (
        <div className="flex flex-wrap gap-2">
          {exercise.hints.map((hint, index) => (
            <button
              key={hint.id}
              onClick={() => showHint(hint.id)}
              className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm hover:bg-yellow-100 transition-colors"
            >
              <LightBulbIcon className="w-4 h-4" />
              Hinweis {index + 1} (-{hint.penaltyPoints} Punkte)
            </button>
          ))}
        </div>
      )}

      {/* Used Hints */}
      {hintsUsed.length > 0 && (
        <div className="space-y-2">
          {hintsUsed.map((hintId) => {
            const hint = exercise.hints?.find(h => h.id === hintId);
            if (!hint) return null;
            return (
              <div key={hintId} className="bg-yellow-50 rounded-lg p-3">
                <p className="text-sm text-yellow-800">{hint.text}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Result Feedback */}
      {showResult && result && (
        <div className={`rounded-lg p-4 ${
          result.isCorrect
            ? 'bg-green-50 border border-green-200'
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-start gap-3">
            {result.isCorrect ? (
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className={`font-medium ${
                result.isCorrect ? 'text-green-900' : 'text-red-900'
              }`}>
                {result.isCorrect ? exercise.feedback?.correct : exercise.feedback?.incorrect}
              </p>
              <p className="text-sm mt-2 text-gray-700">
                {exercise.solution.explanation}
              </p>
              {!result.isCorrect && exercise.solution.commonMistakes && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700">Häufige Fehler:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {exercise.solution.commonMistakes.map((mistake, index) => (
                      <li key={index}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between">
        {onSkip && !showResult && (
          <button
            onClick={onSkip}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Überspringen
          </button>
        )}
        
        <div className="ml-auto flex gap-3">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={answer === null || answer === '' || loading}
              className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                answer === null || answer === '' || loading
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Prüfe...' : 'Antwort prüfen'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Weiter
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseRenderer;