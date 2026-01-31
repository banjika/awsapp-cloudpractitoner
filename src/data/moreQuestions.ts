// AWS Cloud Kigali - Extended Question Bank
import { Question } from '../types';

export const moreQuestions: Question[] = [
  // ============================================
  // CLOUD CONCEPTS - Extended
  // ============================================
  {
    id: 'cc-013',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Computing Types',
    text: 'What is Platform as a Service (PaaS)?',
    options: [
      { id: 'a', text: 'Raw computing infrastructure' },
      { id: 'b', text: 'A platform for developing, running, and managing applications without infrastructure complexity' },
      { id: 'c', text: 'Complete software applications delivered over the internet' },
      { id: 'd', text: 'Physical servers you manage yourself' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'PaaS provides a platform for developers to build, test, deploy, and manage applications without worrying about the underlying infrastructure like servers, storage, and networking.',
      incorrectReasons: {
        'a': 'Raw infrastructure is IaaS.',
        'c': 'Complete applications are SaaS.',
        'd': 'Physical servers are on-premises, not cloud.',
      },
    },
    difficulty: 'medium',
    tags: ['paas', 'cloud-types', 'platform'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Platform as a Service',
        analogy: 'Nk\'uko ukodesha imodoka n\'umushoferi - ntukeneye kuyobora cyangwa kuyitwara',
        localExample: 'Like using SafeMoto where you get transportation without owning or maintaining a vehicle - PaaS gives you a platform to build apps without managing servers.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like renting a fully equipped kitchen to cook your food vs building your own kitchen',
        'Similar to using a shared office space with all amenities included',
      ],
    },
  },
  {
    id: 'cc-014',
    domain: 'cloud-concepts',
    subdomain: 'Cloud Computing Types',
    text: 'What is Software as a Service (SaaS)?',
    options: [
      { id: 'a', text: 'Software you install on your own servers' },
      { id: 'b', text: 'A development platform' },
      { id: 'c', text: 'Complete applications delivered over the internet, ready to use' },
      { id: 'd', text: 'Open source software' },
    ],
    correctAnswerId: 'c',
    explanation: {
      correctReason: 'SaaS delivers complete, ready-to-use applications over the internet. Users access them through a web browser without installing or maintaining any software.',
      incorrectReasons: {
        'a': 'SaaS requires no installation - it runs in the cloud.',
        'b': 'Development platforms are PaaS.',
        'd': 'SaaS can be proprietary or open source.',
      },
    },
    difficulty: 'easy',
    tags: ['saas', 'cloud-types', 'applications'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Software as a Service',
        analogy: 'Nk\'uko ukoresha Gmail cyangwa WhatsApp - ntukeneye gushyira porogaramu',
        localExample: 'Like using Gmail or WhatsApp - the software is ready to use, you just log in. No installation, updates, or maintenance required from you.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like using M-Pesa or MTN MoMo - the app is managed by the provider',
        'Similar to Netflix or Spotify - pay to access, no ownership required',
      ],
    },
  },
  {
    id: 'cc-015',
    domain: 'cloud-concepts',
    subdomain: 'High Availability',
    text: 'What is high availability in cloud computing?',
    options: [
      { id: 'a', text: 'Having the fastest servers' },
      { id: 'b', text: 'Ensuring systems are operational and accessible most of the time' },
      { id: 'c', text: 'Having unlimited storage' },
      { id: 'd', text: 'Free services' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'High availability means designing systems to be operational and accessible with minimal downtime. AWS measures this in "nines" - 99.99% availability means about 52 minutes of downtime per year.',
      incorrectReasons: {
        'a': 'Speed is performance, not availability.',
        'c': 'Storage is separate from availability.',
        'd': 'Pricing is unrelated to availability.',
      },
    },
    difficulty: 'easy',
    tags: ['high-availability', 'uptime', 'reliability'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'High Availability',
        analogy: 'Nk\'uko amashanyarazi aba ariho igihe cyose - ntiyima',
        localExample: 'Like having reliable electricity that rarely goes out - systems designed for high availability keep running even when problems occur.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like hospitals with backup generators - services continue during power outages',
        'Similar to MTN network being available 24/7 across Rwanda',
      ],
    },
  },
  {
    id: 'cc-016',
    domain: 'cloud-concepts',
    subdomain: 'Scalability',
    text: 'What is the difference between vertical and horizontal scaling?',
    options: [
      { id: 'a', text: 'There is no difference' },
      { id: 'b', text: 'Vertical adds more power to existing servers; horizontal adds more servers' },
      { id: 'c', text: 'Vertical is cheaper than horizontal' },
      { id: 'd', text: 'Horizontal is only for databases' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Vertical scaling (scaling up) means adding more CPU, RAM, or storage to an existing server. Horizontal scaling (scaling out) means adding more servers to distribute the load.',
      incorrectReasons: {
        'a': 'They are fundamentally different approaches.',
        'c': 'Cost depends on many factors.',
        'd': 'Horizontal scaling works for many workload types.',
      },
    },
    difficulty: 'medium',
    tags: ['scaling', 'vertical', 'horizontal'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Scaling Types',
        analogy: 'Nk\'uko ugurira ibikoresho binini (vertical) cyangwa ukongera abakozi (horizontal)',
        localExample: 'Vertical: buying a bigger truck. Horizontal: buying more trucks. Both increase capacity but in different ways.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Vertical: upgrading from a small moto to a bigger one. Horizontal: hiring more moto drivers.',
        'Like expanding a restaurant by adding more tables (horizontal) vs moving to a bigger building (vertical)',
      ],
    },
  },
  {
    id: 'cc-017',
    domain: 'cloud-concepts',
    subdomain: 'Edge Locations',
    text: 'What are AWS Edge Locations used for?',
    options: [
      { id: 'a', text: 'Running EC2 instances' },
      { id: 'b', text: 'Caching content closer to users for faster delivery' },
      { id: 'c', text: 'Storing databases' },
      { id: 'd', text: 'Managing IAM users' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Edge locations are sites that CloudFront uses to cache copies of your content closer to end users for faster delivery. There are more edge locations than AWS Regions.',
      incorrectReasons: {
        'a': 'EC2 runs in Regions and Availability Zones, not edge locations.',
        'c': 'Databases run in Regions.',
        'd': 'IAM is a global service, not edge-specific.',
      },
    },
    difficulty: 'medium',
    tags: ['edge-locations', 'cloudfront', 'caching'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Edge Locations',
        analogy: 'Nk\'uko amasoko yo hafi (satellite markets) atuma utajya kure',
        localExample: 'Like having small local shops in your neighborhood instead of traveling to the main market downtown - content is cached near you for faster access.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like Simba Supermarket branches across Kigali instead of one central store',
        'Similar to mobile money agents being in every sector for convenience',
      ],
    },
  },

  // ============================================
  // SECURITY & COMPLIANCE - Extended
  // ============================================
  {
    id: 'sc-010',
    domain: 'security-compliance',
    subdomain: 'Security Groups',
    text: 'What is an AWS Security Group?',
    options: [
      { id: 'a', text: 'A group of security administrators' },
      { id: 'b', text: 'A virtual firewall that controls inbound and outbound traffic for EC2 instances' },
      { id: 'c', text: 'An encryption service' },
      { id: 'd', text: 'A compliance certification' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Security Groups act as virtual firewalls for EC2 instances, controlling which traffic is allowed in (inbound) and out (outbound). They are stateful - if you allow inbound traffic, the response is automatically allowed out.',
      incorrectReasons: {
        'a': 'Security Groups are technical controls, not people.',
        'c': 'KMS handles encryption.',
        'd': 'Certifications are in AWS Artifact.',
      },
    },
    difficulty: 'medium',
    tags: ['security-groups', 'firewall', 'ec2'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Security Groups',
        analogy: 'Nk\'umurinzi w\'irembo ureba ninde washobora kwinjira no gusohoka',
        localExample: 'Like security guards at a building gate who check IDs and only let authorized people in or out - Security Groups control network traffic.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like the visitor registration at office buildings in Kigali',
        'Similar to bouncers at clubs checking the guest list',
      ],
    },
  },
  {
    id: 'sc-011',
    domain: 'security-compliance',
    subdomain: 'MFA',
    text: 'What is Multi-Factor Authentication (MFA)?',
    options: [
      { id: 'a', text: 'Using multiple passwords' },
      { id: 'b', text: 'Requiring two or more verification methods to prove identity' },
      { id: 'c', text: 'Encrypting data multiple times' },
      { id: 'd', text: 'Having multiple admin accounts' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'MFA requires users to provide two or more verification factors: something you know (password), something you have (phone/token), or something you are (biometrics). This adds a layer of security beyond just passwords.',
      incorrectReasons: {
        'a': 'Multiple passwords is not MFA.',
        'c': 'Encryption is separate from authentication.',
        'd': 'Multiple accounts is not MFA.',
      },
    },
    difficulty: 'easy',
    tags: ['mfa', 'authentication', 'security'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Multi-Factor Authentication',
        analogy: 'Nk\'uko ukeneye PIN na fingerprint kuri Mobile Money',
        localExample: 'Like M-Pesa requiring both your PIN and the OTP sent to your phone - you need two things to prove it is you.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like bank requiring your card AND PIN at ATM',
        'Similar to some buildings needing both ID card and fingerprint',
      ],
    },
  },
  {
    id: 'sc-012',
    domain: 'security-compliance',
    subdomain: 'Threat Detection',
    text: 'What does Amazon GuardDuty do?',
    options: [
      { id: 'a', text: 'Manages user passwords' },
      { id: 'b', text: 'Provides intelligent threat detection and continuous monitoring' },
      { id: 'c', text: 'Encrypts S3 buckets' },
      { id: 'd', text: 'Creates VPNs' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior in your AWS accounts using machine learning and threat intelligence.',
      incorrectReasons: {
        'a': 'IAM manages passwords.',
        'c': 'S3 and KMS handle encryption.',
        'd': 'VPN is handled by other services.',
      },
    },
    difficulty: 'medium',
    tags: ['guardduty', 'threat-detection', 'monitoring'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Threat Detection',
        analogy: 'Nk\'umuzamu utazsinzira ureba ibyago',
        localExample: 'Like a 24/7 security guard who never sleeps, watching for suspicious activity and alerting you immediately if something seems wrong.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like fraud detection on your bank account that alerts you to suspicious transactions',
        'Similar to antivirus software that constantly scans for threats',
      ],
    },
  },
  {
    id: 'sc-013',
    domain: 'security-compliance',
    subdomain: 'Key Management',
    text: 'What is AWS KMS primarily used for?',
    options: [
      { id: 'a', text: 'Managing Kubernetes clusters' },
      { id: 'b', text: 'Creating and managing encryption keys' },
      { id: 'c', text: 'Sending notifications' },
      { id: 'd', text: 'Load balancing' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS KMS (Key Management Service) is used to create, manage, and control cryptographic keys used to encrypt your data. It integrates with many AWS services for encryption at rest.',
      incorrectReasons: {
        'a': 'EKS manages Kubernetes.',
        'c': 'SNS sends notifications.',
        'd': 'ELB handles load balancing.',
      },
    },
    difficulty: 'medium',
    tags: ['kms', 'encryption', 'keys'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Key Management',
        analogy: 'Nk\'ahantu hacungirwa imfunguzo zose z\'inzu nziza',
        localExample: 'Like a secure key cabinet in a hotel where all room keys are safely stored and managed - KMS keeps your encryption keys safe.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like how banks store vault combinations securely',
        'Similar to a locksmith shop that creates and safeguards keys',
      ],
    },
  },

  // ============================================
  // TECHNOLOGY - Extended
  // ============================================
  {
    id: 'tc-013',
    domain: 'technology',
    subdomain: 'Storage',
    text: 'What is Amazon EBS?',
    options: [
      { id: 'a', text: 'A database service' },
      { id: 'b', text: 'Block-level storage volumes for EC2 instances' },
      { id: 'c', text: 'An email service' },
      { id: 'd', text: 'A container service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon EBS (Elastic Block Store) provides persistent block-level storage volumes for EC2 instances. It is like a virtual hard drive that persists independently of the instance.',
      incorrectReasons: {
        'a': 'RDS and DynamoDB are database services.',
        'c': 'SES is the email service.',
        'd': 'ECS and EKS are container services.',
      },
    },
    difficulty: 'easy',
    tags: ['ebs', 'storage', 'block-storage'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Block Storage',
        analogy: 'Nk\'hard drive ya computer yawe - ariko mu cloud',
        localExample: 'Like the hard drive in your computer where you save files, but in the cloud. EBS is a virtual hard drive attached to your EC2 instance.',
        analogyType: 'electricity-grid',
      },
      localExamples: [
        'Like external hard drives you can attach to different computers',
        'Similar to USB flash drives but much larger and always connected',
      ],
    },
  },
  {
    id: 'tc-014',
    domain: 'technology',
    subdomain: 'Storage',
    text: 'What is the difference between S3 and EBS?',
    options: [
      { id: 'a', text: 'There is no difference' },
      { id: 'b', text: 'S3 is object storage accessed via HTTP; EBS is block storage attached to EC2' },
      { id: 'c', text: 'EBS is faster than S3 in all cases' },
      { id: 'd', text: 'S3 is only for backups' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'S3 is object storage accessed via HTTP/HTTPS APIs - perfect for files, images, backups. EBS is block storage attached directly to EC2 instances - like a virtual hard drive for running applications.',
      incorrectReasons: {
        'a': 'They serve different purposes.',
        'c': 'Performance depends on use case.',
        'd': 'S3 is used for many things beyond backups.',
      },
    },
    difficulty: 'medium',
    tags: ['s3', 'ebs', 'storage-comparison'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Object vs Block Storage',
        analogy: 'S3 nk\'ububiko bw\'ibikoresho; EBS nk\'igikoresho cy\'umuntu umwe',
        localExample: 'S3 is like a warehouse where anyone can retrieve items with a ticket. EBS is like your personal locker that only you can access directly.',
        analogyType: 'local-market',
      },
      localExamples: [
        'S3: public library where anyone can borrow books. EBS: your personal bookshelf.',
        'S3: shared Google Drive. EBS: your computer hard drive.',
      ],
    },
  },
  {
    id: 'tc-015',
    domain: 'technology',
    subdomain: 'Compute',
    text: 'What is AWS Elastic Beanstalk?',
    options: [
      { id: 'a', text: 'A database service' },
      { id: 'b', text: 'A PaaS service for deploying and scaling web applications' },
      { id: 'c', text: 'A storage service' },
      { id: 'd', text: 'A security service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Elastic Beanstalk is a PaaS that handles the deployment, from capacity provisioning, load balancing, and auto-scaling to application health monitoring. You just upload your code.',
      incorrectReasons: {
        'a': 'RDS is for databases.',
        'c': 'S3 is for storage.',
        'd': 'Security services include GuardDuty, WAF, etc.',
      },
    },
    difficulty: 'medium',
    tags: ['elastic-beanstalk', 'paas', 'deployment'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Managed Deployment',
        analogy: 'Nk\'uko utanga ibiribwa restaurant bakabikora - ntubikora wenyine',
        localExample: 'Like giving ingredients to a restaurant and they cook for you - you provide code, Beanstalk handles servers, scaling, and deployment.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like using a wedding planner instead of organizing everything yourself',
        'Similar to hiring a property manager for your rental houses',
      ],
    },
  },
  {
    id: 'tc-016',
    domain: 'technology',
    subdomain: 'Load Balancing',
    text: 'What does Elastic Load Balancing (ELB) do?',
    options: [
      { id: 'a', text: 'Stores data' },
      { id: 'b', text: 'Distributes incoming traffic across multiple targets' },
      { id: 'c', text: 'Manages user permissions' },
      { id: 'd', text: 'Creates backups' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Elastic Load Balancing automatically distributes incoming application traffic across multiple targets like EC2 instances, containers, and IP addresses to improve availability and fault tolerance.',
      incorrectReasons: {
        'a': 'S3 and EBS store data.',
        'c': 'IAM manages permissions.',
        'd': 'AWS Backup creates backups.',
      },
    },
    difficulty: 'easy',
    tags: ['elb', 'load-balancing', 'traffic'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Load Balancing',
        analogy: 'Nk\'uko umuyobozi w\'abagenzi agabanya abantu mu modoka nyinshi',
        localExample: 'Like a traffic controller at Nyabugogo directing passengers to different buses so no single bus gets overloaded - ELB distributes requests across servers.',
        analogyType: 'moto-taxi',
      },
      localExamples: [
        'Like bank tellers serving customers from multiple queues',
        'Similar to a restaurant host seating guests at different tables',
      ],
    },
  },
  {
    id: 'tc-017',
    domain: 'technology',
    subdomain: 'Messaging',
    text: 'What is Amazon SNS used for?',
    options: [
      { id: 'a', text: 'Storing files' },
      { id: 'b', text: 'Sending notifications and messages to subscribers' },
      { id: 'c', text: 'Running virtual machines' },
      { id: 'd', text: 'Managing databases' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon SNS (Simple Notification Service) is a pub/sub messaging service that enables you to send notifications to subscribers via email, SMS, mobile push, or HTTP endpoints.',
      incorrectReasons: {
        'a': 'S3 stores files.',
        'c': 'EC2 runs virtual machines.',
        'd': 'RDS manages databases.',
      },
    },
    difficulty: 'easy',
    tags: ['sns', 'notifications', 'messaging'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Push Notifications',
        analogy: 'Nk\'uko uhabwa SMS z\'amakuru - bakwohereza message',
        localExample: 'Like receiving SMS alerts from your bank when a transaction occurs - SNS pushes notifications to subscribers when events happen.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like MTN sending promotional messages to subscribers',
        'Similar to news apps sending breaking news alerts',
      ],
    },
  },
  {
    id: 'tc-018',
    domain: 'technology',
    subdomain: 'Machine Learning',
    text: 'What is Amazon SageMaker?',
    options: [
      { id: 'a', text: 'A content delivery service' },
      { id: 'b', text: 'A fully managed service for building, training, and deploying machine learning models' },
      { id: 'c', text: 'A database service' },
      { id: 'd', text: 'An email service' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Amazon SageMaker is a fully managed service that provides tools for the entire machine learning workflow: labeling data, building, training, tuning, and deploying ML models at scale.',
      incorrectReasons: {
        'a': 'CloudFront is for content delivery.',
        'c': 'RDS/DynamoDB are database services.',
        'd': 'SES is the email service.',
      },
    },
    difficulty: 'medium',
    tags: ['sagemaker', 'machine-learning', 'ai'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Machine Learning Platform',
        analogy: 'Nk\'ikigo cyigisha computers kumenya ibintu - nk\'uko umuntu yiga',
        localExample: 'Like a school that teaches computers to recognize patterns - SageMaker helps you build AI that can learn from data.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like training a system to recognize Rwandan license plates automatically',
        'Similar to teaching a computer to translate Kinyarwanda to English',
      ],
    },
  },

  // ============================================
  // BILLING & PRICING - Extended
  // ============================================
  {
    id: 'bp-008',
    domain: 'billing-pricing',
    subdomain: 'Pricing Calculator',
    text: 'What is the AWS Pricing Calculator used for?',
    options: [
      { id: 'a', text: 'Paying AWS bills' },
      { id: 'b', text: 'Estimating costs before deploying resources' },
      { id: 'c', text: 'Getting discounts' },
      { id: 'd', text: 'Monitoring resource usage' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'The AWS Pricing Calculator helps you estimate the cost of AWS services before you use them. You can model your solution and get a cost breakdown.',
      incorrectReasons: {
        'a': 'You pay bills in the Billing Console.',
        'c': 'Discounts come from Reserved Instances, Savings Plans, etc.',
        'd': 'CloudWatch monitors usage.',
      },
    },
    difficulty: 'easy',
    tags: ['pricing-calculator', 'estimation', 'costs'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Cost Estimation',
        analogy: 'Nk\'uko usaba devis mbere yo kubaka - uramenya igiciro',
        localExample: 'Like getting a quote from a builder before construction starts - the pricing calculator shows what your AWS setup will cost.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like asking for a menu with prices before ordering at a restaurant',
        'Similar to getting insurance quotes before choosing a plan',
      ],
    },
  },
  {
    id: 'bp-009',
    domain: 'billing-pricing',
    subdomain: 'Savings Plans',
    text: 'What is an AWS Savings Plan?',
    options: [
      { id: 'a', text: 'A free tier extension' },
      { id: 'b', text: 'A flexible pricing model offering discounts for committed usage' },
      { id: 'c', text: 'A payment plan for late bills' },
      { id: 'd', text: 'An insurance for AWS services' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Savings Plans offer significant savings (up to 72%) compared to On-Demand pricing in exchange for a commitment to a consistent amount of usage (measured in $/hour) for 1 or 3 years.',
      incorrectReasons: {
        'a': 'Free tier has fixed limits.',
        'c': 'Savings Plans are not for payment issues.',
        'd': 'It is a pricing model, not insurance.',
      },
    },
    difficulty: 'medium',
    tags: ['savings-plans', 'discounts', 'commitment'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Committed Usage Discounts',
        analogy: 'Nk\'uko ugura ibintu byinshi uhabwa reduction - commitment pricing',
        localExample: 'Like a wholesale discount - commit to buying a certain amount regularly and get better prices than buying small amounts each time.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like gym memberships - pay upfront for the year, save money',
        'Similar to buying MTN bundles instead of pay-as-you-go airtime',
      ],
    },
  },
  {
    id: 'bp-010',
    domain: 'billing-pricing',
    subdomain: 'Billing Alerts',
    text: 'How can you set up billing alerts in AWS?',
    options: [
      { id: 'a', text: 'Using EC2' },
      { id: 'b', text: 'Using AWS Budgets or CloudWatch Billing Alarms' },
      { id: 'c', text: 'Using S3' },
      { id: 'd', text: 'Calling AWS support' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'AWS Budgets lets you set custom cost and usage budgets with alerts. CloudWatch Billing Alarms can also alert you when estimated charges exceed thresholds.',
      incorrectReasons: {
        'a': 'EC2 is for compute, not billing alerts.',
        'c': 'S3 is for storage.',
        'd': 'Alerts can be set up self-service.',
      },
    },
    difficulty: 'easy',
    tags: ['budgets', 'billing-alerts', 'cloudwatch'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Billing Alerts',
        analogy: 'Nk\'uko telefoni ikumenyesha niba airtime yawe igiye kurangira',
        localExample: 'Like your phone warning you when credit is low - AWS Budgets alerts you before you overspend.',
        analogyType: 'mobile-money',
      },
      localExamples: [
        'Like bank SMS alerts when your balance drops below a threshold',
        'Similar to electricity meter warnings when units are running low',
      ],
    },
  },
  {
    id: 'bp-011',
    domain: 'billing-pricing',
    subdomain: 'Cost Allocation',
    text: 'What are cost allocation tags used for?',
    options: [
      { id: 'a', text: 'Improving security' },
      { id: 'b', text: 'Tracking and organizing AWS costs by department, project, or environment' },
      { id: 'c', text: 'Speeding up applications' },
      { id: 'd', text: 'Creating backups' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Cost allocation tags let you label AWS resources and then track costs by tag. This helps you understand which departments, projects, or environments are consuming resources.',
      incorrectReasons: {
        'a': 'Tags can help with organization but are not primarily for security.',
        'c': 'Tags do not affect performance.',
        'd': 'Backups are handled by other services.',
      },
    },
    difficulty: 'medium',
    tags: ['cost-allocation', 'tags', 'tracking'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Cost Tracking by Category',
        analogy: 'Nk\'uko wandika aho amafaranga yagiye - department by department',
        localExample: 'Like a company expense tracking system where each receipt is labeled by department - tags help you see which team is spending what.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like tracking household expenses by category (food, transport, utilities)',
        'Similar to project accounting where costs are allocated to specific projects',
      ],
    },
  },

  // More questions to fill gaps
  {
    id: 'cc-018',
    domain: 'cloud-concepts',
    subdomain: 'Benefits',
    text: 'What does "stop guessing capacity" mean as a cloud benefit?',
    options: [
      { id: 'a', text: 'AWS tells you how much capacity you need' },
      { id: 'b', text: 'You can scale resources up or down based on actual demand instead of estimating' },
      { id: 'c', text: 'Capacity is unlimited' },
      { id: 'd', text: 'You never need to monitor usage' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'In traditional data centers, you had to guess future capacity needs. With cloud, you provision what you need now and scale based on actual demand - no over or under-provisioning.',
      incorrectReasons: {
        'a': 'You make decisions, AWS provides the capability.',
        'c': 'There are limits, but they are very high and can be increased.',
        'd': 'You should still monitor to make informed decisions.',
      },
    },
    difficulty: 'easy',
    tags: ['capacity', 'scaling', 'benefits'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'On-Demand Capacity',
        analogy: 'Nk\'uko ugura ibiribwa ukeneye aho kugura byinshi biruma',
        localExample: 'Like buying fresh vegetables daily from the market vs buying a month supply that might spoil - get what you need when you need it.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like hiring casual workers during busy seasons vs maintaining full staff year-round',
        'Similar to renting extra chairs for events vs owning hundreds of chairs',
      ],
    },
  },
  {
    id: 'sc-014',
    domain: 'security-compliance',
    subdomain: 'Security Best Practices',
    text: 'What is the recommended way to grant permissions in AWS?',
    options: [
      { id: 'a', text: 'Give everyone administrator access for convenience' },
      { id: 'b', text: 'Use roles and policies with least privilege principle' },
      { id: 'c', text: 'Share root credentials with the team' },
      { id: 'd', text: 'Disable all security features' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'Best practice is to use IAM roles and policies, granting only the minimum permissions needed (least privilege). Never share credentials or give excessive permissions.',
      incorrectReasons: {
        'a': 'Admin access for all is a major security risk.',
        'c': 'Root credentials should never be shared.',
        'd': 'Security features should be enabled, not disabled.',
      },
    },
    difficulty: 'easy',
    tags: ['best-practices', 'iam', 'permissions'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Permission Management',
        analogy: 'Nk\'uko buri mukozi ahabwa urufunguzo rw\'ibiro bye gusa',
        localExample: 'Like giving each employee keys only to their office - the accountant does not need warehouse keys, the driver does not need safe keys.',
        analogyType: 'sacco',
      },
      localExamples: [
        'Like hotel staff having access only to areas they work in',
        'Similar to app permissions on your phone - give access only to what is needed',
      ],
    },
  },
  {
    id: 'tc-019',
    domain: 'technology',
    subdomain: 'Storage Classes',
    text: 'Which S3 storage class is cheapest for rarely accessed data?',
    options: [
      { id: 'a', text: 'S3 Standard' },
      { id: 'b', text: 'S3 Glacier Deep Archive' },
      { id: 'c', text: 'S3 Intelligent-Tiering' },
      { id: 'd', text: 'S3 One Zone-IA' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'S3 Glacier Deep Archive is the lowest-cost storage class, designed for data that is rarely accessed and can tolerate retrieval times of 12-48 hours. Perfect for compliance archives.',
      incorrectReasons: {
        'a': 'Standard is for frequently accessed data.',
        'c': 'Intelligent-Tiering automatically moves data but is not the cheapest.',
        'd': 'One Zone-IA is cheaper than Standard but not the cheapest option.',
      },
    },
    difficulty: 'medium',
    tags: ['s3', 'storage-classes', 'glacier'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Archive Storage',
        analogy: 'Nk\'uko ushyira ibintu mu bubiko buri kure - bitagorana kubona ariko bifashe igihe',
        localExample: 'Like storing old documents in a warehouse outside the city - very cheap storage but takes time to retrieve when needed.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like storing old photos in boxes in a storage room vs in a photo album on display',
        'Similar to archived bank statements vs recent ones online',
      ],
    },
  },
  {
    id: 'tc-020',
    domain: 'technology',
    subdomain: 'Networking',
    text: 'What is a subnet in AWS VPC?',
    options: [
      { id: 'a', text: 'A type of instance' },
      { id: 'b', text: 'A range of IP addresses in your VPC' },
      { id: 'c', text: 'A security feature' },
      { id: 'd', text: 'A database' },
    ],
    correctAnswerId: 'b',
    explanation: {
      correctReason: 'A subnet is a range of IP addresses within your VPC. You can have public subnets (with internet access) and private subnets (isolated from internet) to organize and secure your resources.',
      incorrectReasons: {
        'a': 'Instances run within subnets.',
        'c': 'Subnets are networking, though they help with security architecture.',
        'd': 'Databases run in subnets but subnets are not databases.',
      },
    },
    difficulty: 'medium',
    tags: ['subnet', 'vpc', 'networking'],
    culturalContext: {
      primaryAnalogy: {
        concept: 'Network Subnets',
        analogy: 'Nk\'uturere tw\'umujyi - buri karere kagira aderesi zako',
        localExample: 'Like districts within Kigali city - each district (Kicukiro, Gasabo, Nyarugenge) has its own address range. Subnets divide your VPC into sections.',
        analogyType: 'local-market',
      },
      localExamples: [
        'Like floors in a building - each floor has its own room numbers',
        'Similar to dividing a farm into different plots for different crops',
      ],
    },
  },
];
