import './styles/globals.css';
import './styles/animations.css';
import BackgroundMatrix from './components/BackgroundMatrix';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <div className="scanline"></div>
        <BackgroundMatrix />
        <Header />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Journey />
        </main>

        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
