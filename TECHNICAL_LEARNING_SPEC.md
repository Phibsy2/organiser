# Technische Spezifikation: JuraFit Learning Module

## 1. Systemarchitektur

### 1.1 Frontend-Architektur

```typescript
// Hauptkomponenten-Struktur
src/
├── components/
│   └── Learning/
│       ├── LearningDashboard.tsx
│       ├── ModuleOverview.tsx
│       ├── LearningUnit.tsx
│       ├── ExerciseRenderer.tsx
│       ├── ProgressTracker.tsx
│       ├── AssessmentEngine.tsx
│       ├── SpacedRepetition.tsx
│       └── GamificationPanel.tsx
├── store/
│   ├── learningStore.ts
│   ├── spacedRepetitionStore.ts
│   ├── assessmentStore.ts
│   └── learningAnalyticsStore.ts
├── services/
│   ├── learningService.ts
│   ├── adaptiveLearningEngine.ts
│   └── contentDeliveryService.ts
└── types/
    └── learning.ts
```

### 1.2 State Management

```typescript
// Learning Store Definition
interface LearningState {
  // Module Management
  availableModules: LearningModule[];
  enrolledModules: string[];
  currentModule: LearningModule | null;
  currentUnit: LearningUnit | null;
  
  // Progress Tracking
  moduleProgress: Map<string, ModuleProgress>;
  unitProgress: Map<string, UnitProgress>;
  overallProgress: OverallProgress;
  
  // Learning Session
  activeSession: LearningSession | null;
  sessionHistory: LearningSession[];
  
  // Adaptive Learning
  learningProfile: UserLearningProfile;
  recommendedContent: RecommendedContent[];
  
  // Actions
  enrollInModule: (moduleId: string) => Promise<void>;
  startLearningUnit: (unitId: string) => void;
  completeExercise: (exerciseId: string, answer: any) => Promise<ExerciseResult>;
  updateProgress: (progressData: ProgressUpdate) => void;
  generateRecommendations: () => Promise<void>;
}
```

### 1.3 Datenmodelle

```typescript
// Kernmodelle für das Lernsystem
interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: 'propaedeutikum' | 'zivilrecht' | 'strafrecht' | 'oeffentlichesRecht';
  difficulty: DifficultyLevel;
  prerequisites: string[];
  estimatedHours: number;
  units: LearningUnit[];
  finalAssessment: Assessment;
  certificate: CertificateTemplate;
}

interface LearningUnit {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  objectives: LearningObjective[];
  content: LearningContent;
  exercises: Exercise[];
  estimatedMinutes: number;
  requiredMastery: number; // 0-100
}

interface LearningContent {
  id: string;
  type: 'text' | 'video' | 'interactive' | 'mixed';
  sections: ContentSection[];
  resources: Resource[];
  glossary: GlossaryTerm[];
}

interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  points: number;
  timeLimit?: number;
  content: ExerciseContent;
  solution: ExerciseSolution;
  hints: Hint[];
  feedback: FeedbackTemplate;
}

type ExerciseType = 
  | 'multipleChoice'
  | 'dragDrop'
  | 'fillInBlanks'
  | 'caseAnalysis'
  | 'gutachten'
  | 'timeline'
  | 'conceptMap'
  | 'essay';
```

## 2. Adaptive Learning Engine

### 2.1 Algorithmus-Spezifikation

