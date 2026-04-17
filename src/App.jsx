import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ResultsSection from './sections/ResultsSection';
import SpecialtiesSection from './sections/SpecialtiesSection';
import ClientsSection from './sections/ClientsSection';
import AwardsSection from './sections/AwardsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="site-shell">
      <div className="page-noise" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResultsSection />
        <SpecialtiesSection />
        <ClientsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
