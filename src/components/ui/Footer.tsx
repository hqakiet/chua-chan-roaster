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
                  src="images/cuahang1.jpg"
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
                  src="images/coming-soon.jpg"
                  alt="Cửa hàng 2"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng 2</h5>
                  <p>Đang cập nhật ....</p>
                </div>
              </div>

              {/* Store 3 */}
              <div className="store-mini-card">
                <img
                  src="images/coming-soon.jpg"
                  alt="Cửa hàng 3"
                  className="store-mini-img"
                />
                <div className="store-mini-info">
                  <h5>Cửa hàng 3</h5>
                  <p>Đang cập nhật ....</p>
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

export default Footer;
