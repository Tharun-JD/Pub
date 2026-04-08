import { Link } from 'react-router-dom';
import heroPub from '../assets/hero_pub.png';
import CornerLights from './CornerLights';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <CornerLights />
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroPub})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Est. 2018 · Craftmanship & Soul</p>
        <h1 className="hero__title">Welcome to <span className="brand-manor">Manor</span></h1>
        <p className="hero__subtitle">Where Nights Feel Warm &amp; Alive</p>
        <div className="hero__buttons">
          <Link to="/menu" className="hero__btn hero__btn--primary">View Menu</Link>
          <Link to="/events" className="hero__btn hero__btn--secondary">Explore Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
