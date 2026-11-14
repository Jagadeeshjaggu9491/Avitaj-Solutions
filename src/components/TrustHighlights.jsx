import { useRef } from 'react';
import { Clock, Shield, Globe2, Award } from 'lucide-react';
import { useSectionReveal } from '../utils/useGsapReveal';

const HIGHLIGHTS = [
  {
    icon: Clock,
    metric: '24/7/365',
    title: 'NOC & Service Desk',
    desc: 'Continuous infrastructure monitoring and rapid L1–L3 incident resolution.',
  },
  {
    icon: Shield,
    metric: 'Zero-Trust',
    title: 'Security Operations',
    desc: 'Hardened perimeter firewalls, managed EDR, and NIST-certified ITAD.',
  },
  {
    icon: Globe2,
    metric: 'Multi-Site',
    title: 'Field & Rollout Reach',
    desc: 'Coordinated hardware refreshes, structured cabling, and Smart Hands.',
  },
  {
    icon: Award,
    metric: 'Single SLA',
    title: 'IT & Digital Delivery',
    desc: 'One accountable partner from server racks to technical search growth.',
  },
];

export default function TrustHighlights() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.trust-reveal');

  return (
    <section className="trust-strip-section" ref={sectionRef} aria-label="Enterprise Trust Highlights">
      <div className="container-avitaj">
        <div className="row g-3 g-lg-4">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div className="col-sm-6 col-lg-3 trust-reveal" key={item.title}>
                <div className="trust-pillar-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="trust-icon-wrap">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <span
                      className="small fw-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-blue)' }}
                    >
                      {item.metric}
                    </span>
                  </div>

                  <h2
                    className="h6 fw-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="mb-0 small"
                    style={{ color: 'var(--avitaj-text-secondary)', lineHeight: '1.55' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
