import { useState, useEffect } from 'react';
import './styles/globals.css';
import './styles/animations.css';
import BackgroundMatrix from './components/BackgroundMatrix';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import CV from './sections/CV';
import Contact from './sections/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources and animations to stabilize
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#050505',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                color: 'var(--primary-color)',
                fontFamily: 'monospace'
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  fontSize: '1.5rem',
                  letterSpacing: '5px',
                  fontWeight: 'bold',
                  marginBottom: '20px'
                }}
              >
                LOADING_SYSTEM...
              </motion.div>
              <div style={{
                width: '200px',
                height: '2px',
                backgroundColor: '#111',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--primary-color)',
                    boxShadow: '0 0 10px var(--primary-color)'
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="scanline"></div>
        <BackgroundMatrix />
        <Header />
        
        <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
          <Hero />
          <About />
          <Projects />
          <Journey />
          <CV />
        </main>

        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