```typescript
class AdaptiveLearningEngine {
  private userProfile: UserLearningProfile;
  private performanceHistory: PerformanceMetrics[];
  private contentRepository: ContentRepository;
  
  // Hauptalgorithmus für adaptive Inhaltsauswahl
  async getNextContent(currentProgress: Progress): Promise<LearningContent> {
    const difficulty = this.calculateOptimalDifficulty();
    const learningStyle = this.userProfile.preferredLearningStyle;
    const availableContent = await this.contentRepository.getFiltered({
      difficulty,
      style: learningStyle,
      prerequisites: currentProgress.completedUnits
    });
    
    return this.selectOptimalContent(availableContent, currentProgress);
  }
  
  // Schwierigkeitsanpassung basierend auf Performance
  private calculateOptimalDifficulty(): DifficultyLevel {
    const recentPerformance = this.getRecentPerformance(10);
    const averageScore = this.calculateAverageScore(recentPerformance);
    const consistency = this.calculateConsistency(recentPerformance);
    
    if (averageScore > 85 && consistency > 0.8) {
      return this.increaseDifficulty();
    } else if (averageScore < 60 || consistency < 0.5) {
      return this.decreaseDifficulty();
    }
    
    return this.currentDifficulty;
  }
  
  // Machine Learning Integration
  private async predictLearningOutcome(
    content: LearningContent,
    userProfile: UserLearningProfile
  ): Promise<PredictedOutcome> {
    const features = this.extractFeatures(content, userProfile);
    return await this.mlModel.predict(features);
  }
}
```

### 2.2 Spaced Repetition System

```typescript
// SuperMemo 2 Algorithmus Implementation
class SpacedRepetitionEngine {
  private readonly INITIAL_INTERVAL = 1; // Tag
  private readonly INITIAL_EASE_FACTOR = 2.5;
  
  calculateNextReview(
    card: RepetitionCard,
    quality: number // 0-5
  ): NextReviewData {
    let { interval, easeFactor, repetitions } = card;
    
    if (quality < 3) {
      // Reset bei schlechter Bewertung
      repetitions = 0;
      interval = this.INITIAL_INTERVAL;
    } else {
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      
      repetitions += 1;
      
      // Ease Factor Anpassung
      easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      easeFactor = Math.max(1.3, easeFactor);
    }
    
    return {
      nextReviewDate: this.addDays(new Date(), interval),
      interval,
      easeFactor,
      repetitions
    };
  }
}
```

## 3. UI/UX Komponenten

### 3.1 Learning Dashboard

```tsx
const LearningDashboard: React.FC = () => {
  const { 
    enrolledModules, 
    overallProgress, 
    recommendedContent,
    dailyGoals 
  } = useLearningStore();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header mit Fortschrittsübersicht */}
      <LearningHeader 
        level={overallProgress.level}
        xp={overallProgress.xp}
        streak={overallProgress.streak}
      />
      
      {/* Tägliche Lernziele */}
      <DailyGoalsWidget goals={dailyGoals} />
      
      {/* Aktive Module */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {enrolledModules.map(module => (
          <ModuleCard 
            key={module.id}
            module={module}
            progress={getModuleProgress(module.id)}
            onContinue={() => continueModule(module.id)}
          />
        ))}
      </div>
      
      {/* Empfohlene Inhalte */}
      <RecommendedContent items={recommendedContent} />
      
      {/* Lernstatistiken */}
      <LearningStats />
    </div>
  );
};
```

### 3.2 Exercise Components

```tsx
// Generischer Exercise Renderer
const ExerciseRenderer: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const renderExercise = () => {
    switch (exercise.type) {
      case 'multipleChoice':
        return <MultipleChoiceExercise {...exercise} />;
      case 'dragDrop':
        return <DragDropExercise {...exercise} />;
      case 'gutachten':
        return <GutachtenEditor {...exercise} />;
      case 'caseAnalysis':
        return <CaseAnalysisExercise {...exercise} />;
      // ... weitere Typen
    }
  };
  
  return (
    <div className="exercise-container">
      <ExerciseHeader 
        title={exercise.title}
        points={exercise.points}
        difficulty={exercise.difficulty}
      />
      <div className="exercise-content">
        {renderExercise()}
      </div>
      <ExerciseControls 
        onSubmit={handleSubmit}
        onHint={showHint}
        onSkip={skipExercise}
      />
    </div>
  );
};

// Spezialkomponente für Gutachten
const GutachtenEditor: React.FC<GutachtenExerciseProps> = ({ 
  sachverhalt, 
  fragestellung,
  musterloesung 
}) => {
  const [gutachten, setGutachten] = useState<GutachtenStructure>({
    obersatz: '',
    definition: '',
    subsumtion: '',
    ergebnis: ''
  });
  
  return (
    <div className="gutachten-editor">
      <div className="sachverhalt-display">
        <h3>Sachverhalt</h3>
        <p>{sachverhalt}</p>
      </div>
      
      <div className="fragestellung">
        <h3>Zu prüfen:</h3>
        <p>{fragestellung}</p>
      </div>
      
      <div className="gutachten-sections">
        <GutachtenSection
          title="1. Obersatz"
          value={gutachten.obersatz}
          onChange={(value) => updateSection('obersatz', value)}
          placeholder="Formulieren Sie den Obersatz..."
        />
        
        <GutachtenSection
          title="2. Definition"
          value={gutachten.definition}
          onChange={(value) => updateSection('definition', value)}
          placeholder="Definieren Sie die relevanten Rechtsbegriffe..."
        />
        
        <GutachtenSection
          title="3. Subsumtion"
          value={gutachten.subsumtion}
          onChange={(value) => updateSection('subsumtion', value)}
          placeholder="Wenden Sie die Definition auf den Sachverhalt an..."
        />
        
        <GutachtenSection
          title="4. Ergebnis"
          value={gutachten.ergebnis}
          onChange={(value) => updateSection('ergebnis', value)}
          placeholder="Formulieren Sie das Ergebnis..."
        />
      </div>
      
      <AIAssistant 
        currentGutachten={gutachten}
        onSuggestion={applySuggestion}
      />
    </div>
  );
};
```

