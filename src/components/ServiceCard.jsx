import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import { SERVICE_CATEGORIES } from '../data/servicesData';

export default function ServiceCard({ service, showCategory = false }) {
  const highlights = service.deliverables ? service.deliverables.slice(0, 2) : [];

  return (
    <article className="service-modern-card">
      <div className="service-modern-header">
        <div className="service-modern-icon">
          <ServiceIcon name={service.iconName} size={22} />
        </div>
        <div className="text-end">
          {showCategory && (
            <div
              className="small mb-1"
              style={{ fontSize: '0.72rem', color: 'var(--avitaj-text-secondary)' }}
            >
              {service.category === SERVICE_CATEGORIES.IT_SUPPORT
                ? 'IT Support'
                : 'Digital Marketing'}
            </div>
          )}
          <span className="service-modern-sla">{service.slaMetric}</span>
        </div>
      </div>

      <div className="service-modern-body">
        <h3
          className="h5 fw-bold mb-2"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
        >
          {service.title}
        </h3>
        <p
          className="mb-3"
          style={{
            color: 'var(--avitaj-text-secondary)',
            fontSize: '0.9125rem',
            lineHeight: '1.6',
          }}
        >
          {service.shortDescription}
        </p>

        {highlights.length > 0 && (
          <div className="service-deliverables-box">
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="d-flex align-items-start gap-2"
                  style={{ fontSize: '0.8125rem', color: 'var(--avitaj-text)' }}
                >
                  <Check
                    size={15}
                    style={{ color: 'var(--avitaj-blue)', marginTop: '3px', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to={`/services/${service.slug}`} className="service-modern-footer">
        <span>Explore Service</span>
        <span className="service-footer-arrow" aria-hidden="true">
          <ArrowRight size={15} />
        </span>
      </Link>
    </article>
  );
}
