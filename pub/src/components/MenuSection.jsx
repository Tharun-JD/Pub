import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import cocktailImg from '../assets/cocktail.png';
import craftBeerImg from '../assets/craft_beer.png';
import pubSnacksImg from '../assets/pub_snacks.png';
import heroPubImg from '../assets/hero_pub.png';
import CornerLights from './CornerLights';
import './MenuSection.css';

/* ── DATA ── */
const cocktails = [
  { img: cocktailImg, name: 'Classic Mojito', desc: 'Rum, fresh lime, mint leaves, sugar syrup, and soda — a timeless refresher.', price: '₹380', badge: 'Popular' },
  { img: cocktailImg, name: 'Cosmopolitan', desc: 'Vodka, cranberry juice, triple sec, and a squeeze of fresh lime. Sophistication in a glass.', price: '₹420', badge: null },
  { img: cocktailImg, name: 'Whiskey Sour', desc: 'Bourbon, fresh lemon juice, simple syrup, and silky egg-white foam.', price: '₹450', badge: 'Signature' },
  { img: cocktailImg, name: 'Long Island Iced Tea', desc: 'Five spirits, sour mix, and cola — the legendary over-the-top blend.', price: '₹520', badge: null },
  { img: cocktailImg, name: 'Masala Margarita', desc: 'Tequila with a spicy twist of bird’s eye chili, tamarind, and black salt.', price: '₹420', badge: 'New' },
  { img: cocktailImg, name: 'Spiced Gin Tonic', desc: 'Premium gin infused with star anise, cinnamon, and a splash of elderflower.', price: '₹440', badge: null },
];

const beers = [
  { img: craftBeerImg, name: 'Kingfisher Premium', type: 'Lager', desc: 'Crisp, refreshing Indian lager with a clean golden finish.', price: '₹180' },
  { img: craftBeerImg, name: 'Bira 91 White', type: 'Wheat', desc: 'Smooth wheat beer with hints of coriander and orange peel.', price: '₹220' },
  { img: craftBeerImg, name: 'Hoegaarden', type: 'Import', desc: 'Belgian wheat beer, naturally hazy with a citrus note.', price: '₹280' },
  { img: craftBeerImg, name: 'Manor Craft Pint', type: 'Craft', desc: 'Our house-brewed amber ale with caramel malt and warm hops.', price: '₹320' },
];

const spirits = [
  { img: heroPubImg, name: 'Chivas Regal 12Y', type: 'Scotch', desc: 'Blended Scotch whisky with honey, apple, and a smooth, lingering finish.', price: '₹480' },
  { img: heroPubImg, name: 'Jack Daniel\'s', type: 'Bourbon', desc: 'Tennessee whiskey, charcoal-mellowed for extraordinary smoothness.', price: '₹420' },
  { img: heroPubImg, name: 'Absolut Vodka', type: 'Vodka', desc: 'Pure Swedish vodka with a distinct character of grain and dried fruit.', price: '₹360' },
  { img: heroPubImg, name: 'Old Monk Premium', type: 'Rum', desc: 'The iconic Indian dark rum with its legendary vanilla and cocoa notes.', price: '₹240' },
  { img: heroPubImg, name: 'Amrut Single Malt', type: 'Whisky', desc: 'Award-winning Indian single malt with rich oak and fruity undertones.', price: '₹550' },
  { img: heroPubImg, name: 'Bacardi Superior', type: 'Rum', desc: 'Light, clean rum with notes of almond and vanilla. Perfect with lime.', price: '₹340' },
];

const wines = [
  { img: heroPubImg, name: 'Sula Shiraz', type: 'Red Wine', desc: 'Full-bodied Indian red with dark cherry, plum, and warm spice notes.', price: '₹380' },
  { img: heroPubImg, name: 'Jacob\'s Creek Rosé', type: 'Rosé', desc: 'Refreshing rosé with ripe strawberry and watermelon. Chilled to perfection.', price: '₹450' },
  { img: heroPubImg, name: 'Moët & Chandon', type: 'Champagne', desc: 'Classic champagne with apple, pear, and citrus — for every celebration.', price: '₹3,800' },
];

const softDrinks = [
  { img: cocktailImg, name: 'Virgin Mojito', desc: 'Lime, mint, sugar, and sparkling soda — all the freshness, zero the spirits.', price: '₹160' },
  { img: cocktailImg, name: 'Mango Lassie', desc: 'Thick blended mango with chilled yoghurt and a hint of cardamom.', price: '₹140' },
  { img: cocktailImg, name: 'Lemon Soda', desc: 'Fresh-squeezed lemon with soda and black salt. Old school, always right.', price: '₹100' },
  { img: cocktailImg, name: 'Jal Jeera Soda', desc: 'Cumin and mint infused refresher with a punch of desi masalas.', price: '₹120' },
  { img: cocktailImg, name: 'Cold Brew Coffee', desc: 'House cold brew over ice — smooth, bold, naturally low-acid.', price: '₹180' },
];

