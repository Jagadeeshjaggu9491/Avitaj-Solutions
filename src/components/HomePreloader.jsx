import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/useGsapReveal';

let hasShownHomePreloader = false;

export default function HomePreloader() {
  const [visible, setVisible] = useState(() => !hasShownHomePreloader && !prefersReducedMotion());
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    hasShownHomePreloader = true;

    const fadeTimer = setTimeout(() => {
      setLeaving(true);
    }, 620);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 980);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`home-preloader ${leaving ? 'is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading AVITAJ SOLUTIONS"
    >
      <img
        src="/assets/aistudio/avitaj-logo-official_91131e8d.jpeg"
        alt="AVITAJ SOLUTIONS"
        style={{
          height: '112px',
          width: 'auto',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
        }}
        width="112"
        height="112"
      />
      <div className="preloader-progress-track" aria-hidden="true">
        <div className="preloader-progress-bar" />
      </div>
    </div>
  );
}
