import './About.css';

export function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="about__title">About Me</h2>

                <div className="about__content">
                    <p className="about__text">
                        I'm a software engineer passionate about building products that make a difference.
                        Currently at Nike, I work on the checkout experience that serves millions of
                        customers worldwide.
                    </p>

                    <p className="about__text">
                        My journey in tech started at Rutgers University, where I discovered my love for
                        solving complex problems through code. Since then, I've had the privilege of
                        working at companies like Vanguard and UnitedHealth Group before finding my
                        home at Nike.
                    </p>

                    <p className="about__text">
                        When I'm not coding, you'll find me exploring new technologies, contributing
                        to open source projects, or mentoring aspiring developers. I believe in
                        continuous learning and giving back to the community that helped me grow.
                    </p>

                    <div className="about__highlights">
                        <div className="about__highlight">
                            <span className="about__highlight-number">3+</span>
                            <span className="about__highlight-label">Years Experience</span>
                        </div>
                        <div className="about__highlight">
                            <span className="about__highlight-number">4</span>
                            <span className="about__highlight-label">Companies</span>
                        </div>
                        <div className="about__highlight">
                            <span className="about__highlight-number">∞</span>
                            <span className="about__highlight-label">Curiosity</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
