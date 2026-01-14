import './About.css';

export function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="about__title">About Me</h2>

                <div className="about__content">
                    <p className="about__text">
                        I'm a software engineer passionate about building products that make a real difference.
                        Currently at Nike, I engineer internal platforms that help bring innovative products
                        to customers worldwide. I’ve been fortunate to be entrusted with greater responsibility
                        early on, leading to a promotion within my first year.
                    </p>

                    <p className="about__text">
                        My journey in tech started in high school with AP Computer Science, sparking a drive
                        that hasn't slowed down since. I've gained experience across different industries
                        at companies like Vanguard and Converse before finding my home at Nike in the
                        beautiful Pacific Northwest.
                    </p>

                    <p className="about__text">
                        When I'm not coding, you'll find me working on side projects, hiking, exploring
                        new cuisines, or training in the gym.
                    </p>

                    <blockquote className="about__quote">
                        <span className="about__quote-text">
                            "Not everyone who works hard is rewarded. But, all those who succeed have worked hard!"
                        </span>
                        <footer className="about__quote-author">
                            — Coach Genji Kamogawa, Hajime no Ippo
                        </footer>
                    </blockquote>

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
