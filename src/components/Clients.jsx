import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { clientsData } from '../data/clientsData';
import { useSectionReveal } from '../utils/useGsapReveal';

export default function Clients() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useSectionReveal(sectionRef, '.clients-reveal');

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="section-padded section-subtle" ref={sectionRef}>
      <div className="container-avitaj">
        {/* Testimonials Header + Carousel Controls */}
        <div className="row align-items-end justify-content-between g-3 mb-5 clients-reveal">
          <div className="col-lg-7">
            <span className="section-kicker">Client Testimonials</span>
            <h2 className="section-heading mb-0">
              What Enterprise IT &amp; Digital Leaders Say
            </h2>
          </div>

          <div className="col-lg-auto d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="btn d-inline-flex align-items-center justify-content-center bg-white border"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                borderColor: 'var(--avitaj-border)',
                color: 'var(--avitaj-navy)',
              }}
              aria-label="Previous client testimonial"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="btn d-inline-flex align-items-center justify-content-center bg-white border"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                borderColor: 'var(--avitaj-border)',
                color: 'var(--avitaj-navy)',
              }}
              aria-label="Next client testimonial"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Continuous Looping Swiper Carousel */}
        <div className="avitaj-swiper-wrap clients-reveal">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="pb-5"
          >
            {clientsData.map((client) => (
              <SwiperSlide key={client.id} className="h-auto">
                <article className="avitaj-card justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Quote size={26} style={{ color: 'var(--avitaj-sky)' }} aria-hidden="true" />
                      <span className="small fw-semibold" style={{ color: 'var(--avitaj-blue)' }}>
                        {client.sector}
                      </span>
                    </div>
                    <p
                      className="mb-4"
                      style={{ color: 'var(--avitaj-text)', fontSize: '0.96875rem', lineHeight: '1.65' }}
                    >
                      &ldquo;{client.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-top" style={{ borderColor: 'var(--avitaj-border)' }}>
                    <div
                      className="fw-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--avitaj-text-strong)' }}
                    >
                      {client.person}
                    </div>
                    <div className="small" style={{ color: 'var(--avitaj-text-secondary)' }}>
                      {client.role} · {client.name}
                    </div>
                    <div className="small mt-1 fw-medium" style={{ color: 'var(--avitaj-blue)' }}>
                      {client.engagement}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
