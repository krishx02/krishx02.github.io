import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Timeline } from '../ui/Timeline';
import { timelineData } from '../../data/timeline';
import { skillsData } from '../../data/skills';
import profileImage from '../../assets/images/profile.jpg';
import './Hero.css';

const SOCIAL_LINKS = [
    {
        href: 'https://linkedin.com/in/krish-govind',
        label: 'LinkedIn',
        icon: <FaLinkedin size={20} />,
        brandColor: '#0077b5'
    },
    {
        href: 'https://github.com/krishx02',
        label: 'GitHub',
        icon: <FaGithub size={20} />,
        brandColor: 'inherit'
    },
];

export function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__intro">
                <div className="hero__profile">
                    <img
                        src={profileImage}
                        alt="Krish Govind - Software Engineer"
                        className="hero__photo"
                    />
                </div>
                <div className="hero__text">
                    <h1 className="hero__name">Krish Govind</h1>
                    <p className="hero__title">Software Engineer II @ Nike</p>

                    <div className="hero__tagline">
                        <Typewriter
                            options={{
                                strings: [
                                    'Avid gymgoer',
                                    'Nature lover',
                                    'Amateur photographer',
                                    'Food connoisseur',
                                    'Son',
                                    'Brother',
                                    'Passionate engineer'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                                pauseFor: 4000,
                            }}
                        />
                    </div>

                    <div className="hero__social">
                        {SOCIAL_LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hero__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                style={{ '--hover-color': link.brandColor } as React.CSSProperties}
                            >
                                <span className="hero__social-icon">{link.icon}</span>
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hero__timeline">
                <h2 className="hero__section-title">Career Timeline</h2>
                <Timeline entries={timelineData} />
            </div>

            <div className="hero__skills">
                <h2 className="hero__section-title">Tech Stack</h2>
                <div className="hero__skills-grid">
                    {skillsData.map(category => (
                        <div key={category.name} className="hero__skill-category">
                            <h3 className="hero__skill-label">{category.name}</h3>
                            <div className="hero__skill-list">
                                {category.skills.map(skill => (
                                    <span key={skill} className="hero__skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
