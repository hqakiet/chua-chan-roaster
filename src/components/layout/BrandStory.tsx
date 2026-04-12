import { Leaf, Moon, ShieldCheck } from 'lucide-react';

const BrandStory = () => {
  return (
    <section
      id="story"
      className="section-padding"
      style={{ background: '#fff' }}
    >
      <div className="container story-grid">
        <div className="story-image">
          <img src="/images/brand_story.png" alt="Pour over coffee process" />
        </div>

        <div>
          <h2 className="section-title">CÂU CHUYỆN THƯƠNG HIỆU</h2>

          <p className="section-desc" style={{ marginLeft: 0 }}>
            Chứa Chan Roaster ra đời vào năm 2025 mang khát vọng trở thành
            thương hiệu cà phê đặc sản Việt Nam được yêu thích. Từ những hạt cà
            phê được chọn lọc kỹ lưỡng, chế biến và rang mộc thủ công, chúng tôi
            mang đến sản phẩm sạch, minh bạch và giàu bản sắc.
            <br />
            <br />
            Mỗi tách cà phê không chỉ là hương vị thuần khiết, mà còn là khoảnh
            khắc tỉnh thức giữa đời sống số hóa – nơi con người được sống chậm
            lại, cảm nhận năng lượng mới và kết nối với niềm tự hào cà phê Việt
            trong nhịp sống hiện đại.
          </p>

          <div className="story-cards">
            <div className="story-card card-vision">
              <Moon size={32} color="var(--secondary)" />
              <h4>Tầm Nhìn</h4>
              <p>
                Trở thành thương hiệu cà phê đặc sản được thế hệ trẻ tin chọn,
                mang hương vị Việt Nam ra thế giới.
              </p>
            </div>
            <div className="story-card card-mission">
              <ShieldCheck size={32} color="var(--primary)" />
              <h4>Sứ Mệnh</h4>
              <p>
                Kết nối người trẻ qua sản phẩm sạch, minh bạch. Gìn giữ giá trị
                bản sắc Việt, Tự nhiên và Hiện đại.
              </p>
            </div>
            <div className="story-card card-value">
              <Leaf size={32} color="#10b981" />
              <h4>Giá Trị Cốt Lõi</h4>
              <p>
                Chất lượng
                <br /> Tỉnh thức
                <br /> Tự hào Việt
                <br /> Minh bạch
                <br /> Bền vững
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
