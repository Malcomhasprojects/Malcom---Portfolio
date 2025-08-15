import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo group">
          <span className="text-blue-400 group-hover:text-white transition-colors duration-300">
            Malcom
          </span>
          <span className="text-white group-hover:text-blue-400 transition-colors duration-300">
            Chiaji
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Let's Talk</span>
          </div>
        </a>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''} md:hidden`}>
        <ul className="mobile-nav-list">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a 
                href={link} 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
