export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        id: 'nike-platform',
        title: 'Nike Commerce Platform',
        description: 'Contributed to the development of scalable microservices for Nike\'s global e-commerce platform, handling millions of transactions daily.',
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'AWS'],
        featured: true,
    },
    {
        id: 'portfolio-site',
        title: 'Personal Portfolio',
        description: 'This portfolio website built with React, TypeScript, and Vite. Features dark mode, responsive design, and SPA routing on GitHub Pages.',
        technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
        githubUrl: 'https://github.com/krishx02/krishx02.github.io',
        liveUrl: 'https://krishx02.github.io',
        featured: true,
    },
    {
        id: 'data-pipeline',
        title: 'Real-time Data Pipeline',
        description: 'Built a real-time data processing pipeline for analytics and monitoring, processing millions of events per minute.',
        technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
        featured: true,
    },
];
