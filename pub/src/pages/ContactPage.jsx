import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroPubImg from '../assets/hero_pub.png';
import { useState, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to Manor! Your message has been sent successfully.');
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg" style={{ backgroundImage: `url(${heroPubImg})` }} />
        <div className="contact-hero__overlay" />
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="gallery-hero__subtitle">Your journey to the soul of <span className="brand-manor">Manor</span> starts here.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="contact-grid">
        {/* Contact Form */}
        <section className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Enter your name" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="hello@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Your Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className={`star ${rating >= star ? 'star--active' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" rows="5" placeholder="Share your thoughts..." required></textarea>
            </div>

            <button type="submit" className="form-submit form-submit--cta">Send Message ↗</button>
          </form>
        </section>

        {/* Side Info */}
        <aside className="contact-sidebar">
          <div className="info-box">
            <h3 className="info-box__title">The Manor Hub</h3>
            <p className="info-box__text">
              123 Nightfall Avenue, <br />
              Starlight District, <br />
              Bangalore, KA 560001
            </p>
          </div>

          <div className="info-box">
            <h3 className="info-box__title">Direct Lines</h3>
            <p className="info-box__text">
              <strong>Phone:</strong> +91 98765 43210 <br />
              <strong>Email:</strong> hello@manor.in
            </p>
          </div>

          <div className="contact-map">
            <div className="map-placeholder-content">
              <span className="map-icon">📍</span>
              <p className="info-box__text">Midnight Map Integration</p>
              <p style={{ fontSize: '0.7rem', color: '#D4AF37' }}>Find Our Location</p>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
