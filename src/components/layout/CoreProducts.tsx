import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CORE_PRODUCTS = [
  {
    id: 'tri',
    name: 'Trí',
    sub: 'Sáng suốt & Tinh tế',
    blend: '100% Arabica Cầu Đất',
    taste: 'Chua thanh, ngọt nhẹ, hậu vị trái cây',
    trait: 'Phức hợp nhưng cân bằng',
    bgImage: 'images/tri.png'
  },
  {
    id: 'duc',
    name: 'Đức',
    sub: 'Tròn đầy & Ấm áp',
    blend: '100% Robusta Natural',
    taste: 'Đậm, body mạnh, hơi đắng, ít chua.',
    trait: 'Mạnh mẽ nhưng êm dịu',
    bgImage: 'images/duc.png'
  },
  {
    id: 'nhan',
    name: 'Nhẫn',
    sub: 'Vững vàng & Trầm ổn',
    blend: '80% Robusta Honey & 20% Arabica Cầu Đất',
    taste: 'Đắng vừa, hậu ngọt sâu',
    trait: 'Trầm, giàu chiều sâu',
    bgImage: 'images/nhan.png'
  },
  {
    id: 'tai',
    name: 'Tài',
    sub: 'Nổi bật & Bứt phá',
    blend: '100% Robusta Honey',
    taste: 'Đậm đà, hậu ngọt trái cây, điểm nhấn rõ rệt',
    trait: 'Bùng nổ, cá tính, giàu năng lượng',
    bgImage: 'images/tai.png'
  },
  {
    id: 'loc',
    name: 'Lộc',
    sub: 'Tươi sáng & Dễ chịu',
    blend: '70% Robusta Natural & 30% Arabica Cầu Đất',
    taste: 'Ngọt hậu, thơm nồng, chua thanh nhẹ',
    trait: 'Tươi mới, hài hòa',
    bgImage: 'images/loc.png'
  }
];

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

export default CoreProducts;
