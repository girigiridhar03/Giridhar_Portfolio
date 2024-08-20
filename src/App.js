
import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';


function App() {
  return (
   <>
   <Navbar />
   <HeroSection />
   <AboutMe />
   <Skills />
   <ProjectSection />
   </>
  );
}

export default App;
