// AWS Cloud Kigali - Gamification Service
import {
  GamificationState,
  Badge,
  BadgeCriteria,
  UserProgress,
  ExamDomain,
  DEFAULT_GAMIFICATION_STATE,
} from '../types';
import { getGamificationState, saveGamificationState } from './database';

// Points configuration
const POINTS_CONFIG = {
  correctAnswer: 10,
  quizCompleted: 50,
  perfectQuiz: 100,
  streakBonus: 5, // per day in streak
  badgeEarned: 25,
};

// Level configuration (points needed for each level)
const LEVEL_THRESHOLDS = [
  0,      // Level 1
  100,    // Level 2
  250,    // Level 3
  500,    // Level 4
  1000,   // Level 5
  2000,   // Level 6
  3500,   // Level 7
  5000,   // Level 8
  7500,   // Level 9
  10000,  // Level 10 (Master)
];

// Available badges
export const AVAILABLE_BADGES: Badge[] = [
  // Question milestones
  {
    id: 'first-steps',
    name: 'First Steps',
    nameRw: 'Intambwe za Mbere',
    description: 'Answer your first 10 questions',
    descriptionRw: 'Subiza ibibazo 10 bya mbere',
    icon: '🎯',
    criteria: { type: 'questions', threshold: 10 },
  },
  {
    id: 'dedicated-learner',
    name: 'Dedicated Learner',
    nameRw: 'Umwigishwa w\'Umwete',
    description: 'Answer 50 questions',
    descriptionRw: 'Subiza ibibazo 50',
    icon: '📚',
    criteria: { type: 'questions', threshold: 50 },
  },
  {
    id: 'centurion',
    name: 'Centurion',
    nameRw: 'Umutware wa Ijana',
    description: 'Answer 100 questions',
    descriptionRw: 'Subiza ibibazo 100',
    icon: '💯',
    criteria: { type: 'questions', threshold: 100 },
  },
  {
    id: 'cloud-warrior',
    name: 'Cloud Warrior',
    nameRw: 'Umurwanyi wa Cloud',
    description: 'Answer 300 questions',
    descriptionRw: 'Subiza ibibazo 300',
    icon: '⚔️',
    criteria: { type: 'questions', threshold: 300 },
  },

  // Streak badges
  {
    id: 'three-day-streak',
    name: '3 Day Streak',
    nameRw: 'Iminsi 3 Ikurikirana',
    description: 'Study for 3 consecutive days',
    descriptionRw: 'Wige iminsi 3 ikurikirana',
    icon: '🔥',
    criteria: { type: 'streak', threshold: 3 },
  },
  {
    id: 'week-warrior',
    name: 'Week Warrior',
    nameRw: 'Umurwanyi w\'Icyumweru',
    description: 'Study for 7 consecutive days',
    descriptionRw: 'Wige iminsi 7 ikurikirana',
    icon: '🗓️',
    criteria: { type: 'streak', threshold: 7 },
  },
  {
    id: 'monthly-master',
    name: 'Monthly Master',
    nameRw: 'Umuhanga w\'Ukwezi',
    description: 'Study for 30 consecutive days',
    descriptionRw: 'Wige iminsi 30 ikurikirana',
    icon: '🏆',
    criteria: { type: 'streak', threshold: 30 },
  },

  // Accuracy badges
  {
    id: 'sharp-shooter',
    name: 'Sharp Shooter',
    nameRw: 'Umurashi Uhangaye',
    description: 'Achieve 80% accuracy overall',
    descriptionRw: 'Gera ku 80% y\'ibisubizo byiza',
    icon: '🎯',
    criteria: { type: 'accuracy', threshold: 80 },
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    nameRw: 'Umuhanga Witonze',
    description: 'Achieve 95% accuracy overall',
    descriptionRw: 'Gera ku 95% y\'ibisubizo byiza',
    icon: '✨',
    criteria: { type: 'accuracy', threshold: 95 },
  },

  // Domain mastery badges
  {
    id: 'cloud-concepts-master',
    name: 'Cloud Concepts Master',
    nameRw: 'Umuhanga mu Myumvire ya Cloud',
    description: 'Score 90%+ in Cloud Concepts',
    descriptionRw: 'Bonera 90% mu Myumvire ya Cloud',
    icon: '☁️',
    criteria: { type: 'domain-mastery', threshold: 90, domain: 'cloud-concepts' },
  },
  {
    id: 'security-expert',
    name: 'Security Expert',
    nameRw: 'Impuguke mu Mutekano',
    description: 'Score 90%+ in Security & Compliance',
    descriptionRw: 'Bonera 90% mu Mutekano',
    icon: '🔒',
    criteria: { type: 'domain-mastery', threshold: 90, domain: 'security-compliance' },
  },
  {
    id: 'tech-guru',
    name: 'Technology Guru',
    nameRw: 'Umuhanga mu Ikoranabuhanga',
    description: 'Score 90%+ in Technology',
    descriptionRw: 'Bonera 90% mu Ikoranabuhanga',
    icon: '💻',
    criteria: { type: 'domain-mastery', threshold: 90, domain: 'technology' },
  },
  {
    id: 'billing-whiz',
    name: 'Billing Whiz',
    nameRw: 'Umuhanga mu Kwishyura',
    description: 'Score 90%+ in Billing & Pricing',
    descriptionRw: 'Bonera 90% mu Kwishyura',
    icon: '💰',
    criteria: { type: 'domain-mastery', threshold: 90, domain: 'billing-pricing' },
  },
];

