export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
}

export const blogPostsData: BlogPost[] = [
    {
        id: 'getting-started-with-react',
        slug: 'getting-started-with-react',
        title: 'Getting Started with React in 2024',
        excerpt: 'A comprehensive guide to starting your React journey with modern best practices and tooling.',
        date: '2024-01-15',
        readTime: '5 min read',
        tags: ['React', 'JavaScript', 'Tutorial'],
    },
    {
        id: 'typescript-tips',
        slug: 'typescript-tips',
        title: 'TypeScript Tips for Better Code',
        excerpt: 'Practical TypeScript tips that will make your code more maintainable and type-safe.',
        date: '2024-01-10',
        readTime: '8 min read',
        tags: ['TypeScript', 'Best Practices'],
    },
    {
        id: 'microservices-at-scale',
        slug: 'microservices-at-scale',
        title: 'Building Microservices at Scale',
        excerpt: 'Lessons learned from building and scaling microservices architecture at a large enterprise.',
        date: '2024-01-05',
        readTime: '12 min read',
        tags: ['Architecture', 'Microservices', 'AWS'],
    },
];
