import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Box, Toolbar } from '@mui/material';

const App = () => {
  // Add Toolbar offset so hero doesn't go under navbar
  return (
    <>
      <Navbar />
      <Toolbar /> {/* offset for fixed navbar */}
      <Box>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </Box>
    </>
  );
};

export default App;