## 4. Backend-Services

### 4.1 API Endpoints

```typescript
// Learning Module API
router.get('/api/learning/modules', async (req, res) => {
  const { userId } = req.user;
  const modules = await learningService.getAvailableModules(userId);
  res.json(modules);
});

router.post('/api/learning/enroll', async (req, res) => {
  const { userId } = req.user;
  const { moduleId } = req.body;
  const enrollment = await learningService.enrollUser(userId, moduleId);
  res.json(enrollment);
});

router.get('/api/learning/progress/:moduleId', async (req, res) => {
  const { userId } = req.user;
  const { moduleId } = req.params;
  const progress = await learningService.getModuleProgress(userId, moduleId);
  res.json(progress);
});

router.post('/api/learning/exercise/submit', async (req, res) => {
  const { userId } = req.user;
  const { exerciseId, answer } = req.body;
  const result = await assessmentService.evaluateExercise(
    userId,
    exerciseId,
    answer
  );
  res.json(result);
});

// Spaced Repetition API
router.get('/api/learning/cards/due', async (req, res) => {
  const { userId } = req.user;
  const dueCards = await spacedRepetitionService.getDueCards(userId);
  res.json(dueCards);
});

router.post('/api/learning/cards/review', async (req, res) => {
  const { userId } = req.user;
  const { cardId, quality } = req.body;
  const nextReview = await spacedRepetitionService.processReview(
    userId,
    cardId,
    quality
  );
  res.json(nextReview);
});
```

### 4.2 Datenbank-Schema

```sql
-- Lernmodule und Inhalte
CREATE TABLE learning_modules (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  difficulty INTEGER,
  estimated_hours INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE learning_units (
  id UUID PRIMARY KEY,
  module_id UUID REFERENCES learning_modules(id),
  order_index INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  content JSONB,
  estimated_minutes INTEGER,
  required_mastery INTEGER DEFAULT 70
);

CREATE TABLE exercises (
  id UUID PRIMARY KEY,
  unit_id UUID REFERENCES learning_units(id),
  type VARCHAR(50) NOT NULL,
  difficulty INTEGER,
  points INTEGER DEFAULT 10,
  content JSONB,
  solution JSONB,
  feedback_template JSONB
);

-- Nutzerfortschritt
CREATE TABLE user_progress (
  user_id UUID NOT NULL,
  module_id UUID REFERENCES learning_modules(id),
  unit_id UUID REFERENCES learning_units(id),
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  mastery_score INTEGER DEFAULT 0,
  time_spent INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, unit_id)
);

CREATE TABLE exercise_attempts (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  exercise_id UUID REFERENCES exercises(id),
  attempt_number INTEGER,
  answer JSONB,
  score INTEGER,
  feedback JSONB,
  attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Spaced Repetition
CREATE TABLE repetition_cards (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  content_type VARCHAR(50),
  content_id UUID,
  front TEXT,
  back TEXT,
  interval INTEGER DEFAULT 1,
  ease_factor DECIMAL(3,2) DEFAULT 2.5,
  repetitions INTEGER DEFAULT 0,
  next_review_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gamification
CREATE TABLE user_achievements (
  user_id UUID NOT NULL,
  achievement_id VARCHAR(100) NOT NULL,
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  progress JSONB,
  PRIMARY KEY (user_id, achievement_id)
);
```

