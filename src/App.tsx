import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Moon,
  Zap,
  Coffee,
  ShieldCheck,
  Store,
  Send,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import FeaturedSlider from './components/layout/FeaturedSlider';

// ============================================================================
// --- DATA MOCKS ---
// ============================================================================

const CORE_PRODUCTS = [
  {
    id: 'tri',
    name: 'Trí',
    sub: 'Sáng suốt & Tinh tế',
    blend: '100% Arabica Cầu Đất',
    taste: 'Chua thanh, ngọt nhẹ, hậu vị trái cây',
    trait: 'Phức hợp nhưng cân bằng',
    bgImage: '/images/tri.png'
  },
  {
    id: 'duc',
    name: 'Đức',
    sub: 'Tròn đầy & Ấm áp',
    blend: '100% Robusta Natural',
    taste: 'Đậm, body mạnh, hơi đắng, ít chua.',
    trait: 'Mạnh mẽ nhưng êm dịu',
    bgImage: '/images/duc.png'
  },
  {
    id: 'nhan',
    name: 'Nhẫn',
    sub: 'Vững vàng & Trầm ổn',
    blend: '80% Robusta Honey & 20% Arabica Cầu Đất',
    taste: 'Đắng vừa, hậu ngọt sâu',
    trait: 'Trầm, giàu chiều sâu',
    bgImage: '/images/nhan.png'
  },
  {
    id: 'tai',
    name: 'Tài',
    sub: 'Nổi bật & Bứt phá',
    blend: '100% Robusta Honey',
    taste: 'Đậm đà, hậu ngọt trái cây, điểm nhấn rõ rệt',
    trait: 'Bùng nổ, cá tính, giàu năng lượng',
    bgImage: '/images/tai.png'
  },
  {
    id: 'loc',
    name: 'Lộc',
    sub: 'Tươi sáng & Dễ chịu',
    blend: '70% Robusta Natural & 30% Arabica Cầu Đất',
    taste: 'Ngọt hậu, thơm nồng, chua thanh nhẹ',
    trait: 'Tươi mới, hài hòa',
    bgImage: '/images/loc.png'
  }
];

