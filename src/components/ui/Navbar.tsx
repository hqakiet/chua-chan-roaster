import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Câu chuyện thương hiệu', href: '#story' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Hệ Sinh Thái', href: '#services' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#">
          <a href="#">
            <img
              src="images/logo_chuachanroaster.webp"
              alt="Chứa Chan"
              className="nav-logo"
            />
          </a>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-contact-btn">
            Liên Hệ <ArrowRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
