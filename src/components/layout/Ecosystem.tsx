import { Coffee, GraduationCap, Leaf, Wrench, Zap } from 'lucide-react';

const ECOSYSTEM_DATA = [
  {
    title: 'Cà Phê',
    icon: <Coffee size={28} />,
    themeClass: { text: '#92400e', bg: '#fef3c7', border: '#fde68a' },
    items: [
      {
        name: 'Cà Phê Pha Máy',
        img: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Được rang mộc chuyên dụng để chiết xuất lớp Crema hoàn hảo cho các dòng máy pha.',
        details: [
          {
            label: 'Dòng Nguyên Bản',
            value: 'Robusta Honey, Robusta Natural, Arabica Cầu Đất'
          },
          {
            label: 'Dòng Phối Trộn',
            value: '7 Ro Honey - 3 Ara, 7 Ro Natural - 3 Ara'
          }
        ]
      },
      {
        name: 'Cà Phê Pha Phin',
        img: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Hương vị truyền thống đậm đà, hậu vị ngọt sâu, chuẩn gu cà phê Việt.',
        details: [
          {
            label: 'Dòng Nguyên Bản',
            value: 'Robusta Honey, Robusta Natural, Arabica Cầu Đất'
          },
          {
            label: 'Dòng Phối Trộn',
            value: '8 Ro Honey - 2 Ara, 8 Ro Natural - 2 Ara'
          }
        ]
      },
      {
        name: 'Cà Phê Túi Giấy (Drip Bag)',
        img: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Tiện lợi, nhanh chóng nhưng vẫn giữ trọn hương vị cà phê rang mộc tươi mới.',
        details: [
          {
            label: 'Dòng Nguyên Bản',
            value: 'Robusta Honey, Robusta Natural, Arabica Cầu Đất'
          },
          {
            label: 'Dòng Phối Trộn',
            value: '8 Ro Honey - 2 Ara, 8 Ro Natural - 2 Ara'
          }
        ]
      }
    ]
  },
  {
    title: 'Trà & Đặc Sản',
    icon: <Leaf size={28} />,
    themeClass: { text: '#166534', bg: '#dcfce7', border: '#bbf7d0' },
    items: [
      {
        name: 'Trà Pha Chế Chuyên Dụng',
        img: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Cốt trà đậm vị, hương thơm tự nhiên, phù hợp pha trà sữa và trà trái cây.',
        details: [
          { label: 'Phân loại', value: 'Trà Lài, Trà Olong, Trà Đen' },
          { label: 'Ứng dụng', value: 'Trà sữa, Trà trái cây, Trà macchiato' }
        ]
      },
      {
        name: 'Đặc Sản Núi Chứa Chan',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fa077408?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Nông sản địa phương tuyển chọn, sấy giòn rụm, giữ nguyên dưỡng chất.',
        details: [
          { label: 'Sản phẩm', value: 'Chuối sấy, Hạt điều' },
          { label: 'Đóng gói', value: 'Túi zip tiện lợi, đảm bảo an toàn VSTP' }
        ]
      }
    ]
  },
  {
    title: 'Thiết Bị',
    icon: <Wrench size={28} />,
    themeClass: { text: '#374151', bg: '#f3f4f6', border: '#d1d5db' },
    items: [
      {
        name: 'Máy Pha Cà Phê Công Nghiệp',
        img: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Hệ thống máy pha tự động và bán tự động từ các thương hiệu hàng đầu thế giới.',
        details: [
          {
            label: 'Phân khúc Cao cấp',
            value: 'Nouva Simonelli, Faema, Astoria, Wega'
          },
          {
            label: 'Phân khúc Tầm trung',
            value: 'Casadio, Lamvita, Carimali, Gemilai'
          }
        ]
      },
      {
        name: 'Máy Xay Cà Phê & Máy Nén',
        img: 'https://images.unsplash.com/photo-1517055745164-325db197d195?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Kiểm soát độ mịn hoàn hảo cho từng shot Espresso.',
        details: [
          {
            label: 'Thương hiệu',
            value:
              'Mahlkonig, Mazzer, Fiorenzato, Eureka, Heycafe, Robust, Mxl beans'
          },
          { label: 'Phụ kiện', value: 'Máy nén tự động Eureka' }
        ]
      },
      {
        name: 'Máy Làm Đá Tinh Khiết',
        img: 'https://images.unsplash.com/photo-1582255335835-21d3f54bf60b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Cung cấp nguồn đá sạch liên tục cho hệ thống quầy bar.',
        details: [
          { label: 'Model phổ biến', value: 'Nk-63, Nk-121' },
          { label: 'Model công suất lớn', value: 'Imk-75, Imk-150' }
        ]
      }
    ]
  },
  {
    title: 'Máy Trà & Sinh Tố',
    icon: <Zap size={28} />,
    themeClass: { text: '#4f46e5', bg: '#e0e7ff', border: '#c7d2fe' },
    items: [
      {
        name: 'Thiết Bị Trà Sữa Chuyên Dụng',
        img: 'https://images.unsplash.com/photo-1620247657960-9d0d39e8ea69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Trọn bộ máy móc giúp tối ưu thời gian pha chế và chuẩn hóa định lượng.',
        details: [
          {
            label: 'Nước nóng',
            value: 'Fest RC 10, Macro MT8, Cây đun nước sôi'
          },
          {
            label: 'Hỗ trợ pha chế',
            value: 'Máy đánh sữa, Máy lắc, Máy đong bột, Máy định lượng đường'
          }
        ]
      },
      {
        name: 'Máy Xay Sinh Tố & Nước Ép',
        img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Máy xay công nghiệp công suất lớn, phá đá mượt mà.',
        details: [
          {
            label: 'Dòng Cao cấp',
            value: 'Vitamix The Quiet One 220v, Vitamix Drink Machine Advance'
          },
          {
            label: 'Dòng Phổ thông',
            value: 'Omniblend TM-800A (Kèm hộp chống ồn)'
          }
        ]
      }
    ]
  },
  {
    title: 'Dịch Vụ F&B Trọn Gói',
    icon: <GraduationCap size={28} />,
    themeClass: { text: '#be185d', bg: '#fce7f3', border: '#fbcfe8' },
    items: [
      {
        name: 'Đào Tạo Pha Chế Thực Chiến',
        img: 'https://images.unsplash.com/photo-1600565152253-29a50274151b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Cập nhật công thức mới nhất, trang bị kỹ năng tay nghề chuẩn chuyên gia.',
        details: [
          { label: 'Module 1', value: 'Barista Cà phê (Máy & Truyền thống)' },
          { label: 'Module 2 & 3', value: 'Trà - Trà sữa & Sinh tố - Nước ép' }
        ]
      },
      {
        name: 'Setup & Vận Hành Quán F&B',
        img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        desc: 'Giải pháp toàn diện từ lên menu, bố trí quầy bar đến đào tạo nhân sự cho chuỗi.',
        details: [
          {
            label: 'Mô hình',
            value: 'Quán Cà Phê, Quán Trà Sữa, Quán Nước Ép'
          },
          { label: 'Phạm vi', value: 'Cửa hàng độc lập, Chuỗi nhượng quyền' }
        ]
      }
    ]
  }
];

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

export default Ecosystem;
