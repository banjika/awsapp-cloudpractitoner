# AWS Cloud Kigali - Tegura Ikizamini Cyawe

An interactive web application designed to help students in Rwanda and East Africa prepare for the AWS Cloud Practitioner certification exam using culturally relevant examples and analogies.

## Features

### Interactive Quiz System
- **Practice Mode**: Immediate feedback after each question with detailed explanations
- **Exam Simulation Mode**: Timed tests that simulate the actual exam experience
- 30+ sample questions (expandable to 300+) covering all 4 exam domains

### Cultural Analogy Engine
AWS concepts are explained using familiar local examples:
- **Mobile Money (M-Pesa, MTN MoMo)**: For billing and pay-as-you-go concepts
- **Motorcycle Taxis (Motos)**: For load balancing and auto-scaling
- **Coffee Farming**: For CI/CD pipelines and processing
- **Local Markets (Kimironko)**: For microservices and distributed systems
- **Water Distribution**: For CDN and content delivery
- **Banking Cooperatives (SACCO)**: For shared responsibility model
- **Electricity Grid (EUCL/REG)**: For cloud infrastructure

### Exam Domain Coverage
Questions distributed according to official exam weights:
- Cloud Concepts (35%)
- Security & Compliance (30%)
- Technology (25%)
- Billing & Pricing (10%)

### Progress Tracking
- Visual dashboard showing overall study progress
- Domain-specific performance analytics
- Weak area identification (topics below 70% accuracy)
- Exam readiness score calculation

### Gamification
- Points for correct answers and completed sessions
- Badges for study milestones
- Study streak tracking
- Bilingual motivational messages (English & Kinyarwanda)

### Mobile-First Design
- Responsive design optimized for smartphones
- African-inspired color scheme (green, yellow, blue)
- Offline capability with IndexedDB storage
- Low data usage optimization

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules with CSS Variables
- **State Management**: React Context + useReducer
- **Local Storage**: IndexedDB (via idb library)
- **Testing**: Vitest + React Testing Library

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Development

```bash
# Start dev server with hot reload
npm run dev

# Type checking
npm run build

# Linting
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Shared UI components
│   └── quiz/            # Quiz-specific components
├── contexts/            # React contexts
├── data/                # Question bank and data
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── services/            # Business logic services
├── styles/              # Global styles and variables
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Cultural Context

This application is specifically designed for students in Rwanda and East Africa, featuring:
- Local business examples (Irembo, RwandAir, BK, MTN Rwanda)
- Familiar infrastructure analogies (EUCL electricity, WASAC water)
- Kinyarwanda phrases and translations
- RWF currency display
- References to local tech hubs (Kigali Innovation City)

## Contributing

Contributions are welcome! Please feel free to submit pull requests with:
- Additional questions
- New cultural analogies
- Bug fixes
- Feature improvements

## License

MIT License

---

**Muraho! Murakaza neza!** (Hello! Welcome!)

Prepare for your AWS Cloud Practitioner certification with confidence using familiar examples from your local context.
