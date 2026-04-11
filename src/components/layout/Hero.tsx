import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Coffee"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          CHỨA CHAN ROASTER
          <br />
          <span>
            TỈNH THỨC <br />
            GIỮA ĐỜI SỐNG SỐ HÓA
          </span>
        </h1>

        <p className="hero-desc">
          Nơi con người được sống chậm lại, cảm nhận năng lượng mới và kết nối
          với niềm tự hào cà phê đặc sản Việt Nam.
        </p>

        <a href="#products" className="btn btn-primary">
          Khám phá tinh hoa <ChevronRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
