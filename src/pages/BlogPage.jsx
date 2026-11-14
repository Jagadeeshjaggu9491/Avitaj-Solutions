import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';
import blogBannerImg from '../assets/images/banner_blog_journal_1794630829934.jpg';
import { blogData } from '../data/blogData';
import { useDocumentMeta } from '../utils/useDocumentMeta';

export default function BlogPage() {
  useDocumentMeta(
    'IT Infrastructure & Digital Strategy Blog | AVITAJ',
    'Read engineering briefs on Zero-Trust security, structured cabling, NIST 800-88 ITAD, and B2B technical SEO from AVITAJ SOLUTIONS architects.'
  );

  const [category, setCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  const categories = ['ALL', ...Array.from(new Set(blogData.map((p) => p.category)))];

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const catMatch = category === 'ALL' || post.category === category;
      const q = search.trim().toLowerCase();
      const searchMatch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [category, search]);

  return (
    <>
      <PageBanner
        kicker="Insights & Briefs"
        title="Enterprise IT & Digital Engineering Journal"
        description="Practical field guides, infrastructure security architectures, and B2B growth playbooks authored by AVITAJ SOLUTIONS practitioners."
        breadcrumbs={[{ label: 'Blog' }]}
        bannerImage={blogBannerImg}
        bannerAlt="Cybersecurity specialist analyzing enterprise network metrics"
      />

      <section className="section-padded section-subtle">
        <div className="container-avitaj">
          <div className="row g-3 align-items-center justify-content-between mb-5">
            <div className="col-lg-auto">
              <div className="avitaj-tabs" role="tablist" aria-label="Filter articles by topic">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={category === cat}
                    className={`avitaj-tab-btn ${category === cat ? 'active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat === 'ALL' ? 'All Topics' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="position-relative">
                <Search
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--avitaj-text-secondary)',
                  }}
                  aria-hidden="true"
                />
                <input
                  type="search"
                  className="avitaj-input"
                  style={{ paddingLeft: '42px' }}
                  placeholder="Search articles..."
                  aria-label="Search blog articles"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white border rounded-4 p-5 text-center" style={{ borderColor: 'var(--avitaj-border)' }}>
              <h2 className="h5 fw-bold mb-2">No articles matched your query</h2>
              <button
                type="button"
                className="btn-avitaj-secondary mt-2"
                onClick={() => {
                  setCategory('ALL');
                  setSearch('');
                }}
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div className="col-md-6" key={post.id}>
                  <article className="blog-card">
                    <Link to={`/blog/${post.slug}`} className="blog-card-thumb d-block">
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width="640"
                        height="400"
                      />
                    </Link>
                    <div className="blog-card-body">
                      <div className="meta-inline-line">
                        <span className="fw-semibold" style={{ color: 'var(--avitaj-blue)' }}>
                          {post.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2
                        className="h4 fw-bold mb-2"
                        style={{ fontFamily: 'var(--font-display)', lineHeight: '1.32' }}
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-decoration-none"
                          style={{ color: 'var(--avitaj-text-strong)' }}
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p
                        className="mb-4 flex-grow-1"
                        style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.95rem' }}
                      >
                        {post.excerpt}
                      </p>

                      <div
                        className="pt-3 border-top d-flex align-items-center justify-content-between"
                        style={{ borderColor: 'var(--avitaj-border)' }}
                      >
                        <span className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                          By {post.author.name}
                        </span>
                        <Link to={`/blog/${post.slug}`} className="btn-avitaj-ghost">
                          <span>Read Full Article</span>
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
