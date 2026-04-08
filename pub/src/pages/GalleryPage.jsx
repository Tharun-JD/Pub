import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="manor-page">
      <Navbar />
      <main style={{ background: '#000000', minHeight: '100vh', paddingTop: '80px' }}>
        <Gallery previewOnly={false} />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
