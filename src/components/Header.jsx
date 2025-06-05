import React, { useState } from 'react';
// import './Header.css'; 
import logoImage from '/images/smart_traders_logo.png'; // public klasöründeki resme doğrudan erişim

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false); // Hamburger menü durumu

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setIsNavActive(false); // Mobil menüyü kapat
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <div className="logo" onClick={scrollToTop}>
        <img src={logoImage} alt="Smart Traders Logo" />
        <span className="logo-text">SMART TRADERS</span>
      </div>
      <nav>
        <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isNavActive ? 'active' : ''}`}>
          <li><a href="#avantajlar" onClick={(e) => scrollToSection(e, 'avantajlar')}>Avantajlar</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Hakkında</a></li>
          <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Yorumlar</a></li>
          <li><a href="#membership" onClick={(e) => scrollToSection(e, 'membership')}>Üyelik</a></li>
          <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>SSS</a></li>
        </ul>
      </nav>
      <a href="#membership" className="join-btn" onClick={(e) => scrollToSection(e, 'membership')}>Hemen Katıl</a>
    </header>
  );
};

export default Header;