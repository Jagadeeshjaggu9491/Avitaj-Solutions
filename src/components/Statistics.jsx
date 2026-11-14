import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion, useSectionReveal } from '../utils/useGsapReveal';

const STATS = [
  {
    target: 99.98,
    decimals: 2,
    suffix: '%',
    label: 'Managed Infrastructure SLA Uptime',
    detail: 'Sustained across monitored servers, switches, and firewalls.',
  },
  {
    target: 350,
    decimals: 0,
    suffix: '+',
    label: 'Multi-Site IT Rollouts Completed',
    detail: 'Branch openings, POS upgrades, and structured cabling builds.',
  },
  {
    target: 15,
    decimals: 0,
    prefix: '< ',
    suffix: ' min',
    label: 'Priority Incident Triage Time',
    detail: '24/7 Service Desk & SOC escalation response commitment.',
  },
  {
    target: 96,
    decimals: 0,
    suffix: '%',
    label: 'Client Satisfaction Score',
    detail: 'Verified across enterprise support tickets and project handoffs.',
  },
];

export default function Statistics() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, '.stat-card-reveal');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const counters = el.querySelectorAll('.stat-counter-num');
      counters.forEach((node) => {
        const target = parseFloat(node.dataset.target || '0');
        const decimals = parseInt(node.dataset.decimals || '0', 10);
        const prefix = node.dataset.prefix || '';
        const suffix = node.dataset.suffix || '';
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          },
          onUpdate: () => {
            node.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padded section-navy" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row justify-content-between align-items-end g-4 mb-5 stat-card-reveal">
          <div className="col-lg-6">
            <span className="section-kicker" style={{ color: '#78D1FF' }}>
              Operational Benchmarks
            </span>
            <h2 className="section-heading text-white mb-0">
              Proven Delivery Numbers Backed by Strict Governance
            </h2>
          </div>
          <div className="col-lg-5">
            <p className="mb-0" style={{ color: '#C8DBFA' }}>
              We measure every engagement against clear uptime, resolution speed, and pipeline
              outcomes.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {STATS.map((stat) => (
            <div className="col-sm-6 col-lg-3 stat-card-reveal" key={stat.label}>
              <div className="stats-card">
                <div className="stats-accent-bar" />
                <div
                  className="stats-value tabular-nums stat-counter-num"
                  data-target={stat.target}
                  data-decimals={stat.decimals}
                  data-prefix={stat.prefix || ''}
                  data-suffix={stat.suffix || ''}
                >
                  {stat.prefix || ''}
                  {stat.target.toFixed(stat.decimals)}
                  {stat.suffix}
                </div>
                <div
                  className="fw-semibold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontSize: '1rem' }}
                >
                  {stat.label}
                </div>
                <p className="mb-0 small" style={{ color: '#B4C9E4' }}>
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
