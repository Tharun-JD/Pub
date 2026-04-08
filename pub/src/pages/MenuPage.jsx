import Navbar from '../components/Navbar';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const MenuPage = () => {
  // Ensure we start at the top when opening the new tab
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}> {/* Offset for fixed navbar */}
        <MenuSection forceExpanded={true} />
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