## 5. Integration mit bestehendem JuraFit

### 5.1 Navigation Update

```typescript
// Erweiterte Navigation
export type NavigationTab = 'dashboard' | 'learning' | 'training' | 'nutrition' | 'progress' | 'settings';

// Navigation Component Update
const tabs = [
  // ... existing tabs
  {
    id: 'learning' as NavigationTab,
    label: 'Lernen',
    icon: AcademicCapIcon,
    iconActive: AcademicCapIconSolid
  },
  // ... rest of tabs
];
```

### 5.2 Dashboard Integration

```tsx
// Erweitertes Dashboard mit Lernkomponente
const Dashboard: React.FC = () => {
  const { dailyGoals: fitnessGoals } = useTrainingStore();
  const { dailyGoals: learningGoals, streak } = useLearningStore();
  
  return (
    <div className="dashboard">
      {/* Kombinierte Tagesübersicht */}
      <DailySummary>
        <FitnessGoals goals={fitnessGoals} />
        <LearningGoals goals={learningGoals} />
      </DailySummary>
      
      {/* Streak-Anzeige für beide Bereiche */}
      <StreakDisplay 
        fitnessStreak={fitnessGoals.streak}
        learningStreak={streak}
      />
      
      {/* Quick Actions erweitert */}
      <QuickActions>
        <QuickAction 
          icon={BookOpenIcon}
          label="Weiterlernen"
          onClick={() => navigateTo('learning')}
        />
        {/* ... andere Actions */}
      </QuickActions>
    </div>
  );
};
```

## 6. Performance-Optimierungen

### 6.1 Code Splitting

```typescript
// Lazy Loading für Lernmodule
const LearningModule = lazy(() => import('./components/Learning'));
const GutachtenEditor = lazy(() => import('./components/Learning/GutachtenEditor'));
const SpacedRepetition = lazy(() => import('./components/Learning/SpacedRepetition'));
```

### 6.2 Caching-Strategie

```typescript
// Service Worker für Offline-Learning
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/learning/content/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((response) => {
          return caches.open('learning-content-v1').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});
```

## 7. Testing-Strategie

### 7.1 Unit Tests

```typescript
describe('SpacedRepetitionEngine', () => {
  it('should calculate correct interval for first review', () => {
    const engine = new SpacedRepetitionEngine();
    const card = createMockCard();
    const result = engine.calculateNextReview(card, 4);
    
    expect(result.interval).toBe(1);
    expect(result.repetitions).toBe(1);
  });
  
  it('should reset on poor performance', () => {
    const engine = new SpacedRepetitionEngine();
    const card = createMockCard({ repetitions: 5, interval: 30 });
    const result = engine.calculateNextReview(card, 2);
    
    expect(result.interval).toBe(1);
    expect(result.repetitions).toBe(0);
  });
});
```

### 7.2 Integration Tests

```typescript
describe('Learning Module Integration', () => {
  it('should track progress correctly across sessions', async () => {
    const userId = 'test-user';
    await learningService.enrollUser(userId, 'propaedeutikum');
    
    // Start learning session
    const session = await learningService.startSession(userId, 'unit-1');
    expect(session.status).toBe('active');
    
    // Complete exercises
    await assessmentService.submitExercise(userId, 'ex-1', mockAnswer);
    
    // Check progress update
    const progress = await learningService.getProgress(userId);
    expect(progress.units['unit-1'].completion).toBeGreaterThan(0);
  });
});
```

Diese technische Spezifikation bietet eine solide Grundlage für die Implementierung des Lernmoduls in JuraFit.