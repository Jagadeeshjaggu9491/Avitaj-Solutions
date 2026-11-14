import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, getServicesByCategory } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import { gsap, prefersReducedMotion, useSectionReveal } from '../utils/useGsapReveal';

export default function Services({ initialCategory = SERVICE_CATEGORIES.IT_SUPPORT }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const visibleServices = getServicesByCategory(activeCategory);

  useSectionReveal(sectionRef, '.services-header-reveal');

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-card-anim', {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section className="section-padded section-subtle" ref={sectionRef} id="our-services">
      <div className="container-avitaj">
        <div className="row align-items-end justify-content-between g-4 mb-5 services-header-reveal">
          <div className="col-lg-6">
            <span className="section-kicker">Our Services</span>
            <h2 className="section-heading mb-3">
              Comprehensive IT Infrastructure &amp; Digital Capabilities
            </h2>
            <p className="mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
              Select a service division below to explore SLA-backed IT operations or growth-focused
              digital engineering solutions.
            </p>
          </div>

          <div className="col-lg-auto">
            <div className="avitaj-tabs" role="tablist" aria-label="Service Categories">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === SERVICE_CATEGORIES.IT_SUPPORT}
                className={`avitaj-tab-btn ${
                  activeCategory === SERVICE_CATEGORIES.IT_SUPPORT ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(SERVICE_CATEGORIES.IT_SUPPORT)}
              >
                IT Support Services
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === SERVICE_CATEGORIES.DIGITAL_MARKETING}
                className={`avitaj-tab-btn ${
                  activeCategory === SERVICE_CATEGORIES.DIGITAL_MARKETING ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING)}
              >
                Digital Marketing Services
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4" ref={gridRef}>
          {visibleServices.map((service) => (
            <div className="col-md-6 col-lg-4 service-card-anim" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/services" className="btn-avitaj-secondary">
            <span>Browse Full Service Catalog</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
