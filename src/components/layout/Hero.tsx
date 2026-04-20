import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <img src="images/hero_cover.webp" alt="Coffee" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">CHỨA CHAN</h1>
        <h1 className="hero-title-roaster">ROASTER</h1>
        <h1 className="hero-title">
          <span>
            TỈNH THỨC <br />
            GIỮA ĐỜI SỐNG SỐ HÓA
          </span>
        </h1>

        <p className="hero-desc">
          Nơi con người được sống chậm lại, cảm nhận năng lượng mới và kết nối
          với niềm tự hào cà phê đặc sản Việt Nam.
        </p>

        <a href="#story" className="btn btn-primary">
          Câu chuyện thương hiệu <ChevronRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
