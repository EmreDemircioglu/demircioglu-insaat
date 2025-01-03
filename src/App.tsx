import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./pages/aboutPage";
import Landing from "./pages/landingPage";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
const App = () => {
  // Add Toolbar offset so hero doesn't go under navbar
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Landing/>
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />

        <Route path="/services" element={<ServicesSection />} />

        <Route path="/contact" element={<ContactSection />} />

        {/* İleride diğer sayfaları da ekleyebilirsiniz */}
      </Routes>

      {/*<><Hero /><Showcase /><MaterialsCard /><StatsSection /></>*/}
      {/*<AboutSection />*/}
      {/*<ProjectsSection />*/}
      {/*<ServicesSection />*/}
      {/*<ContactSection />*/}

    </Router>
  );
};

export default App;
