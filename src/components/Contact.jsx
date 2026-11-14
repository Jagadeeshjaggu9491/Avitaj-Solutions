import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { submitContactInquiry } from '../utils/contactService';
import { useSectionReveal } from '../utils/useGsapReveal';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

export default function Contact({ preselectedService = '' }) {
  const sectionRef = useRef(null);
  const formCardRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ...INITIAL_FORM,
    service: preselectedService,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);

  useSectionReveal(sectionRef, '.contact-reveal');

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (formData.phone.trim() && !/^[+\d\s().-]{7,20}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please provide a valid phone number.';
    }
    if (!formData.service) {
      nextErrors.service = 'Please select the service area you are inquiring about.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief overview of your requirements (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      setSubmittedInfo({
        fullName: formData.fullName.trim(),
        service: formData.service,
        email: formData.email.trim(),
        message: result.message,
      });
      setFormData({ ...INITIAL_FORM, service: preselectedService });
      setErrors({});
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to process inquiry right now.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate('/');
  };

  const handleResetForm = () => {
    setSubmittedInfo(null);
    setErrorMessage('');
    setErrors({});
  };

  return (
    <section className="section-padded section-white" ref={sectionRef} id="contact-section">
      <div className="container-avitaj">
        <div className="row g-5 align-items-start">
          {/* Contact Details Column */}
          <div className="col-lg-5 contact-reveal">
            <span className="section-kicker">Contact Us</span>
            <h2 className="section-heading mb-3">
              Start a Conversation With Our Solutions Team
            </h2>
            <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
              Share your IT infrastructure scope, rollout timeline, or digital marketing objectives.
              An engineering or strategy lead will follow up with concrete next steps.
            </p>

            <div className="d-flex flex-column gap-3">
              <div
                className="p-3 rounded-3 border d-flex align-items-start gap-3"
                style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}
              >
                <div className="trust-icon-wrap bg-white">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Email Desk
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    <a
                      href="mailto:info@avitajsolutions.com"
                      className="text-decoration-none"
                      style={{ color: 'var(--avitaj-text-secondary)' }}
                    >
                      info@avitajsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-3 rounded-3 border d-flex align-items-start gap-3"
                style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}
              >
                <div className="trust-icon-wrap bg-white">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Direct Telephone
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    <a
                      href="tel:+919741580987"
                      className="text-decoration-none"
                      style={{ color: 'var(--avitaj-text-secondary)' }}
                    >
                      +91 97415 80987
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-3 rounded-3 border d-flex align-items-start gap-3"
                style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}
              >
                <div className="trust-icon-wrap bg-white">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Office Address
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    No. 29, MR Plaza, Second Floor, Bescom Road, Kullapa Circle, Kammanahalli, Bengaluru - 560084
                  </div>
                </div>
              </div>

              <div
                className="p-3 rounded-3 border d-flex align-items-start gap-3"
                style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}
              >
                <div className="trust-icon-wrap bg-white">
                  <Clock size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                    Operations Coverage
                  </div>
                  <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    24/7 NOC Support · Mon–Fri 8:00 AM–6:00 PM Advisory
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7 contact-reveal" ref={formCardRef}>
            <div
              className="bg-white border rounded-4 p-4 p-md-5"
              style={{ borderColor: 'var(--avitaj-border)', boxShadow: 'var(--shadow-level-1)' }}
            >
              {submittedInfo ? (
                <div className="text-center py-4 px-md-3" role="status" aria-live="polite">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{
                      width: '68px',
                      height: '68px',
                      backgroundColor: 'var(--avitaj-success-bg)',
                      color: 'var(--avitaj-success)',
                    }}
                  >
                    <CheckCircle2 size={34} aria-hidden="true" />
                  </div>
                  <span className="section-kicker d-block mb-2">Request Received</span>
                  <h3
                    className="h3 fw-bold mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                  >
                    Thank You{submittedInfo.fullName ? `, ${submittedInfo.fullName}` : ''}!
                  </h3>
                  <p
                    className="mb-4 mx-auto"
                    style={{ color: 'var(--avitaj-text-secondary)', maxWidth: '500px' }}
                  >
                    {submittedInfo.message} We have logged your inquiry for{' '}
                    <strong style={{ color: 'var(--avitaj-text-strong)' }}>
                      {submittedInfo.service}
                    </strong>{' '}
                    and will follow up at{' '}
                    <strong style={{ color: 'var(--avitaj-text-strong)' }}>
                      {submittedInfo.email}
                    </strong>
                    .
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
                    <button
                      type="button"
                      className="btn-avitaj-secondary"
                      onClick={handleGoBack}
                    >
                      <ArrowLeft size={17} aria-hidden="true" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      className="btn-avitaj-primary"
                      onClick={handleResetForm}
                    >
                      <RotateCcw size={17} aria-hidden="true" />
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3
                    className="h4 fw-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                  >
                    Request a Technical Consultation
                  </h3>
                  <p className="small mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
                    Fields marked with * are required for routing your request.
                  </p>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3 rounded-3 mb-4 d-flex align-items-start gap-2"
                      style={{
                        backgroundColor: '#ffdad6',
                        color: '#93000a',
                        border: '1px solid rgba(186, 26, 26, 0.25)',
                      }}
                    >
                      <AlertCircle size={20} className="flex-shrink-0 mt-1" aria-hidden="true" />
                      <span className="small fw-medium">{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-fullName" className="avitaj-form-label">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      className={`avitaj-input ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="Jordan Taylor"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName && (
                      <div className="avitaj-error-text">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="avitaj-form-label">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`avitaj-input ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="jordan@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <div className="avitaj-error-text">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-phone" className="avitaj-form-label">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className={`avitaj-input ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                      <div className="avitaj-error-text">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-company" className="avitaj-form-label">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      className="avitaj-input"
                      placeholder="Enterprise Corp"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-service" className="avitaj-form-label">
                      Primary Service Interest *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className={`avitaj-select ${errors.service ? 'is-invalid' : ''}`}
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                    >
                      <option value="">Select a service...</option>
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                      <option value="General / Multi-Service Inquiry">
                        General / Multi-Service Inquiry
                      </option>
                    </select>
                    {errors.service && (
                      <div className="avitaj-error-text">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.service}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-message" className="avitaj-form-label">
                      Project Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      className={`avitaj-textarea ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell us about your environment, locations, or digital goals..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && (
                      <div className="avitaj-error-text">
                        <AlertCircle size={14} aria-hidden="true" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-12 pt-2">
                    <button
                      type="submit"
                      className="btn-avitaj-primary w-100"
                      disabled={isSubmitting}
                    >
                      <Send size={18} aria-hidden="true" />
                      <span>{isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                    </button>
                  </div>
                </div>
              </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
