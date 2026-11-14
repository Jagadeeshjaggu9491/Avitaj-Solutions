import HomePreloader from '../components/HomePreloader';
import Hero from '../components/Hero';
import TrustHighlights from '../components/TrustHighlights';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Careers from '../components/Careers';
import Statistics from '../components/Statistics';
import Clients from '../components/Clients';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function Home() {
  useDocumentMeta(
    'AVITAJ SOLUTIONS | Managed IT & Digital Growth Services',
    'AVITAJ SOLUTIONS delivers 24/7 managed IT support, cybersecurity, Cisco networking, data center smart hands, and technical SEO from Bengaluru. Get a quote.'
  );

  return (
    <>
      <HomePreloader />
      <Hero />
      <TrustHighlights />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Careers />
      <Statistics />
      <Clients />
      <Blog limit={3} />
      <CTA />
    </>
  );
}