const starters = [
  { img: pubSnacksImg, name: 'Chicken Tikka', desc: 'Tender chicken marinated in smoky spiced yoghurt, charred in the tandoor.', price: '₹320', badge: 'Chef\'s Pick' },
  { img: pubSnacksImg, name: 'Samosa', desc: 'Crispy golden pastry filled with spiced potato and peas. Served with mint chutney.', price: '₹140', badge: 'Popular' },
  { img: pubSnacksImg, name: 'Paneer Tikka', desc: 'Cubes of fresh malai paneer marinated in achari spices and charred.', price: '₹280', badge: 'Must Try' },
  { img: pubSnacksImg, name: 'Fish Amritsari', desc: 'Crispy gram-flour battered fish fillets with carom seeds and spice.', price: '₹380', badge: 'Chef\'s Pick' },
  { img: pubSnacksImg, name: 'Masala Peanuts', desc: 'Crunchy peanuts tossed in chaat masala, lime, and fresh coriander.', price: '₹100', badge: null },
  { img: pubSnacksImg, name: 'Cheese Balls', desc: 'Golden-fried balls bursting with gooey mozzarella and herbs.', price: '₹220', badge: null },
];

const grilled = [
  { img: pubSnacksImg, name: 'Seekh Kebab', desc: 'Minced lamb with aromatics, skewered and slow-cooked over open charcoal.', price: '₹380', badge: 'Signature' },
  { img: pubSnacksImg, name: 'Chicken Wings', desc: 'Crispy wings tossed in your choice of BBQ, Peri-Peri, or Garlic Butter.', price: '₹340', badge: 'Popular' },
  { img: pubSnacksImg, name: 'Tandoori Platter', desc: 'Mixed platter of paneer, chicken, and veggies straight from the clay oven.', price: '₹520', badge: 'Must Try' },
  { img: pubSnacksImg, name: 'Chicken Malai Tikka', desc: 'Creamy, melt-in-the-mouth chicken kebabs with cardamom and mace.', price: '₹360', badge: 'Siganture' },
  { img: pubSnacksImg, name: 'Chilli Chicken', desc: 'Indo-Chinese crispy chicken tossed in a spicy, tangy chilli sauce.', price: '₹300', badge: null },
];

const snacks = [
  { img: pubSnacksImg, name: 'French Fries', desc: 'Golden, crispy fries seasoned with sea salt and smoked paprika.', price: '₹180', badge: null },
  { img: pubSnacksImg, name: 'Nachos Supreme', desc: 'Tortilla chips with salsa, jalapeños, sour cream, and guacamole.', price: '₹280', badge: 'Popular' },
  { img: pubSnacksImg, name: 'Kurkuri Bhindi', desc: 'Crispy shredded okra with amchur and salt — the ultimate bar snack.', price: '₹180', badge: 'New' },
  { img: pubSnacksImg, name: 'Masala Papad', desc: 'Crispy papad with finely chopped onions, tomato, and coriander.', price: '₹80', badge: null },
  { img: pubSnacksImg, name: 'Truffle Mushroom Toast', desc: 'Garlic-buttered toast with sautéed mushrooms and truffle oil drizzle.', price: '₹220', badge: 'Chef\'s Pick' },
];

const street = [
  { img: pubSnacksImg, name: 'Pav Bhaji', desc: 'Mumbai-style buttered pav with spiced mixed-vegetable bhaji.', price: '₹160', badge: null },
  { img: pubSnacksImg, name: 'Vada Pav', desc: 'The original Bombay burger — spiced potato fritter in a soft bun.', price: '₹100', badge: 'Classic' },
  { img: pubSnacksImg, name: 'Dahi Puri', desc: 'Crispy puris stuffed with potato, chilled yoghurt, and tangy chutneys.', price: '₹140' },
  { img: pubSnacksImg, name: 'Chaat Platter', desc: 'A trio of papdi chaat, sev puri, and dahi puri. The street food holy trinity.', price: '₹220', badge: null },
  { img: pubSnacksImg, name: 'Masala Corn', desc: 'Spiced sweet corn with chilli butter, lemon, and coriander.', price: '₹120', badge: null },
];

/* ── SUB-COMPONENTS ── */
const VerticalCard = ({ item }) => (
  <div className="mn-card mn-card--vertical">
    <div className="mn-card__img-wrap">
      <img src={item.img} alt={item.name} className="mn-card__img" />
      <div className="mn-card__img-overlay" />
      {item.badge && <span className="mn-card__badge">{item.badge}</span>}
    </div>
    <div className="mn-card__body">
      <div className="mn-card__top">
        <h4 className="mn-card__name">{item.name}</h4>
        <span className="mn-card__price">{item.price}</span>
      </div>
      <p className="mn-card__desc">{item.desc}</p>
    </div>
  </div>
);

