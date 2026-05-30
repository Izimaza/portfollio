import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();

  const navItems = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_journey'), href: '#journey' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.2rem 4rem',
      backgroundColor: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--accent-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-color)', letterSpacing: '2px' }}>
        ELLIOTT_TÂCHE
      </div>

      <nav style={{ display: 'flex', gap: '2.5rem' }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '2px',
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

      {/* Sliding Toggle Switch */}
      <div 
        onClick={toggleLanguage}
        style={{
          width: '50px',
          height: '24px',
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          border: '1px solid var(--primary-color)',
          position: 'relative',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{ x: language === 'en' ? 26 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            width: '18px',
            height: '18px',
            backgroundColor: 'var(--primary-color)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--primary-color)'
          }}
        />
        <span style={{ 
          position: 'absolute', 
          right: language === 'fr' ? '6px' : 'auto', 
          left: language === 'en' ? '6px' : 'auto',
          fontSize: '8px', 
          fontWeight: 'bold',
          color: language === 'fr' ? '#888' : '#888',
          pointerEvents: 'none'
        }}>
          {language === 'fr' ? 'EN' : 'FR'}
        </span>
      </div>
    </header>
  );
};

export default Header;