const ECOSYSTEM_DATA = [
  {
    title: 'Máy Trà & Sinh Tố',
    icon: <Zap size={28} />,
    themeClass: { text: '#4f46e5', bg: '#e0e7ff', border: '#c7d2fe' },
    items: [
      {
        name: 'Vitamix The Quiet One',
        img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Đỉnh cao máy xay công nghiệp. Tích hợp hộp chống ồn tuyệt đối.',
        details: [
          { label: 'Công suất', value: '3 HP' },
          { label: 'Trọng lượng', value: '9.1 kg' }
        ]
      },
      {
        name: 'Omniblend TM-800A',
        img: 'https://images.unsplash.com/photo-1589396275673-38c5ac892186?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Giải pháp tiết kiệm chi phí nhưng mang lại hiệu năng xay cực cao.',
        details: [
          { label: 'Công suất', value: '1200W' },
          { label: 'Dung tích cối', value: '1.5 Lít' }
        ]
      }
    ]
  },
  {
    title: 'Máy Móc Cà Phê',
    icon: <Settings size={28} />,
    themeClass: { text: '#2563eb', bg: '#dbeafe', border: '#bfdbfe' },
    items: [
      {
        name: 'Nouva Simonelli',
        img: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Dòng Appia Life 2 Group. Công nghệ chiết xuất chuẩn, nồi hơi ổn định.',
        details: [
          { label: 'Công suất', value: '3200W' },
          { label: 'Nồi hơi', value: '11 Lít' }
        ]
      },
      {
        name: 'Mahlkonig / Mazzer',
        img: 'https://images.unsplash.com/photo-1517036987165-22d7de174d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Các dòng máy xay đỉnh cao của thế giới. Lưỡi dao sắc bén cho ra hạt mịn.',
        details: [
          { label: 'Lưỡi dao', value: '98 mm Flat Burr' },
          { label: 'Tốc độ', value: '1500 rpm' }
        ]
      }
    ]
  },
  {
    title: 'Cà Phê & Trà',
    icon: <Coffee size={28} />,
    themeClass: { text: '#ea580c', bg: '#ffedd5', border: '#fed7aa' },
    items: [
      {
        name: 'Robusta / Blend',
        img: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Các dòng cà phê hạt rang mộc nguyên chất, đa dạng tỷ lệ Blend.',
        details: [
          { label: 'Vùng trồng', value: 'Đồng Nai' },
          { label: 'Mức rang', value: 'Medium Dark' }
        ]
      },
      {
        name: 'Trà Lài & Olong',
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Dòng trà pha chế cao cấp. Trà lài thơm ngát dịu nhẹ, Trà Olong vàng óng.',
        details: [
          { label: 'Xuất xứ', value: 'Bảo Lộc' },
          { label: 'Ứng dụng', value: 'Trà trái cây' }
        ]
      }
    ]
  },
  {
    title: 'Setup & Đặc Sản',
    icon: <Store size={28} />,
    themeClass: { text: '#e11d48', bg: '#ffe4e6', border: '#fecdd3' },
    items: [
      {
        name: 'Đào Tạo Pha Chế',
        img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Cung cấp các khóa học thực chiến từ chuyên viên pha chế Cà phê.',
        details: [
          { label: 'Thời lượng', value: '10 - 15 buổi' },
          { label: 'Thực hành', value: '90% thời gian' }
        ]
      },
      {
        name: 'Chuối Sấy Chứa Chan',
        img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Đặc sản tự nhiên từ vùng núi Chứa Chan. Lát chuối giòn rụm, ngọt thanh.',
        details: [
          { label: 'Thành phần', value: '100% Chuối tươi' },
          { label: 'Đóng gói', value: 'Túi Zip 500g' }
        ]
      }
    ]
  }
];

// ============================================================================
// --- COMPONENTS ---
// ============================================================================

