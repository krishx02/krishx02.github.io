import { useParams } from 'react-router-dom';

// Import MDX blog posts
import AntigravityPost from '../content/blog/antigravity-vs-cursor-vs-opencode.mdx';

import './BlogPost.css';

// Map slugs to MDX components
const blogPosts: Record<string, React.ComponentType> = {
    'antigravity-vs-cursor-vs-opencode': AntigravityPost,
};

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug || !blogPosts[slug]) {
        return (
            <div className="blog-post">
                <div className="container">
                    <a href="/#blog" className="blog-post__back">← Back to Blog</a>
                    <h1>Post Not Found</h1>
                    <p>The blog post you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const PostContent = blogPosts[slug];

    return (
        <div className="blog-post">
            <div className="container">
                <a href="/#blog" className="blog-post__back">← Back to Blog</a>
                <article className="blog-post__content">
                    <PostContent />
                </article>
            </div>
        </div>
    );
}

