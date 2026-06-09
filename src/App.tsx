import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import FocusSection from './components/FocusSection'
import ProjectsSection from './components/ProjectsSection'
import PublicationsSection from './components/PublicationsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <FocusSection />
      <ProjectsSection />
      <PublicationsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}

export default App
