import liveMusicImg from '../assets/live_music.png';
import eventNightImg from '../assets/event_night.png';
import heroPubImg from '../assets/hero_pub.png';
import CornerLights from './CornerLights';
import './Highlights.css';

const cards = [
  {
    img: liveMusicImg,
    title: 'Live Music',
    desc: 'Every Friday & Saturday night. Local artists bring the soul of Manor alive with acoustic sets and soulful performances.',
    tag: 'Fri & Sat · 8PM',
  },
  {
    img: heroPubImg,
    title: 'Happy Hours',
    desc: 'Unwind with handcrafted cocktails and premium draughts at our exclusive happy hour deals. The best time to visit.',
    tag: 'Daily · 4PM – 7PM',
  },
  {
    img: eventNightImg,
    title: 'Special Events',
    desc: 'From themed evenings to private dinners, Manor hosts unforgettable experiences tailored to make every moment count.',
    tag: 'Monthly Events',
  },
];

const Highlights = () => {
  return (
    <section className="highlights" id="highlights">
      <CornerLights />
      <div className="highlights__header">
        <span className="section__tag">Our Offerings</span>
        <h2 className="section__title">Experience <span className="brand-manor">Manor</span></h2>
        <div className="section__divider"><span /></div>
      </div>
      <div className="highlights__grid">
        {cards.map((card, i) => (
          <div className="highlight-card" key={i}>
            <div className="highlight-card__img-wrap">
              <img src={card.img} alt={card.title} className="highlight-card__img" />
              <div className="highlight-card__img-overlay" />
            </div>
            <div className="highlight-card__body">
              <h3 className="highlight-card__title">{card.title}</h3>
              <p className="highlight-card__desc">{card.desc}</p>
              <span className="highlight-card__tag">{card.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
