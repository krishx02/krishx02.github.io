export interface TimelineEntry {
    id: string;
    title: string;
    organization: string;
    startDate: string;
    endDate: string | null; // null = "Present"
    type: 'work' | 'education';
    bullets: string[];
    isCurrentRole?: boolean;
}

export const timelineData: TimelineEntry[] = [
    {
        id: 'nike-se2',
        title: 'Software Engineer II',
        organization: 'Nike',
        startDate: 'Sep 2025',
        endDate: null,
        type: 'work',
        bullets: [
            'Implemented an asynchronous job processing framework using AWS SQS, Lambda, and DynamoDB for batch processing',
            'Mentoring junior engineers + team on best practices in backend architecture patterns',
            'and more'
        ],
        isCurrentRole: true,
    },
    {
        id: 'nike-se1',
        title: 'Software Engineer I',
        organization: 'Nike',
        startDate: 'Sep 2024',
        endDate: 'Aug 2025',
        type: 'work',
        bullets: [
            'Translated business requirements into a platform capability into a modular, scalable NX Monorepo solution with Jenkins CI/CD',
            'Built a modular React.js/TypeScript SPA; defined and deployed frontend infrastructure with AWS CDK to manage manufacturing workflows and automate communications',
            'Spearheaded a Dynatrace observability framework that was adopted as the organization-wide standard; engineered end-to-end instrumentation for logs, metrics, and traces across all serverless services including AWS Lambda, DynamoDB, SNS, SQS, API Gateway, EventBridge, and S3',
            'Integrated Okta-based entitlements; conditioned React component loading on user permissions and enforced access logic in backend notification services using Jotai',
            'Improved accessibility across SMx — added ARIA labels, keyboard navigation, and screen-reader support, empowering the team to build inclusively'
        ],
    },
    {
        id: 'converse-intern',
        title: 'Software Engineering Intern',
        organization: 'Converse (Nike)',
        startDate: 'Summer 2023',
        endDate: 'Summer 2023',
        type: 'work',
        bullets: [
            'Developed a Slack bot using AWS Lambda, API Gateway and Terraform',
            'Automated customer-service communications and cut call durations by 1 minute for 200+ reps',
            'Built serverless AWS Lambda functions behind API Gateway to integrate Nike vendor APIs (Forter, Narvar, and Adyen) centralizing customer data retrieval and saving 30,000 minutes/month',
            'Presented and validated a strategic service delivery framework to Converse tech leadership, catalyzed the formation of a dedicated support team to further streamline customer service'
        ],
    },
    {
        id: 'vanguard-intern',
        title: 'Software Engineering Intern',
        organization: 'Vanguard',
        startDate: 'Summer 2022',
        endDate: 'Summer 2022',
        type: 'work',
        bullets: [
            'Achieved a 20% cost reduction in newly migrated AWS infrastructure by researching and executing a targeted cost optimization strategy',
            'Secured a 7% reduction in annual AWS spend by presenting optimization findings to principal engineers and senior product managers, driving strategic budget realignment',
            'Designed Cloudability dashboards for AWS OpEx insights, led documentation and collaboration via Confluence',
        ],
    },
    {
        id: 'unitedhealth-intern',
        title: 'Software Engineering Intern',
        organization: 'UnitedHealth Group',
        startDate: 'Summer 2021',
        endDate: 'Summer 2021',
        type: 'work',
        bullets: [
            'Redesigned an internal web application using React, Express, Redux, and GSQL',
            'Enabled non-technical stakeholders to extract insights from a human capital database through intuitive UI/UX design, removing the need for technical acumen',
            'Participated in Agile ceremonies — daily stand-ups, sprint planning, backlog refinement, and Kanban board usage to support team delivery'
        ],
    },
    {
        id: 'rutgers',
        title: 'B.S. Computer Science (Honors)',
        organization: 'Rutgers University',
        startDate: '2020',
        endDate: '2024',
        type: 'education',
        bullets: [
            'Dean\'s List, 3.85 GPA',
            'Tutor for Data Structures',
            'RU RAGA Captain',
        ],
    },
];