// Get the current level based on points
export function getLevel(points: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (points >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
}

// Get points needed for next level
export function getNextLevelPoints(currentPoints: number): number {
  const currentLevel = getLevel(currentPoints);
  if (currentLevel >= LEVEL_THRESHOLDS.length) {
    return 0; // Max level reached
  }
  return LEVEL_THRESHOLDS[currentLevel];
}

// Award points for correct answer
export async function awardPointsForCorrectAnswer(): Promise<GamificationState> {
  const state = await getGamificationState();
  const newPoints = state.points + POINTS_CONFIG.correctAnswer;
  const newLevel = getLevel(newPoints);

  const updatedState: GamificationState = {
    ...state,
    points: newPoints,
    level: newLevel,
    nextLevelPoints: getNextLevelPoints(newPoints),
  };

  await saveGamificationState(updatedState);
  return updatedState;
}

// Award points for completing a quiz
export async function awardPointsForQuizCompletion(
  correctCount: number,
  totalCount: number
): Promise<GamificationState> {
  const state = await getGamificationState();
  let pointsToAdd = POINTS_CONFIG.quizCompleted;

  // Bonus for perfect quiz
  if (correctCount === totalCount && totalCount > 0) {
    pointsToAdd += POINTS_CONFIG.perfectQuiz;
  }

  const newPoints = state.points + pointsToAdd;
  const newLevel = getLevel(newPoints);

  const updatedState: GamificationState = {
    ...state,
    points: newPoints,
    level: newLevel,
    nextLevelPoints: getNextLevelPoints(newPoints),
  };

  await saveGamificationState(updatedState);
  return updatedState;
}

// Update study streak
export async function updateStreak(): Promise<GamificationState> {
  const state = await getGamificationState();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // This would normally check the last study date from UserProgress
  // For simplicity, we'll increment the streak
  const newStreak = state.currentStreak + 1;
  const newLongestStreak = Math.max(newStreak, state.longestStreak);

  // Add streak bonus points
  const streakBonus = POINTS_CONFIG.streakBonus * newStreak;
  const newPoints = state.points + streakBonus;

  const updatedState: GamificationState = {
    ...state,
    points: newPoints,
    currentStreak: newStreak,
    longestStreak: newLongestStreak,
    level: getLevel(newPoints),
    nextLevelPoints: getNextLevelPoints(newPoints),
  };

  await saveGamificationState(updatedState);
  return updatedState;
}

// Check and award badges
export async function checkAndAwardBadges(
  progress: UserProgress
): Promise<Badge[]> {
  const state = await getGamificationState();
  const earnedBadgeIds = new Set(state.badges.map(b => b.id));
  const newlyEarnedBadges: Badge[] = [];

  for (const badge of AVAILABLE_BADGES) {
    if (earnedBadgeIds.has(badge.id)) {
      continue; // Already earned
    }

    if (checkBadgeCriteria(badge.criteria, progress, state)) {
      const earnedBadge: Badge = {
        ...badge,
        earnedDate: new Date(),
      };
      newlyEarnedBadges.push(earnedBadge);
    }
  }

  if (newlyEarnedBadges.length > 0) {
    // Add badge points
    const badgePoints = newlyEarnedBadges.length * POINTS_CONFIG.badgeEarned;
    const newPoints = state.points + badgePoints;

    const updatedState: GamificationState = {
      ...state,
      badges: [...state.badges, ...newlyEarnedBadges],
      points: newPoints,
      level: getLevel(newPoints),
      nextLevelPoints: getNextLevelPoints(newPoints),
    };

    await saveGamificationState(updatedState);
  }

  return newlyEarnedBadges;
}

// Check if badge criteria is met
function checkBadgeCriteria(
  criteria: BadgeCriteria,
  progress: UserProgress,
  gamification: GamificationState
): boolean {
  switch (criteria.type) {
    case 'questions':
      return progress.totalQuestionsAttempted >= criteria.threshold;

    case 'streak':
      return gamification.currentStreak >= criteria.threshold;

    case 'accuracy':
      if (progress.totalQuestionsAttempted < 20) return false; // Minimum questions needed
      const overallAccuracy = (progress.correctAnswers / progress.totalQuestionsAttempted) * 100;
      return overallAccuracy >= criteria.threshold;

    case 'domain-mastery':
      if (!criteria.domain) return false;
      const domainScore = progress.domainScores[criteria.domain];
      if (domainScore.questionsAttempted < 10) return false; // Minimum per domain
      return domainScore.accuracy >= criteria.threshold;

    default:
      return false;
  }
}

// Get motivational message based on current state
export function getMotivationalMessage(
  state: GamificationState,
  context: 'correct' | 'incorrect' | 'streak' | 'badge' | 'general'
): { english: string; kinyarwanda: string } {
  const messages: Record<string, { english: string; kinyarwanda: string }[]> = {
    correct: [
      { english: 'Excellent! Keep it up!', kinyarwanda: 'Byiza cyane! Komeza!' },
      { english: 'Great job!', kinyarwanda: 'Wabigize neza!' },
      { english: 'You are learning fast!', kinyarwanda: 'Wiga vuba cyane!' },
      { english: 'Brilliant answer!', kinyarwanda: 'Igisubizo cyiza!' },
    ],
    incorrect: [
      { english: 'Keep trying! You will get it next time.', kinyarwanda: 'Komeza! Uzabigera.' },
      { english: 'Learning from mistakes makes you stronger.', kinyarwanda: 'Kwiga ku makosa bigufasha kuba intwari.' },
      { english: 'Review the explanation and try again.', kinyarwanda: 'Soma ibisobanuro ugerageze ukundi.' },
    ],
    streak: [
      { english: `${state.currentStreak} day streak! Keep going!`, kinyarwanda: `Iminsi ${state.currentStreak} ikurikirana! Komeza!` },
      { english: 'Your dedication is impressive!', kinyarwanda: 'Umwete wawe uratangaje!' },
    ],
    badge: [
      { english: 'New badge earned!', kinyarwanda: 'Wabonye igihembo gishya!' },
      { english: 'Achievement unlocked!', kinyarwanda: 'Wagezeho intsinzi!' },
    ],
    general: [
      { english: 'Every question brings you closer to success.', kinyarwanda: 'Buri kibazo kigukuruza ku ntsinzi.' },
      { english: 'You are on your way to becoming AWS certified!', kinyarwanda: 'Uri ku nzira yo kubona urwego rwa AWS!' },
      { english: 'Consistency is the key to mastery.', kinyarwanda: 'Gukomeza ni urufunguzo rwo kubasha.' },
    ],
  };

  const contextMessages = messages[context] || messages.general;
  const randomIndex = Math.floor(Math.random() * contextMessages.length);
  return contextMessages[randomIndex];
}

// Reset gamification state (for testing or account reset)
export async function resetGamification(): Promise<void> {
  await saveGamificationState(DEFAULT_GAMIFICATION_STATE);
}
