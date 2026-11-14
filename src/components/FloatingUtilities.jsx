import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '919741580987';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello AVITAJ SOLUTIONS, I would like to discuss your IT Support and Digital Services.'
);

export default function FloatingUtilities() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 360);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions-stack" aria-label="Quick navigation and messaging actions">
      {showTop && (
        <button
          type="button"
          className="btn-scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}

      <div className="whatsapp-float-wrap">
        <span className="whatsapp-hover-label" aria-hidden="true">
          Need Help? <strong>Chat with us</strong>
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-float whatsapp-breathe"
          aria-label="Need Help? Chat with us on WhatsApp"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.031 2C6.51 2 2.031 6.479 2.031 12c0 1.766.462 3.49 1.339 5.012L2 22l5.119-1.341A9.95 9.95 0 0 0 12.031 22c5.522 0 10-4.478 10-10S17.553 2 12.031 2zm5.822 14.179c-.246.693-1.434 1.326-1.995 1.404-.508.071-1.168.101-1.883-.125-.434-.138-.993-.321-1.703-.627-2.996-1.294-4.951-4.324-5.101-4.524-.15-.2-1.216-1.618-1.216-3.086 0-1.468.768-2.189 1.041-2.489.272-.3.594-.375.792-.375.198 0 .396.002.569.01.183.009.429-.07.672.513.247.594.841 2.054.915 2.204.074.15.124.325.025.525-.099.2-.149.325-.297.5-.148.175-.313.39-.446.525-.149.15-.304.312-.131.611.173.3.77 1.27 1.654 2.059 1.137 1.015 2.096 1.329 2.393 1.479.297.15.47.125.643-.075.173-.2.742-.867.94-1.167.198-.3.396-.25.668-.15.272.1 1.732.817 2.029.967.297.15.495.225.569.35.075.125.075.724-.171 1.417z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
