import { Link } from 'react-router-dom';
import type { BlogPost } from '../../data/blog';
import './BlogCard.css';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Link to={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card__meta">
                <time className="blog-card__date" dateTime={post.date}>
                    {formattedDate}
                </time>
                <span className="blog-card__read-time">{post.readTime}</span>
            </div>

            <h3 className="blog-card__title">{post.title}</h3>
            <p className="blog-card__excerpt">{post.excerpt}</p>

            <div className="blog-card__tags">
                {post.tags.map((tag) => (
                    <span key={tag} className="blog-card__tag">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
