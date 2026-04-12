import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const SLIDER_ITEMS = [
  {
    tag: 'Sản xuất & Cung cấp',
    title: 'Cà Phê Nguyên Bản & Trọn Vị',
    desc: 'Giải pháp toàn diện từ xưởng rang xay đến tách cà phê của bạn. Chúng tôi cung cấp đa dạng các dòng cà phê hạt và cà phê bột chất lượng cao.',
    image: 'images/coffee-machine.jpg',
    link: '#products'
  },
  {
    tag: 'Nguyên Liệu Cao Cấp',
    title: 'Trà Pha Chế & Nông Sản Sấy',
    desc: 'Tuyển chọn các dòng trà chuyên dụng giúp định hình hương vị đồ uống, kèm theo các sản phẩm nông sản sấy cao cấp như hạt điều, chuối sấy.',
    image: 'images/traphache.jpg',
    link: '#services'
  },
  {
    tag: 'Thiết Bị F&B',
    title: 'Máy Móc Pha Chế Hiện Đại',
    desc: 'Đồng hành cùng sự phát triển của quán với hệ thống trang thiết bị, máy móc tiên tiến, tối ưu hiệu suất cho mô hình cà phê, trà sữa và nước ép.',
    image: 'images/fbdevice.jpg',
    link: '#services'
  },
  {
    tag: 'Đào Tạo & Setup',
    title: 'Giải Pháp Vận Hành Quán Toàn Diện',
    desc: 'Xây dựng nền tảng kinh doanh vững chắc với dịch vụ tư vấn setup cửa hàng, chuỗi F&B trọn gói cùng các khóa đào tạo pha chế chuyên sâu.',
    image: 'images/training_setup.jpg',
    link: '#services'
  }
];

const FeaturedSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDER_ITEMS.length);
    }, 50000);
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
