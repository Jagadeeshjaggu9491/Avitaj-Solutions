import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import contactBannerImg from '../assets/images/banner_contact_desk_1794555250034.jpg';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function ContactPage() {
  useDocumentMeta(
    'Contact AVITAJ SOLUTIONS | Bengaluru IT & Digital Desk',
    'Contact AVITAJ SOLUTIONS in Kammanahalli, Bengaluru for 24/7 managed IT support, SLA proposals, or digital audits. Call +91 97415 80987 today.'
  );

  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <>
      <PageBanner
        kicker="Contact Us"
        title="Speak With an Infrastructure or Digital Solutions Architect"
        description="Whether you need immediate break-fix dispatch, a managed IT SLA proposal, or a digital growth audit, our team is ready to assist."
        breadcrumbs={[{ label: 'Contact Us' }]}
        bannerImage={contactBannerImg}
        bannerAlt="AVITAJ SOLUTIONS corporate reception and executive briefing center"
      />
      <Contact preselectedService={preselectedService} />
    </>
  );
}
