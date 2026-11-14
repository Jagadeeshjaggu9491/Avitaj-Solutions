import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../utils/useGsapReveal';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-kicker', { y: 16, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' })
        .from('.hero-title-anim', { y: 24, opacity: 0, duration: 0.65, clearProps: 'transform,opacity' }, '-=0.3')
        .from('.hero-copy-anim', { y: 18, opacity: 0, duration: 0.55, clearProps: 'transform,opacity' }, '-=0.35')
        .from('.hero-cta-anim', { y: 16, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (prefersReducedMotion()) {
      videoEl.pause();
    } else {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Full-Bleed Background Video */}
      <video
        ref={videoRef}
        className="hero-bg-video"
        autoPlay={!prefersReducedMotion()}
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/aistudio/global-connection-globe_1ab4b97e.jpg"
        aria-hidden="true"
        width="1280"
        height="720"
      >
        <source src="/assets/hero-enterprise-network.mp4" type="video/mp4" />
      </video>

      {/* Measured Contrast Overlay */}
      <div className="hero-bg-scrim" aria-hidden="true" />

      {/* Centered Content */}
      <div className="container-avitaj position-relative" style={{ zIndex: 2 }}>
        <div className="hero-centered-content text-center mx-auto">
          <span className="section-kicker hero-kicker">
            Enterprise IT Operations &amp; Digital Solutions
          </span>
          <h1 className="hero-headline mb-4 hero-title-anim">
            Resilient IT Infrastructure &amp; Digital Growth Built for Scale
          </h1>
          <p className="lead-copy mb-4 mx-auto hero-copy-anim" style={{ maxWidth: '680px' }}>
            AVITAJ SOLUTIONS delivers 24/7 managed IT services, Cisco network engineering,
            zero-trust cybersecurity, data center smart hands, and performance-driven digital
            marketing from one accountable partner.
          </p>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 hero-actions-stack hero-cta-anim">
            <Link to="/contact" className="btn-avitaj-white">
              <span>Schedule Consultation</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn-avitaj-outline-white">
              Explore Our Services
            </Link>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-4 mt-4 pt-2 hero-cta-anim">
            <div className="d-flex align-items-center gap-2 small" style={{ color: '#E2EEFC' }}>
              <ShieldCheck size={18} style={{ color: '#78D1FF' }} aria-hidden="true" />
              <span>ITIL v4 &amp; NIST 800-88 Aligned</span>
            </div>
            <span className="small d-none d-sm-inline" style={{ color: '#8DABD0' }}>
              ·
            </span>
            <div className="small fw-semibold tabular-nums" style={{ color: '#FFFFFF' }}>
              99.98% SLA Uptime &amp; 24/7 Proactive Monitoring
            </div>
            <span className="small d-none d-sm-inline" style={{ color: '#8DABD0' }}>
              ·
            </span>
            <div className="small fw-semibold" style={{ color: '#FFFFFF' }}>
              End-to-End IT &amp; Digital Solutions
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
