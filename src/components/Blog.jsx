import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import { useSectionReveal } from '../utils/useGsapReveal';

export default function Blog({ limit = 3 }) {
  const sectionRef = useRef(null);
  const posts = limit ? blogData.slice(0, limit) : blogData;

  useSectionReveal(sectionRef, '.blog-reveal');

  return (
    <section className="section-padded section-white" ref={sectionRef}>
      <div className="container-avitaj">
        <div className="row align-items-end justify-content-between g-4 mb-5 blog-reveal">
          <div className="col-lg-6">
            <span className="section-kicker">Latest Insights</span>
            <h2 className="section-heading mb-0">
              Engineering Briefs &amp; Digital Strategy Perspectives
            </h2>
          </div>
          <div className="col-lg-auto">
            <Link to="/blog" className="btn-avitaj-secondary">
              <span>View All Articles</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-6 col-lg-4 blog-reveal" key={post.id}>
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

                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', lineHeight: '1.35' }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-decoration-none"
                      style={{ color: 'var(--avitaj-text-strong)' }}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    className="mb-4 flex-grow-1"
                    style={{ color: 'var(--avitaj-text-secondary)', fontSize: '0.9375rem' }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="pt-2 border-top" style={{ borderColor: 'var(--avitaj-border)' }}>
                    <Link to={`/blog/${post.slug}`} className="btn-avitaj-ghost">
                      <span>Read Article</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
