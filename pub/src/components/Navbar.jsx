import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Menu', 'Events', 'Gallery', 'Contact'];
  const isHomePage = location.pathname === '/';
  
  // Pages that should have a scrolled (solid) look regardless of scroll position
  const isSubPage = !isHomePage;

  return (
    <nav className={`navbar ${scrolled || isSubPage ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <span className="brand-manor">Manor</span>
        <span className="brand-subtext">by Parvi</span>
      </Link>
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((link) => {
          const isFullPageLink = ['Menu', 'Events', 'Gallery', 'Contact'].includes(link);
          const route = `/${link.toLowerCase()}`;
          
          if (isFullPageLink) {
            return (
              <li key={link}>
                <Link
                  to={route}
                  className="navbar__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            );
          }

          return (
            <li key={link}>
              <a
                href={isHomePage ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
