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
        id: '1',
        slug: 'building-portfolio-with-antigravity-review',
        title: 'Building My Portfolio with Antigravity: A Hands-On Review',
        excerpt: 'I built my personal site using Antigravity—and learned a lot about how it stacks up against the competition.',
        date: '2026-01-18',
        readTime: '5 min read',
        tags: ['Agentic AI', 'Developer Tools', 'Antigravity'],
        comingSoon: false,
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
