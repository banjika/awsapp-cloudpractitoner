// AWS Cloud Kigali - Sample Questions with Cultural Analogies
import { Question } from '../types';

export const sampleQuestions: Question[] = [
  // ============================================
  // CLOUD CONCEPTS (35%)
  // ============================================
  {
    id: 'cc-001',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Value Proposition',
    text: 'What is the primary benefit of cloud computing that allows a startup in Kigali to compete with larger companies?',
    options: [
      { id: 'a', text: 'Unlimited storage' },
      { id: 'b', text: 'Pay-as-you-go pricing - only pay for what you use' },
      { id: 'c', text: 'Free services for all' },
      { id: 'd', text: 'Guaranteed uptime' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Pay-as-you-go pricing is a key benefit of cloud computing. You only pay for the resources you actually use, similar to how you pay for mobile airtime or data bundles. This allows small businesses to access the same powerful technology as large corporations without massive upfront investments.',
      incorrectReasons: {
        'a': 'While cloud offers large storage, it is not unlimited and you still pay for what you use.',
        'c': 'Cloud services are not free - they charge based on usage.',
        'd': 'While AWS offers high availability, 100% uptime is not guaranteed.',
      },
    },
    difficulty: 'easy',
    tags: ['pricing', 'value-proposition', 'startup'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Pay-as-you-go Cloud Pricing',
        analogy: 'Nk\'uko wishyura amafaranga y\'ingufu za telefoni (airtime) - wishyura ibyo ukoresha gusa',
        localExample: 'Like MTN MoMo or Airtel Money where you only add credit when you need it, not pay a fixed monthly fee whether you use it or not.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Just like buying airtime bundles: 500 RWF for 1GB instead of paying 50,000 RWF/month whether you use data or not',
        'Similar to paying for electricity units at EUCL - you buy what you need',
      ],
      rwandanBusinessCase: 'Startups at Kigali Innovation City can start small with AWS and scale up as they grow, just like how a new restaurant starts with a few tables and adds more as customers increase.',
    },
  },
  {
    id: 'cc-002',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Economics',
    text: 'What does "elasticity" mean in cloud computing?',
    options: [
      { id: 'a', text: 'The ability to stretch physical servers' },
      { id: 'b', text: 'The ability to automatically scale resources up or down based on demand' },
      { id: 'c', text: 'The flexibility of payment options' },
      { id: 'd', text: 'The durability of stored data' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Elasticity in cloud computing refers to the ability to automatically add or remove computing resources based on current demand. When traffic increases, more resources are added automatically. When traffic decreases, resources are released to save costs.',
      incorrectReasons: {
        'a': 'Elasticity is not about physical stretching of servers.',
        'c': 'Payment flexibility is a different concept from elasticity.',
        'd': 'Durability refers to data protection, not scaling.',
      },
    },
    difficulty: 'medium',
    tags: ['elasticity', 'scaling', 'auto-scaling'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Cloud Elasticity',
        analogy: 'Nk\'uko abamotari (moto taxi) bongera cyangwa bagabanya umubare w\'ingendo hakurikijwe abagenzi',
        localExample: 'Like how moto taxi drivers at Nyabugogo bus station increase during rush hours and decrease at night - resources match demand automatically.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'During Kwita Izina (gorilla naming ceremony), hotels add more staff and services, then scale back to normal afterward',
        'Market vendors at Kimironko bring more produce on busy market days',
      ],
      rwandanBusinessCase: 'When an e-commerce site like Murukali has a sale, AWS can automatically add more servers to handle increased traffic, then reduce them when the sale ends.',
    },
  },
  {
    id: 'cc-003',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Deployment Models',
    text: 'Which cloud deployment model is AWS primarily known for?',
    options: [
      { id: 'a', text: 'Private Cloud' },
      { id: 'b', text: 'Hybrid Cloud' },
      { id: 'c', text: 'Public Cloud' },
      { id: 'd', text: 'Community Cloud' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'AWS is primarily a Public Cloud provider. In a public cloud, computing resources are owned and operated by a third-party provider (AWS) and delivered over the internet. Multiple customers (tenants) share the same infrastructure.',
      incorrectReasons: {
        'a': 'Private cloud is owned and used by a single organization.',
        'b': 'Hybrid cloud combines public and private clouds - AWS can be part of this but is itself public.',
        'd': 'Community cloud is shared by organizations with common concerns.',
      },
    },
    difficulty: 'easy',
    tags: ['deployment-models', 'public-cloud'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Public Cloud Model',
        analogy: 'Nk\'umuriro w\'amashanyarazi rusange (public electricity grid) - abantu benshi bakoresha amashanyarazi amwe',
        localExample: 'Like the REG (Rwanda Energy Group) electricity grid that everyone uses - you do not need your own generator, you just connect and pay for what you use.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Similar to public transportation (buses) vs owning your own car',
        'Like using public WiFi at Kigali Heights instead of installing your own internet infrastructure',
      ],
      rwandanBusinessCase: 'Instead of building their own data center, Rwandan banks like BK and Equity use AWS public cloud, just like businesses use REG electricity instead of each having their own power plant.',
    },
  },
  {
    id: 'cc-004',
    domain: 'cloud-concepts',
    subdomain: 'Design Principles',
    text: 'What is the benefit of deploying applications across multiple AWS Availability Zones?',
    options: [
      { id: 'a', text: 'Lower costs' },
      { id: 'b', text: 'Faster internet speeds' },
      { id: 'c', text: 'High availability and fault tolerance' },
      { id: 'd', text: 'More storage space' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'Deploying across multiple Availability Zones provides high availability and fault tolerance. If one data center experiences problems, your application continues running in another zone. This is a key AWS Well-Architected design principle.',
      incorrectReasons: {
        'a': 'Multi-AZ deployments typically cost more, not less.',
        'b': 'Speed is not the primary benefit of multi-AZ deployment.',
        'd': 'Storage space is independent of Availability Zones.',
      },
    },
    difficulty: 'medium',
    tags: ['availability-zones', 'high-availability', 'fault-tolerance'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Multiple Availability Zones',
        analogy: 'Nk\'uko amasoko menshi atandukanye (Kimironko, Nyabugogo) atanga ibicuruzwa bimwe - kimwe cyangwa kigize ikibazo',
        localExample: 'Like having markets in both Kimironko and Nyabugogo selling the same vegetables - if one market closes, you can still buy from the other.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Similar to having multiple water sources - if the main tap breaks, you have a backup well',
        'Like MTN having multiple cell towers - if one fails, your call continues through another',
      ],
      rwandanBusinessCase: 'RwandAir booking system should be deployed in multiple zones - if one data center has issues, customers can still book flights without interruption.',
    },
  },
  {
    id: 'cc-005',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Benefits',
    text: 'Which of the following is a benefit of moving to the AWS Cloud in terms of capital expenses?',
    options: [
      { id: 'a', text: 'Increase capital expenses' },
      { id: 'b', text: 'Trade fixed expenses for variable expenses' },
      { id: 'c', text: 'Eliminate all expenses' },
      { id: 'd', text: 'Trade variable expenses for fixed expenses' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS allows you to trade fixed capital expenses (CapEx) for variable operational expenses (OpEx). Instead of investing millions upfront in hardware, you pay only for what you use each month.',
      incorrectReasons: {
        'a': 'Cloud reduces capital expenses, not increases them.',
        'c': 'You still have expenses, they are just variable instead of fixed.',
        'd': 'It is the opposite - you trade fixed for variable.',
      },
    },
    difficulty: 'easy',
    tags: ['capex', 'opex', 'economics'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'CapEx to OpEx Transformation',
        analogy: 'Nk\'uko ukodesha inzu (rent) aho kugura (buy) - nta mafaranga menshi akenewe mu ntangiriro',
        localExample: 'Like renting an apartment in Kigali instead of building your own house - no need for a huge upfront investment, just pay monthly.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Similar to using SafeMotos instead of buying your own motorcycle',
        'Like businesses renting office space at Kigali Heights instead of constructing their own building',
      ],
      rwandanBusinessCase: 'A new Rwandan fintech can launch using AWS without spending billions on servers. They pay monthly based on usage, keeping capital for product development.',
    },
  },

  // ============================================
  // SECURITY & COMPLIANCE (30%)
  // ============================================
  {
    id: 'sc-001',
    domain: 'security-compliance',
    subdomain: 'Shared Responsibility',
    text: 'In the AWS Shared Responsibility Model, who is responsible for patching the operating system on EC2 instances?',
    options: [
      { id: 'a', text: 'AWS only' },
      { id: 'b', text: 'The customer only' },
      { id: 'c', text: 'Both AWS and the customer equally' },
      { id: 'd', text: 'Neither - it happens automatically' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The customer is responsible for patching the operating system on EC2 instances. AWS manages security OF the cloud (physical infrastructure, hardware), while customers manage security IN the cloud (OS, applications, data).',
      incorrectReasons: {
        'a': 'AWS manages the physical infrastructure, not your EC2 operating system.',
        'c': 'It is not equally shared - OS patching is clearly the customer\'s responsibility.',
        'd': 'OS patching does not happen automatically unless you configure it.',
      },
    },
    difficulty: 'medium',
    tags: ['shared-responsibility', 'ec2', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Shared Responsibility Model',
        analogy: 'Nk\'ikoperative y\'ibikorwa (SACCO) - SACCO irinda amafaranga, ariko nawe urinda ijambo ryibanga ryawe',
        localExample: 'Like a SACCO cooperative: the SACCO provides the secure vault and building (AWS), but you must protect your PIN and passbook (customer responsibility).',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like renting a house: the landlord maintains the building structure, but you lock your own door and protect your belongings',
        'Like using BK TechHouse coworking space - they provide secure building, you secure your laptop',
      ],
      rwandanBusinessCase: 'When using AWS for banking applications, the bank (customer) must still implement their own security measures like encryption and access controls, even though AWS secures the physical data centers.',
    },
  },
  {
    id: 'sc-002',
    domain: 'security-compliance',
    subdomain: 'Identity and Access Management',
    text: 'What AWS service is used to manage user access and permissions?',
    options: [
      { id: 'a', text: 'Amazon S3' },
      { id: 'b', text: 'AWS IAM' },
      { id: 'c', text: 'Amazon EC2' },
      { id: 'd', text: 'AWS Lambda' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS IAM (Identity and Access Management) is the service used to control who can access which AWS resources. It allows you to create users, groups, and roles with specific permissions.',
      incorrectReasons: {
        'a': 'S3 is for object storage, not access management.',
        'c': 'EC2 is for virtual servers, not access management.',
        'd': 'Lambda is for serverless computing, not access management.',
      },
    },
    difficulty: 'easy',
    tags: ['iam', 'access-management', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'AWS IAM Access Control',
        analogy: 'Nk\'umurinzi w\'irembo (security guard) ureba niba ufite uruhushya rwo kwinjira',
        localExample: 'Like the security guard at Kigali Convention Centre who checks your badge and only lets you enter areas you have permission for.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like how different employees at a bank have different access levels - tellers cannot access the vault',
        'Similar to M-Pesa agents having different permission levels based on their role',
      ],
      rwandanBusinessCase: 'At Rwanda Social Security Board (RSSB), different staff members have different access levels - claims officers can view claims but only managers can approve large payments.',
    },
  },
  {
    id: 'sc-003',
    domain: 'security-compliance',
    subdomain: 'Security Services',
    text: 'Which AWS service provides DDoS protection?',
    options: [
      { id: 'a', text: 'AWS Shield' },
      { id: 'b', text: 'AWS Guard' },
      { id: 'c', text: 'AWS Protect' },
      { id: 'd', text: 'AWS Defense' },
    ],
    correctAnswerId: 'a',
    explanation: {
      correctReason: 'AWS Shield is a managed DDoS (Distributed Denial of Service) protection service. Shield Standard is free and protects against common attacks. Shield Advanced provides additional protection for higher-level attacks.',
      incorrectReasons: {
        'b': 'AWS Guard does not exist. You might be thinking of GuardDuty which is for threat detection.',
        'c': 'AWS Protect is not a real AWS service.',
        'd': 'AWS Defense is not a real AWS service.',
      },
    },
    difficulty: 'medium',
    tags: ['shield', 'ddos', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'DDoS Protection',
        analogy: 'Nk\'ingabo zirinda aho umwami atuye - zirwanya abanzi bageragezo kwinjira benshi icyarimwe',
        localExample: 'Like security forces protecting important events - they prevent crowds from overwhelming the venue, just as Shield blocks malicious traffic floods.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like crowd control at Amahoro Stadium during big events',
        'Similar to traffic police managing vehicle flow to prevent gridlock on KN 5 Rd',
      ],
      rwandanBusinessCase: 'During election periods, government websites could face attack attempts. AWS Shield helps protect sites like irembo.gov.rw from being overwhelmed by malicious traffic.',
    },
  },

  // ============================================
  // TECHNOLOGY (25%)
  // ============================================
  {
    id: 'tc-001',
    domain: 'technology',
    subdomain: 'Compute',
    text: 'Which AWS service provides virtual servers in the cloud?',
    options: [
      { id: 'a', text: 'Amazon S3' },
      { id: 'b', text: 'Amazon EC2' },
      { id: 'c', text: 'Amazon RDS' },
      { id: 'd', text: 'Amazon VPC' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud. You can launch instances with your choice of operating system, configure networking, and scale capacity as needed.',
      incorrectReasons: {
        'a': 'S3 is for object storage, not compute.',
        'c': 'RDS is for managed databases, not general compute.',
        'd': 'VPC is for networking, not compute.',
      },
    },
    difficulty: 'easy',
    tags: ['ec2', 'compute', 'virtual-servers'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Virtual Servers (EC2)',
        analogy: 'Nk\'ikigo cy\'amashanyarazi (data center) utakeneye kubaka - ukodesha ingufu z\'itumanaho',
        localExample: 'Like renting computing power instead of buying and maintaining your own servers - similar to renting a generator instead of buying one.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like using a cyber cafe computer instead of buying your own desktop',
        'Similar to cloud kitchens where restaurants rent kitchen space instead of building their own',
      ],
      rwandanBusinessCase: 'AC Group or other Rwandan tech companies can rent EC2 servers to host their applications without building their own data center.',
    },
  },
  {
    id: 'tc-002',
    domain: 'technology',
    subdomain: 'Storage',
    text: 'Which AWS service is best for storing large amounts of unstructured data like images and videos?',
    options: [
      { id: 'a', text: 'Amazon RDS' },
      { id: 'b', text: 'Amazon S3' },
      { id: 'c', text: 'Amazon EC2' },
      { id: 'd', text: 'Amazon DynamoDB' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon S3 (Simple Storage Service) is designed for storing and retrieving any amount of data. It is perfect for unstructured data like images, videos, backups, and static website content.',
      incorrectReasons: {
        'a': 'RDS is for relational databases, not file storage.',
        'c': 'EC2 is for compute, not storage (though instances have storage).',
        'd': 'DynamoDB is for NoSQL database storage, not file storage.',
      },
    },
    difficulty: 'easy',
    tags: ['s3', 'storage', 'objects'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Object Storage (S3)',
        analogy: 'Nk\'ububiko bukomeye (warehouse) bushobora kubika ibintu byinshi byose',
        localExample: 'Like a large warehouse in the Kigali Free Trade Zone that can store any type of goods - from coffee beans to electronics - organized in labeled containers.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like Google Drive or Dropbox but for businesses and developers',
        'Similar to a self-storage facility where you rent space for your belongings',
      ],
      rwandanBusinessCase: 'The Rwanda Development Board could use S3 to store all tourism promotional videos and images, accessible from anywhere in the world.',
    },
  },
  {
    id: 'tc-003',
    domain: 'technology',
    subdomain: 'Database',
    text: 'Which AWS service is a managed relational database service?',
    options: [
      { id: 'a', text: 'Amazon S3' },
      { id: 'b', text: 'Amazon DynamoDB' },
      { id: 'c', text: 'Amazon RDS' },
      { id: 'd', text: 'Amazon EC2' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'Amazon RDS (Relational Database Service) is a managed service for relational databases. It supports MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB. AWS handles backups, patching, and maintenance.',
      incorrectReasons: {
        'a': 'S3 is object storage, not a database.',
        'b': 'DynamoDB is a NoSQL database, not relational.',
        'd': 'EC2 is compute - you could run a database on it, but RDS is the managed service.',
      },
    },
    difficulty: 'easy',
    tags: ['rds', 'database', 'relational'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Managed Database Service',
        analogy: 'Nk\'ikigo cy\'amabanki cyakira amafaranga yawe - bakuyitaho utazi gukorana n\'imashini',
        localExample: 'Like how BK or Equity Bank manages your money safely - you do not need to know how to run a bank, they handle security, backups, and maintenance.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like using mobile money where the operator manages all the technical infrastructure',
        'Similar to using a professional accountant instead of doing bookkeeping yourself',
      ],
      rwandanBusinessCase: 'Irembo government portal uses managed databases so they can focus on building services for citizens instead of managing database servers.',
    },
  },
  {
    id: 'tc-004',
    domain: 'technology',
    subdomain: 'Content Delivery',
    text: 'Which AWS service is used to deliver content to users with low latency globally?',
    options: [
      { id: 'a', text: 'Amazon S3' },
      { id: 'b', text: 'Amazon CloudFront' },
      { id: 'c', text: 'Amazon Route 53' },
      { id: 'd', text: 'Amazon VPC' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon CloudFront is a Content Delivery Network (CDN) that caches content at edge locations around the world. This means users get content from a location close to them, reducing latency.',
      incorrectReasons: {
        'a': 'S3 is storage - CloudFront can cache S3 content for faster delivery.',
        'c': 'Route 53 is DNS service, not content delivery.',
        'd': 'VPC is for networking isolation, not content delivery.',
      },
    },
    difficulty: 'medium',
    tags: ['cloudfront', 'cdn', 'edge'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Content Delivery Network (CDN)',
        analogy: 'Nk\'uruganda rw\'amazi (water distribution) - amazi aza mu nzu yawe aho kugenda ku isoko',
        localExample: 'Like how WASAC pipes water to every neighborhood instead of everyone walking to one central water source - content is distributed to servers near users.',
        analogyType: 'water-distribution',
      },
      localExamples: [
        'Like having MTN cell towers throughout Rwanda instead of one giant tower in Kigali',
        'Similar to Simba Supermarket having multiple locations so you do not have to travel far',
      ],
      rwandanBusinessCase: 'When Rwandans watch videos on streaming platforms, CloudFront delivers content from a nearby edge location in South Africa rather than from servers in the US, making it much faster.',
    },
  },

  // ============================================
  // BILLING & PRICING (10%)
  // ============================================
  {
    id: 'bp-001',
    domain: 'billing-pricing',
    subdomain: 'Pricing Models',
    text: 'Which pricing model provides the highest discount for EC2 instances in exchange for a commitment to use a specific instance type for 1 or 3 years?',
    options: [
      { id: 'a', text: 'On-Demand Instances' },
      { id: 'b', text: 'Spot Instances' },
      { id: 'c', text: 'Reserved Instances' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'Reserved Instances offer up to 72% discount compared to On-Demand pricing in exchange for a 1-year or 3-year commitment. This is ideal for predictable workloads with steady usage.',
      incorrectReasons: {
        'a': 'On-Demand has no commitment but also no discount.',
        'b': 'Spot Instances can have high discounts but can be interrupted - no commitment.',
        'd': 'Dedicated Hosts are for regulatory requirements, not primarily for discounts.',
      },
    },
    difficulty: 'medium',
    tags: ['reserved-instances', 'pricing', 'commitment'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Reserved Instance Commitment',
        analogy: 'Nk\'uko ukodesha inzu ku mwaka wose aho kuri buri kwezi - uhabwa igiciro cyiza',
        localExample: 'Like signing a 1-year lease agreement for an apartment - you pay less per month than someone paying month-to-month without a contract.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like buying a yearly MTN subscription instead of daily bundles - better value',
        'Similar to gym memberships - annual membership costs less per month than paying monthly',
      ],
      rwandanBusinessCase: 'A company like Zipline (drone delivery) that knows they need servers running 24/7 should use Reserved Instances to save significantly on their AWS bill.',
    },
  },
  {
    id: 'bp-002',
    domain: 'billing-pricing',
    subdomain: 'Cost Management',
    text: 'Which AWS service helps you analyze and visualize your AWS spending?',
    options: [
      { id: 'a', text: 'AWS CloudWatch' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Billing Dashboard' },
      { id: 'd', text: 'AWS Budgets' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Cost Explorer is specifically designed to visualize, understand, and manage your AWS costs and usage over time. It provides interactive charts and forecasting.',
      incorrectReasons: {
        'a': 'CloudWatch monitors resources and applications, not specifically costs.',
        'c': 'Billing Dashboard shows current charges but not the detailed visualization of Cost Explorer.',
        'd': 'AWS Budgets sets cost alerts but does not provide the visualization analysis.',
      },
    },
    difficulty: 'easy',
    tags: ['cost-explorer', 'billing', 'visualization'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Cost Analysis and Visualization',
        analogy: 'Nk\'uburyo Mobile Money yerekana amafaranga watanze - ureba aho wishyuye',
        localExample: 'Like how MTN MoMo shows you a breakdown of all your transactions - you can see exactly what you spent money on and when.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like a bank statement showing where your money goes each month',
        'Similar to tracking your airtime usage to understand your communication patterns',
      ],
      rwandanBusinessCase: 'A Rwandan tech startup can use Cost Explorer to see which AWS services cost the most and identify opportunities to optimize spending.',
    },
  },
  {
    id: 'bp-003',
    domain: 'billing-pricing',
    subdomain: 'Free Tier',
    text: 'Which of the following is included in the AWS Free Tier for new accounts?',
    options: [
      { id: 'a', text: '1000 GB of S3 storage' },
      { id: 'b', text: '750 hours of EC2 t2.micro instance usage per month for 12 months' },
      { id: 'c', text: 'Unlimited Lambda function invocations' },
      { id: 'd', text: 'Free Reserved Instances' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The AWS Free Tier includes 750 hours per month of EC2 t2.micro instance usage for the first 12 months. This allows new users to learn and experiment with AWS at no cost.',
      incorrectReasons: {
        'a': 'Free Tier includes 5 GB of S3, not 1000 GB.',
        'c': 'Lambda offers 1 million free requests per month, not unlimited.',
        'd': 'Reserved Instances are paid commitments, not part of Free Tier.',
      },
    },
    difficulty: 'easy',
    tags: ['free-tier', 'ec2', 't2-micro'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'AWS Free Tier for Learning',
        analogy: 'Nk\'uko supermarket itanga sample y\'ibiribwa - ugerageza mbere yo kugura',
        localExample: 'Like when Simba Supermarket offers free samples of new products - you try before you commit to buying. AWS lets you try services free for 12 months.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like the free trial periods offered by some gyms in Kigali',
        'Similar to mobile network providers offering free airtime for new SIM registrations',
      ],
      rwandanBusinessCase: 'Students at Rwanda Coding Academy can use the Free Tier to learn AWS without any cost, building real projects during their studies.',
    },
  },

  // Additional questions for better domain coverage
  {
    id: 'cc-006',
    domain: 'cloud-concepts',
    subdomain: 'Well-Architected Framework',
    text: 'What are the six pillars of the AWS Well-Architected Framework?',
    options: [
      { id: 'a', text: 'Security, Speed, Storage, Servers, Software, Support' },
      { id: 'b', text: 'Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability' },
      { id: 'c', text: 'Compute, Storage, Database, Network, Security, Billing' },
      { id: 'd', text: 'Availability, Durability, Scalability, Flexibility, Economy, Compliance' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The AWS Well-Architected Framework has six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. These guide best practices for cloud architecture.',
      incorrectReasons: {
        'a': 'These are not the official Well-Architected pillars.',
        'c': 'These are AWS service categories, not Well-Architected pillars.',
        'd': 'These are general concepts but not the official pillar names.',
      },
    },
    difficulty: 'hard',
    tags: ['well-architected', 'pillars', 'best-practices'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Well-Architected Framework Pillars',
        analogy: 'Nk\'inkingi zitandatu z\'inzu nziza - kimwe gibuze inzu irasenyuka',
        localExample: 'Like the six essential elements of a well-built house: strong foundation (reliability), good roof (security), proper ventilation (performance), energy efficiency (cost optimization), quality materials (operational excellence), and eco-friendly design (sustainability).',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like how traditional Rwandan architecture considers multiple factors for durability and comfort',
        'Similar to how successful businesses balance multiple priorities: quality, customer service, profit, sustainability',
      ],
      rwandanBusinessCase: 'When building digital services like Irembo, architects must consider all six pillars to create systems that are secure, reliable, cost-effective, and sustainable.',
    },
  },
  {
    id: 'tc-005',
    domain: 'technology',
    subdomain: 'Serverless',
    text: 'Which AWS service allows you to run code without provisioning or managing servers?',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'AWS Lambda' },
      { id: 'c', text: 'Amazon ECS' },
      { id: 'd', text: 'Amazon Lightsail' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Lambda is a serverless compute service that runs your code in response to events. You do not need to provision or manage servers - you just upload your code and Lambda handles everything else.',
      incorrectReasons: {
        'a': 'EC2 requires you to manage virtual servers.',
        'c': 'ECS is for container orchestration, requires infrastructure management.',
        'd': 'Lightsail is simplified VPS, still involves server management.',
      },
    },
    difficulty: 'medium',
    tags: ['lambda', 'serverless', 'functions'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Serverless Computing',
        analogy: 'Nk\'uko usaba moto kuri SafeMoto - ntukeneye kugura moto yawe',
        localExample: 'Like using SafeMoto app - you get a ride when you need it without owning or maintaining a motorcycle. Lambda runs your code only when needed without managing servers.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like paying for electricity by the unit instead of buying a generator',
        'Similar to using cloud kitchens - cook when there is an order, no need for a full restaurant',
      ],
      rwandanBusinessCase: 'An e-commerce site could use Lambda to process orders - the function runs only when an order comes in, so you pay only for actual processing time.',
    },
  },
  {
    id: 'sc-004',
    domain: 'security-compliance',
    subdomain: 'Data Protection',
    text: 'What is the best practice for protecting data at rest in AWS?',
    options: [
      { id: 'a', text: 'Use longer passwords' },
      { id: 'b', text: 'Enable encryption using AWS KMS or other encryption services' },
      { id: 'c', text: 'Store data in multiple regions' },
      { id: 'd', text: 'Use larger instance types' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Enabling encryption protects data at rest (stored data). AWS Key Management Service (KMS) helps you create and manage encryption keys. Many AWS services support encryption at rest.',
      incorrectReasons: {
        'a': 'Passwords protect access, but encryption protects the data itself.',
        'c': 'Multi-region is for availability, not data protection.',
        'd': 'Instance size has no relation to data security.',
      },
    },
    difficulty: 'medium',
    tags: ['encryption', 'kms', 'data-protection'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Data Encryption at Rest',
        analogy: 'Nk\'uko uzinga ibanga mu gasanduku gafungwa - nubwo umuntu yabona agasanduku ntiyabona ibiri imbere',
        localExample: 'Like keeping valuables in a locked safe at BK Bank - even if someone sees the safe, they cannot access what is inside without the key.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like how mobile money PIN protects your account even if someone has your SIM',
        'Similar to encrypting your phone - data is unreadable without your passcode',
      ],
      rwandanBusinessCase: 'Banks like BK and Equity must encrypt customer financial data at rest to comply with data protection regulations and protect customer privacy.',
    },
  },
];

// Function to get questions by domain
export function getQuestionsByDomain(domain: string): Question[] {
  return sampleQuestions.filter(q => q.domain === domain);
}

// Function to get a random subset of questions
export function getRandomQuestions(count: number, domain?: string): Question[] {
  let questions = domain
    ? sampleQuestions.filter(q => q.domain === domain)
    : [...sampleQuestions];

  // Shuffle using Fisher-Yates algorithm
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, count);
}
