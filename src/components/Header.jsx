import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  ServerCog,
  TrendingUp,
  PhoneCall,
} from 'lucide-react';
import { SERVICE_CATEGORIES, getServicesByCategory } from '../data/servicesData';
import ServiceIcon from './ServiceIcon';

function SupportAgentIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ color: '#2B72D6', flexShrink: 0 }}
    >
      {/* Speech Bubble */}
      <path
        d="M11 8.5C7.686 8.5 5 10.962 5 14C5 15.63 5.774 17.095 7.015 18.105L6.5 21L9.65 19.34C10.088 19.444 10.538 19.5 11 19.5C14.314 19.5 17 17.038 17 14C17 10.962 14.314 8.5 11 8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8.7" cy="14" r="0.9" fill="currentColor" />
      <circle cx="11" cy="14" r="0.9" fill="currentColor" />
      <circle cx="13.3" cy="14" r="0.9" fill="currentColor" />

      {/* Support Specialist Head & Headset */}
      <path
        d="M20 18.5C20 13.806 23.806 10 28.5 10C33.194 10 37 13.806 37 18.5V22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="28.5" cy="18.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M23.5 17.5C25.5 15.5 31 15.5 33.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="35.5" y="17.5" width="3" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M36 22.5C35.2 24.4 33 25 30.2 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Shoulders & Laptop */}
      <path
        d="M18.5 34.5C18.5 30.2 22 27.5 26 27.5H31C35 27.5 38.5 30.2 38.5 34.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect
        x="20.5"
        y="32"
        width="16"
        height="10.5"
        rx="1.8"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="28.5" cy="37.2" r="1.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 42.5H41" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES.IT_SUPPORT);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const itServices = getServicesByCategory(SERVICE_CATEGORIES.IT_SUPPORT);
  const dmServices = getServicesByCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING);
  const activeServices =
    activeCategory === SERVICE_CATEGORIES.IT_SUPPORT ? itServices : dmServices;

  const openServicesMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-avitaj">
          <div className="header-inner">
            {/* Zone 1: Official Brand Logo */}
            <Link to="/" className="brand-logo-link" aria-label="AVITAJ SOLUTIONS Home">
              <img
                src="/assets/aistudio/avitaj-logo-official_91131e8d.jpeg"
                alt="AVITAJ SOLUTIONS"
                className="brand-logo-img"
                width="56"
                height="56"
              />
            </Link>

            {/* Zone 2: Centered Uppercase Navigation */}
            <nav className="desktop-nav d-none d-lg-flex" aria-label="Primary Navigation">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>

              <div
                className="services-dropdown-wrap"
                ref={dropdownRef}
                onMouseEnter={openServicesMenu}
                onMouseLeave={scheduleCloseServicesMenu}
              >
                <button
                  type="button"
                  className={`nav-link-item ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  <span>Our Services</span>
                  <ChevronDown
                    size={15}
                    style={{
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                    aria-hidden="true"
                  />
                </button>

                {servicesOpen && (
                  <div className="services-megamenu" role="menu" aria-label="Services Menu">
                    <div className="services-megamenu-panel">
                      <div className="megamenu-layout">
                        {/* Left Practice Rail */}
                        <div className="megamenu-rail">
                          <div>
                            <div className="megamenu-rail-kicker">Practice Areas</div>
                            <div className="d-flex flex-column gap-2" role="tablist" aria-label="Service Categories">
                              <button
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === SERVICE_CATEGORIES.IT_SUPPORT}
                                className={`megamenu-practice-btn ${
                                  activeCategory === SERVICE_CATEGORIES.IT_SUPPORT ? 'is-active' : ''
                                }`}
                                onMouseEnter={() => setActiveCategory(SERVICE_CATEGORIES.IT_SUPPORT)}
                                onFocus={() => setActiveCategory(SERVICE_CATEGORIES.IT_SUPPORT)}
                                onClick={() => setActiveCategory(SERVICE_CATEGORIES.IT_SUPPORT)}
                              >
                                <span className="megamenu-practice-icon">
                                  <ServerCog size={18} aria-hidden="true" />
                                </span>
                                <span className="megamenu-practice-copy">
                                  <span className="megamenu-practice-title">IT Support Services</span>
                                  <span className="megamenu-practice-desc">
                                    24/7 NOC, cybersecurity, networking &amp; smart hands
                                  </span>
                                </span>
                                <ChevronRight size={16} className="megamenu-practice-arrow" aria-hidden="true" />
                              </button>

                              <button
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === SERVICE_CATEGORIES.DIGITAL_MARKETING}
                                className={`megamenu-practice-btn ${
                                  activeCategory === SERVICE_CATEGORIES.DIGITAL_MARKETING ? 'is-active' : ''
                                }`}
                                onMouseEnter={() => setActiveCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING)}
                                onFocus={() => setActiveCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING)}
                                onClick={() => setActiveCategory(SERVICE_CATEGORIES.DIGITAL_MARKETING)}
                              >
                                <span className="megamenu-practice-icon">
                                  <TrendingUp size={18} aria-hidden="true" />
                                </span>
                                <span className="megamenu-practice-copy">
                                  <span className="megamenu-practice-title">Digital Marketing</span>
                                  <span className="megamenu-practice-desc">
                                    SEO, web engineering, content &amp; growth consulting
                                  </span>
                                </span>
                                <ChevronRight size={16} className="megamenu-practice-arrow" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="megamenu-cta-card">
                            <div className="megamenu-cta-title">Need a tailored SLA plan?</div>
                            <p className="megamenu-cta-copy mb-3">
                              Consult directly with our Bengaluru engineering &amp; digital strategy desk.
                            </p>
                            <div className="d-flex flex-column gap-2">
                              <Link
                                to="/contact"
                                className="megamenu-cta-link"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span>Schedule Consultation</span>
                                <ArrowRight size={14} aria-hidden="true" />
                              </Link>
                              <a
                                href="tel:+919741580987"
                                className="megamenu-cta-phone tabular-nums"
                                onClick={() => setServicesOpen(false)}
                              >
                                <PhoneCall size={13} aria-hidden="true" />
                                <span>+91 97415 80987</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Right Capabilities Grid */}
                        <div className="megamenu-main">
                          <div className="megamenu-main-header">
                            <div>
                              <div className="megamenu-main-title">{activeCategory}</div>
                              <div className="megamenu-main-subtitle">
                                {activeCategory === SERVICE_CATEGORIES.IT_SUPPORT
                                  ? 'Enterprise infrastructure, security operations, and certified field deployment'
                                  : 'Search visibility, modern web platforms, and full-funnel digital growth'}
                              </div>
                            </div>
                            <Link
                              to="/services"
                              className="btn-avitaj-ghost flex-shrink-0"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span>All Services</span>
                              <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                          </div>

                          <div className="megamenu-services-grid" role="tabpanel">
                            {activeServices.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="megamenu-service-tile"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span className="megamenu-tile-icon">
                                  <ServiceIcon name={service.iconName} size={17} />
                                </span>
                                <span className="megamenu-tile-content">
                                  <span className="megamenu-tile-title">{service.title}</span>
                                  <span className="megamenu-tile-meta">{service.slaMetric}</span>
                                </span>
                                <ArrowRight size={14} className="megamenu-tile-arrow" aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/careers"
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                Join Our Team
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Zone 3: Call Us Today Support Block & Mobile Hamburger */}
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <a
                href="tel:+919741580987"
                className="header-call-box d-none d-lg-inline-flex"
                aria-label="Call AVITAJ SOLUTIONS at +91 97415 80987"
              >
                <SupportAgentIcon />
                <span className="header-call-divider" aria-hidden="true" />
                <div>
                  <div className="header-call-label">Call us today!</div>
                  <div className="header-call-number tabular-nums">+91 97415 80987</div>
                </div>
              </a>

              <button
                type="button"
                className="btn d-lg-none d-inline-flex align-items-center justify-content-center border"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  borderColor: 'var(--avitaj-border)',
                  backgroundColor: 'var(--avitaj-white)',
                  color: 'var(--avitaj-navy)',
                }}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="avitajMobileOffcanvas"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bootstrap Offcanvas Mobile Navigation */}
      {mobileOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="avitajMobileOffcanvas"
        className={`offcanvas offcanvas-end ${mobileOpen ? 'show' : ''}`}
        tabIndex="-1"
        aria-labelledby="avitajMobileOffcanvasLabel"
        aria-modal={mobileOpen ? 'true' : undefined}
        role="dialog"
        style={{
          visibility: mobileOpen ? 'visible' : 'hidden',
          width: 'min(360px, 88vw)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="offcanvas-header border-bottom px-4 py-3">
          <Link
            to="/"
            id="avitajMobileOffcanvasLabel"
            className="brand-logo-link"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/assets/aistudio/avitaj-logo-official_91131e8d.jpeg"
              alt="AVITAJ SOLUTIONS"
              className="brand-logo-img"
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>
          <button
            type="button"
            className="btn d-inline-flex align-items-center justify-content-center p-2"
            style={{ color: 'var(--avitaj-navy)' }}
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="offcanvas-body px-4 py-4 d-flex flex-column justify-content-between">
          <nav aria-label="Mobile Navigation" className="d-flex flex-column gap-2">
            <NavLink
              to="/"
              end
              className="py-2 px-2 fw-semibold text-decoration-none text-uppercase small"
              style={({ isActive }) => ({
                color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
              })}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="py-2 px-2 fw-semibold text-decoration-none text-uppercase small"
              style={({ isActive }) => ({
                color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
              })}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </NavLink>

            <div>
              <div className="d-flex align-items-center justify-content-between py-2 px-2">
                <NavLink
                  to="/services"
                  className="fw-semibold text-decoration-none text-uppercase small"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.03em',
                  })}
                  onClick={() => setMobileOpen(false)}
                >
                  Our Services
                </NavLink>
                <button
                  type="button"
                  className="btn btn-sm p-1"
                  aria-label="Toggle services submenu"
                  aria-expanded={mobileServicesExpanded}
                  onClick={() => setMobileServicesExpanded((p) => !p)}
                >
                  <ChevronDown
                    size={18}
                    style={{
                      transform: mobileServicesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
              </div>

              {mobileServicesExpanded && (
                <div className="ps-3 pb-2 d-flex flex-column gap-1">
                  <span
                    className="small fw-bold mt-1 mb-1"
                    style={{ color: 'var(--avitaj-blue)' }}
                  >
                    IT Support Services
                  </span>
                  {itServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="py-1 small text-decoration-none"
                      style={{ color: 'var(--avitaj-text-secondary)' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <span
                    className="small fw-bold mt-2 mb-1"
                    style={{ color: 'var(--avitaj-blue)' }}
                  >
                    Digital Marketing Services
                  </span>
                  {dmServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="py-1 small text-decoration-none"
                      style={{ color: 'var(--avitaj-text-secondary)' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/careers"
              className="py-2 px-2 fw-semibold text-decoration-none text-uppercase small"
              style={({ isActive }) => ({
                color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
              })}
              onClick={() => setMobileOpen(false)}
            >
              Join Our Team
            </NavLink>

            <NavLink
              to="/blog"
              className="py-2 px-2 fw-semibold text-decoration-none text-uppercase small"
              style={({ isActive }) => ({
                color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
              })}
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="py-2 px-2 fw-semibold text-decoration-none text-uppercase small"
              style={({ isActive }) => ({
                color: isActive ? 'var(--avitaj-blue)' : 'var(--avitaj-text-strong)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.03em',
              })}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="pt-4 border-top mt-4">
            <a
              href="tel:+919741580987"
              className="header-call-box w-100 justify-content-start p-3 rounded-3 border"
              style={{
                borderColor: 'var(--avitaj-border)',
                backgroundColor: 'var(--avitaj-surface-subtle)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              <SupportAgentIcon />
              <span className="header-call-divider" aria-hidden="true" />
              <div>
                <div className="header-call-label">Call us today!</div>
                <div className="header-call-number tabular-nums">+91 97415 80987</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
