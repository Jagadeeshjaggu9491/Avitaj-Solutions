import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about_enterprise_team_1794555230408.jpg';
import { useSectionReveal } from '../utils/useGsapReveal';

const PILLARS = [
  'Certified Cisco, Microsoft, and cloud infrastructure engineers',
  'Dedicated regional field technicians for break-fix, cabling, and rollouts',
  'Full hardware lifecycle management from stock warehousing to ITAD',
  'Conversion-focused web development, SEO, and digital consulting teams',
];

export default function About({ showFullButton = true }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.about-reveal');

  return (
    <section className="section-padded section-white" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-6 about-reveal">
            <div className="media-photo-frame">
              <img
                src={aboutImg}
                alt="AVITAJ SOLUTIONS infrastructure architects reviewing enterprise topology blueprints"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="640"
                height="480"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 about-reveal">
            <span className="section-kicker">About AVITAJ SOLUTIONS</span>
            <h2 className="section-heading mb-3">
              Bridging Enterprise Infrastructure Reliability with Modern Digital Agility
            </h2>
            <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
              Modern organizations should not have to coordinate fragmented vendors across physical
              cabling, data center hardware, 24/7 end-user support, and customer-facing digital
              channels. AVITAJ SOLUTIONS brings these disciplines together under a single,
              accountable engineering and consultancy framework.
            </p>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
              {PILLARS.map((point) => (
                <li key={point} className="d-flex align-items-start gap-2">
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--avitaj-blue)', marginTop: '2px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span style={{ color: 'var(--avitaj-text)' }}>{point}</span>
                </li>
              ))}
            </ul>

            {showFullButton && (
              <div className="pt-2">
                <Link to="/about" className="btn-avitaj-primary">
                  <span>Discover Our Story</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
