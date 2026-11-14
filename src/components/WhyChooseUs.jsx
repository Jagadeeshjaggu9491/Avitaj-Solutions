import { useRef } from 'react';
import {
  ShieldCheck,
  Zap,
  Layers,
  Headphones,
  ClipboardCheck,
  TrendingUp,
} from 'lucide-react';
import { useSectionReveal } from '../utils/useGsapReveal';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Zero-Compromise Security & Compliance',
    description:
      'Every network deployment, endpoint agent, and retired hard drive follows strict Zero-Trust, ITIL v4, and NIST 800-88 verification.',
  },
  {
    icon: Zap,
    title: 'Rapid Onsite & Remote Response',
    description:
      'Distributed field technicians and 24/7 remote engineers resolve critical incidents quickly without multi-day vendor queues.',
  },
  {
    icon: Layers,
    title: 'Single-Partner Lifecycle Coverage',
    description:
      'From initial Cat6A structured cabling and hardware warehousing to daily service desk operations and ITAD disposal.',
  },
  {
    icon: Headphones,
    title: 'Transparent SLA Accountability',
    description:
      'Clear response metrics, executive monthly reporting, and documented root-cause analysis on every recurring issue.',
  },
  {
    icon: ClipboardCheck,
    title: 'Multi-Vendor Engineering Depth',
    description:
      'Certified expertise spanning Cisco Catalyst/Meraki, Microsoft 365, cloud workloads, and major enterprise server platforms.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Digital ROI',
    description:
      'Our web engineering and technical SEO teams connect infrastructure reliability with quantifiable customer pipeline growth.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.why-reveal');

  return (
    <section className="section-padded section-white" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row justify-content-center text-center mb-5 why-reveal">
          <div className="col-lg-7">
            <span className="section-kicker">Why Choose Us</span>
            <h2 className="section-heading mb-3">
              Engineered for Enterprise Uptime and Measurable Growth
            </h2>
            <p className="mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
              Organizations trust AVITAJ SOLUTIONS because we combine disciplined field engineering,
              security rigor, and responsive client communication.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div className="col-md-6 col-lg-4 why-reveal" key={reason.title}>
                <div className="avitaj-card">
                  <div className="avitaj-icon-box">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="mb-0"
                    style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.9375rem' }}
                  >
                    {reason.description}
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
