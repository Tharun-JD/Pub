import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      {/* Contact Band */}
      <div className="footer__contact">
        <div className="footer__contact-inner">
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📍</span>
            <div>
              <p className="footer__contact-label">Find Us</p>
              <p className="footer__contact-value">12, Bishop Garden Lane, Bangalore – 560 001</p>
            </div>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">📞</span>
            <div>
              <p className="footer__contact-label">Reservations</p>
              <p className="footer__contact-value">+91 98765 43210</p>
            </div>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">🕐</span>
            <div>
              <p className="footer__contact-label">Hours</p>
              <p className="footer__contact-value">Mon – Thu: 3PM – 1AM</p>
              <p className="footer__contact-value">Fri – Sun: 12PM – 2AM</p>
            </div>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">✉️</span>
            <div>
              <p className="footer__contact-label">Email Us</p>
              <p className="footer__contact-value">hello@manor.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__logo"><span className="brand-manor">Manor</span></div>
          <p className="footer__copy">© 2025 Manor. All rights reserved.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
