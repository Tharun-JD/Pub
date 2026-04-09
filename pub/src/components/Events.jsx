import { useState } from 'react';
import { Link } from 'react-router-dom';
import liveMusicImg from '../assets/live_music.png';
import eventNightImg from '../assets/event_night.png';
import gallery1Img from '../assets/gallery1.png';
import cocktailImg from '../assets/cocktail.png';
import CornerLights from './CornerLights';
import './Events.css';

/* ── DATA ── */
const eventsList = [
  /* Live Music */
  { img: liveMusicImg, title: 'Acoustic Soul Night', desc: 'An intimate evening with rising acoustic artists. Warm lights, soulful melodies.', date: 'Apr 12', time: '8:00 PM', tag: 'Live Music' },
  { img: liveMusicImg, title: 'Jazz Evening', desc: 'Sip your favorite wine to the smooth rhythms of live contemporary jazz.', date: 'Apr 14', time: '7:30 PM', tag: 'Live Music' },
  { img: liveMusicImg, title: 'Heritage Band Live', desc: 'Local favorites take the stage for a night of acoustic rock and indie hits.', date: 'Apr 18', time: '9:00 PM', tag: 'Live Music' },

  /* DJ Nights */
  { img: eventNightImg, title: 'DJ Night Fever', desc: 'Our resident DJ spins the best of house and retro disco till the early hours.', date: 'Apr 19', time: '10:00 PM', tag: 'DJ Nights' },
  { img: eventNightImg, title: 'EDM Party', desc: 'High-energy electronic beats and immersive light shows for the ultimate club vibe.', date: 'Apr 25', time: '10:30 PM', tag: 'DJ Nights' },
  { img: eventNightImg, title: 'Bollywood Beats', desc: 'The biggest desi hits and dance floor anthems for an unforgettable night.', date: 'Apr 26', time: '9:30 PM', tag: 'DJ Nights' },

  /* Special Events */
  { img: gallery1Img, title: 'Ladies Night', desc: 'Exclusive deals on cocktails all night for the ladies. Music, drinks, and vibes.', date: 'Every Wed', time: '7:00 PM', tag: 'Special Events' },
  { img: gallery1Img, title: 'Couple Night', desc: 'A curated evening for two with candlelight, champagne, and a special bar menu.', date: 'Every Sun', time: '8:00 PM', tag: 'Special Events' },
  { img: eventNightImg, title: 'Neon Theme Party', desc: 'Glow in the dark with our neon paint station, blacklights, and pulsing beats.', date: 'May 02', time: '9:00 PM', tag: 'Special Events' },
  { img: gallery1Img, title: 'New Year Bash', desc: 'Count down to the new year with a grand celebration, DJs, and bottomless drinks.', date: 'Dec 31', time: '8:00 PM', tag: 'Special Events' },
];

const weeklyOffers = [
  { title: 'Happy Hours', subtitle: '5 PM – 7 PM', desc: 'Unwind with premium draughts and classic cocktails at half the price.' },
  { title: 'Buy 1 Get 1 Free', subtitle: 'All Day Monday', desc: 'Start your week right with our exclusive B1G1 deal on select spirits.' },
];

/* ── MAIN COMPONENT ── */
const Events = ({ previewOnly, forceExpanded }) => {
  const [filter, setFilter] = useState('All Events');
  const isExpanded = forceExpanded || !previewOnly;

  const categories = ['All Events', 'Live Music', 'DJ Nights', 'Special Events'];

  const filteredEvents = filter === 'All Events' 
    ? eventsList 
    : eventsList.filter(ev => ev.tag === filter);

  const teaserEvents = eventsList.slice(0, 3);

  /* --- Preview Mode (Homepage) --- */
  if (previewOnly && !forceExpanded) {
    return (
      <section id="events" className="ev-preview">
        <CornerLights />
        <div className="ev-header">
          <span className="section__tag">Experience Manor</span>
          <h2 className="section__title">Events at <span className="brand-manor">Manor</span></h2>
          <div className="section__divider"><span /></div>
        </div>

        <div className="ev-grid ev-grid--3">
          {teaserEvents.map((ev, i) => (
            <div className="ev-card" key={i}>
              <div className="ev-card__img-wrap">
                <img src={ev.img} alt={ev.title} className="ev-card__img" />
                <div className="ev-card__overlay" />
                <div className="ev-card__date-badge">
                  <span className="ev-card__date">{ev.date}</span>
                </div>
                <span className="ev-card__tag">{ev.tag}</span>
              </div>
              <div className="ev-card__body">
                <h3 className="ev-card__title">{ev.title}</h3>
                <p className="ev-card__desc">{ev.desc}</p>
                <div className="ev-card__time">🕐 {ev.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/events" className="ev-cta-btn">Join the Night ↗</Link>
        </div>
      </section>
    );
  }

  /* --- Full Page Mode --- */
  return (
    <div className="ev-page">
      {/* Hero */}
      <section className="ev-hero">
        <CornerLights />
        <div className="ev-hero__bg" style={{ backgroundImage: `url(${eventNightImg})` }} />
        <div className="ev-hero__overlay" />
        <div className="ev-hero__content">
          <h1 className="ev-hero__title">Events at <span className="brand-manor">Manor</span></h1>
          <p className="ev-hero__subtitle">Experience unforgettable nights filled with rhythm and soul</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="ev-filters">
        <div className="ev-filters__inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ev-filter-btn ${filter === cat ? 'ev-filter-btn--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="ev-main-grid">
        <div className="ev-grid ev-grid--4">
          {filteredEvents.map((ev, i) => (
            <div className="ev-card" key={i}>
              <div className="ev-card__img-wrap">
                <img src={ev.img} alt={ev.title} className="ev-card__img" />
                <div className="ev-card__overlay" />
                <div className="ev-card__date-badge">
                  <span className="ev-card__date">{ev.date}</span>
                </div>
                <span className="ev-card__tag">{ev.tag}</span>
              </div>
              <div className="ev-card__body">
                <h3 className="ev-card__title">{ev.title}</h3>
                <p className="ev-card__desc">{ev.desc}</p>
                <div className="ev-card__time">🕐 {ev.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Offers */}
      <section className="ev-offers">
        <div className="ev-header">
          <span className="section__tag">Exclusive Deals</span>
          <h2 className="section__title">Weekly Offers</h2>
          <div className="section__divider"><span /></div>
        </div>
        <div className="ev-offers__grid">
          {weeklyOffers.map((offer, i) => (
            <div className="offer-card" key={i}>
              <div className="offer-card__content">
                <h4 className="offer-card__title">{offer.title}</h4>
                <p className="offer-card__subtitle">{offer.subtitle}</p>
                <p className="offer-card__desc">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="ev-final-cta">
        <Link to="/menu" className="ev-cta-btn ev-cta-btn--large">Explore Our Menu</Link>
      </section>
    </div>
  );
};

export default Events;
