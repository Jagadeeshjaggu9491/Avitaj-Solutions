import { useRef, useState } from 'react';
import { SearchCheck, Layers, Rocket, ShieldCheck } from 'lucide-react';
import { useSectionReveal } from '../utils/useGsapReveal';

const STEPS = [
  {
    number: '01',
    icon: SearchCheck,
    title: 'Discovery & Infrastructure Audit',
    description:
      'We evaluate your network topology, hardware inventory, security posture, and digital footprint to uncover risk points and quick wins.',
    output: 'Topology & Risk Baseline',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Architecture & SLA Blueprint',
    description:
      'Our solutions architects deliver a clear implementation roadmap with fixed milestones, defined SLAs, and transparent cost forecasting.',
    output: 'Deployment & SLA Roadmap',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Disciplined Rollout & Cutover',
    description:
      'Certified engineers execute cabling, server staging, security hardening, or digital launches during planned windows with zero operational disruption.',
    output: 'Zero-Downtime Go-Live',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: '24/7 Governance & Optimization',
    description:
      'Continuous monitoring, quarterly executive reviews, and proactive lifecycle upgrades ensure your technology scales ahead of demand.',
    output: 'Quarterly Executive Reviews',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  useSectionReveal(sectionRef, '.process-reveal');

  return (
    <section className="section-padded section-white" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row justify-content-between align-items-end g-4 mb-5 process-reveal">
          <div className="col-lg-6">
            <span className="section-kicker">Our Working Process</span>
            <h2 className="section-heading mb-0">
              A Structured Methodology Built for Predictable Execution
            </h2>
          </div>
          <div className="col-lg-5">
            <p className="mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
              Every IT engagement and digital transformation follows a four-stage governance cycle
              that eliminates guesswork and keeps stakeholders informed.
            </p>
          </div>
        </div>

        <div className="process-timeline-wrap">
          <div className="process-connector-line d-none d-lg-block" aria-hidden="true" />

          <div className="row g-4">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  className={`col-sm-6 col-lg-3 process-reveal process-step-col ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="text-lg-center">
                    <span className="process-node-badge tabular-nums">{step.number}</span>
                  </div>

                  <div className="process-modern-card">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: '38px',
                          height: '38px',
                          backgroundColor: 'var(--avitaj-surface-soft)',
                          color: 'var(--avitaj-blue)',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <span
                        className="small fw-bold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-blue)' }}
                      >
                        Stage {step.number}
                      </span>
                    </div>

                    <h3
                      className="h5 fw-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mb-4 flex-grow-1"
                      style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.9125rem' }}
                    >
                      {step.description}
                    </p>

                    <div
                      className="pt-3 border-top small fw-semibold"
                      style={{
                        borderColor: 'var(--avitaj-border)',
                        color: 'var(--avitaj-navy)',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      Outcome: {step.output}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
