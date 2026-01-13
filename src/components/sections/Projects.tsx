import { ProjectCard } from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';
import './Projects.css';

export function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <header className="projects__header">
                    <h2 className="projects__title">Selected Work</h2>
                    <p className="projects__subtitle">
                        Projects I've worked on professionally and personally
                    </p>
                </header>

                <div className="projects__grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
