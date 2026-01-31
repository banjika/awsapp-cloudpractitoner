// AWS Cloud Kigali - Additional Questions for Complete Coverage
import { Question } from '../types';

export const additionalQuestions: Question[] = [
  // ============================================
  // MORE CLOUD CONCEPTS QUESTIONS
  // ============================================
  {
    id: 'cc-007',
    domain: 'cloud-concepts',
    subdomain: 'Global Infrastructure',
    text: 'What is an AWS Region?',
    options: [
      { id: 'a', text: 'A single data center' },
      { id: 'b', text: 'A physical location with multiple isolated data centers called Availability Zones' },
      { id: 'c', text: 'A virtual private network' },
      { id: 'd', text: 'A type of storage service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'An AWS Region is a physical location around the world where AWS clusters data centers. Each Region consists of multiple isolated locations known as Availability Zones.',
      incorrectReasons: {
        'a': 'A Region contains multiple data centers, not just one.',
        'c': 'VPN is a networking service, not a Region.',
        'd': 'Regions are infrastructure, not storage services.',
      },
    },
    difficulty: 'easy',
    tags: ['regions', 'infrastructure', 'global'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'AWS Regions',
        analogy: 'Nk\'uko Rwanda igabanyijemo intara - buri ntara ifite ibigo byayo',
        localExample: 'Like how Rwanda is divided into provinces (Eastern, Western, Northern, Southern, Kigali) - each AWS Region is a separate geographic area with its own infrastructure.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Similar to how different provinces have their own hospitals, schools, and markets',
        'Like mobile network coverage areas - each region operates independently',
      ],
    },
  },
  {
    id: 'cc-008',
    domain: 'cloud-concepts',
    subdomain: 'Economics',
    text: 'What type of expense model does cloud computing use?',
    options: [
      { id: 'a', text: 'Capital Expenditure (CapEx) only' },
      { id: 'b', text: 'Operational Expenditure (OpEx)' },
      { id: 'c', text: 'Both CapEx and OpEx equally' },
      { id: 'd', text: 'Neither CapEx nor OpEx' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Cloud computing uses an Operational Expenditure (OpEx) model where you pay for resources as you use them, like a utility bill, instead of large upfront capital investments.',
      incorrectReasons: {
        'a': 'CapEx involves large upfront purchases - cloud avoids this.',
        'c': 'Cloud primarily uses OpEx, minimizing CapEx.',
        'd': 'Cloud definitely involves expenses - just operational ones.',
      },
    },
    difficulty: 'medium',
    tags: ['opex', 'capex', 'economics'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'OpEx vs CapEx',
        analogy: 'Nk\'uko wishyura amashanyarazi - buri kwezi wishyura ibyo wakoresheje',
        localExample: 'Like paying your EUCL electricity bill monthly based on usage, instead of building your own power plant (huge upfront cost).',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like paying for mobile data bundles vs buying the entire telecom network',
        'Similar to renting vs buying a house in Kigali',
      ],
    },
  },
  {
    id: 'cc-009',
    domain: 'cloud-concepts',
    subdomain: 'Benefits',
    text: 'What does "go global in minutes" mean as a cloud benefit?',
    options: [
      { id: 'a', text: 'Cloud servers run faster' },
      { id: 'b', text: 'You can deploy your application in multiple regions worldwide quickly' },
      { id: 'c', text: 'Your internet speed increases' },
      { id: 'd', text: 'AWS translates your application into different languages' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Go global in minutes means you can deploy your application to AWS data centers around the world with just a few clicks, reaching customers globally without building physical infrastructure.',
      incorrectReasons: {
        'a': 'This is about geographic reach, not server speed.',
        'c': 'Cloud does not directly increase your internet speed.',
        'd': 'AWS does not automatically translate applications.',
      },
    },
    difficulty: 'easy',
    tags: ['global', 'deployment', 'benefits'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Global Deployment',
        analogy: 'Nk\'uko RwandAir ifite ingendo zijya mu bihugu byinshi - ukigera hose vuba',
        localExample: 'Like how RwandAir can fly you to many countries from Kigali - with AWS you can serve customers in Europe, Asia, Americas without building offices there.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like how Rwandan coffee reaches markets worldwide through export channels',
        'Similar to how an e-commerce site in Kigali can sell globally',
      ],
    },
  },
  {
    id: 'cc-010',
    domain: 'cloud-concepts',
    subdomain: 'Design Principles',
    text: 'What is the benefit of designing for failure in AWS?',
    options: [
      { id: 'a', text: 'It makes systems slower but more reliable' },
      { id: 'b', text: 'Systems automatically recover when components fail' },
      { id: 'c', text: 'It reduces the need for monitoring' },
      { id: 'd', text: 'It eliminates all possible failures' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Designing for failure means building systems that expect and handle component failures gracefully. When one part fails, the system continues operating by automatically switching to healthy components.',
      incorrectReasons: {
        'a': 'Good failure design does not make systems slower.',
        'c': 'You still need monitoring - design for failure adds resilience.',
        'd': 'You cannot eliminate all failures, but you can handle them gracefully.',
      },
    },
    difficulty: 'medium',
    tags: ['design', 'failure', 'resilience'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Design for Failure',
        analogy: 'Nk\'uko inzu nziza igira inzira ebyiri zo gusohokamo - imwe ifunze ukoresheje indi',
        localExample: 'Like how good buildings have multiple exits - if one is blocked during an emergency, people can use another. Systems should have backup paths.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like having both MTN and Airtel SIM cards - if one network is down, you use the other',
        'Similar to hospitals having backup generators for power outages',
      ],
    },
  },

  // ============================================
  // MORE SECURITY & COMPLIANCE QUESTIONS
  // ============================================
  {
    id: 'sc-005',
    domain: 'security-compliance',
    subdomain: 'Access Management',
    text: 'What is the principle of least privilege?',
    options: [
      { id: 'a', text: 'Giving all users administrator access' },
      { id: 'b', text: 'Giving users only the minimum permissions needed to perform their job' },
      { id: 'c', text: 'Denying all access by default' },
      { id: 'd', text: 'Using only free tier services' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The principle of least privilege means giving users only the minimum permissions they need to perform their tasks. This limits potential damage from errors or compromised accounts.',
      incorrectReasons: {
        'a': 'Admin access for everyone violates least privilege.',
        'c': 'Users need some access to do their jobs.',
        'd': 'This is about permissions, not pricing.',
      },
    },
    difficulty: 'medium',
    tags: ['iam', 'least-privilege', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Least Privilege Access',
        analogy: 'Nk\'uko umunyeshuri ahabwa uruhusha rwo kwinjira mu ishuri gusa - ntarwo kwinjira mu biro by\'umuyobozi',
        localExample: 'Like how a student has access to classrooms but not the principal\'s office - each person gets access only to what they need.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like bank tellers can process deposits but cannot access the vault combination',
        'Similar to hotel room keys - you can only open your assigned room',
      ],
    },
  },
  {
    id: 'sc-006',
    domain: 'security-compliance',
    subdomain: 'Root Account',
    text: 'What is the best practice for the AWS root user account?',
    options: [
      { id: 'a', text: 'Use it for daily administrative tasks' },
      { id: 'b', text: 'Share credentials with the team' },
      { id: 'c', text: 'Enable MFA and avoid using it for daily tasks' },
      { id: 'd', text: 'Delete it after creating IAM users' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'Best practice is to enable MFA on the root account and avoid using it for everyday tasks. Create IAM users with appropriate permissions instead. The root user has unlimited access and should be protected.',
      incorrectReasons: {
        'a': 'Root should not be used for daily tasks.',
        'b': 'Never share root credentials.',
        'd': 'You cannot delete the root account - it is essential.',
      },
    },
    difficulty: 'medium',
    tags: ['root-account', 'mfa', 'best-practice'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Root Account Protection',
        analogy: 'Nk\'uko urufunguzo rw\'icyumba cy\'amafaranga (vault) rurinzwe cyane',
        localExample: 'Like the master key to a bank vault - only used in emergencies, kept very secure, and regular employees use different keys for daily operations.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like how a CEO does not use their authority for routine office tasks',
        'Similar to emergency override keys being locked separately',
      ],
    },
  },
  {
    id: 'sc-007',
    domain: 'security-compliance',
    subdomain: 'Encryption',
    text: 'What is the difference between encryption at rest and encryption in transit?',
    options: [
      { id: 'a', text: 'There is no difference' },
      { id: 'b', text: 'At rest protects stored data; in transit protects data being transferred' },
      { id: 'c', text: 'In transit is for databases only' },
      { id: 'd', text: 'At rest is more important than in transit' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Encryption at rest protects data stored on disk (like files in S3 or databases). Encryption in transit protects data while it is being transferred over networks (like HTTPS for web traffic).',
      incorrectReasons: {
        'a': 'They protect data in different states.',
        'c': 'In transit applies to all network communications.',
        'd': 'Both are equally important for comprehensive security.',
      },
    },
    difficulty: 'medium',
    tags: ['encryption', 'at-rest', 'in-transit'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Encryption Types',
        analogy: 'Nk\'uko ufunga ibintu byawe mu nzu (at rest) kandi ukagira umurinzi mu nzira (in transit)',
        localExample: 'Like locking your valuables in a safe at home (at rest) AND using a secure armored vehicle when transporting them to the bank (in transit).',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like encrypting files on your phone AND using secure connections when sending them',
        'Similar to sealing a letter AND using trusted courier service',
      ],
    },
  },
  {
    id: 'sc-008',
    domain: 'security-compliance',
    subdomain: 'Security Services',
    text: 'What does AWS WAF protect against?',
    options: [
      { id: 'a', text: 'Physical security threats' },
      { id: 'b', text: 'Common web attacks like SQL injection and cross-site scripting' },
      { id: 'c', text: 'Hardware failures' },
      { id: 'd', text: 'Network latency' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS WAF (Web Application Firewall) protects web applications from common web exploits like SQL injection, cross-site scripting (XSS), and other OWASP top 10 vulnerabilities.',
      incorrectReasons: {
        'a': 'Physical security is AWS\'s responsibility.',
        'c': 'Hardware failures are handled by AWS infrastructure.',
        'd': 'WAF is for security, not performance.',
      },
    },
    difficulty: 'medium',
    tags: ['waf', 'web-security', 'firewall'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Web Application Firewall',
        analogy: 'Nk\'umurinzi w\'irembo ureba neza abantu binjira - arinda abafite imigambi mibi',
        localExample: 'Like a security guard at a building entrance who checks IDs and stops suspicious people - WAF inspects web requests and blocks malicious ones.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like airport security scanning luggage for dangerous items',
        'Similar to bank security checking for counterfeit money',
      ],
    },
  },

  // ============================================
  // MORE TECHNOLOGY QUESTIONS
  // ============================================
  {
    id: 'tc-006',
    domain: 'technology',
    subdomain: 'Networking',
    text: 'What is Amazon VPC?',
    options: [
      { id: 'a', text: 'A type of virtual server' },
      { id: 'b', text: 'A virtual private network isolated from other customers' },
      { id: 'c', text: 'A storage service' },
      { id: 'd', text: 'A database service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon VPC (Virtual Private Cloud) is a logically isolated section of AWS where you can launch resources in a virtual network that you define. You control IP addresses, subnets, route tables, and network gateways.',
      incorrectReasons: {
        'a': 'VPC is networking, not compute.',
        'c': 'VPC is networking, not storage.',
        'd': 'VPC is networking, not database.',
      },
    },
    difficulty: 'medium',
    tags: ['vpc', 'networking', 'isolation'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Virtual Private Cloud',
        analogy: 'Nk\'igikari cyawe bwite mu mugi - ufite impera n\'inzitizi zawe',
        localExample: 'Like having your own private compound in a city with walls, gates, and your own internal roads - VPC gives you isolated network space within AWS.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Similar to a gated community where you control who enters',
        'Like a private office floor in a shared building with separate access',
      ],
    },
  },
  {
    id: 'tc-007',
    domain: 'technology',
    subdomain: 'Containers',
    text: 'What is Amazon ECS used for?',
    options: [
      { id: 'a', text: 'Email sending' },
      { id: 'b', text: 'Running and managing Docker containers' },
      { id: 'c', text: 'File storage' },
      { id: 'd', text: 'DNS management' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster.',
      incorrectReasons: {
        'a': 'SES is for email, not ECS.',
        'c': 'S3 and EFS are for storage.',
        'd': 'Route 53 is for DNS.',
      },
    },
    difficulty: 'medium',
    tags: ['ecs', 'containers', 'docker'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Container Orchestration',
        analogy: 'Nk\'uko abatwara ibikoresho bagenzurwa - buri gikoresho kiri mu gasanduku gasanzwe',
        localExample: 'Like managing a fleet of delivery trucks where each cargo is in a standard container - ECS manages containers (applications) running across many servers.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Similar to managing multiple food stalls in a food court - each runs independently but managed together',
        'Like coordinating multiple SafeMoto riders from a central dispatch',
      ],
    },
  },
  {
    id: 'tc-008',
    domain: 'technology',
    subdomain: 'Monitoring',
    text: 'What is Amazon CloudWatch used for?',
    options: [
      { id: 'a', text: 'Watching videos' },
      { id: 'b', text: 'Monitoring AWS resources and applications' },
      { id: 'c', text: 'Security scanning' },
      { id: 'd', text: 'DNS routing' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources and applications. It collects metrics, logs, and events.',
      incorrectReasons: {
        'a': 'CloudWatch is for monitoring, not video streaming.',
        'c': 'Security scanning is done by services like Inspector.',
        'd': 'Route 53 handles DNS.',
      },
    },
    difficulty: 'easy',
    tags: ['cloudwatch', 'monitoring', 'metrics'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Resource Monitoring',
        analogy: 'Nk\'ipine ya telefoni yerekana ingufu zisigaye - ureba uko system ikora',
        localExample: 'Like the dashboard on a car showing fuel level, speed, and engine temperature - CloudWatch shows the health and performance of your AWS resources.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like monitoring electricity meters in a building',
        'Similar to health monitoring devices that track vital signs',
      ],
    },
  },
  {
    id: 'tc-009',
    domain: 'technology',
    subdomain: 'Compute',
    text: 'What is Amazon Lightsail designed for?',
    options: [
      { id: 'a', text: 'Enterprise-scale applications' },
      { id: 'b', text: 'Simple virtual private servers with predictable pricing' },
      { id: 'c', text: 'Big data processing' },
      { id: 'd', text: 'Machine learning' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Lightsail is designed for simple workloads and users who need a straightforward VPS solution. It bundles compute, storage, and networking at a predictable monthly price.',
      incorrectReasons: {
        'a': 'EC2 is better for enterprise-scale applications.',
        'c': 'EMR and other services are for big data.',
        'd': 'SageMaker is for machine learning.',
      },
    },
    difficulty: 'easy',
    tags: ['lightsail', 'vps', 'simple'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Simplified Cloud Servers',
        analogy: 'Nk\'uko ukodesha inzu nziza iteye - ibintu byose birimo, igiciro kisobanutse',
        localExample: 'Like renting a furnished apartment with utilities included - Lightsail gives you everything bundled at a clear monthly price, easy for beginners.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like all-inclusive mobile data packages vs pay-per-use',
        'Similar to turnkey business solutions vs building from scratch',
      ],
    },
  },
  {
    id: 'tc-010',
    domain: 'technology',
    subdomain: 'Database',
    text: 'When would you choose Amazon DynamoDB over Amazon RDS?',
    options: [
      { id: 'a', text: 'When you need complex SQL queries' },
      { id: 'b', text: 'When you need a fast, flexible NoSQL database with predictable performance' },
      { id: 'c', text: 'When you need to run Oracle databases' },
      { id: 'd', text: 'When you need relational data with joins' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'DynamoDB is ideal when you need a fast, fully managed NoSQL database with single-digit millisecond latency at any scale. It is perfect for key-value and document data models.',
      incorrectReasons: {
        'a': 'SQL queries are for relational databases like RDS.',
        'c': 'RDS supports Oracle, not DynamoDB.',
        'd': 'Joins are relational database operations.',
      },
    },
    difficulty: 'medium',
    tags: ['dynamodb', 'nosql', 'database'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'NoSQL Database',
        analogy: 'Nk\'uko isoko rya Kimironko ritandukanye n\'iduka - vuba cyane kandi ntirikeneye urutonde rukomeye',
        localExample: 'Like a busy market (DynamoDB) vs an organized store with categories (RDS) - the market is faster for finding specific items but less structured.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like M-Pesa transactions that need to be super fast and simple',
        'Similar to a contact list vs a complex address book with relationships',
      ],
    },
  },

  // ============================================
  // MORE BILLING & PRICING QUESTIONS
  // ============================================
  {
    id: 'bp-004',
    domain: 'billing-pricing',
    subdomain: 'Support Plans',
    text: 'Which AWS Support plan includes access to a Technical Account Manager (TAM)?',
    options: [
      { id: 'a', text: 'Basic Support' },
      { id: 'b', text: 'Developer Support' },
      { id: 'c', text: 'Business Support' },
      { id: 'd', text: 'Enterprise Support' },
    ],
    correctAnswerId: 'd',
    explanation: {
      correctReason: 'Enterprise Support is the only plan that includes a Technical Account Manager (TAM) who provides proactive guidance and advocacy to help you succeed with AWS.',
      incorrectReasons: {
        'a': 'Basic Support is free with limited features.',
        'b': 'Developer Support does not include a TAM.',
        'c': 'Business Support has technical support but no dedicated TAM.',
      },
    },
    difficulty: 'medium',
    tags: ['support', 'tam', 'enterprise'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Dedicated Account Manager',
        analogy: 'Nk\'umufasha wawe bwite mu banki ikomeye - akugira inama kandi akugisha',
        localExample: 'Like having a personal relationship manager at a premium bank who knows your business and proactively helps you - Enterprise Support gives you a dedicated TAM.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like VIP customer service at top hotels',
        'Similar to having a dedicated lawyer on retainer',
      ],
    },
  },
  {
    id: 'bp-005',
    domain: 'billing-pricing',
    subdomain: 'Pricing',
    text: 'What is a Spot Instance?',
    options: [
      { id: 'a', text: 'An instance that is always available' },
      { id: 'b', text: 'Unused EC2 capacity available at up to 90% discount, but can be interrupted' },
      { id: 'c', text: 'A free tier instance' },
      { id: 'd', text: 'An instance with guaranteed uptime' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Spot Instances let you take advantage of unused EC2 capacity at steep discounts (up to 90% off). However, AWS can reclaim them with a 2-minute warning when capacity is needed.',
      incorrectReasons: {
        'a': 'Spot Instances can be interrupted.',
        'c': 'Spot Instances are not free, just heavily discounted.',
        'd': 'Spot Instances specifically do not guarantee availability.',
      },
    },
    difficulty: 'medium',
    tags: ['spot-instances', 'pricing', 'discount'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Spot Instance Pricing',
        analogy: 'Nk\'uko ugura ibiribwa byasigaye ku isoko - bigura vuba ariko si uko buri gihe',
        localExample: 'Like buying discounted produce at the market at closing time - much cheaper but not always available. Spot Instances offer big discounts but can be taken away.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like last-minute flight deals - great prices but not guaranteed',
        'Similar to standby tickets at the bus station',
      ],
    },
  },
  {
    id: 'bp-006',
    domain: 'billing-pricing',
    subdomain: 'Cost Management',
    text: 'What is AWS Organizations used for in terms of billing?',
    options: [
      { id: 'a', text: 'Creating virtual machines' },
      { id: 'b', text: 'Consolidated billing across multiple AWS accounts' },
      { id: 'c', text: 'Monitoring resource usage' },
      { id: 'd', text: 'Encrypting data' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Organizations allows you to consolidate billing across multiple AWS accounts, getting a single bill and potentially volume discounts from combined usage.',
      incorrectReasons: {
        'a': 'EC2 is for virtual machines.',
        'c': 'CloudWatch monitors resources.',
        'd': 'KMS and other services handle encryption.',
      },
    },
    difficulty: 'easy',
    tags: ['organizations', 'consolidated-billing', 'accounts'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Consolidated Billing',
        analogy: 'Nk\'uko umuryango wose ukoresha imwe electricity account - wishyura rimwe',
        localExample: 'Like a family sharing one electricity account - instead of each family member paying separately, you get one bill and may get volume discounts.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like a company paying all employee phone bills together',
        'Similar to bulk purchasing for multiple stores in a chain',
      ],
    },
  },
  {
    id: 'bp-007',
    domain: 'billing-pricing',
    subdomain: 'Pricing',
    text: 'What does "pay for what you use" mean in AWS?',
    options: [
      { id: 'a', text: 'You pay a fixed monthly fee' },
      { id: 'b', text: 'You are charged only for the resources you actually consume' },
      { id: 'c', text: 'You pay upfront for the year' },
      { id: 'd', text: 'All services are free' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Pay for what you use means you are billed based on actual resource consumption - like paying for the electricity you use rather than a flat monthly rate.',
      incorrectReasons: {
        'a': 'AWS is not a fixed monthly fee model.',
        'c': 'Upfront payments are optional (Reserved Instances).',
        'd': 'AWS services are not free (except Free Tier limits).',
      },
    },
    difficulty: 'easy',
    tags: ['pay-as-you-go', 'pricing', 'usage'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Usage-Based Pricing',
        analogy: 'Nk\'uko wishyura airtime - wishyura ibyo ukoresheje gusa',
        localExample: 'Like buying mobile data bundles - if you use 1GB you pay for 1GB, not a fixed amount whether you use it or not. AWS charges for actual usage.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like prepaid electricity meters - you pay for what you consume',
        'Similar to paying for taxi by distance, not flat rate',
      ],
    },
  },

  // ============================================
  // ADDITIONAL MIXED DOMAIN QUESTIONS
  // ============================================
  {
    id: 'cc-011',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Computing Types',
    text: 'What is Infrastructure as a Service (IaaS)?',
    options: [
      { id: 'a', text: 'Pre-built software applications' },
      { id: 'b', text: 'Basic computing resources like servers, storage, and networking' },
      { id: 'c', text: 'Platforms for building applications' },
      { id: 'd', text: 'Managed database services' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'IaaS provides fundamental computing resources - virtual machines, storage, and networking. You manage the OS, applications, and data while the provider manages the physical infrastructure.',
      incorrectReasons: {
        'a': 'Pre-built software is SaaS.',
        'c': 'Platforms for building apps is PaaS.',
        'd': 'Managed databases are a type of PaaS/SaaS.',
      },
    },
    difficulty: 'medium',
    tags: ['iaas', 'cloud-types', 'infrastructure'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Infrastructure as a Service',
        analogy: 'Nk\'uko ukodesha inzu idafite ibikoresho - ubishyiramo byawe',
        localExample: 'Like renting an empty warehouse - you get the building (infrastructure) but furnish it yourself with equipment, staff, and processes.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like renting land to build on vs buying a complete house',
        'Similar to leasing a kitchen space vs using a food delivery app',
      ],
    },
  },
  {
    id: 'sc-009',
    domain: 'security-compliance',
    subdomain: 'Compliance',
    text: 'What is AWS Artifact?',
    options: [
      { id: 'a', text: 'A code repository' },
      { id: 'b', text: 'A portal for accessing AWS compliance reports and agreements' },
      { id: 'c', text: 'A monitoring service' },
      { id: 'd', text: 'A deployment tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Artifact is a portal that provides on-demand access to AWS security and compliance documents like SOC reports, ISO certifications, and BAA agreements.',
      incorrectReasons: {
        'a': 'CodeCommit is for code repositories.',
        'c': 'CloudWatch is for monitoring.',
        'd': 'CodeDeploy is for deployment.',
      },
    },
    difficulty: 'medium',
    tags: ['artifact', 'compliance', 'reports'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Compliance Documentation',
        analogy: 'Nk\'aho ukura impapuro z\'uruhushya n\'ibimenyetso - byerekana ko AWS ikurikiza amategeko',
        localExample: 'Like accessing a company\'s official certifications and licenses - Artifact lets you download AWS compliance documents for auditors or regulators.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like getting official bank statements for visa applications',
        'Similar to accessing government certificates from Irembo',
      ],
    },
  },
  {
    id: 'tc-011',
    domain: 'technology',
    subdomain: 'Messaging',
    text: 'What is Amazon SQS used for?',
    options: [
      { id: 'a', text: 'Sending emails' },
      { id: 'b', text: 'Message queuing between application components' },
      { id: 'c', text: 'Video streaming' },
      { id: 'd', text: 'Database replication' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
      incorrectReasons: {
        'a': 'SES is for emails.',
        'c': 'CloudFront and Kinesis Video are for video.',
        'd': 'Database replication is handled by RDS/DynamoDB features.',
      },
    },
    difficulty: 'medium',
    tags: ['sqs', 'messaging', 'decoupling'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Message Queue',
        analogy: 'Nk\'aho abantu bategereza mu murongo - buri wese akira serivisi igihe cyayo',
        localExample: 'Like a queue at a bank - customers wait in line and are served one by one. SQS lets application components communicate without blocking each other.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like the ticket system at some government offices',
        'Similar to order queue at a restaurant kitchen',
      ],
    },
  },
  {
    id: 'cc-012',
    domain: 'cloud-concepts',
    subdomain: 'Shared Responsibility',
    text: 'In the shared responsibility model, what is AWS responsible for?',
    options: [
      { id: 'a', text: 'Customer data and access management' },
      { id: 'b', text: 'Physical security of data centers and global infrastructure' },
      { id: 'c', text: 'Operating system patching on EC2' },
      { id: 'd', text: 'Application code security' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS is responsible for security OF the cloud - physical data centers, hardware, networking, and the global infrastructure that runs all AWS services.',
      incorrectReasons: {
        'a': 'Customer data and access management is customer responsibility.',
        'c': 'OS patching on EC2 is customer responsibility.',
        'd': 'Application code is customer responsibility.',
      },
    },
    difficulty: 'easy',
    tags: ['shared-responsibility', 'aws-responsibility', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'AWS Security Responsibility',
        analogy: 'Nk\'uko nyir\'inzu arinda imyubakire - ubundi ni wowe urinda ibintu byawe',
        localExample: 'Like a landlord maintaining the building structure, locks, and security guards - AWS maintains physical infrastructure while you protect what you put inside.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like how banks protect the vault, but you protect your PIN',
        'Similar to parking garages providing security but you lock your car',
      ],
    },
  },
  {
    id: 'tc-012',
    domain: 'technology',
    subdomain: 'DNS',
    text: 'What is Amazon Route 53?',
    options: [
      { id: 'a', text: 'A routing service for trucks' },
      { id: 'b', text: 'A highly available and scalable DNS web service' },
      { id: 'c', text: 'A networking firewall' },
      { id: 'd', text: 'A VPN service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service designed to route end users to applications by translating domain names into IP addresses.',
      incorrectReasons: {
        'a': 'Route 53 is for DNS, not transportation.',
        'c': 'WAF and Security Groups are firewalls.',
        'd': 'VPN is a different service.',
      },
    },
    difficulty: 'easy',
    tags: ['route53', 'dns', 'networking'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'DNS Service',
        analogy: 'Nk\'igitabo cy\'aderesi - gishaka aderesi y\'ahantu ukeneye kugera',
        localExample: 'Like a phone directory that translates names to phone numbers - Route 53 translates website names (like google.com) to the actual server addresses.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like asking for directions and getting the exact GPS coordinates',
        'Similar to finding a business by name instead of address',
      ],
    },
  },
];
