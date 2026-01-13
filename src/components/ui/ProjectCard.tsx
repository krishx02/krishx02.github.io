import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                />
            ) : (
                <div className="project-card__image project-card__image--placeholder">
                    <span>🚀</span>
                </div>
            )}

            <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__technologies">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="project-card__tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="project-card__links">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            className="project-card__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={16} />
                            Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="project-card__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt size={14} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
