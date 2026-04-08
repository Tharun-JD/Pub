import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import MenuSection from '../components/MenuSection';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <MenuSection previewOnly={true} />
        <Events previewOnly={true} />
        <Gallery previewOnly={true} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
