import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X as CloseIcon } from 'lucide-react';

const Header: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_journey'), href: '#journey' },
    { name: t('nav_cv'), href: '#cv' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0.8rem clamp(1rem, 5vw, 2.5rem)',
      backgroundColor: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--accent-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMenuOpen(false);
        }}
        style={{ 
          fontWeight: 800, 
          fontSize: 'clamp(0.85rem, 3vw, 1rem)', 
          color: 'var(--primary-color)', 
          letterSpacing: '2px',
          cursor: 'pointer',
          zIndex: 1001,
          whiteSpace: 'nowrap'
        }}
      >
        ELLIOTT_TÂCHE
      </div>

      {/* Desktop Nav */}
      <nav style={{ display: 'none', gap: 'clamp(1rem, 2vw, 2.5rem)' }} className="desktop-nav">
        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontSize: '0.7rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--text-color)',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-color)')}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Language Toggle */}
        <div 
          onClick={toggleLanguage}
          style={{
            width: '46px',
            height: '22px',
            backgroundColor: '#1a1a1a',
            borderRadius: '11px',
            border: '1px solid var(--primary-color)',
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            overflow: 'hidden',
            zIndex: 1001
          }}
        >
          <motion.div
            animate={{ x: language === 'en' ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: 'var(--primary-color)',
              borderRadius: '50%',
              boxShadow: '0 0 8px var(--primary-color)'
            }}
          />
          <span style={{ 
            position: 'absolute', 
            right: language === 'fr' ? '5px' : 'auto', 
            left: language === 'en' ? '5px' : 'auto',
            fontSize: '7px', 
            fontWeight: 'bold',
            color: '#888',
            pointerEvents: 'none'
          }}>
            {language === 'fr' ? 'EN' : 'FR'}
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ cursor: 'pointer', color: 'var(--primary-color)', zIndex: 1001 }}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(5, 5, 5, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              zIndex: 1000,
              padding: '2rem'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: '1.2rem',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: 'var(--text-color)',
                  fontWeight: 700
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
