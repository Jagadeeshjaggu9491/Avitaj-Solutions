import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';
import ServiceIcon from '../components/ServiceIcon';
import { getServiceBanner } from '../data/serviceBanners';
import { getServiceBySlug, getServicesByCategory } from '../data/servicesData';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const seoTitle = service
    ? `${service.title} | AVITAJ SOLUTIONS`.length <= 60
      ? `${service.title} | AVITAJ SOLUTIONS`
      : `${service.title} | AVITAJ`
    : 'Service Not Found | AVITAJ SOLUTIONS';

  const seoDescription = service
    ? `${service.shortDescription} Explore SLA deliverables from AVITAJ SOLUTIONS.`
    : 'Explore enterprise IT support and digital marketing services from AVITAJ SOLUTIONS in Bengaluru. Contact us to request a custom SLA proposal.';

  const serviceSchema = service
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: service.title,
            serviceType: service.category,
            description: service.heroSummary,
            provider: {
              '@type': 'Organization',
              name: 'AVITAJ SOLUTIONS',
              telephone: '+91 97415 80987',
              email: 'info@avitajsolutions.com',
            },
            areaServed: 'IN',
          },
          ...(service.faqs?.length
            ? [
                {
                  '@type': 'FAQPage',
                  mainEntity: service.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.a,
                    },
                  })),
                },
              ]
            : []),
        ],
      }
    : null;

  useDocumentMeta(seoTitle, seoDescription, { schema: serviceSchema });

  if (!service) {
    const notFoundBanner = getServiceBanner(null);
    return (
      <>
        <PageBanner
          kicker="Service Catalog"
          title="Service Practice Not Found"
          description="The requested service page could not be located. Browse our complete directory of IT and Digital services below."
          breadcrumbs={[{ label: 'Services', to: '/services' }, { label: 'Not Found' }]}
          bannerImage={notFoundBanner.src}
          bannerAlt={notFoundBanner.alt}
        />
        <section className="section-padded section-white text-center">
          <div className="container-avitaj">
            <Link to="/services" className="btn-avitaj-primary">
              Return to All Services
            </Link>
          </div>
        </section>
      </>
    );
  }

  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const banner = getServiceBanner(service);

  return (
    <>
      <PageBanner
        kicker={service.category}
        title={service.title}
        description={service.heroSummary}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        bannerImage={banner.src}
        bannerAlt={banner.alt}
      />

      <section className="section-padded section-white">
        <div className="container-avitaj">
          <div className="row g-5">
            {/* Main Details */}
            <div className="col-lg-8">
              <div className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="avitaj-icon-box mb-0">
                    <ServiceIcon name={service.iconName} size={26} />
                  </div>
                  <div>
                    <div className="small fw-semibold" style={{ color: 'var(--avitaj-blue)' }}>
                      Service Standard: {service.slaMetric}
                    </div>
                    <h2 className="h4 fw-bold mb-0">Core Deliverables &amp; Scope</h2>
                  </div>
                </div>

                <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
                  {service.shortDescription}
                </p>

                <div className="row g-3">
                  {service.deliverables.map((item) => (
                    <div className="col-md-6" key={item}>
                      <div
                        className="p-3 rounded-3 border h-100 d-flex align-items-start gap-2"
                        style={{
                          borderColor: 'var(--avitaj-border)',
                          backgroundColor: 'var(--avitaj-surface-subtle)',
                        }}
                      >
                        <CheckCircle2
                          size={19}
                          style={{ color: 'var(--avitaj-blue)', marginTop: '2px', flexShrink: 0 }}
                          aria-hidden="true"
                        />
                        <span className="small fw-medium" style={{ color: 'var(--avitaj-text)' }}>
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Outcomes */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3">Operational Benefits</h2>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="p-3 rounded-3 border d-flex align-items-start gap-3 bg-white"
                      style={{ borderColor: 'var(--avitaj-border)' }}
                    >
                      <ShieldCheck
                        size={20}
                        style={{ color: 'var(--avitaj-navy)', marginTop: '2px', flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      <span style={{ color: 'var(--avitaj-text)' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="h4 fw-bold mb-3">Frequently Asked Questions</h2>
                <div className="d-flex flex-column gap-3">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div
                        key={faq.q}
                        className="border rounded-3 bg-white overflow-hidden"
                        style={{ borderColor: 'var(--avitaj-border)' }}
                      >
                        <button
                          type="button"
                          className="w-100 text-start p-3 px-4 bg-white border-0 d-flex align-items-center justify-content-between gap-3 fw-semibold"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--avitaj-text-strong)',
                          }}
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={18}
                            style={{
                              flexShrink: 0,
                              color: 'var(--avitaj-blue)',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }}
                            aria-hidden="true"
                          />
                        </button>
                        {isOpen && (
                          <div
                            className="px-4 pb-3 pt-1 small"
                            style={{ color: 'var(--avitaj-text-secondary)', lineHeight: '1.65' }}
                          >
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div
                className="rounded-4 p-4 mb-4 section-navy"
                style={{ boxShadow: 'var(--shadow-level-2)' }}
              >
                <span className="section-kicker" style={{ color: '#78D1FF' }}>
                  Engage Our Specialists
                </span>
                <h3 className="h4 fw-bold text-white mb-2">
                  Need {service.title}?
                </h3>
                <p className="small mb-4" style={{ color: '#C8DBFA' }}>
                  Request a tailored scope assessment, SLA coverage quote, or implementation
                  timeline from our solutions team.
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn-avitaj-white w-100"
                >
                  <span>Request Service Proposal</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>

              <div
                className="bg-white border rounded-4 p-4"
                style={{ borderColor: 'var(--avitaj-border)', boxShadow: 'var(--shadow-level-1)' }}
              >
                <h3 className="h6 fw-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Related {service.category}
                </h3>
                <div className="d-flex flex-column gap-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.slug}`}
                      className="p-3 rounded-3 border text-decoration-none d-flex align-items-center justify-content-between"
                      style={{
                        borderColor: 'var(--avitaj-border)',
                        backgroundColor: 'var(--avitaj-surface-subtle)',
                        color: 'var(--avitaj-text-strong)',
                      }}
                    >
                      <span className="small fw-semibold">{rel.title}</span>
                      <ArrowRight size={15} style={{ color: 'var(--avitaj-blue)' }} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
