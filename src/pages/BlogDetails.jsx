import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';
import fallbackBlogImg from '../assets/images/banner_blog_journal_1794630829934.jpg';
import { blogData, getPostBySlug } from '../data/blogData';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  const seoTitle = post
    ? `${post.title} | AVITAJ`
    : 'Article Not Found | AVITAJ SOLUTIONS';

  const seoDescription = post
    ? post.excerpt
    : 'Explore engineering briefs on Zero-Trust security, structured cabling, ITAD, and technical SEO authored by AVITAJ SOLUTIONS architects.';

  const blogSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        articleSection: post.category,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'AVITAJ SOLUTIONS',
        },
      }
    : null;

  useDocumentMeta(seoTitle, seoDescription, {
    ogType: post ? 'article' : 'website',
    schema: blogSchema,
  });

  if (!post) {
    return (
      <>
        <PageBanner
          kicker="Blog"
          title="Article Not Found"
          description="The requested article could not be found."
          breadcrumbs={[{ label: 'Blog', to: '/blog' }, { label: 'Not Found' }]}
          bannerImage={fallbackBlogImg}
          bannerAlt="AVITAJ SOLUTIONS engineering studio"
        />
        <section className="section-padded section-white text-center">
          <div className="container-avitaj">
            <Link to="/blog" className="btn-avitaj-primary">
              Back to All Articles
            </Link>
          </div>
        </section>
      </>
    );
  }

  const relatedPosts = blogData.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageBanner
        kicker={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]}
        bannerImage={post.image}
        bannerAlt={post.title}
      />

      <section className="section-padded section-white">
        <div className="container-avitaj">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {/* Author & Metadata Line */}
              <div
                className="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-4 mb-5 border-bottom"
                style={{ borderColor: 'var(--avitaj-border)' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--avitaj-surface-soft)',
                      color: 'var(--avitaj-navy)',
                    }}
                  >
                    <UserCheck size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="fw-bold small" style={{ color: 'var(--avitaj-text-strong)' }}>
                      {post.author.name}
                    </div>
                    <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <div className="meta-inline-line mb-0">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Sections */}
              <div className="d-flex flex-column gap-4 mb-5">
                {post.sections.map((section) => (
                  <div key={section.heading}>
                    <h2
                      className="h4 fw-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      {section.heading}
                    </h2>
                    <p
                      className="mb-0"
                      style={{
                        color: 'var(--avitaj-text)',
                        fontSize: '1.05rem',
                        lineHeight: '1.75',
                      }}
                    >
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-top mb-5" style={{ borderColor: 'var(--avitaj-border)' }}>
                <Link to="/blog" className="btn-avitaj-secondary">
                  <ArrowLeft size={17} aria-hidden="true" />
                  <span>Back to Insights</span>
                </Link>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="h4 fw-bold mb-4">Related Insights</h3>
                <div className="row g-4">
                  {relatedPosts.map((rel) => (
                    <div className="col-md-6" key={rel.id}>
                      <article className="blog-card">
                        <div className="blog-card-body">
                          <div className="meta-inline-line">
                            <span className="fw-semibold" style={{ color: 'var(--avitaj-blue)' }}>
                              {rel.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{rel.readTime}</span>
                          </div>
                          <h4 className="h6 fw-bold mb-3">
                            <Link
                              to={`/blog/${rel.slug}`}
                              className="text-decoration-none"
                              style={{ color: 'var(--avitaj-text-strong)' }}
                            >
                              {rel.title}
                            </Link>
                          </h4>
                          <Link to={`/blog/${rel.slug}`} className="btn-avitaj-ghost mt-auto">
                            <span>Read Article</span>
                            <ArrowRight size={15} aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
