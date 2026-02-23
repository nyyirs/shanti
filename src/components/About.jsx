import React from 'react';
import { useInView } from 'react-intersection-observer';
import { User } from '@phosphor-icons/react';

const About = () => {
    const { ref: textRef, inView: textInView } = useInView({ threshold: 0.15, triggerOnce: true });
    const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <section className="about section-padding" id="about">
            <div className="container about-container">
                <div
                    ref={textRef}
                    className={`about-text reveal fade-up ${textInView ? 'active' : ''}`}
                >
                    <h2 className="section-title">Your Island Getaway</h2>
                    <p className="lead-text">Set in a lush botanical space filled with fruit trees, exotic birds, and geckos, Shanti Nivas provides a tranquil colonial-style atmosphere.</p>
                    <p>Located in Poste de Flacq, we offer spacious and comfortable guest house accommodation designed to provide a premium experience for travelers who appreciate nature and serenity. It is an ideal base for exploring the north and east coasts of Mauritius, with famous white sand beaches just a short drive away.</p>

                    <div className="host-info flex-center">
                        <div className="host-avatar flex-center-centered">
                            <User weight="bold" />
                        </div>
                        <div className="host-details">
                            <h4>Hosted by Jay Beeponee</h4>
                            <p>25+ years of hotel industry experience, personally ensuring your satisfaction.</p>
                        </div>
                    </div>
                </div>

                <div
                    ref={imgRef}
                    className={`about-image-grid reveal slide-in-right ${imgInView ? 'active' : ''}`}
                >
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/177709696.jpg?k=7c96aa57850a0f98634341b3ea75afeb21e37fab814ba24a6a08c8c3054049c9&o=" alt="Lush Garden View" className="img-1 shadow-md" />
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/177691920.jpg?k=5329f860dfc11742298451afa91879567b7a2ebb1da4e4742b621895857f3e99&o=" alt="Private Balcony" className="img-2 shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default About;
