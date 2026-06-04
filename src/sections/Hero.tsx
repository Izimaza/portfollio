import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GlitchText from '../components/GlitchText';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isRevealed, setIsRevealed] = React.useState(false);

  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ 
            color: 'var(--primary-color)', 
            fontSize: '1rem', 
            marginBottom: '1.5rem',
            letterSpacing: '4px',
            fontFamily: 'monospace'
          }}
        >
          {t('hero_initializing')}
        </motion.p>
        
        <div 
          onClick={() => setIsRevealed(true)}
          style={{ 
            position: 'relative', 
            display: 'inline-block', 
            padding: isRevealed ? '2rem 3rem' : '1.5rem 4rem', 
            marginBottom: '1rem', 
            overflow: 'hidden',
            cursor: isRevealed ? 'default' : 'pointer',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            backgroundColor: isRevealed ? 'transparent' : 'rgba(0, 255, 65, 0.05)',
            border: isRevealed ? 'none' : '1px dashed var(--primary-color)'
          }} 
        >
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                style={{ 
                  fontFamily: 'monospace', 
                  color: 'var(--primary-color)', 
                  letterSpacing: '5px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  &gt;
                </motion.span>
                CLIQUEZ_POUR_DÉCRYPTER_L_IDENTITÉ
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
              >
                {/* Animated Scanline inside the frame */}
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ 
                    position: 'absolute', 
                    left: 0, 
                    width: '100%', 
                    height: '1px', 
                    backgroundColor: 'var(--primary-color)',
                    boxShadow: '0 0 15px var(--primary-color)',
                    zIndex: 5,
                    opacity: 0.5
                  }} 
                />

                {/* Decorative Corner Brackets */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderTop: '2px solid var(--primary-color)', borderLeft: '2px solid var(--primary-color)' }} 
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ position: 'absolute', top: 0, right: 0, width: '30px', height: '30px', borderTop: '2px solid var(--primary-color)', borderRight: '2px solid var(--primary-color)' }} 
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '30px', borderBottom: '2px solid var(--primary-color)', borderLeft: '2px solid var(--primary-color)' }} 
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', borderBottom: '2px solid var(--primary-color)', borderRight: '2px solid var(--primary-color)' }} 
                />

                <h1 style={{ 
                  fontSize: 'clamp(2rem, 8vw, 6rem)', 
                  fontWeight: 900, 
                  lineHeight: 1,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  color: 'white',
                  letterSpacing: '8px',
                  margin: 0,
                  textTransform: 'uppercase'
                }}>
                  <GlitchText text="ELLIOTT" />
                  <br />
                  <GlitchText text="TÂCHE" />
                </h1>

                {/* Technical Metadata Decoration */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '3rem', 
                  fontSize: '0.6rem', 
                  color: 'var(--primary-color)', 
                  fontFamily: 'monospace', 
                  letterSpacing: '3px',
                  backgroundColor: 'var(--bg-color)',
                  padding: '0 10px'
                }}>
                  IDENTITY_VERIFIED
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-15px', 
                  right: '3rem', 
                  fontSize: '0.6rem', 
                  color: 'var(--primary-color)', 
                  fontFamily: 'monospace', 
                  letterSpacing: '3px',
                  backgroundColor: 'var(--bg-color)',
                  padding: '0 10px'
                }}>
                  ID_0x7E3 // SYST_OK
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ 
            fontSize: '1.2rem', 
            marginTop: '2.5rem', 
            color: '#aaa',
            maxWidth: '700px',
            marginInline: 'auto',
            fontFamily: 'monospace',
            letterSpacing: '1px'
          }}
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="#about" style={{
            padding: '1.2rem 2.5rem',
            border: '1px solid var(--primary-color)',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-color)';
            e.currentTarget.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--primary-color)';
          }}
          >
            {t('hero_button')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
