import React from 'react';
import { useInView } from 'react-intersection-observer';

const GalleryItem = ({ src, alt, label, span2 = false, delay = 0 }) => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <a
            href="#"
            ref={ref}
            className={`gallery-item ${span2 ? 'span-2' : ''} reveal zoom-in ${inView ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
            onClick={(e) => e.preventDefault()}
        >
            <img src={src} alt={alt} />
            <div className="gallery-overlay"><span>{label}</span></div>
        </a>
    );
};

const Gallery = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.15, triggerOnce: true });

    // Fallback to the 8 images we already have, repeating them to simulate a 28-image gallery 
    // until the booking.com 503 error resolves so the user can see the layout.
    const baseImages = [
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/348876514.jpg?k=723cc03062f99fb9a55049ada11e51d5ae22106b20ac9c1de06c0ad44ce99b8f&o=', alt: 'Bedroom Interior', label: 'Bedroom Interior' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177691848.jpg?k=4430e9a8df919d405c216b9bdb7ff701f84ea4ef54ab2cb6a71bd8ae7483be29&o=', alt: 'Living Area', label: 'Living Area' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/326644783.jpg?k=e119d877a6460b17c2f19f203ec0d251d3c2068a7e55d10ace875f8dd21387ea&o=', alt: 'Kitchenette', label: 'Kitchenette' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/176168735.jpg?k=2023cdcb02fbcee3742b4b6f2b66e70413ccb570912149e05239fee9bb04d1cf&o=', alt: 'Modern Bathroom', label: 'Bathroom' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/348877610.jpg?k=d8b1fb08384500a879749b35e5e1724907fa9aca50918d7fa68a70d25bb362ad&o=', alt: 'Breakfast Setup', label: 'Breakfast' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177709696.jpg?k=7c96aa57850a0f98634341b3ea75afeb21e37fab814ba24a6a08c8c3054049c9&o=', alt: 'Lush Garden', label: 'Lush Garden' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/177691920.jpg?k=5329f860dfc11742298451afa91879567b7a2ebb1da4e4742b621895857f3e99&o=', alt: 'Private Balcony', label: 'Private Balcony' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/175737733.jpg?k=b4adf7b7679ef7a72667c7cc9b361123986c4df9749fe34b0b83847f69e3e3e4&o=', alt: 'Villa Exterior', label: 'Exterior' }
    ];

    // Generate 28 images by repeating the base 8
    const fullGallery = Array.from({ length: 28 }, (_, i) => baseImages[i % baseImages.length]);

    return (
        <section className="gallery section-padding" id="gallery">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header reveal fade-up ${headerInView ? 'active' : ''}`}
                >
                    <span className="sub-title">Photo Tour</span>
                    <h2 className="section-title">Breathtaking Views</h2>
                    <p className="section-desc">Explore all 28 photos of our lush colonial-style oasis.</p>
                </div>

                <div className="gallery-grid expanded-grid">
                    {fullGallery.map((img, index) => (
                        <GalleryItem
                            key={index}
                            src={img.src}
                            alt={`${img.alt} ${index + 1}`}
                            label={img.label}
                            // Make every 5th item span 2 columns to keep the grid dynamic and interesting
                            span2={index % 5 === 0}
                            delay={(index % 4) * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
