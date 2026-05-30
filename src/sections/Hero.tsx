import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GlitchText from '../components/GlitchText';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

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
        
        <h1 style={{ 
          fontSize: 'clamp(3rem, 12vw, 10rem)', 
          fontWeight: 400, 
          lineHeight: 0.9,
          fontFamily: '"Courier New", Courier, monospace',
          color: 'var(--primary-color)',
          letterSpacing: '-2px'
        }}>
          <GlitchText text="ELLIOTT" />
          <br />
          <GlitchText text="TÂCHE" />
        </h1>
        
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
