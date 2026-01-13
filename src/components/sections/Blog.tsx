import { BlogCard } from '../ui/BlogCard';
import { blogPostsData } from '../../data/blog';
import './Blog.css';

export function Blog() {
    return (
        <section id="blog" className="blog">
            <div className="container">
                <header className="blog__header">
                    <h2 className="blog__title">Blog</h2>
                    <p className="blog__subtitle">
                        Thoughts on software engineering, architecture, and more
                    </p>
                </header>

                <div className="blog__grid">
                    {blogPostsData.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
