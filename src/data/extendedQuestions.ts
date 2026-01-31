// AWS Cloud Kigali - Extended Questions to reach 100 total
import { Question } from '../types';

export const extendedQuestions: Question[] = [
  // ============================================
  // CLOUD CONCEPTS - More Questions
  // ============================================
  {
    id: 'cc-019',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Migration',
    text: 'What is the "lift and shift" migration strategy?',
    options: [
      { id: 'a', text: 'Completely rebuilding applications from scratch' },
      { id: 'b', text: 'Moving applications to the cloud with minimal changes' },
      { id: 'c', text: 'Only migrating databases' },
      { id: 'd', text: 'Using serverless architecture' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Lift and shift (rehosting) involves moving applications to the cloud with minimal or no changes. It is the fastest migration approach but may not take full advantage of cloud-native features.',
      incorrectReasons: {
        'a': 'Rebuilding from scratch is called refactoring or re-architecting.',
        'c': 'Lift and shift applies to entire applications, not just databases.',
        'd': 'Serverless is a different architecture pattern.',
      },
    },
    difficulty: 'medium',
    tags: ['migration', 'lift-and-shift', 'rehosting'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Lift and Shift Migration',
        analogy: 'Nk\'uko wimura inzu yawe - ufata ibintu byose ukabijyana aho bishya',
        localExample: 'Like moving your entire shop from one location to another without changing how you organize things - quick but may not be optimal for the new space.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like relocating a restaurant to a new building but keeping the same menu and layout',
        'Similar to moving offices without reorganizing the workflow',
      ],
    },
  },
  {
    id: 'cc-020',
    domain: 'cloud-concepts',
    subdomain: 'Disaster Recovery',
    text: 'What is the purpose of a disaster recovery plan in AWS?',
    options: [
      { id: 'a', text: 'To save money on infrastructure' },
      { id: 'b', text: 'To ensure business continuity when failures occur' },
      { id: 'c', text: 'To improve application performance' },
      { id: 'd', text: 'To comply with data privacy laws' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Disaster recovery planning ensures your business can continue operating during and after a disaster. AWS provides multiple services and strategies for backup, replication, and failover.',
      incorrectReasons: {
        'a': 'DR can add costs but provides critical protection.',
        'c': 'Performance optimization is separate from DR.',
        'd': 'Compliance is a different concern, though DR can help.',
      },
    },
    difficulty: 'easy',
    tags: ['disaster-recovery', 'business-continuity', 'backup'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Disaster Recovery',
        analogy: 'Nk\'uko ufite generator igihe amashanyarazi abuze',
        localExample: 'Like hospitals having backup generators - when main power fails, the backup kicks in automatically to keep critical services running.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like keeping copies of important documents in a safe place',
        'Similar to having emergency supplies at home for unexpected situations',
      ],
    },
  },
  {
    id: 'cc-021',
    domain: 'cloud-concepts',
    subdomain: 'Hybrid Cloud',
    text: 'What is a hybrid cloud deployment?',
    options: [
      { id: 'a', text: 'Using only AWS services' },
      { id: 'b', text: 'Combining on-premises infrastructure with cloud resources' },
      { id: 'c', text: 'Using multiple cloud providers' },
      { id: 'd', text: 'Running applications in containers' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Hybrid cloud combines on-premises (private) infrastructure with public cloud resources. This allows organizations to keep sensitive data on-premises while using cloud for scalability.',
      incorrectReasons: {
        'a': 'Using only AWS is public cloud.',
        'c': 'Multiple cloud providers is multi-cloud.',
        'd': 'Containers are a deployment method, not a cloud model.',
      },
    },
    difficulty: 'medium',
    tags: ['hybrid-cloud', 'on-premises', 'deployment'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Hybrid Cloud',
        analogy: 'Nk\'uko ufite iduka ryawe ariko ukagurisha no kuri internet',
        localExample: 'Like having your physical shop in Kigali but also selling online - you keep some operations local and extend others to the cloud.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like banks keeping core systems in-house but using cloud for mobile apps',
        'Similar to farmers storing crops locally but using online platforms to find buyers',
      ],
    },
  },
  {
    id: 'cc-022',
    domain: 'cloud-concepts',
    subdomain: 'Total Cost of Ownership',
    text: 'What costs are reduced when moving to AWS compared to on-premises?',
    options: [
      { id: 'a', text: 'Only software licensing' },
      { id: 'b', text: 'Hardware, facilities, operations, and maintenance costs' },
      { id: 'c', text: 'Employee salaries' },
      { id: 'd', text: 'Internet connectivity' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Moving to AWS eliminates costs for physical hardware, data center facilities, cooling, power, physical security, and reduces operational overhead for maintenance and upgrades.',
      incorrectReasons: {
        'a': 'Many more costs are reduced beyond licensing.',
        'c': 'Salaries may change but are not directly reduced by cloud.',
        'd': 'Internet costs remain regardless of cloud usage.',
      },
    },
    difficulty: 'easy',
    tags: ['tco', 'cost-reduction', 'on-premises'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Total Cost of Ownership',
        analogy: 'Nk\'uko ukodesha inzu aho kugura - ntushyura tax, maintenance, na repair',
        localExample: 'Like renting an apartment vs owning a house - renters do not pay for roof repairs, plumbing issues, or property taxes.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like using SafeMoto instead of owning a motorcycle - no fuel, insurance, or repair costs',
        'Similar to using a laundry service vs buying and maintaining a washing machine',
      ],
    },
  },
  {
    id: 'cc-023',
    domain: 'cloud-concepts',
    subdomain: 'Speed and Agility',
    text: 'How does cloud computing increase speed and agility for businesses?',
    options: [
      { id: 'a', text: 'By providing faster internet connections' },
      { id: 'b', text: 'By enabling rapid provisioning of IT resources in minutes' },
      { id: 'c', text: 'By automatically writing application code' },
      { id: 'd', text: 'By reducing the number of employees needed' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Cloud computing allows you to provision new servers, databases, and other resources in minutes instead of weeks. This dramatically accelerates experimentation, development, and time-to-market.',
      incorrectReasons: {
        'a': 'Internet speed is separate from cloud agility.',
        'c': 'Cloud does not write code automatically.',
        'd': 'Staffing decisions are business choices.',
      },
    },
    difficulty: 'easy',
    tags: ['agility', 'speed', 'provisioning'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Speed and Agility',
        analogy: 'Nk\'uko ugura airtime kuri MTN MoMo - ubona ako kanya',
        localExample: 'Like buying airtime via mobile money - you get it instantly. Cloud resources are available in minutes, not weeks like traditional hardware purchases.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like ordering food delivery vs going to the market and cooking',
        'Similar to getting a moto immediately via app vs finding one on the street',
      ],
    },
  },

  // ============================================
  // SECURITY & COMPLIANCE - More Questions
  // ============================================
  {
    id: 'sc-015',
    domain: 'security-compliance',
    subdomain: 'Network Security',
    text: 'What is a Network ACL (NACL) in AWS?',
    options: [
      { id: 'a', text: 'A type of database' },
      { id: 'b', text: 'A stateless firewall that controls traffic at the subnet level' },
      { id: 'c', text: 'A load balancer' },
      { id: 'd', text: 'An encryption service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Network ACLs are stateless firewalls that control inbound and outbound traffic at the subnet level. Unlike Security Groups (which are stateful), NACLs require explicit rules for both directions.',
      incorrectReasons: {
        'a': 'NACLs are for networking, not databases.',
        'c': 'ELB is for load balancing.',
        'd': 'KMS handles encryption.',
      },
    },
    difficulty: 'medium',
    tags: ['nacl', 'firewall', 'networking'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Network ACL',
        analogy: 'Nk\'ibarriere y\'umujyi - igenzura ibinyabiziga byinjira no gusohoka',
        localExample: 'Like a city checkpoint that controls all vehicles entering and leaving - NACLs control all traffic for an entire subnet.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like border control checking everyone crossing, not just specific people',
        'Similar to a neighborhood gate with rules about who can enter or exit',
      ],
    },
  },
  {
    id: 'sc-016',
    domain: 'security-compliance',
    subdomain: 'Identity Federation',
    text: 'What is AWS SSO (now called IAM Identity Center)?',
    options: [
      { id: 'a', text: 'A database service' },
      { id: 'b', text: 'A service for managing single sign-on access to multiple AWS accounts' },
      { id: 'c', text: 'A monitoring tool' },
      { id: 'd', text: 'A container service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'IAM Identity Center (formerly AWS SSO) provides single sign-on access to multiple AWS accounts and business applications. Users log in once and can access all their assigned resources.',
      incorrectReasons: {
        'a': 'RDS is for databases.',
        'c': 'CloudWatch is for monitoring.',
        'd': 'ECS/EKS are container services.',
      },
    },
    difficulty: 'medium',
    tags: ['sso', 'identity', 'access'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Single Sign-On',
        analogy: 'Nk\'uko ufite urufunguzo rumwe rufungura inzu nyinshi',
        localExample: 'Like having one master key that opens all doors in a building - you log in once and can access multiple accounts and applications.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like a universal ID card that works across different government services',
        'Similar to one login for all Google services (Gmail, Drive, YouTube)',
      ],
    },
  },
  {
    id: 'sc-017',
    domain: 'security-compliance',
    subdomain: 'Secrets Management',
    text: 'What is AWS Secrets Manager used for?',
    options: [
      { id: 'a', text: 'Sending secret messages' },
      { id: 'b', text: 'Storing and rotating database credentials and API keys securely' },
      { id: 'c', text: 'Encrypting S3 buckets' },
      { id: 'd', text: 'Managing user passwords' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Secrets Manager helps you store, retrieve, and rotate database credentials, API keys, and other secrets. It eliminates hardcoded credentials in application code.',
      incorrectReasons: {
        'a': 'Secrets Manager is for credentials, not messaging.',
        'c': 'S3 encryption uses KMS.',
        'd': 'User passwords are managed in IAM or Cognito.',
      },
    },
    difficulty: 'medium',
    tags: ['secrets-manager', 'credentials', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Secrets Management',
        analogy: 'Nk\'agasanduku k\'amafaranga gafungwa - gacunga password n\'ibanga',
        localExample: 'Like a secure safe at a bank that stores valuable documents and automatically changes combinations periodically for security.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like keeping PIN codes in a secure password manager app',
        'Similar to how banks change vault combinations regularly',
      ],
    },
  },
  {
    id: 'sc-018',
    domain: 'security-compliance',
    subdomain: 'Audit and Logging',
    text: 'What does AWS CloudTrail do?',
    options: [
      { id: 'a', text: 'Monitors application performance' },
      { id: 'b', text: 'Records API calls and user activity in your AWS account' },
      { id: 'c', text: 'Distributes content globally' },
      { id: 'd', text: 'Manages DNS records' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS CloudTrail records API calls made in your AWS account. It provides a history of who did what, when, and from where - essential for security auditing and compliance.',
      incorrectReasons: {
        'a': 'CloudWatch monitors performance.',
        'c': 'CloudFront distributes content.',
        'd': 'Route 53 manages DNS.',
      },
    },
    difficulty: 'easy',
    tags: ['cloudtrail', 'audit', 'logging'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Activity Logging',
        analogy: 'Nk\'igitabo cy\'abashyitsi - cyandika buri wese winjiye n\'igihe',
        localExample: 'Like the visitor log book at an office building - records who entered, when, and what they accessed. CloudTrail does this for AWS.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like bank transaction history showing all account activities',
        'Similar to phone call logs that show who called whom and when',
      ],
    },
  },
  {
    id: 'sc-019',
    domain: 'security-compliance',
    subdomain: 'Security Assessment',
    text: 'What is Amazon Inspector?',
    options: [
      { id: 'a', text: 'A code review tool' },
      { id: 'b', text: 'An automated security assessment service for vulnerabilities' },
      { id: 'c', text: 'A load balancer' },
      { id: 'd', text: 'A database service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Inspector is an automated security assessment service that helps identify vulnerabilities and deviations from security best practices in your AWS resources.',
      incorrectReasons: {
        'a': 'CodeGuru does code reviews.',
        'c': 'ELB is for load balancing.',
        'd': 'RDS is for databases.',
      },
    },
    difficulty: 'medium',
    tags: ['inspector', 'vulnerability', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Security Assessment',
        analogy: 'Nk\'umugenzuzi w\'umutekano ureba niba hari inenge',
        localExample: 'Like a building inspector checking for structural weaknesses - Inspector scans your systems for security vulnerabilities.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like vehicle inspection checking for safety issues before certification',
        'Similar to health inspectors checking restaurants for hygiene compliance',
      ],
    },
  },
  {
    id: 'sc-020',
    domain: 'security-compliance',
    subdomain: 'DDoS Protection',
    text: 'What additional features does AWS Shield Advanced provide over Shield Standard?',
    options: [
      { id: 'a', text: 'Basic DDoS protection' },
      { id: 'b', text: '24/7 DDoS response team, cost protection, and advanced attack mitigation' },
      { id: 'c', text: 'Free usage of all AWS services' },
      { id: 'd', text: 'Automatic code deployment' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Shield Advanced provides 24/7 access to the AWS DDoS Response Team (DRT), cost protection for scaling during attacks, and enhanced detection and mitigation for sophisticated attacks.',
      incorrectReasons: {
        'a': 'Basic protection is Shield Standard (free).',
        'c': 'Shield does not make services free.',
        'd': 'Code deployment is handled by other services.',
      },
    },
    difficulty: 'hard',
    tags: ['shield', 'ddos', 'advanced'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Advanced DDoS Protection',
        analogy: 'Nk\'uko ufite abagabo ba security b\'umwuga aho kugira umurinzi umwe',
        localExample: 'Like hiring a professional security company with 24/7 monitoring instead of a single guard - Shield Advanced provides expert protection and response.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like premium insurance that covers more risks and has faster claims',
        'Similar to VIP security with dedicated response teams',
      ],
    },
  },

  // ============================================
  // TECHNOLOGY - More Questions
  // ============================================
  {
    id: 'tc-021',
    domain: 'technology',
    subdomain: 'Compute',
    text: 'What is Amazon EKS?',
    options: [
      { id: 'a', text: 'A storage service' },
      { id: 'b', text: 'A managed Kubernetes service' },
      { id: 'c', text: 'An email service' },
      { id: 'd', text: 'A database service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon EKS (Elastic Kubernetes Service) is a fully managed service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane.',
      incorrectReasons: {
        'a': 'S3 and EBS are storage services.',
        'c': 'SES is the email service.',
        'd': 'RDS and DynamoDB are database services.',
      },
    },
    difficulty: 'medium',
    tags: ['eks', 'kubernetes', 'containers'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Managed Kubernetes',
        analogy: 'Nk\'uko ufite umuyobozi w\'imodoka nyinshi - akugenzurira fleet',
        localExample: 'Like having a fleet manager for a taxi company - EKS manages your container fleet (Kubernetes) so you focus on the application, not infrastructure.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like a property management company handling multiple rental properties',
        'Similar to a school administrator managing multiple classrooms',
      ],
    },
  },
  {
    id: 'tc-022',
    domain: 'technology',
    subdomain: 'Database',
    text: 'What is Amazon Aurora?',
    options: [
      { id: 'a', text: 'A NoSQL database' },
      { id: 'b', text: 'A MySQL and PostgreSQL-compatible relational database with high performance' },
      { id: 'c', text: 'A file storage service' },
      { id: 'd', text: 'A messaging service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. It offers up to 5x the performance of MySQL and 3x of PostgreSQL with automatic scaling.',
      incorrectReasons: {
        'a': 'DynamoDB is NoSQL; Aurora is relational.',
        'c': 'S3 and EFS are file storage.',
        'd': 'SQS and SNS are messaging.',
      },
    },
    difficulty: 'medium',
    tags: ['aurora', 'database', 'relational'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'High-Performance Database',
        analogy: 'Nk\'imodoka y\'umwaka mushya - ikorera neza kandi ikoresha lisansi vuba',
        localExample: 'Like a new, high-performance vehicle that goes faster but uses existing fuel (MySQL/PostgreSQL) - Aurora is faster but compatible with existing tools.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like upgrading from a regular phone to a smartphone - same SIM, better performance',
        'Similar to a new road that is faster but connects the same places',
      ],
    },
  },
  {
    id: 'tc-023',
    domain: 'technology',
    subdomain: 'Storage',
    text: 'What is Amazon EFS?',
    options: [
      { id: 'a', text: 'Block storage for EC2' },
      { id: 'b', text: 'A scalable file system that can be mounted by multiple EC2 instances' },
      { id: 'c', text: 'Object storage' },
      { id: 'd', text: 'A database service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon EFS (Elastic File System) is a scalable, fully managed NFS file system that can be mounted simultaneously by thousands of EC2 instances. It automatically grows and shrinks as you add/remove files.',
      incorrectReasons: {
        'a': 'EBS is block storage.',
        'c': 'S3 is object storage.',
        'd': 'RDS is for databases.',
      },
    },
    difficulty: 'medium',
    tags: ['efs', 'file-storage', 'shared'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Shared File System',
        analogy: 'Nk\'agasanduku k\'inyandiko gasangirwa n\'abakozi bose',
        localExample: 'Like a shared filing cabinet in an office that all employees can access - EFS is a shared drive that multiple servers can use simultaneously.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a shared Google Drive folder accessible by multiple team members',
        'Similar to a library where many people can borrow books',
      ],
    },
  },
  {
    id: 'tc-024',
    domain: 'technology',
    subdomain: 'Networking',
    text: 'What is AWS Direct Connect?',
    options: [
      { id: 'a', text: 'A VPN service' },
      { id: 'b', text: 'A dedicated network connection from your premises to AWS' },
      { id: 'c', text: 'A DNS service' },
      { id: 'd', text: 'A content delivery network' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Direct Connect establishes a dedicated, private network connection from your data center to AWS. It provides more consistent network performance than internet-based connections.',
      incorrectReasons: {
        'a': 'VPN goes over the public internet; Direct Connect is dedicated.',
        'c': 'Route 53 is DNS.',
        'd': 'CloudFront is CDN.',
      },
    },
    difficulty: 'medium',
    tags: ['direct-connect', 'networking', 'dedicated'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Dedicated Connection',
        analogy: 'Nk\'umuhanda wihariye aho kugenda ku muhanda mugari',
        localExample: 'Like having a private road to your destination instead of using public roads - Direct Connect is your own dedicated line to AWS.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like a dedicated fiber line vs shared internet connection',
        'Similar to a private jet vs commercial flights',
      ],
    },
  },
  {
    id: 'tc-025',
    domain: 'technology',
    subdomain: 'Application Integration',
    text: 'What is Amazon API Gateway?',
    options: [
      { id: 'a', text: 'A database service' },
      { id: 'b', text: 'A service for creating, publishing, and managing APIs' },
      { id: 'c', text: 'A compute service' },
      { id: 'd', text: 'A storage service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon API Gateway is a fully managed service for creating, publishing, maintaining, and securing APIs at any scale. It handles traffic management, authorization, and monitoring.',
      incorrectReasons: {
        'a': 'RDS handles databases.',
        'c': 'EC2 and Lambda are compute.',
        'd': 'S3 is storage.',
      },
    },
    difficulty: 'medium',
    tags: ['api-gateway', 'apis', 'integration'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'API Gateway',
        analogy: 'Nk\'irembo ry\'ikigo - rigenzura buri wese winjira kandi rigashyira amategeko',
        localExample: 'Like a reception desk at a hotel that handles all guest requests, verifies identity, and directs them to the right service - API Gateway manages all incoming API requests.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a call center that routes calls to the right department',
        'Similar to a border control point that checks documents and directs travelers',
      ],
    },
  },
  {
    id: 'tc-026',
    domain: 'technology',
    subdomain: 'Analytics',
    text: 'What is Amazon Redshift?',
    options: [
      { id: 'a', text: 'A NoSQL database' },
      { id: 'b', text: 'A fully managed data warehouse for analytics' },
      { id: 'c', text: 'A file storage service' },
      { id: 'd', text: 'A compute service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Redshift is a fully managed, petabyte-scale data warehouse service. It is designed for analyzing large datasets using SQL and business intelligence tools.',
      incorrectReasons: {
        'a': 'DynamoDB is NoSQL; Redshift is columnar/relational.',
        'c': 'S3 is file/object storage.',
        'd': 'EC2 is compute.',
      },
    },
    difficulty: 'medium',
    tags: ['redshift', 'data-warehouse', 'analytics'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Data Warehouse',
        analogy: 'Nk\'ububiko bunini bw\'amakuru - aho wishakira insights',
        localExample: 'Like a large warehouse storing years of business records that analysts can search through - Redshift stores and analyzes massive amounts of data.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a research library with organized archives spanning decades',
        'Similar to national statistics office storing census data for analysis',
      ],
    },
  },
  {
    id: 'tc-027',
    domain: 'technology',
    subdomain: 'Developer Tools',
    text: 'What is AWS CodePipeline?',
    options: [
      { id: 'a', text: 'A database migration tool' },
      { id: 'b', text: 'A continuous integration and continuous delivery (CI/CD) service' },
      { id: 'c', text: 'A monitoring service' },
      { id: 'd', text: 'A security scanning tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS CodePipeline is a fully managed CI/CD service that automates the build, test, and deploy phases of your release process every time there is a code change.',
      incorrectReasons: {
        'a': 'DMS is for database migration.',
        'c': 'CloudWatch is for monitoring.',
        'd': 'Inspector is for security scanning.',
      },
    },
    difficulty: 'medium',
    tags: ['codepipeline', 'cicd', 'devops'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'CI/CD Pipeline',
        analogy: 'Nk\'uruganda rwo gutunganya ikawa - gukura, gutoranya, gukamura, no gupakira',
        localExample: 'Like a coffee processing factory where beans go through picking, washing, drying, and packaging stages automatically - CodePipeline automates software delivery stages.',
        analogyType: 'coffee-farming',
      },
      localExamples: [
        'Like an assembly line in a factory where products move through stations',
        'Similar to a restaurant kitchen where orders flow through prep, cooking, and plating',
      ],
    },
  },
  {
    id: 'tc-028',
    domain: 'technology',
    subdomain: 'Serverless',
    text: 'What triggers can invoke AWS Lambda functions?',
    options: [
      { id: 'a', text: 'Only HTTP requests' },
      { id: 'b', text: 'Various events like S3 uploads, API calls, schedules, and more' },
      { id: 'c', text: 'Only manual invocation' },
      { id: 'd', text: 'Only database changes' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Lambda can be triggered by many events: S3 object uploads, DynamoDB changes, API Gateway requests, CloudWatch schedules, SNS messages, and many more AWS service events.',
      incorrectReasons: {
        'a': 'HTTP via API Gateway is just one of many triggers.',
        'c': 'Lambda is typically event-driven, not manual.',
        'd': 'Database changes are one trigger among many.',
      },
    },
    difficulty: 'easy',
    tags: ['lambda', 'triggers', 'serverless'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Event-Driven Triggers',
        analogy: 'Nk\'uko telefoni ikubwira igihe message ije - ibintu bitandukanye bituma Lambda ikora',
        localExample: 'Like phone notifications that alert you for different reasons (calls, SMS, WhatsApp, email) - Lambda runs when various events occur.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like a doorbell triggering when someone arrives',
        'Similar to motion sensors turning on lights when movement is detected',
      ],
    },
  },

  // ============================================
  // BILLING & PRICING - More Questions
  // ============================================
  {
    id: 'bp-012',
    domain: 'billing-pricing',
    subdomain: 'Support',
    text: 'Which AWS Support plan offers the fastest response time for production system down issues?',
    options: [
      { id: 'a', text: 'Basic Support' },
      { id: 'b', text: 'Developer Support' },
      { id: 'c', text: 'Business Support' },
      { id: 'd', text: 'Enterprise Support' },
    ],
    correctAnswerId: 'd',
    explanation: {
      correctReason: 'Enterprise Support offers less than 15-minute response time for business-critical system down issues. Business Support offers less than 1 hour. Developer offers less than 12 hours (general guidance only).',
      incorrectReasons: {
        'a': 'Basic has no technical support.',
        'b': 'Developer has slower response times.',
        'c': 'Business is fast but Enterprise is fastest.',
      },
    },
    difficulty: 'medium',
    tags: ['support', 'enterprise', 'response-time'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Premium Support Response',
        analogy: 'Nk\'ambulance - igera vuba cyane mu gihe cy\'impanuka',
        localExample: 'Like emergency ambulance service vs regular clinic - Enterprise Support responds in under 15 minutes for critical issues.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like VIP customer service at banks with dedicated relationship managers',
        'Similar to premium insurance with 24/7 emergency hotlines',
      ],
    },
  },
  {
    id: 'bp-013',
    domain: 'billing-pricing',
    subdomain: 'Pricing',
    text: 'What is AWS data transfer pricing generally like?',
    options: [
      { id: 'a', text: 'All data transfer is free' },
      { id: 'b', text: 'Data in is usually free; data out to internet has charges' },
      { id: 'c', text: 'Data in costs more than data out' },
      { id: 'd', text: 'There are no data transfer charges' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS typically does not charge for data transferred into AWS (ingress). However, data transferred out to the internet (egress) incurs charges. Data transfer between AWS services in the same region is often free or low cost.',
      incorrectReasons: {
        'a': 'Outbound data transfer has charges.',
        'c': 'Data in is usually free, data out has costs.',
        'd': 'There are definitely data transfer charges for egress.',
      },
    },
    difficulty: 'medium',
    tags: ['data-transfer', 'pricing', 'egress'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Data Transfer Pricing',
        analogy: 'Nk\'uko kwinjiza amafaranga kuri MTN MoMo ni ubuntu, ariko gukuramo bifite igiciro',
        localExample: 'Like depositing money into your mobile money account is free, but withdrawing has a fee - getting data into AWS is free but sending it out costs money.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like free entry to a parking lot but paying to exit',
        'Similar to how receiving calls is free but making calls costs money',
      ],
    },
  },
  {
    id: 'bp-014',
    domain: 'billing-pricing',
    subdomain: 'Resource Optimization',
    text: 'What is AWS Trusted Advisor?',
    options: [
      { id: 'a', text: 'A human consultant' },
      { id: 'b', text: 'An automated service providing recommendations for cost, performance, security, and more' },
      { id: 'c', text: 'A billing payment service' },
      { id: 'd', text: 'A database optimization tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Trusted Advisor is an automated tool that analyzes your AWS environment and provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits.',
      incorrectReasons: {
        'a': 'Trusted Advisor is automated, not human.',
        'c': 'It provides recommendations, not payment processing.',
        'd': 'It covers all AWS resources, not just databases.',
      },
    },
    difficulty: 'easy',
    tags: ['trusted-advisor', 'optimization', 'recommendations'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Automated Recommendations',
        analogy: 'Nk\'umuganga ukugira inama ku buzima bwawe',
        localExample: 'Like a health advisor that checks your lifestyle and gives recommendations for improvement - Trusted Advisor analyzes your AWS usage and suggests optimizations.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a financial advisor reviewing your spending and suggesting savings',
        'Similar to a car mechanic doing a full inspection and recommending fixes',
      ],
    },
  },
  {
    id: 'bp-015',
    domain: 'billing-pricing',
    subdomain: 'Cost Management',
    text: 'What is the AWS Well-Architected Tool?',
    options: [
      { id: 'a', text: 'A building design software' },
      { id: 'b', text: 'A tool to review workloads against AWS best practices' },
      { id: 'c', text: 'A code editor' },
      { id: 'd', text: 'A deployment automation tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The AWS Well-Architected Tool helps you review your workloads against AWS best practices across the six Well-Architected pillars. It identifies issues and provides recommendations for improvement.',
      incorrectReasons: {
        'a': 'It is for cloud architecture, not buildings.',
        'c': 'IDE tools are for code editing.',
        'd': 'CodePipeline handles deployment.',
      },
    },
    difficulty: 'medium',
    tags: ['well-architected', 'best-practices', 'review'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Architecture Review',
        analogy: 'Nk\'umugenzuzi w\'imyubakire ureba niba inzu yubatswe neza',
        localExample: 'Like a building inspector checking if construction follows standards - the Well-Architected Tool checks if your cloud setup follows AWS best practices.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a quality audit checking if processes meet standards',
        'Similar to a teacher grading homework against a rubric',
      ],
    },
  },
  {
    id: 'bp-016',
    domain: 'billing-pricing',
    subdomain: 'Cost Control',
    text: 'What happens when you reach an AWS Budget threshold?',
    options: [
      { id: 'a', text: 'AWS automatically stops all services' },
      { id: 'b', text: 'You receive notifications (email, SNS) but services continue' },
      { id: 'c', text: 'Your account is suspended' },
      { id: 'd', text: 'Nothing happens' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Budgets sends notifications when you exceed or are forecasted to exceed your budget threshold. Services continue running - budgets are for awareness, not automatic enforcement.',
      incorrectReasons: {
        'a': 'Budgets do not automatically stop services.',
        'c': 'Account suspension requires separate action.',
        'd': 'You definitely receive alerts.',
      },
    },
    difficulty: 'easy',
    tags: ['budgets', 'alerts', 'notifications'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Budget Alerts',
        analogy: 'Nk\'uko banki ikumenyesha balance yawe igeze hasi',
        localExample: 'Like your bank sending an SMS when your balance drops below a threshold - AWS Budgets alerts you but does not stop your transactions.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like a fuel gauge warning light - it alerts you but does not stop the car',
        'Similar to phone battery low warnings',
      ],
    },
  },

  // ============================================
  // ADDITIONAL MIXED QUESTIONS
  // ============================================
  {
    id: 'cc-024',
    domain: 'cloud-concepts',
    subdomain: 'Global Infrastructure',
    text: 'How many Availability Zones are typically in an AWS Region?',
    options: [
      { id: 'a', text: 'Exactly 1' },
      { id: 'b', text: 'At least 3 (usually 3-6)' },
      { id: 'c', text: 'Always 10' },
      { id: 'd', text: 'It varies randomly' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Regions typically have at least 3 Availability Zones, with some having up to 6. This allows for high availability and fault tolerance by spreading resources across isolated data centers.',
      incorrectReasons: {
        'a': 'Multiple AZs are needed for high availability.',
        'c': 'No region has exactly 10 AZs.',
        'd': 'AZ count is planned, not random.',
      },
    },
    difficulty: 'medium',
    tags: ['availability-zones', 'regions', 'infrastructure'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Multiple Availability Zones',
        analogy: 'Nk\'uko umujyi ukomeye ugira amasoko menshi - kimwe gifunze, undi ugurishiriza',
        localExample: 'Like Kigali having multiple markets (Kimironko, Nyabugogo, Remera) - if one is closed, others serve customers. Regions have multiple AZs for reliability.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like having multiple hospitals across a city for healthcare access',
        'Similar to multiple bank branches serving a region',
      ],
    },
  },
  {
    id: 'sc-021',
    domain: 'security-compliance',
    subdomain: 'Data Protection',
    text: 'What is the purpose of AWS Macie?',
    options: [
      { id: 'a', text: 'To create virtual servers' },
      { id: 'b', text: 'To discover and protect sensitive data in S3' },
      { id: 'c', text: 'To manage DNS records' },
      { id: 'd', text: 'To send notifications' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data (like PII, financial data) stored in Amazon S3.',
      incorrectReasons: {
        'a': 'EC2 creates virtual servers.',
        'c': 'Route 53 manages DNS.',
        'd': 'SNS sends notifications.',
      },
    },
    difficulty: 'medium',
    tags: ['macie', 'data-protection', 'pii'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Sensitive Data Discovery',
        analogy: 'Nk\'umuntu ushakisha ibanga mu nyandiko - arabona ibikenewe kurindwa',
        localExample: 'Like a security officer scanning documents to find confidential information - Macie scans your S3 data to find and protect sensitive information.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like a bank reviewing accounts to identify sensitive customer data',
        'Similar to auditors checking for exposed personal information',
      ],
    },
  },
  {
    id: 'tc-029',
    domain: 'technology',
    subdomain: 'Migration',
    text: 'What is AWS Database Migration Service (DMS)?',
    options: [
      { id: 'a', text: 'A service to delete databases' },
      { id: 'b', text: 'A service to migrate databases to AWS with minimal downtime' },
      { id: 'c', text: 'A backup service' },
      { id: 'd', text: 'A monitoring service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS DMS helps you migrate databases to AWS quickly and securely. It supports homogeneous (Oracle to Oracle) and heterogeneous (Oracle to Aurora) migrations with minimal downtime.',
      incorrectReasons: {
        'a': 'DMS migrates, not deletes.',
        'c': 'AWS Backup handles backups.',
        'd': 'CloudWatch handles monitoring.',
      },
    },
    difficulty: 'medium',
    tags: ['dms', 'migration', 'database'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Database Migration',
        analogy: 'Nk\'uko wimura ibintu mu nzu nshya - byose bijyana nta kuzimira',
        localExample: 'Like professional movers who relocate your belongings to a new house with minimal disruption - DMS moves your database to AWS without losing data.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like transferring money between bank accounts without losing any funds',
        'Similar to porting your phone number to a new carrier',
      ],
    },
  },
  {
    id: 'tc-030',
    domain: 'technology',
    subdomain: 'IoT',
    text: 'What is AWS IoT Core?',
    options: [
      { id: 'a', text: 'A database for IoT data' },
      { id: 'b', text: 'A managed service for connecting IoT devices to AWS' },
      { id: 'c', text: 'A programming language' },
      { id: 'd', text: 'A mobile app framework' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS IoT Core is a managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices. It can handle billions of devices and trillions of messages.',
      incorrectReasons: {
        'a': 'TimeStream and DynamoDB store IoT data.',
        'c': 'It is a service, not a language.',
        'd': 'Amplify is for mobile apps.',
      },
    },
    difficulty: 'medium',
    tags: ['iot', 'devices', 'connectivity'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'IoT Connectivity',
        analogy: 'Nk\'aho telefoni zose zihurira - ibikoresho byose biganira na cloud',
        localExample: 'Like a central hub connecting all smart devices in a home - IoT Core connects sensors, machines, and devices to AWS for data collection and control.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like smart water meters sending readings automatically to WASAC',
        'Similar to GPS trackers on delivery vehicles reporting location',
      ],
    },
  },
  {
    id: 'bp-017',
    domain: 'billing-pricing',
    subdomain: 'Compute Pricing',
    text: 'What is the most cost-effective EC2 pricing option for workloads that can handle interruptions?',
    options: [
      { id: 'a', text: 'On-Demand Instances' },
      { id: 'b', text: 'Reserved Instances' },
      { id: 'c', text: 'Spot Instances' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'Spot Instances offer up to 90% discount compared to On-Demand prices for workloads that can tolerate interruptions. They are ideal for batch processing, data analysis, and other fault-tolerant applications.',
      incorrectReasons: {
        'a': 'On-Demand is flexible but most expensive.',
        'b': 'Reserved requires commitment, not best for interruptible.',
        'd': 'Dedicated Hosts are for compliance needs.',
      },
    },
    difficulty: 'easy',
    tags: ['spot-instances', 'cost-optimization', 'pricing'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Interruptible Workloads',
        analogy: 'Nk\'uko ugura ibintu ku giciro cya last minute - cyiza ariko ntabwo ari guaranteed',
        localExample: 'Like buying discounted produce at market closing time - great savings but you might not always get what you want. Spot Instances are cheap but can be reclaimed.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like standby tickets on a bus - cheaper but not guaranteed',
        'Similar to last-minute hotel deals - great prices if available',
      ],
    },
  },
  {
    id: 'cc-025',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Adoption',
    text: 'What is the AWS Cloud Adoption Framework (CAF)?',
    options: [
      { id: 'a', text: 'A programming framework' },
      { id: 'b', text: 'Guidance for organizations planning cloud transformation' },
      { id: 'c', text: 'A database service' },
      { id: 'd', text: 'An automated migration tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The AWS CAF provides guidance for organizations to develop efficient and effective plans for cloud adoption. It covers six perspectives: Business, People, Governance, Platform, Security, and Operations.',
      incorrectReasons: {
        'a': 'CAF is guidance, not code.',
        'c': 'RDS is a database service.',
        'd': 'Migration tools are separate from CAF.',
      },
    },
    difficulty: 'medium',
    tags: ['caf', 'adoption', 'framework'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Cloud Adoption Planning',
        analogy: 'Nk\'urugendo rw\'uko uzubaka inzu - igitabo cy\'amabwiriza',
        localExample: 'Like a comprehensive construction guide for building a house - CAF provides step-by-step guidance for organizations moving to the cloud.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a business plan template for starting a new venture',
        'Similar to Rwanda Vision 2050 providing transformation guidance',
      ],
    },
  },

  // 7 more questions to reach 100 total
  {
    id: 'cc-026',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Benefits',
    text: 'What does "benefit from massive economies of scale" mean in AWS?',
    options: [
      { id: 'a', text: 'AWS charges more for large customers' },
      { id: 'b', text: 'AWS aggregates usage from all customers to achieve lower prices' },
      { id: 'c', text: 'You must use a lot of resources to get discounts' },
      { id: 'd', text: 'AWS builds smaller data centers' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Because AWS aggregates usage from hundreds of thousands of customers, it can achieve higher economies of scale, which translates to lower pay-as-you-go prices for everyone.',
      incorrectReasons: {
        'a': 'AWS passes savings to customers, not charges more.',
        'c': 'All customers benefit, regardless of individual usage.',
        'd': 'AWS builds massive, efficient data centers.',
      },
    },
    difficulty: 'easy',
    tags: ['economies-of-scale', 'pricing', 'benefits'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Economies of Scale',
        analogy: 'Nk\'uko amasoko makuru agura ibintu byinshi bigatuma bigura bike',
        localExample: 'Like how large supermarkets like Simba can offer lower prices because they buy in bulk - AWS buys servers by the thousands and passes savings to customers.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like cooperative farming groups getting better prices for seeds and fertilizer',
        'Similar to wholesale markets offering lower prices than retail shops',
      ],
    },
  },
  {
    id: 'sc-022',
    domain: 'security-compliance',
    subdomain: 'Encryption',
    text: 'What AWS service provides hardware security modules (HSMs) for key management?',
    options: [
      { id: 'a', text: 'AWS Shield' },
      { id: 'b', text: 'AWS CloudHSM' },
      { id: 'c', text: 'AWS WAF' },
      { id: 'd', text: 'AWS GuardDuty' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS CloudHSM provides dedicated Hardware Security Modules in the AWS Cloud. It allows you to generate and use your own encryption keys with FIPS 140-2 Level 3 validated HSMs.',
      incorrectReasons: {
        'a': 'Shield is for DDoS protection.',
        'c': 'WAF is a web application firewall.',
        'd': 'GuardDuty is for threat detection.',
      },
    },
    difficulty: 'hard',
    tags: ['cloudhsm', 'hsm', 'encryption'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Hardware Security Module',
        analogy: 'Nk\'agasanduku k\'amafaranga ka banki gafungwa cyane',
        localExample: 'Like a bank vault with the highest security certification - CloudHSM provides dedicated, tamper-resistant hardware for your most sensitive encryption keys.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like central bank gold reserves stored in ultra-secure vaults',
        'Similar to diplomatic pouches that cannot be opened or inspected',
      ],
    },
  },
  {
    id: 'tc-031',
    domain: 'technology',
    subdomain: 'Compute',
    text: 'What is AWS Fargate?',
    options: [
      { id: 'a', text: 'A database service' },
      { id: 'b', text: 'A serverless compute engine for containers' },
      { id: 'c', text: 'A storage service' },
      { id: 'd', text: 'A networking service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Fargate is a serverless compute engine for containers that works with ECS and EKS. You do not need to provision or manage servers - just define your container and Fargate runs it.',
      incorrectReasons: {
        'a': 'RDS is for databases.',
        'c': 'S3 is for storage.',
        'd': 'VPC is for networking.',
      },
    },
    difficulty: 'medium',
    tags: ['fargate', 'serverless', 'containers'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Serverless Containers',
        analogy: 'Nk\'uko utanga ibikoresho byawe bakabigushyirira - ntukeneye kumenya aho biri',
        localExample: 'Like a shipping company that takes your container and handles all the logistics - you just provide the container, Fargate handles where and how it runs.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like cloud kitchens where you provide the recipe, they provide the kitchen',
        'Similar to ride-sharing where you request a ride without owning a vehicle',
      ],
    },
  },
  {
    id: 'tc-032',
    domain: 'technology',
    subdomain: 'Networking',
    text: 'What is an Internet Gateway in AWS VPC?',
    options: [
      { id: 'a', text: 'A firewall' },
      { id: 'b', text: 'A component that allows communication between VPC and the internet' },
      { id: 'c', text: 'A database connection' },
      { id: 'd', text: 'A storage endpoint' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'An Internet Gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.',
      incorrectReasons: {
        'a': 'Security Groups and NACLs are firewalls.',
        'c': 'Database connections use different mechanisms.',
        'd': 'VPC endpoints are for AWS service access.',
      },
    },
    difficulty: 'medium',
    tags: ['internet-gateway', 'vpc', 'networking'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Internet Gateway',
        analogy: 'Nk\'irembo rikuru ry\'umujyi - rishyira abantu hanze no mu murwa',
        localExample: 'Like the main gate of a city that connects it to the outside world - the Internet Gateway connects your VPC to the internet.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like Kigali International Airport connecting Rwanda to the world',
        'Similar to a border post connecting two countries',
      ],
    },
  },
  {
    id: 'bp-018',
    domain: 'billing-pricing',
    subdomain: 'Cost Optimization',
    text: 'What is AWS Compute Optimizer?',
    options: [
      { id: 'a', text: 'A service that automatically reduces your bill' },
      { id: 'b', text: 'A service that recommends optimal AWS compute resources based on usage' },
      { id: 'c', text: 'A billing payment method' },
      { id: 'd', text: 'A cost estimation tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Compute Optimizer analyzes your resource utilization and recommends optimal AWS compute resources (EC2, Lambda, EBS) to reduce costs and improve performance.',
      incorrectReasons: {
        'a': 'It recommends but does not automatically change resources.',
        'c': 'Payment methods are in the Billing Console.',
        'd': 'Pricing Calculator estimates costs.',
      },
    },
    difficulty: 'medium',
    tags: ['compute-optimizer', 'cost-optimization', 'recommendations'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Resource Optimization',
        analogy: 'Nk\'umugenzuzi ureba niba ukoresha ibikoresho bikwiye',
        localExample: 'Like a consultant reviewing if you are using the right size vehicle for your deliveries - Compute Optimizer checks if your servers are the right size.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like a nutritionist recommending the right food portions',
        'Similar to a tailor suggesting the right fabric amount for a garment',
      ],
    },
  },
  {
    id: 'cc-027',
    domain: 'cloud-concepts',
    subdomain: 'Reliability',
    text: 'What is fault tolerance?',
    options: [
      { id: 'a', text: 'A system that never has faults' },
      { id: 'b', text: 'A system that continues operating properly when components fail' },
      { id: 'c', text: 'A tolerance for user errors' },
      { id: 'd', text: 'A system monitoring tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Fault tolerance means a system can continue operating properly even when some of its components fail. AWS provides multiple services and architectures to build fault-tolerant systems.',
      incorrectReasons: {
        'a': 'All systems can have faults; fault tolerance handles them gracefully.',
        'c': 'User errors are different from system faults.',
        'd': 'Monitoring is separate from fault tolerance.',
      },
    },
    difficulty: 'easy',
    tags: ['fault-tolerance', 'reliability', 'high-availability'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Fault Tolerance',
        analogy: 'Nk\'imodoka igira spare tire - iyo imwe isenyutse, ufite indi',
        localExample: 'Like having a spare tire in your car - when one fails, you have a backup ready. Fault-tolerant systems have redundancy built in.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like hospitals with backup power generators',
        'Similar to having multiple bank accounts in case one is frozen',
      ],
    },
  },
  {
    id: 'sc-023',
    domain: 'security-compliance',
    subdomain: 'Security Center',
    text: 'What is AWS Security Hub?',
    options: [
      { id: 'a', text: 'A physical security center' },
      { id: 'b', text: 'A service that provides a comprehensive view of security across AWS accounts' },
      { id: 'c', text: 'A VPN service' },
      { id: 'd', text: 'A firewall management tool' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Security Hub provides a comprehensive view of your security state in AWS. It aggregates security findings from multiple AWS services and third-party tools in a single dashboard.',
      incorrectReasons: {
        'a': 'Security Hub is a cloud service, not a physical location.',
        'c': 'VPN services are different.',
        'd': 'Firewall Manager manages firewalls specifically.',
      },
    },
    difficulty: 'medium',
    tags: ['security-hub', 'security', 'dashboard'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Security Dashboard',
        analogy: 'Nk\'ikigo cy\'umutekano kigenzura cameras zose',
        localExample: 'Like a security control room monitoring all CCTV cameras in a building - Security Hub shows all your security alerts in one place.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like a national police command center coordinating all units',
        'Similar to a hospital dashboard showing all patient vital signs',
      ],
    },
  },
];
