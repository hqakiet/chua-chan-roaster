import { Coffee, Settings, Store, Zap } from 'lucide-react';

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
