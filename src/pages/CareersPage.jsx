import { useRef, useState } from 'react';
import {
  Award,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Send,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import careersBannerImg from '../assets/images/banner_careers_culture_1794630830860.jpg';
import careersImg from '../assets/images/careers_tech_studio_1794555230733.jpg';
import { careersData } from '../data/careersData';
import { submitCareerApplication } from '../utils/contactService';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function CareersPage() {
  useDocumentMeta(
    'Careers at AVITAJ SOLUTIONS | IT & Digital Job Openings',
    'Join AVITAJ SOLUTIONS in IT engineering, Cisco networking, service desk, data center cabling, and technical SEO. Explore open roles and apply online.'
  );

  const [deptFilter, setDeptFilter] = useState('ALL');
  const [selectedRole, setSelectedRole] = useState(careersData[0].title);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioOrLinkedin: '',
    experienceNotes: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);
  const openRolesRef = useRef(null);
  const formSectionRef = useRef(null);

  const departments = ['ALL', ...Array.from(new Set(careersData.map((r) => r.department)))];
  const filteredRoles =
    deptFilter === 'ALL'
      ? careersData
      : careersData.filter((r) => r.department === deptFilter);

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    setErrorMessage('');
    setSubmittedInfo(null);
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const nextErrors = {};

    if (!formState.fullName.trim() || formState.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (formState.phone.trim() && !/^[+\d\s().-]{7,20}$/.test(formState.phone.trim())) {
      nextErrors.phone = 'Please provide a valid phone number.';
    }
    if (
      formState.portfolioOrLinkedin.trim() &&
      !/^https?:\/\/\S+$/i.test(formState.portfolioOrLinkedin.trim())
    ) {
      nextErrors.portfolioOrLinkedin = 'Please enter a valid URL starting with http:// or https://.';
    }
    if (!formState.experienceNotes.trim() || formState.experienceNotes.trim().length < 15) {
      nextErrors.experienceNotes = 'Please summarize your relevant certifications or experience.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitCareerApplication({
        role: selectedRole,
        ...formState,
        submittedAt: new Date().toISOString(),
      });
      setSubmittedInfo({
        fullName: formState.fullName.trim(),
        role: selectedRole,
        email: formState.email.trim(),
        message: res.message,
      });
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        portfolioOrLinkedin: '',
        experienceNotes: '',
      });
      setErrors({});
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to submit application.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackToRoles = () => {
    setSubmittedInfo(null);
    setErrorMessage('');
    openRolesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleResetApplication = () => {
    setSubmittedInfo(null);
    setErrorMessage('');
    setErrors({});
  };

  return (
    <>
      <PageBanner
        kicker="Join Our Team"
        title="Build High-Reliability Systems With Engineers Who Care"
        description="At AVITAJ SOLUTIONS, you work alongside CCNP network architects, SOC analysts, and digital strategists solving mission-critical client challenges."
        breadcrumbs={[{ label: 'Careers' }]}
        bannerImage={careersBannerImg}
        bannerAlt="AVITAJ SOLUTIONS engineering leaders collaborating"
      />

      {/* Culture & Benefits */}
      <section className="section-padded section-white">
        <div className="container-avitaj">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="media-photo-frame">
                <img
                  src={careersImg}
                  alt="AVITAJ SOLUTIONS engineering and digital workspace"
                  referrerPolicy="no-referrer"
                  width="640"
                  height="440"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-kicker">Life at AVITAJ SOLUTIONS</span>
              <h2 className="section-heading mb-3">
                Continuous Learning &amp; Engineering Ownership
              </h2>
              <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
                We believe operational excellence comes from empowering technicians and consultants
                with modern tooling, clear mentorship, and funded certifications.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 border h-100" style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}>
                    <Award size={20} style={{ color: 'var(--avitaj-blue)' }} className="mb-2" aria-hidden="true" />
                    <h3 className="h6 fw-bold mb-1">Sponsored Certifications</h3>
                    <p className="small mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      Full exam reimbursement for Cisco, CompTIA, Azure, and ITIL credentials.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 border h-100" style={{ borderColor: 'var(--avitaj-border)', backgroundColor: 'var(--avitaj-surface-subtle)' }}>
                    <Briefcase size={20} style={{ color: 'var(--avitaj-blue)' }} className="mb-2" aria-hidden="true" />
                    <h3 className="h6 fw-bold mb-1">Balanced Hybrid Tracks</h3>
                    <p className="small mb-0" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      Structured shifts, paid on-call rotation stipends, and remote flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padded section-subtle" ref={openRolesRef} id="open-roles">
        <div className="container-avitaj">
          <div className="row align-items-end justify-content-between g-3 mb-4">
            <div className="col-lg-6">
              <span className="section-kicker">Open Opportunities</span>
              <h2 className="section-heading mb-0">Current Openings</h2>
            </div>
            <div className="col-lg-auto">
              <div className="avitaj-tabs" role="tablist" aria-label="Filter roles by department">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    role="tab"
                    aria-selected={deptFilter === dept}
                    className={`avitaj-tab-btn ${deptFilter === dept ? 'active' : ''}`}
                    onClick={() => setDeptFilter(dept)}
                  >
                    {dept === 'ALL' ? 'All Teams' : dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4">
            {filteredRoles.map((role) => (
              <div className="col-md-6" key={role.id}>
                <article className="avitaj-card justify-content-between">
                  <div>
                    <div className="meta-inline-line">
                      <span className="fw-semibold" style={{ color: 'var(--avitaj-blue)' }}>
                        {role.department}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{role.experience}</span>
                    </div>
                    <h3
                      className="h5 fw-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      {role.title}
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.9375rem' }}>
                      {role.summary}
                    </p>
                  </div>

                  <div
                    className="pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-3"
                    style={{ borderColor: 'var(--avitaj-border)' }}
                  >
                    <div className="d-flex align-items-center gap-3 small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      <span className="d-inline-flex align-items-center gap-1">
                        <MapPin size={14} aria-hidden="true" />
                        {role.location}
                      </span>
                      <span className="d-inline-flex align-items-center gap-1">
                        <Clock size={14} aria-hidden="true" />
                        {role.type}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="btn-avitaj-primary btn-avitaj-header"
                      onClick={() => handleApplyClick(role.title)}
                    >
                      Apply for Role
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Application Form */}
      <section className="section-padded section-white" ref={formSectionRef}>
        <div className="container-avitaj">
          <div className="row justify-content-center">
            <div className="col-lg-8">
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
                    <span className="section-kicker d-block mb-2">Application Received</span>
                    <h2
                      className="h3 fw-bold mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      Thank You{submittedInfo.fullName ? `, ${submittedInfo.fullName}` : ''}!
                    </h2>
                    <p
                      className="mb-4 mx-auto"
                      style={{ color: 'var(--avitaj-text-secondary)', maxWidth: '520px' }}
                    >
                      {submittedInfo.message} Your profile for{' '}
                      <strong style={{ color: 'var(--avitaj-text-strong)' }}>
                        {submittedInfo.role}
                      </strong>{' '}
                      is with our hiring team, and updates will be sent to{' '}
                      <strong style={{ color: 'var(--avitaj-text-strong)' }}>
                        {submittedInfo.email}
                      </strong>
                      .
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
                      <button
                        type="button"
                        className="btn-avitaj-secondary"
                        onClick={handleBackToRoles}
                      >
                        <ArrowLeft size={17} aria-hidden="true" />
                        <span>Back to Open Roles</span>
                      </button>
                      <button
                        type="button"
                        className="btn-avitaj-primary"
                        onClick={handleResetApplication}
                      >
                        <RotateCcw size={17} aria-hidden="true" />
                        <span>Submit Another Application</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="section-kicker">Candidate Application</span>
                    <h2 className="h3 fw-bold mb-2">Submit Your Profile</h2>
                    <p className="small mb-4" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      Select a position below and share your technical background.
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
                    <div className="col-12">
                      <label htmlFor="career-role" className="avitaj-form-label">
                        Position Applying For *
                      </label>
                      <select
                        id="career-role"
                        className="avitaj-select"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                      >
                        {careersData.map((r) => (
                          <option key={r.id} value={r.title}>
                            {r.title}
                          </option>
                        ))}
                        <option value="General Technical Talent Pool">
                          General Technical Talent Pool
                        </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="career-name" className="avitaj-form-label">
                        Full Name *
                      </label>
                      <input
                        id="career-name"
                        type="text"
                        className={`avitaj-input ${errors.fullName ? 'is-invalid' : ''}`}
                        value={formState.fullName}
                        onChange={(e) => {
                          setFormState((p) => ({ ...p, fullName: e.target.value }));
                          if (errors.fullName) setErrors((p) => ({ ...p, fullName: undefined }));
                        }}
                        placeholder="Alex Morgan"
                      />
                      {errors.fullName && (
                        <div className="avitaj-error-text">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="career-email" className="avitaj-form-label">
                        Email Address *
                      </label>
                      <input
                        id="career-email"
                        type="email"
                        className={`avitaj-input ${errors.email ? 'is-invalid' : ''}`}
                        value={formState.email}
                        onChange={(e) => {
                          setFormState((p) => ({ ...p, email: e.target.value }));
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        placeholder="alex.morgan@email.com"
                      />
                      {errors.email && (
                        <div className="avitaj-error-text">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="career-phone" className="avitaj-form-label">
                        Phone Number
                      </label>
                      <input
                        id="career-phone"
                        type="tel"
                        className={`avitaj-input ${errors.phone ? 'is-invalid' : ''}`}
                        value={formState.phone}
                        onChange={(e) => {
                          setFormState((p) => ({ ...p, phone: e.target.value }));
                          if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                        }}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <div className="avitaj-error-text">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="career-link" className="avitaj-form-label">
                        LinkedIn Profile or Portfolio URL
                      </label>
                      <input
                        id="career-link"
                        type="url"
                        className={`avitaj-input ${errors.portfolioOrLinkedin ? 'is-invalid' : ''}`}
                        value={formState.portfolioOrLinkedin}
                        onChange={(e) => {
                          setFormState((p) => ({ ...p, portfolioOrLinkedin: e.target.value }));
                          if (errors.portfolioOrLinkedin) {
                            setErrors((p) => ({ ...p, portfolioOrLinkedin: undefined }));
                          }
                        }}
                        placeholder="https://linkedin.com/in/..."
                      />
                      {errors.portfolioOrLinkedin && (
                        <div className="avitaj-error-text">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.portfolioOrLinkedin}</span>
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label htmlFor="career-notes" className="avitaj-form-label">
                        Certifications &amp; Experience Summary *
                      </label>
                      <textarea
                        id="career-notes"
                        rows="4"
                        className={`avitaj-textarea ${errors.experienceNotes ? 'is-invalid' : ''}`}
                        value={formState.experienceNotes}
                        onChange={(e) => {
                          setFormState((p) => ({ ...p, experienceNotes: e.target.value }));
                          if (errors.experienceNotes)
                            setErrors((p) => ({ ...p, experienceNotes: undefined }));
                        }}
                        placeholder="Highlight relevant network/systems certifications, tools, and years of experience..."
                      />
                      {errors.experienceNotes && (
                        <div className="avitaj-error-text">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.experienceNotes}</span>
                        </div>
                      )}
                    </div>

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="btn-avitaj-primary w-100"
                        disabled={submitting}
                      >
                        <Send size={18} aria-hidden="true" />
                        <span>{submitting ? 'Submitting Application...' : 'Submit Application'}</span>
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
    </>
  );
}
