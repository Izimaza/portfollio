import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" style={{
      width: '100%',
      backgroundColor: 'rgba(5, 5, 5, 0.9)',
      borderTop: '1px solid var(--accent-color)',
      padding: '4rem 0 2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{ 
        width: '100%',
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        borderTop: '1px solid var(--secondary-color)',
        borderBottom: '1px solid var(--secondary-color)',
        padding: '3rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', margin: 0 }}>{t('title_contact')}</h2>
        
        <div style={{ 
          color: 'white', 
          fontSize: 'clamp(0.9rem, 4vw, 1.4rem)', 
          fontFamily: 'var(--font-mono)',
          letterSpacing: '1px',
          wordBreak: 'break-word'
        }}>
          <span style={{ color: 'var(--primary-color)' }}>mail : </span>
          <span>elliott.tache@gmail.com</span>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { Icon: Github, href: "https://github.com/Izimaza" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Instagram, href: "https://www.instagram.com/elliott.tce/" }
          ].map(({ Icon, href }, index) => (
            <a 
              key={index}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'white', 
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              }} 
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--primary-color)';
                e.currentTarget.style.borderColor = 'var(--primary-color)';
                e.currentTarget.style.boxShadow = '0 0 20px var(--primary-color)';
              }} 
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
              }}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>

      <div style={{
        width: '100%',
        paddingTop: '2rem',
        textAlign: 'center',
        fontSize: '0.7rem',
        color: '#444',
        letterSpacing: '1px'
      }}>
        <p>&copy; {new Date().getFullYear()} ELLIOTT_TÂCHE</p>
      </div>
    </footer>
  );
};

export default Contact;
