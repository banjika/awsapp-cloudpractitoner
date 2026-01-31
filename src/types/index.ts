// AWS Cloud Kigali - Core TypeScript Types

// ============================================
// Exam Domain Types
// ============================================

export type ExamDomain =
  | 'cloud-concepts'
  | 'security-compliance'
  | 'technology'
  | 'billing-pricing';

export const EXAM_DOMAIN_WEIGHTS: Record<ExamDomain, number> = {
  'cloud-concepts': 0.35,
  'security-compliance': 0.30,
  'technology': 0.25,
  'billing-pricing': 0.10,
};

export const EXAM_DOMAIN_LABELS: Record<ExamDomain, string> = {
  'cloud-concepts': 'Cloud Concepts',
  'security-compliance': 'Security & Compliance',
  'technology': 'Technology',
  'billing-pricing': 'Billing & Pricing',
};

// ============================================
// Question Types
// ============================================

export interface Option {
  id: string;
  text: string;
}

export interface CulturalAnalogy {
  concept: string;
  analogy: string;
  localExample: string;
  analogyType: AnalogyType;
}

export type AnalogyType =
  | 'mobile-money'
  | 'local-market'
  | 'moto-taxi'
  | 'coffee-farming'
  | 'water-distribution'
  | 'sacco'
  | 'electricity-grid';

export const ANALOGY_TYPE_LABELS: Record<AnalogyType, string> = {
  'mobile-money': 'Mobile Money (M-Pesa, MTN MoMo)',
  'local-market': 'Local Market & Vendors',
  'moto-taxi': 'Motorcycle Taxis (Motos)',
  'coffee-farming': 'Coffee Farming & Processing',
  'water-distribution': 'Water Distribution System',
  'sacco': 'Banking Cooperative (SACCO)',
  'electricity-grid': 'Electricity Grid System',
};

export interface Explanation {
  correctReason: string;
  incorrectReasons: Record<string, string>;
  culturalAnalogy?: CulturalAnalogy; // Optional - main analogy is in CulturalContext
}

export interface CulturalContext {
  primaryAnalogy: CulturalAnalogy;
  localExamples: string[];
  rwandanBusinessCase?: string;
}

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  domain: ExamDomain;
  subdomain: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
  explanation: Explanation;
  difficulty: QuestionDifficulty;
  tags: string[];
  culturalContext: CulturalContext;
}

export interface QuestionBank {
  questions: Question[];
  version: string;
  lastUpdated: Date;
}

// ============================================
// User Types
// ============================================

export type AccountType = 'google' | 'email' | 'guest';
export type Language = 'en' | 'rw';
export type SyncStatus = 'synced' | 'pending' | 'conflict';

export interface UserPreferences {
  language: Language;
  studyReminders: boolean;
  reminderTime?: string;
  preferredDomains: ExamDomain[];
  offlineMode: boolean;
  accountType: AccountType;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  lastLoginAt: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdDate: Date;
  lastLoginDate: Date;
  preferences: UserPreferences;
  progress: UserProgress;
  gamification: GamificationState;
  bookmarks: string[];
  syncStatus: SyncStatus;
}

// ============================================
// Progress Tracking Types
// ============================================

export interface DomainScore {
  domain: ExamDomain;
  questionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
}

export interface WeakArea {
  topic: string;
  domain: ExamDomain;
  accuracy: number;
  questionsAttempted: number;
}

export interface UserProgress {
  totalQuestionsAttempted: number;
  correctAnswers: number;
  domainScores: Record<ExamDomain, DomainScore>;
  weakAreas: WeakArea[];
  examReadinessScore: number;
  studyStreak: number;
  lastStudyDate: Date | null;
  longestStreak: number;
}

// ============================================
// Analytics Types
// ============================================

export type QuizMode = 'practice' | 'exam';

export interface AnswerRecord {
  id: string;
  oderId: string;
  questionId: string;
  selectedAnswerId: string;
  isCorrect: boolean;
  timeSpent: number;
  timestamp: Date;
  mode: QuizMode;
}

