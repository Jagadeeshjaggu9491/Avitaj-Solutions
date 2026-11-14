import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import servicesBannerImg from '../assets/images/banner_services_it_1794630829635.jpg';
import { SERVICE_CATEGORIES, servicesData } from '../data/servicesData';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function ServicesPage() {
  useDocumentMeta(
    'IT Support & Digital Marketing Services | AVITAJ SOLUTIONS',
    'Browse managed IT services, network security, Cisco engineering, data center support, structured cabling, SEO, and web development at AVITAJ SOLUTIONS.'
  );

  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        categoryFilter === 'ALL' || service.category === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  return (
    <>
      <PageBanner
        kicker="Our Services"
        title="Enterprise IT Support & Digital Marketing Practices"
        description="Modular, SLA-governed capabilities engineered to stabilize infrastructure, harden cybersecurity, and accelerate digital revenue."
        breadcrumbs={[{ label: 'Services' }]}
        bannerImage={servicesBannerImg}
        bannerAlt="Modern enterprise data center server infrastructure"
      />

      <section className="section-padded section-subtle">
        <div className="container-avitaj">
          {/* Controls Bar */}
          <div className="row g-3 align-items-center justify-content-between mb-5">
            <div className="col-lg-auto">
              <div className="avitaj-tabs" role="tablist" aria-label="Filter services by category">
                <button
                  type="button"
                  role="tab"
                  aria-selected={categoryFilter === 'ALL'}
                  className={`avitaj-tab-btn ${categoryFilter === 'ALL' ? 'active' : ''}`}
                  onClick={() => setCategoryFilter('ALL')}
                >
                  All Services
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={categoryFilter === SERVICE_CATEGORIES.IT_SUPPORT}
                  className={`avitaj-tab-btn ${
                    categoryFilter === SERVICE_CATEGORIES.IT_SUPPORT ? 'active' : ''
                  }`}
                  onClick={() => setCategoryFilter(SERVICE_CATEGORIES.IT_SUPPORT)}
                >
                  IT Support Services
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={categoryFilter === SERVICE_CATEGORIES.DIGITAL_MARKETING}
                  className={`avitaj-tab-btn ${
                    categoryFilter === SERVICE_CATEGORIES.DIGITAL_MARKETING ? 'active' : ''
                  }`}
                  onClick={() => setCategoryFilter(SERVICE_CATEGORIES.DIGITAL_MARKETING)}
                >
                  Digital Marketing
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="position-relative">
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--avitaj-text-secondary)',
                  }}
                  aria-hidden="true"
                />
                <input
                  type="search"
                  className="avitaj-input"
                  style={{ paddingLeft: '42px' }}
                  placeholder="Filter services by keyword..."
                  aria-label="Search services"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="bg-white border rounded-4 p-5 text-center" style={{ borderColor: 'var(--avitaj-border)' }}>
              <h2 className="h5 fw-bold mb-2">No matching services found</h2>
              <p className="mb-3" style={{ color: 'var(--avitaj-text-secondary)' }}>
                Try clearing your search term or selecting all categories.
              </p>
              <button
                type="button"
                className="btn-avitaj-secondary"
                onClick={() => {
                  setCategoryFilter('ALL');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredServices.map((service) => (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <ServiceCard service={service} showCategory />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
