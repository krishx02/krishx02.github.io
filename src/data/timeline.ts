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
            'Led migration of checkout microservices to modern architecture',
            'Improved performance by 40% through optimization initiatives',
            'Mentored 2 junior engineers on best practices',
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
            'Built full-stack features for Nike.com checkout experience',
            'Collaborated with cross-functional teams on product launches',
            'Implemented automated testing reducing bugs by 30%',
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
            'Developed internal tools for inventory management',
            'Created dashboards for real-time analytics',
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
            'Built financial reporting features using React and Java',
            'Automated data processing workflows',
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
            'Developed healthcare portal features',
            'Improved accessibility compliance',
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
            'Dean\'s List, 3.8 GPA',
            'Teaching Assistant for Data Structures',
        ],
    },
];