export interface StudySession {
  id: string;
  oderId: string;
  startTime: Date;
  endTime: Date;
  questionsAttempted: number;
  correctAnswers: number;
  domains: ExamDomain[];
  mode: QuizMode;
}

export interface PerformanceData {
  date: Date;
  score: number;
  domain?: ExamDomain;
}

// ============================================
// Gamification Types
// ============================================

export type BadgeType = 'questions' | 'streak' | 'accuracy' | 'domain-mastery';

export interface BadgeCriteria {
  type: BadgeType;
  threshold: number;
  domain?: ExamDomain;
}

export interface Badge {
  id: string;
  name: string;
  nameRw: string;
  description: string;
  descriptionRw: string;
  icon: string;
  earnedDate?: Date;
  criteria: BadgeCriteria;
}

export interface GamificationState {
  points: number;
  badges: Badge[];
  currentStreak: number;
  longestStreak: number;
  level: number;
  nextLevelPoints: number;
}

// ============================================
// Quiz State Types
// ============================================

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string>;
  correctAnswers: number;
  incorrectAnswers: number;
  timeRemaining: number | null;
  isComplete: boolean;
  mode: QuizMode;
  startTime: Date;
  selectedDomain: ExamDomain | null;
}

export interface QuizConfig {
  mode: QuizMode;
  domain?: ExamDomain;
  questionCount: number;
  timeLimit?: number;
}

// ============================================
// Offline & Sync Types
// ============================================

export type SyncItemType = 'progress' | 'answer' | 'bookmark';

export interface SyncItem {
  id: string;
  type: SyncItemType;
  data: unknown;
  timestamp: Date;
}

export interface OfflineState {
  isOnline: boolean;
  pendingSync: SyncItem[];
  lastSyncDate: Date | null;
}

export interface SyncResult {
  success: boolean;
  syncedItems: number;
  failedItems: number;
  errors: string[];
}

// ============================================
// UI & Component Types
// ============================================

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  messageRw?: string;
  duration?: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// ============================================
// Motivational Messages
// ============================================

export interface MotivationalMessage {
  english: string;
  kinyarwanda: string;
  context: 'correct' | 'incorrect' | 'streak' | 'badge' | 'general';
}

// ============================================
// Error Types
// ============================================

export type ErrorCode =
  | 'NETWORK_ERROR'
  | 'VALIDATION_ERROR'
  | 'STORAGE_ERROR'
  | 'AUTH_ERROR'
  | 'SYNC_ERROR'
  | 'UNKNOWN_ERROR';

export interface AppError {
  code: ErrorCode;
  message: string;
  messageRw: string;
  originalError?: Error;
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  language: 'en',
  studyReminders: true,
  preferredDomains: ['cloud-concepts', 'security-compliance', 'technology', 'billing-pricing'],
  offlineMode: false,
  accountType: 'guest',
};

export const DEFAULT_USER_PROGRESS: UserProgress = {
  totalQuestionsAttempted: 0,
  correctAnswers: 0,
  domainScores: {
    'cloud-concepts': { domain: 'cloud-concepts', questionsAttempted: 0, correctAnswers: 0, accuracy: 0 },
    'security-compliance': { domain: 'security-compliance', questionsAttempted: 0, correctAnswers: 0, accuracy: 0 },
    'technology': { domain: 'technology', questionsAttempted: 0, correctAnswers: 0, accuracy: 0 },
    'billing-pricing': { domain: 'billing-pricing', questionsAttempted: 0, correctAnswers: 0, accuracy: 0 },
  },
  weakAreas: [],
  examReadinessScore: 0,
  studyStreak: 0,
  lastStudyDate: null,
  longestStreak: 0,
};

export const DEFAULT_GAMIFICATION_STATE: GamificationState = {
  points: 0,
  badges: [],
  currentStreak: 0,
  longestStreak: 0,
  level: 1,
  nextLevelPoints: 100,
};
