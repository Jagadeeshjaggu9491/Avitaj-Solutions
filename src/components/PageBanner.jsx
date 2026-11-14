import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../utils/useGsapReveal';

export default function PageBanner({
  kicker,
  title,
  description,
  breadcrumbs = [],
  bannerImage,
  bannerAlt,
  actions = null,
}) {
  const bannerRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [bannerImage]);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.banner-anim', {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, bannerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section className="page-banner" ref={bannerRef}>
      <div className="container-avitaj">
        <div className="row align-items-center g-4 g-lg-5">
          <div className={bannerImage ? 'col-lg-7' : 'col-lg-9'}>
            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-3 banner-anim">
                <ol className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0 small">
                  <li>
                    <Link
                      to="/"
                      className="text-decoration-none fw-medium"
                      style={{ color: '#B4C9E4' }}
                    >
                      Home
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;
                    return (
                      <li key={crumb.label} className="d-flex align-items-center gap-2">
                        <ChevronRight
                          size={14}
                          style={{ color: '#8DABD0' }}
                          aria-hidden="true"
                        />
                        {isLast || !crumb.to ? (
                          <span className="fw-semibold" style={{ color: '#78D1FF' }}>
                            {crumb.label}
                          </span>
                        ) : (
                          <Link
                            to={crumb.to}
                            className="text-decoration-none fw-medium"
                            style={{ color: '#B4C9E4' }}
                          >
                            {crumb.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            {kicker && <span className="section-kicker banner-anim">{kicker}</span>}
            <h1
              className="hero-headline mb-3 banner-anim"
              style={{ fontSize: 'clamp(2rem, 3.3vw, 2.85rem)' }}
            >
              {title}
            </h1>
            {description && (
              <p className="lead-copy mb-0 banner-anim" style={{ maxWidth: '640px' }}>
                {description}
              </p>
            )}
            {actions && <div className="mt-4 d-flex flex-wrap gap-3 banner-anim">{actions}</div>}
          </div>

          {bannerImage && (
            <div className="col-lg-5 banner-anim">
              <div className="banner-media-frame">
                {!imgError ? (
                  <img
                    src={bannerImage}
                    alt={bannerAlt || title}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center p-4 text-center">
                    <span className="fw-semibold text-white">{title}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
