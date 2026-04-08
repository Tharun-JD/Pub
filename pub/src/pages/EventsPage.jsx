import Navbar from '../components/Navbar';
import Events from '../components/Events';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}> {/* Navbar offset */}
        <Events forceExpanded={true} />
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;
