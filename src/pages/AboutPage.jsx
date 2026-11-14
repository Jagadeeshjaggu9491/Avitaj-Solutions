import { Target, Eye, ShieldCheck, Globe } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import aboutBannerImg from '../assets/images/banner_digital_consultancy_1794555232404.jpg';
import { useDocumentMeta } from '../utils/useDocumentMeta';

const VALUES = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Deliver resilient, standards-driven IT infrastructure and digital engineering that eliminate downtime and compound business velocity.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted single-partner consultancy bridging enterprise physical IT operations with high-performance digital growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Integrity',
    description:
      'Transparent SLA reporting, audited NIST 800-88 hardware disposition, and Zero-Trust network design built into every engagement.',
  },
  {
    icon: Globe,
    title: 'Scalable Reach',
    description:
      'Synchronized field engineering and remote support operations capable of supporting single offices or 200+ national branch locations.',
  },
];

export default function AboutPage() {
  useDocumentMeta(
    'About AVITAJ SOLUTIONS | IT Engineering & Digital Team',
    'Discover how AVITAJ SOLUTIONS unites 24/7 managed IT infrastructure, NIST 800-88 compliance, and digital growth consulting under one engineering team.'
  );

  return (
    <>
      <PageBanner
        kicker="About Us"
        title="Engineering Trust Across Physical Infrastructure and Digital Platforms"
        description="AVITAJ SOLUTIONS was built to give growing and enterprise organizations one accountable engineering partner for IT reliability and digital expansion."
        breadcrumbs={[{ label: 'About Us' }]}
        bannerImage={aboutBannerImg}
        bannerAlt="AVITAJ SOLUTIONS corporate engineering and digital consultancy headquarters"
      />

      <About showFullButton={false} />

      <section className="section-padded section-subtle">
        <div className="container-avitaj">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <span className="section-kicker">Core Principles</span>
              <h2 className="section-heading mb-2">Mission, Vision &amp; Operational Values</h2>
              <p className="mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
                The architectural standards guiding every ticket, deployment, and digital launch.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div className="col-md-6 col-lg-3" key={val.title}>
                  <div className="avitaj-card">
                    <div className="avitaj-icon-box">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3
                      className="h5 fw-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      {val.title}
                    </h3>
                    <p
                      className="mb-0"
                      style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.9375rem' }}
                    >
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Statistics />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