const HorizontalCard = ({ item }) => (
  <div className="mn-card mn-card--horizontal">
    <div className="mn-card__img-wrap mn-card__img-wrap--sm">
      <img src={item.img} alt={item.name} className="mn-card__img" />
      <div className="mn-card__img-overlay" />
    </div>
    <div className="mn-card__body">
      <div className="mn-card__top">
        <div>
          <span className="mn-card__type">{item.type}</span>
          <h4 className="mn-card__name">{item.name}</h4>
        </div>
        <span className="mn-card__price">{item.price}</span>
      </div>
      <p className="mn-card__desc">{item.desc}</p>
    </div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mn-subsection">
    <div className="mn-subsection__head">
      <h3 className="mn-subsection__title">{title}</h3>
      <div className="mn-subsection__line" />
    </div>
    {children}
  </div>
);

/* ── MAIN COMPONENT ── */
const MenuSection = ({ previewOnly, forceExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(forceExpanded || false);
  const [mainTab, setMainTab] = useState('drinks');
  const [filter, setFilter] = useState('all');

  const teaserItems = [
    cocktails[2], // Whiskey Sour
    cocktails[0], // Classic Mojito
    starters[0],  // Chicken Tikka
    grilled[2],   // Tandoori Platter
  ];

  const drinkFilters = ['All', 'Cocktails', 'Beers', 'Spirits', 'Wines', 'Soft Drinks'];
  const foodFilters  = ['All', 'Starters', 'Grilled', 'Snacks', 'Street Style'];

  const filters = mainTab === 'drinks' ? drinkFilters : foodFilters;

  const switchMain = (tab) => { setMainTab(tab); setFilter('all'); };

  const show = (name) => filter === 'all' || filter === name.toLowerCase().replace(' & ', '').replace(' ', '');

  if (previewOnly && !isExpanded) {
    return (
      <section id="menu" className="mn-section">
        <CornerLights />
        <div className="mn-header">
          <span className="section__tag">Taste of <span className="brand-manor">Manor</span></span>
          <h2 className="section__title">Menu Preview</h2>
          <div className="section__divider"><span /></div>
        </div>
        
        <div className="mn-grid mn-grid--4" style={{ marginBottom: '4rem' }}>
          {teaserItems.map((item, i) => <VerticalCard key={i} item={item} />)}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/menu"
            className="mn-toggle__btn mn-toggle__btn--active" 
            style={{ 
              padding: '1.2rem 3.5rem', 
              fontSize: '1.1rem',
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            Explore Full Menu ↗
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="mn-section">
      <CornerLights />
      {/* Header */}
      <div className="mn-header">
        <span className="section__tag">Crafted for You</span>
        <h2 className="section__title">Our Full Menu</h2>
        <div className="section__divider"><span /></div>
      </div>

      {/* Main Toggle */}
      <div className="mn-toggle">
        <button className={`mn-toggle__btn ${mainTab === 'drinks' ? 'mn-toggle__btn--active' : ''}`} onClick={() => switchMain('drinks')}>
          🍹 Drinks
        </button>
        <button className={`mn-toggle__btn ${mainTab === 'food' ? 'mn-toggle__btn--active' : ''}`} onClick={() => switchMain('food')}>
          🍽️ Food &amp; Snacks
        </button>
      </div>

      {/* Filter Bar */}
      <div className="mn-filter-bar">
        {filters.map((f) => {
          const key = f.toLowerCase().replace(' & ', '').replace(' ', '');
          return (
            <button
              key={f}
              className={`mn-filter-btn ${filter === key ? 'mn-filter-btn--active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mn-content">

        {/* ── DRINKS ── */}
        {mainTab === 'drinks' && (
          <>
            {show('cocktails') && (
              <SubSection title="Signature Cocktails">
                <div className="mn-grid mn-grid--4">
                  {cocktails.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('beers') && (
              <SubSection title="Beers">
                <div className="mn-grid mn-grid--2h">
                  {beers.map((item, i) => <HorizontalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('spirits') && (
              <SubSection title="Whiskey &amp; Spirits">
                <div className="mn-grid mn-grid--2h">
                  {spirits.map((item, i) => <HorizontalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('wines') && (
              <SubSection title="Wines &amp; Champagne">
                <div className="mn-grid mn-grid--2h">
                  {wines.map((item, i) => <HorizontalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('softdrinks') && (
              <SubSection title="Soft Drinks &amp; Mocktails">
                <div className="mn-grid mn-grid--4">
                  {softDrinks.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}
          </>
        )}

        {/* ── FOOD ── */}
        {mainTab === 'food' && (
          <>
            {show('starters') && (
              <SubSection title="Starters">
                <div className="mn-grid mn-grid--4">
                  {starters.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('grilled') && (
              <SubSection title="Grilled &amp; Kebabs">
                <div className="mn-grid mn-grid--4">
                  {grilled.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('snacks') && (
              <SubSection title="Snacks">
                <div className="mn-grid mn-grid--4">
                  {snacks.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}

            {show('streetstyle') && (
              <SubSection title="Street Style">
                <div className="mn-grid mn-grid--4">
                  {street.map((item, i) => <VerticalCard key={i} item={item} />)}
                </div>
              </SubSection>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default MenuSection;
