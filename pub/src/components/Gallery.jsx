import { Link } from 'react-router-dom';
import gallery1Img from '../assets/gallery1.png';
import liveMusicImg from '../assets/live_music.png';
import heroPubImg from '../assets/hero_pub.png';
import eventNightImg from '../assets/event_night.png';
import cocktailImg from '../assets/cocktail.png';
import pubSnacksImg from '../assets/pub_snacks.png';
import craftBeerImg from '../assets/craft_beer.png';
import './Gallery.css';

const photos = [
  { img: gallery1Img, label: 'The Atmosphere' },
  { img: liveMusicImg, label: 'Live Music Nights' },
  { img: heroPubImg, label: 'The Bar' },
  { img: eventNightImg, label: 'Evening Events' },
  { img: cocktailImg, label: 'Signature Cocktails' },
  { img: pubSnacksImg, label: 'Pub Favourites' },
  { img: craftBeerImg, label: 'On Tap' },
  { img: gallery1Img, label: 'Weekend Vibes' },
  { img: heroPubImg, label: 'Interior Design' },
  { img: eventNightImg, label: 'Private Parties' },
  { img: cocktailImg, label: 'Mixology' },
  { img: pubSnacksImg, label: 'Gourmet Bites' },
];

const Gallery = ({ previewOnly = false }) => {
  const displayedPhotos = previewOnly ? photos.slice(0, 8) : photos;

  return (
    <section id="gallery" className={previewOnly ? "gallery-section" : "gallery-page-cnt"}>
      {!previewOnly && (
        <div className="gallery-hero">
          <div className="gallery-hero__bg" style={{ backgroundImage: `url(${heroPubImg})` }} />
          <div className="gallery-hero__overlay" />
          <div className="gallery-hero__content">
            <h1 className="gallery-hero__title"><span className="brand-manor">Manor</span> Gallery</h1>
            <p className="gallery-hero__subtitle">Every moment captured, every detail curated.</p>
          </div>
        </div>
      )}

      {previewOnly && (
        <div className="gallery-section__header">
          <span className="section__tag">A Glimpse Inside</span>
          <h2 className="section__title">Gallery</h2>
          <div className="section__divider"><span /></div>
        </div>
      )}

      <div className={previewOnly ? "gallery__grid" : "gallery__full-grid"}>
        {displayedPhotos.map((photo, i) => (
          <div
            className={`gallery-item ${previewOnly && i === 0 ? 'gallery-item--wide' : ''} ${previewOnly && i === 4 ? 'gallery-item--tall' : ''}`}
            key={i}
          >
            <img src={photo.img} alt={photo.label} className="gallery-item__img" />
            <div className="gallery-item__overlay">
              <span className="gallery-item__label">{photo.label}</span>
            </div>
          </div>
        ))}
      </div>

      {previewOnly && (
        <div className="gallery-cta">
          <Link to="/gallery" className="mn-toggle__btn mn-toggle__btn--active" style={{ textDecoration: 'none', padding: '1rem 3rem', display: 'inline-block' }}>
            Explore Full Gallery ↗
          </Link>
        </div>
      )}
    </section>
  );
};

export default Gallery;
