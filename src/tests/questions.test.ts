import { describe, it, expect } from 'vitest'
import { allQuestions, getQuestionsByDomain, getRandomQuestions } from '../data/questions'
import { EXAM_DOMAIN_WEIGHTS, ExamDomain } from '../types'

describe('Question Bank', () => {
  it('should have questions for all four exam domains', () => {
    const domains: ExamDomain[] = ['cloud-concepts', 'security-compliance', 'technology', 'billing-pricing']

    for (const domain of domains) {
      const questions = getQuestionsByDomain(domain)
      expect(questions.length).toBeGreaterThan(0)
    }
  })

  it('should have at least 50 total questions', () => {
    expect(allQuestions.length).toBeGreaterThanOrEqual(50)
  })

  it('should have valid question structure', () => {
    for (const question of allQuestions) {
      // Check required fields
      expect(question.id).toBeDefined()
      expect(question.domain).toBeDefined()
      expect(question.text).toBeDefined()
      expect(question.options).toBeDefined()
      expect(question.correctAnswerId).toBeDefined()
      expect(question.explanation).toBeDefined()
      expect(question.culturalContext).toBeDefined()

      // Check options
      expect(question.options.length).toBe(4)

      // Check that correct answer exists in options
      const correctOption = question.options.find(o => o.id === question.correctAnswerId)
      expect(correctOption).toBeDefined()

      // Check cultural context
      expect(question.culturalContext.primaryAnalogy).toBeDefined()
      expect(question.culturalContext.primaryAnalogy.concept).toBeDefined()
      expect(question.culturalContext.primaryAnalogy.analogy).toBeDefined()
      expect(question.culturalContext.primaryAnalogy.localExample).toBeDefined()
    }
  })

  it('should have unique question IDs', () => {
    const ids = allQuestions.map(q => q.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have cultural analogies with Kinyarwanda text', () => {
    const questionsWithKinyarwanda = allQuestions.filter(
      q => q.culturalContext.primaryAnalogy.analogy.includes('Nk\'')
    )

    // At least 80% of questions should have Kinyarwanda analogies
    expect(questionsWithKinyarwanda.length / allQuestions.length).toBeGreaterThanOrEqual(0.8)
  })

  it('should return random questions without duplicates', () => {
    const count = 10
    const randomQuestions = getRandomQuestions(count)

    expect(randomQuestions.length).toBe(count)

    const ids = randomQuestions.map(q => q.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(count)
  })

  it('should filter questions by domain', () => {
    const domain: ExamDomain = 'cloud-concepts'
    const domainQuestions = getQuestionsByDomain(domain)

    for (const question of domainQuestions) {
      expect(question.domain).toBe(domain)
    }
  })

  it('should cover various analogy types', () => {
    const analogyTypes = new Set(
      allQuestions.map(q => q.culturalContext.primaryAnalogy.analogyType)
    )

    // Should have at least 5 different analogy types
    expect(analogyTypes.size).toBeGreaterThanOrEqual(5)
  })
})

describe('Exam Domain Distribution', () => {
  it('should roughly follow exam weight distribution', () => {
    const domainCounts: Record<ExamDomain, number> = {
      'cloud-concepts': 0,
      'security-compliance': 0,
      'technology': 0,
      'billing-pricing': 0,
    }

    for (const question of allQuestions) {
      domainCounts[question.domain]++
    }

    const total = allQuestions.length

    // Each domain should have at least some questions
    for (const domain of Object.keys(domainCounts) as ExamDomain[]) {
      expect(domainCounts[domain]).toBeGreaterThan(0)
    }

    // Cloud concepts should have the most questions (35% weight)
    expect(domainCounts['cloud-concepts']).toBeGreaterThanOrEqual(
      domainCounts['billing-pricing']
    )
  })
})
