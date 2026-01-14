export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime?: string;
    tags?: string[];
    comingSoon?: boolean;
}

export const blogPostsData: BlogPost[] = [
    {
        id: 'building-personal-portfolio',
        slug: 'building-personal-portfolio',
        title: 'Building My Personal Portfolio',
        excerpt: 'A deep dive into the tech stack and design choices behind my personal portfolio website.',
        date: '2026-01-14',
        readTime: '10 min read',
        tags: ['React', 'Portfolio', 'Design System'],
        comingSoon: true,
    },
    {
        id: 'lorem-ipsum-1',
        slug: 'lorem-ipsum-1',
        title: 'Lorem Ipsum Dolor',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '2024-01-10',
        comingSoon: true,
    },
    {
        id: 'lorem-ipsum-2',
        slug: 'lorem-ipsum-2',
        title: 'Lorem Ipsum Dolor',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '2024-01-05',
        comingSoon: true,
    },
];
