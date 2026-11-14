import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ctaVisualImg from '../assets/images/hero_noc_clean_1794555250060.jpg';
import { useSectionReveal } from '../utils/useGsapReveal';

export default function CTA() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.cta-reveal');

  return (
    <section className="section-padded section-soft" ref={sectionRef}>
      <div className="container-avitaj">
        <div
          className="rounded-4 p-4 p-md-5 section-navy cta-reveal"
          style={{ boxShadow: 'var(--shadow-level-2)' }}
        >
          <div className="row align-items-center justify-content-between g-4 g-lg-5">
            <div className="col-lg-7">
              <span className="section-kicker" style={{ color: '#78D1FF' }}>
                Ready to Modernize Your Operations?
              </span>
              <h2 className="section-heading text-white mb-3">
                Partner with AVITAJ SOLUTIONS for Dependable IT &amp; Digital Execution
              </h2>
              <p className="mb-4" style={{ color: '#C8DBFA', maxWidth: '580px' }}>
                Speak directly with our solutions architects about managed IT SLAs, Cisco network
                engineering, multi-site rollouts, or high-performing web and SEO programs.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn-avitaj-white">
                  <span>Request Architecture Review</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to="/services" className="btn-avitaj-outline-white">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="banner-media-frame"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px -10px rgba(3, 22, 42, 0.45)',
                }}
              >
                <img
                  src={ctaVisualImg}
                  alt="AVITAJ SOLUTIONS executive briefing center and client consultation hub"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="640"
                  height="360"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