const BrandStory = () => {
  return (
    <section
      id="story"
      className="section-padding"
      style={{ background: '#fff' }}
    >
      <div className="container story-grid">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Pour over coffee process"
          />
        </div>

        <div>
          <h2 className="section-title">CÂU CHUYỆN THƯƠNG HIỆU</h2>
          <h3>Chào Quý Khách Hàng Thân Mến!</h3>
          <br />
          <p className="section-desc" style={{ marginLeft: 0 }}>
            Chứa Chan Roaster ra đời mang theo hoài bão "Nâng Tầm Cà Phê Đặc Sản
            Việt Nam" và đem đến người tiêu dùng sản phẩm sạch và chất lượng. Từ
            khâu trồng trọt, thu hoạch hạt cà phê, chế biến cho đến rang mộc tự
            nhiên và đóng gói theo quy trình khép kín. Hy vọng mỗi tách cà phê
            đến tay khách hàng không chỉ là thức uống thơm ngon – mang niềm tự
            hào dân tộc mà còn nuôi dưỡng sở thích lành mạnh, tỉnh thức giữa đời
            sống số hoá.
          </p>
          <br />
          <h3>Biết ơn và trân trọng!</h3>

          <div className="story-cards">
            <div className="story-card card-vision">
              <Moon size={40} color="var(--secondary)" />
              <h4>Tầm Nhìn</h4>
              <p>
                Trở thành thương hiệu cà phê đặc sản được thế hệ trẻ tin chọn,
                mang hương vị Việt Nam ra thế giới.
              </p>
            </div>
            <div className="story-card card-mission">
              <ShieldCheck size={40} color="var(--primary)" />
              <h4>Sứ Mệnh</h4>
              <p>
                Kết nối người trẻ qua sản phẩm sạch, minh bạch. Gìn giữ giá trị
                bản sắc Việt, Tự nhiên và Hiện đại.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreProducts = () => {
  const [activeIdx, setActiveIdx] = useState(2);
  const len = CORE_PRODUCTS.length;

  // Thuật toán Infinite Scroll (Vòng lặp vô tận) sử dụng Modulo (%)
  const nextSlide = () => setActiveIdx((prev) => (prev + 1) % len);
  const prevSlide = () => setActiveIdx((prev) => (prev - 1 + len) % len);

  return (
    <section
      id="products"
      className="section-padding"
      style={{ background: 'var(--bg-light)' }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="section-title">CUNG CẤP 5 DÒNG SẢN PHẨM CÀ PHÊ</h2>
          <p className="section-desc">
            Được lấy cảm hứng từ những giá trị tốt đẹp, mỗi dòng sản phẩm là một
            trải nghiệm hương vị độc bản dành riêng cho bạn.
          </p>
        </div>

        <div className="coverflow-wrapper">
          {CORE_PRODUCTS.map((item, index) => {
            // Tính toán khoảng cách (offset) tương đối để xoay vòng
            let offset =
              ((index - activeIdx + len + Math.floor(len / 2)) % len) -
              Math.floor(len / 2);
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <div
                key={item.id}
                className={`coverflow-card ${isActive ? 'active' : 'inactive'}`}
                onClick={() => setActiveIdx(index)}
                style={{
                  // translateX: trượt ngang | translateZ: đẩy lùi ra sau | rotateY: nghiêng tạo khối 3D
                  transform: `translateX(calc(${offset} * min(16vw, 180px))) translateZ(${absOffset * -100}px) rotateY(${offset * -15}deg)`,
                  zIndex: 10 - absOffset,
                  opacity: absOffset > 1 ? 0.6 : 1, // Mờ dần các thẻ ở xa
                  pointerEvents: 'auto'
                }}
              >
                <img src={item.bgImage} alt={item.name} className="cf-bg" />
                <div className="cf-overlay"></div>

                <div className="cf-content">
                  <span className="cf-sub">{item.sub}</span>
                  <h3 className="cf-title">{item.name}</h3>
                  <div className="cf-specs">
                    <div className="cf-spec-item">
                      <span className="cf-spec-label">Thành phần</span>
                      <span className="cf-spec-value">{item.blend}</span>
                    </div>
                    <div className="cf-spec-item">
                      <span className="cf-spec-label">Hương vị</span>
                      <span className="cf-spec-value">{item.taste}</span>
                    </div>
                    <div className="cf-spec-item">
                      <span className="cf-spec-label">Tính cách</span>
                      <span className="cf-spec-value">{item.trait}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nút điều khiển Slider */}
        <div className="cf-controls">
          <button className="cf-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="cf-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  return (
    <section id="services" className="section-padding eco-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 className="section-title">Hệ Sinh Thái</h2>
          <p className="section-desc">
            Giải pháp trọn gói từ hạt cà phê, máy móc đến vận hành chuyên
            nghiệp.
          </p>
        </div>

        <div className="eco-grid">
          {ECOSYSTEM_DATA.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`eco-col col-${catIdx}`}
              style={{ borderColor: category.themeClass.border }}
            >
              <div className="eco-header">
                <div
                  className="eco-icon"
                  style={{
                    background: category.themeClass.bg,
                    color: category.themeClass.text
                  }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx} className="eco-item">
                    <div
                      className="eco-item-title"
                      style={
                        {
                          '--primary': category.themeClass.text
                        } as React.CSSProperties
                      }
                    >
                      <span
                        style={{
                          background: category.themeClass.text,
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          marginTop: '6px',
                          flexShrink: 0,
                          display: 'inline-block'
                        }}
                      ></span>
                      {item.name}
                    </div>

                    <div className="eco-tooltip">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="eco-tooltip-img"
                      />
                      <h4 style={{ color: category.themeClass.text }}>
                        {item.name}
                      </h4>
                      <p>{item.desc}</p>
                      <div className="eco-specs">
                        {item.details.map((d, i) => (
                          <div key={i} className="eco-spec-row">
                            <span className="eco-spec-label">{d.label}:</span>
                            <span className="eco-spec-value">{d.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: '#fff', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Liên hệ với chúng tôi</h2>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            Trải nghiệm hương vị bản nguyên tại cửa hàng hoặc gửi tin nhắn trực
            tiếp để được đội ngũ của chúng tôi tư vấn chi tiết.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={28} />
              </div>
              <div>
                <h4>Trụ Sở Chính</h4>
                <p>174 Ngô Quyền, xã Xuân Lộc, tỉnh Đồng Nai</p>
              </div>
            </div>
            <div className="info-item">
              <div
                className="info-icon"
                style={{ background: '#e0e7ff', color: '#1E3A8A' }}
              >
                <Phone size={28} />
              </div>
              <div>
                <h4>Hotline</h4>
                <p style={{ fontSize: '20px', color: 'var(--text-dark)' }}>
                  0889 604 234
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Mail size={28} />
              </div>
              <div>
                <h4>Email</h4>
                <p>chuachanroaster@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div>
                  <label className="form-label">Họ và tên *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div>
                  <label className="form-label">Số điện thoại *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="0909 123 456"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Nội dung quan tâm *</label>
                <textarea
                  rows={4}
                  className="form-input"
                  style={{ resize: 'none' }}
                  placeholder="Bạn cần tư vấn về sản phẩm, máy móc..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Gửi <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=174%20Ngô%20Quyền,%20Xuân%20Lộc,%20Đồng%20Nai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer-v5">
      <div className="container">
        <div className="bento-wrapper">
          {/* Brand Card */}
          <div className="bento-card span-2">
            <div className="bento-brand-content">
              <img
                src="/images/logo_chuachanroaster.png"
                alt="Chứa Chan Roaster"
                className="bento-logo"
              />
              <p className="bento-desc">
                Khơi dậy nguồn cảm hứng sống chậm và kết nối với thiên nhiên qua
                từng tách cà phê đặc sản rang mộc từ vùng đất Đồng Nai.
              </p>
            </div>
            <div className="bento-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61577158577427"
                target="_blank"
              >
                <img src="/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://www.tiktok.com/@lehongphicoffee" target="_blank">
                <img src="/tiktok.svg" alt="Tiktok" />
              </a>
            </div>
          </div>

          {/* Stores Card (Mở rộng thành dạng lưới Mini Cards) */}
          <div className="bento-card span-2">
            <h4 className="bento-title">Hệ Thống Cửa Hàng</h4>

            <div className="store-cards-grid">
              {/* Store 1 */}
              <div className="store-mini-card">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80"
                  alt="Cửa hàng 1"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng 1</h5>
                  <p>174 Ngô Quyền, Xuân Lộc, Đồng Nai</p>
                </div>
              </div>

              {/* Store 2 */}
              <div className="store-mini-card">
                <img
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=80"
                  alt="Cửa hàng 2"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng 2</h5>
                  <p>TP. Biên Hòa, Đồng Nai (Sắp mở)</p>
                </div>
              </div>

              {/* Store 3 */}
              <div className="store-mini-card">
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=200&q=80"
                  alt="Cửa hàng 3"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng 3</h5>
                  <p>Quận 1, TP. HCM (Sắp mở)</p>
                </div>
              </div>

              {/* Store 4 */}
              <div className="store-mini-card">
                <img
                  src="https://images.unsplash.com/photo-1501339817309-158cd983488c?w=200&q=80"
                  alt="Cửa hàng 4"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng.......</h5>
                  <p>Hệ thống nhượng quyền toàn quốc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bento-bottom">
            <p>
              &copy; {new Date().getFullYear()} Chứa Chan Roaster. All rights
              reserved.
            </p>
            <div className="bento-legal">
              <a href="#">Điều khoản sử dụng</a>
              <a href="#">Bảo mật thông tin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// --- MAIN APP COMPONENT ---
// ============================================================================
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />
        <FeaturedSlider />
        <BrandStory />
        <CoreProducts />
        <Ecosystem />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
