import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Users } from 'lucide-react';
import careersImg from '../assets/images/careers_tech_studio_1794555230733.jpg';
import { useSectionReveal } from '../utils/useGsapReveal';

export default function Careers() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.careers-reveal');

  return (
    <section className="section-padded section-white" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 careers-reveal">
            <span className="section-kicker">Careers at AVITAJ SOLUTIONS</span>
            <h2 className="section-heading mb-3">
              Join a Team of Engineers, Architects, and Digital Specialists
            </h2>
            <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
              We invest heavily in technical certification sponsorships, collaborative engineering
              mentorship, and high-ownership enterprise projects across network infrastructure,
              cybersecurity, and digital consulting.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <div className="p-3 rounded-3 border" style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}>
                  <Award size={20} style={{ color: 'var(--avitaj-blue)' }} className="mb-2" aria-hidden="true" />
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Paid Certs
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    Cisco, CompTIA &amp; Cloud
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="p-3 rounded-3 border" style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}>
                  <Briefcase size={20} style={{ color: 'var(--avitaj-blue)' }} className="mb-2" aria-hidden="true" />
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Hybrid Flexibility
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    Remote &amp; Field Roles
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="p-3 rounded-3 border" style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}>
                  <Users size={20} style={{ color: 'var(--avitaj-blue)' }} className="mb-2" aria-hidden="true" />
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Growth Tracks
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    Clear L1 to Architect Paths
                  </div>
                </div>
              </div>
            </div>

            <Link to="/careers" className="btn-avitaj-primary">
              <span>Explore Open Positions</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="col-lg-6 careers-reveal">
            <div className="media-photo-frame">
              <img
                src={careersImg}
                alt="Systems engineers and digital consultants collaborating at AVITAJ SOLUTIONS"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="640"
                height="440"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
