export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
    },
    {
        name: 'Frameworks',
        skills: ['React', 'Node.js', 'Next.js', 'Express', 'Spring Boot'],
    },
    {
        name: 'Tools & Cloud',
        skills: ['Git', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
        name: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
    },
];
