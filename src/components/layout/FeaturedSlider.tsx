import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const SLIDER_ITEMS = [
  {
    tag: 'Sản Phẩm Cốt Lõi',
    title: 'Cà Phê Rang Mộc Đặc Sản',
    desc: 'Tuyển chọn từ những hạt Robusta và Arabica chất lượng nhất, rang mộc 100% giữ trọn hương vị nguyên bản, phù hợp pha máy và pha phin.',
    image:
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '#products'
  },
  {
    tag: 'Tiện Lợi & Nhanh Chóng',
    title: 'Cà Phê Túi Giấy Tiện Dụng',
    desc: 'Giải pháp hoàn hảo cho nhịp sống bận rộn. Thưởng thức một ly cà phê phin chuẩn vị mọi lúc, mọi nơi chỉ với vài phút chuẩn bị.',
    image:
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '#products'
  },
  {
    tag: 'Nguyên Liệu Cao Cấp',
    title: 'Trà Pha Chế Chuyên Nghiệp',
    desc: 'Cung cấp các dòng Trà Lài, Trà Olong và Trà Đen hảo hạng, giúp chiết xuất hương thơm đậm đà cho những ly trà sữa hoàn hảo.',
    image:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    link: '#services'
  }
];

const FeaturedSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDER_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % SLIDER_ITEMS.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? SLIDER_ITEMS.length - 1 : prev - 1));

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider-container">
          {SLIDER_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === current ? 'active' : ''}`}
            >
              <img src={item.image} alt={item.title} className="slide-img" />
              <div className="slide-overlay"></div>

              <div className="slide-content">
                <div className="slide-content-inner">
                  <span className="slide-tag">{item.tag}</span>
                  <h3 className="slide-title">{item.title}</h3>
                  <p className="slide-desc">{item.desc}</p>
                  <a href={item.link} className="btn btn-white">
                    Khám phá ngay <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="slider-dots">
            {SLIDER_ITEMS.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`dot ${index === current ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;
