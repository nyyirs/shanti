import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CookingPot, Bed, WifiHigh, Tree, ShieldCheck, Coffee } from '@phosphor-icons/react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <div
            ref={ref}
            className={`feature-card reveal fade-up ${inView ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            <div className="icon-box"><Icon /></div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

const Amenities = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.15, triggerOnce: true });

    const amenitiesData = [
        { icon: CookingPot, title: "Fully Equipped Kitchenette", desc: "Refrigerator, microwave, electric kettle, stovetop, coffee machine, and more.", delay: 0.1 },
        { icon: Bed, title: "Premium Comfort", desc: "Extra-long beds (> 2 metres), air conditioning, and a cozy seating area.", delay: 0.2 },
        { icon: WifiHigh, title: "Free High-Speed WiFi", desc: "Stay connected with reliable, fast internet access in all areas.", delay: 0.3 },
        { icon: Tree, title: "Botanical Garden", desc: "Private balcony, garden access, and outdoor furniture to enjoy nature.", delay: 0.4 },
        { icon: ShieldCheck, title: "Safe & Secure", desc: "Free on-site private parking, safety deposit box, and CCTV security.", delay: 0.5 },
        { icon: Coffee, title: "Daily Breakfast", desc: "Start your day right with a highly-rated daily breakfast service.", delay: 0.6 }
    ];

    return (
        <section className="amenities bg-light section-padding" id="amenities">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header text-center reveal fade-up ${headerInView ? 'active' : ''}`}
                >
                    <span className="sub-title">Facilities</span>
                    <h2 className="section-title">Everything You Need</h2>
                    <p className="section-desc">Each apartment is well-appointed with modern comforts to ensure a relaxing stay.</p>
                </div>

                <div className="amenities-grid">
                    {amenitiesData.map((amenity, index) => (
                        <FeatureCard
                            key={index}
                            icon={amenity.icon}
                            title={amenity.title}
                            desc={amenity.desc}
                            delay={amenity.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
