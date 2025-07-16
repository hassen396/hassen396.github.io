import Navbar from './components/NaveBar/Navbar.jsx';
import Hero from './components/Hero';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './ThemeContext';
import './App.css';

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? 'custom-darkMode-bg text-light' : 'bg-light text-dark'}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
