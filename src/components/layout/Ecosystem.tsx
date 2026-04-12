import {
  Coffee,
  GraduationCap,
  Leaf,
  Wrench,
  Zap,
  ChevronDown
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ECOSYSTEM_DATA = [
  {
    title: 'Cà Phê',
    icon: <Coffee size={24} />,
    themeClass: { text: '#92400e', bg: '#fef3c7', border: '#fde68a' },
    items: [
      {
        name: 'Cà Phê Pha Máy',
        img: 'images/caphe-phamay.jpg',
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
        img: 'images/caphe-phin.jpg',
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
        name: 'Cà Phê Túi Giấy',
        img: 'images/caphe-tui-giay.jpg',
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
    icon: <Leaf size={24} />,
    themeClass: { text: '#166534', bg: '#dcfce7', border: '#bbf7d0' },
    items: [
      {
        name: 'Trà Pha Chế',
        img: 'images/tra-olong.jpg',
        desc: 'Cốt trà đậm vị, hương thơm tự nhiên, phù hợp pha trà sữa và trà trái cây.',
        details: [
          { label: 'Phân loại', value: 'Trà Lài, Trà Olong, Trà Đen' },
          { label: 'Ứng dụng', value: 'Trà sữa, Trà trái cây, Trà macchiato' }
        ]
      },
      {
        name: 'Đặc Sản Núi Chứa Chan',
        img: 'images/chuoi-say.png',
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
    icon: <Wrench size={24} />,
    themeClass: { text: '#374151', bg: '#f3f4f6', border: '#d1d5db' },
    items: [
      {
        name: 'Máy Pha Cà Phê',
        img: 'images/may-pha-caphe.jpg',
        desc: 'Hệ thống máy pha tự động và bán tự động từ các thương hiệu hàng đầu thế giới.',
        details: [], // Bỏ phần details chung
        subItems: [
          {
            name: 'Nuova Simonelli Appia Life 2G',
            img: 'images/nuova-simonelli.jpg',
            desc: 'Dòng máy pha espresso chuyên nghiệp cao cấp từ Ý. Nồi hơi đồng dung tích lớn, chiết xuất ổn định tuyệt đối ngay cả trong giờ cao điểm.',
            specs: [
              { label: 'Kích thước', value: '78.4 x 49.8 x 54.5 cm' },
              { label: 'Dung tích nồi hơi', value: '11 Lít' },
              { label: 'Năng suất', value: 'lên đến 350 ly/ngày' }
            ]
          },
          {
            name: 'Casadio Undici A1 Group',
            img: 'images/casadio-undici.png',
            desc: 'Casadio Undici sở hữu thiết kế tinh tế, cấu tạo đa chức năng, hoàn toàn phù hợp cho mọi mô hình kinh doanh quán cà phê',
            specs: [
              { label: 'Kích thước', value: '43 x 53 x 57 cm' },
              { label: 'Nồi hơi', value: '5 Lít' },
              { label: 'Năng suất', value: '250-300 ly/ngày' }
            ]
          },
          {
            name: 'Gemilai CRM 3200B',
            img: 'images/gemilai-crm.jpg',
            desc: 'Thế Hệ Mới thuộc phân khúc tầm trung dành quán cà phê nhỏ vừa, mô hình cà phê mang đi. Sở hữu các chức năng cơ bản cần thiết nhất của một máy pha cà phê Espresso. Thiết kế đơn giản nhưng tinh tế và hiện đại. Các chức năng, phím bấm thân thiện để phù hợp với tất cả mọi người dễ dàng sử dụng.',
            specs: [
              { label: 'Kích thước', value: '35 x 49 x 42 cm' },
              { label: 'Nồi hơi', value: '3 nồi hơi riêng biệt 550ml' },
              { label: 'Năng suất', value: '150 ly/ngày' }
            ]
          }
        ]
      },
      {
        name: 'Máy Xay Cà Phê & Máy Nén',
        img: 'images/mayxay-caphe.jpg',
        desc: 'Kiểm soát độ mịn hoàn hảo cho từng shot Espresso.',
        details: [],
        subItems: [
          {
            name: 'Fiorenzato F64E',
            img: 'images/fiorenzato.png',
            desc: 'Dòng máy thế hệ mới với nhiều ưu điểm nỗi bật. Nhưng nhìn chung, cứng cáp – mạnh mẽ – thông minh là những từ khóa chính xác khi nhận xét về F64E.',
            specs: [
              { label: 'Kích thước', value: '255 x 320 x 635mm' },
              { label: 'Lưỡi dao', value: '64mm' },
              { label: 'Tốc độ', value: '1350 – 1550 (r.p.m) / 50-60 (Hz)' }
            ]
          },
          {
            name: 'Mazzer Super Jolly',
            img: 'images/mazzer-super-jolly.jpg',
            desc: 'Dòng máy xay cà phê cao cấp được ra đời bởi sự hợp tác của hai thương hiệu đình đám La Marzocco Home và Mazzer. Sản phẩm được người dùng đánh giá là sản phẩm hoàn hảo dành cho những cửa hàng có quy mô trung bình.',
            specs: [
              { label: 'Kích thước', value: '195 x 263 x 610mm' },
              { label: 'Lưỡi dao', value: '64,5mm' },
              { label: 'Tốc độ', value: '1400 - 1600 (r.p.m) / 50-60 (Hz)' }
            ]
          }
        ]
      },
      {
        name: 'Máy Làm Đá',
        img: 'images/may-lam-da.jpg',
        desc: 'Cung cấp nguồn đá sạch liên tục cho hệ thống quầy bar.',
        details: [],
        subItems: [
          {
            name: 'Kaiser NK 63',
            img: 'images/kaiser-nk-63.png',
            desc: 'Mẫu máy làm đá viên dạng khối vuông, được thiết kế dành riêng cho các không gian kinh doanh vừa và nhỏ như quán trà sữa, bar cocktail hay nhà hàng gia đình.',
            specs: [
              { label: 'Kích thước', value: '515 x 620 x 835 mm' },
              { label: 'Kích thước đá viên', value: '30 x 34 x 34 mm' },
              { label: 'Thùng lưu trữ đá', value: '25 Kg' },
              { label: 'Năng suất', value: '50 Kg/ngày' }
            ]
          },
          {
            name: 'Kaiser IMK 150',
            img: 'images/kaiser-imk-150.jpg',
            desc: 'Thiết kế dạng tủ đứng với lớp vỏ inox cao cấp sáng bóng. Đây là chất liệu thường dùng trong thiết bị nhà bếp chuyên nghiệp nên có khả năng chống gỉ sét tốt, dễ lau chùi, đảm bảo vệ sinh, chịu được môi trường ẩm và nhiệt độ cao.',
            specs: [
              { label: 'Kích thước', value: '74.5 x 62 x 113 cm' },
              { label: 'Kích thước đá viên', value: '22 x 22 x 22 mm' },
              { label: 'Thùng lưu trữ đá', value: '50 Kg' },
              { label: 'Năng suất', value: '100 Kg/ngày' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Máy Trà & Sinh Tố',
    icon: <Zap size={24} />,
    themeClass: { text: '#4f46e5', bg: '#e0e7ff', border: '#c7d2fe' },
    items: [
      {
        name: 'Thiết Bị Trà Sữa Chuyên Dụng',
        img: 'images/thietbi_trasua.jpg',
        desc: 'Trọn bộ máy móc giúp tối ưu thời gian pha chế và chuẩn hóa định lượng.',
        details: [],
        subItems: [
          {
            name: 'Máy đun nước siêu tốc FEST RC-10',
            img: 'images/fest-rc.jpg',
            desc: 'Là một phần không thể thiếu của các của hàng trà sữa, nước giải khát. Tuy nhiên, việc giữ ấm một lượng lớn nước là khá khó khăn. Chưa kể đến việc đun nước nước cũng cực kỳ tốn thời gian, làm chậm quy trình làm việc và tốc độ phục vụ khách hàng của bạn.',
            specs: [
              { label: 'Kích thước', value: '188 x 370 x 645 mm' },
              { label: 'Năng suất', value: '20 lít/giờ' }
            ]
          },
          {
            name: 'Máy đun nước nóng Marco MT8',
            img: 'images/marco-mt8.png',
            desc: 'Marco Boiler MT 8 là sản phẩm mới , được trang bị thêm vòi nước nóng tiện lợi . Vỏ bằng thép không gỉ với chân đế cách mặt bàn tối thiểu. Nồi hơi được bọc cách nhiệt . Tương thích với bộ chuyển đổi vòi nước rảnh tay.',
            specs: [
              { label: 'Kích thước', value: '436 x 202 x 589 mm' },
              { label: 'Năng suất', value: '28 lít/giờ' }
            ]
          }
        ]
      },
      {
        name: 'Máy Xay Sinh Tố & Nước Ép',
        img: 'images/mayxay-sinhto.jpg',
        desc: 'Máy xay công nghiệp công suất lớn, phá đá mượt mà.',
        details: [],
        subItems: [
          {
            name: 'Vitamix The Quiet One 220v',
            img: 'images/vitamix-quiet-.png',
            desc: 'Là một công cụ hỗ trợ đắc lực cho bạn trong việc làm phong phú thêm thực đơn giải khát với các món xay của mình.',
            specs: [
              { label: 'Kích thước', value: '396 x 343 x 645 mm' },
              { label: 'Năng suất', value: '37.000 vòng/phút' }
            ]
          },
          {
            name: 'Omniblend V-TM800A',
            img: 'images/omniblend-tm800a.jpg',
            desc: 'Marco Boiler MT 8 là sản phẩm mới , được trang bị thêm vòi nước nóng tiện lợi . Vỏ bằng thép không gỉ với chân đế cách mặt bàn tối thiểu. Nồi hơi được bọc cách nhiệt . Tương thích với bộ chuyển đổi vòi nước rảnh tay.',
            specs: [
              { label: 'Kích thước', value: '213 x 235 x 405 mm' },
              { label: 'Năng suất', value: '38.000 vòng/phút' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Dịch Vụ F&B Trọn Gói',
    icon: <GraduationCap size={24} />,
    themeClass: { text: '#be185d', bg: '#fce7f3', border: '#fbcfe8' },
    items: [
      {
        name: 'Đào Tạo Pha Chế',
        img: 'images/daotao-phache.jpg',
        desc: 'Cập nhật công thức mới nhất, trang bị kỹ năng tay nghề chuẩn chuyên gia.',
        details: [
          { label: 'Cà phê', value: 'Máy & Truyền thống' },
          { label: 'Khác', value: 'Trà - Trà sữa & Sinh tố - Nước ép' }
        ]
      },
      {
        name: 'Setup & Vận Hành Quán',
        img: 'images/setup-coffe-shop.jpg',
        desc: 'Giải pháp toàn diện từ lên menu, bố trí quầy bar đến đào tạo nhân sự cho chuỗi.',
        details: [
          { label: 'Mô hình', value: 'Quán Cà Phê, Quán Trà Sữa, Nước Ép' },
          { label: 'Phạm vi', value: 'Cửa hàng độc lập, Chuỗi nhượng quyền' }
        ]
      }
    ]
  }
];

const Ecosystem = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const activeCategory = ECOSYSTEM_DATA[activeTab];

  useEffect(() => {
    setExpandedIdx(0);
  }, [activeTab]);

  const toggleAccordion = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="services" className="section-padding eco-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 className="section-title">Hệ sinh thái</h2>
          <p className="section-desc">
            Cung cấp giải pháp trọn vẹn từ nguyên liệu cà phê, máy móc thiết bị
            đến đào tạo và vận hành chuyên nghiệp.
          </p>
        </div>

        <div className="eco-wrapper">
          {/* Sidebar */}
          <div className="eco-sidebar custom-scrollbar">
            {ECOSYSTEM_DATA.map((cat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  className={`eco-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                  style={
                    isActive
                      ? {
                          borderColor: cat.themeClass.border,
                          background: cat.themeClass.bg,
                          color: cat.themeClass.text
                        }
                      : {}
                  }
                >
                  <span
                    className="eco-tab-icon"
                    style={{
                      background: isActive ? '#fff' : cat.themeClass.bg,
                      color: cat.themeClass.text
                    }}
                  >
                    {cat.icon}
                  </span>
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="eco-content" key={`eco-content-${activeTab}`}>
            <div className="eco-accordion-list">
              {activeCategory.items.map((item, idx) => {
                const isExpanded = expandedIdx === idx;

                return (
                  <div
                    key={idx}
                    className={`eco-accordion-item ${isExpanded ? 'expanded' : ''}`}
                  >
                    {/* Header */}
                    <div
                      className="eco-accordion-header"
                      onClick={() => toggleAccordion(idx)}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="eco-accordion-img"
                      />
                      <div className="eco-accordion-info">
                        <h4 className="eco-accordion-title">{item.name}</h4>
                        <p className="eco-accordion-desc">{item.desc}</p>
                      </div>
                      <div className="eco-accordion-trigger">
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="eco-accordion-body">
                      <div className="eco-accordion-content">
                        {/* Render Level 1 Details (if any) */}
                        {item.details && item.details.length > 0 && (
                          <div className="eco-spec-grid">
                            {item.details.map((d, i) => (
                              <div key={i} className="eco-spec-row">
                                <span className="eco-spec-label">
                                  {d.label}
                                </span>
                                <span className="eco-spec-value">
                                  {d.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Render Level 2 Sub-items (if any) */}
                        {/* @ts-ignore - Ignore type error as we dynamically added subItems to some objects */}
                        {item.subItems && item.subItems.length > 0 && (
                          <div className="eco-subitem-list">
                            {/* @ts-ignore */}
                            {item.subItems.map((sub, subIdx) => (
                              <div key={subIdx} className="eco-subitem">
                                {/* Thêm hình ảnh cho sub item */}
                                {sub.img && (
                                  <img
                                    src={sub.img}
                                    alt={sub.name}
                                    className="eco-subitem-img"
                                  />
                                )}
                                <div className="eco-subitem-info">
                                  <div className="eco-subitem-header">
                                    {sub.name}
                                  </div>
                                  <div className="eco-subitem-desc">
                                    {sub.desc}
                                  </div>
                                  <div className="eco-subitem-specs">
                                    {/* @ts-ignore */}
                                    {sub.specs.map((spec, sIdx) => (
                                      <div
                                        key={sIdx}
                                        className="eco-subitem-spec"
                                      >
                                        <span>{spec.label}:</span> {spec.value}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
