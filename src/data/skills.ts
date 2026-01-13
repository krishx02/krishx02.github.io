export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'SQL', 'HTML/CSS'],
    },
    {
        name: 'Frameworks',
        skills: ['React', 'Node.js', 'Next.js', 'Redux', 'Jotai', 'NX', 'Okta Auth'],
    },
    {
        name: 'Developer Tools',
        skills: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Vite', 'VS Code'],
    },
    {
        name: 'Cloud Infrastructure',
        skills: ['AWS', 'Lambda', 'API Gateway', 'CDK', 'EC2', 'S3', 'CloudFront', 'EventBridge', 'SQS', 'SNS'],
    },
    {
        name: 'Databases',
        skills: ['PostgreSQL', 'DynamoDB'],
    },
];
