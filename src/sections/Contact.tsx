import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" style={{
      width: '100%',
      backgroundColor: 'rgba(5, 5, 5, 0.9)',
      borderTop: '1px solid var(--accent-color)',
      padding: '4rem 4rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <h2 style={{ marginBottom: '3rem', fontSize: '2rem' }}>{t('title_contact')}</h2>
        
        <div style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          border: '1px solid var(--secondary-color)',
          padding: '3rem',
          borderRadius: '4px',
          marginBottom: '4rem'
        }}>
          <p style={{ marginBottom: '2rem', color: '#aaa', textAlign: 'center', fontSize: '0.9rem' }}>
            {t('contact_signal')}
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)', letterSpacing: '2px' }}>{t('contact_name')}</label>
              <input 
                type="text" 
                placeholder="..."
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #222',
                  padding: '1rem',
                  color: 'white',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }} 
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)', letterSpacing: '2px' }}>{t('contact_email')}</label>
              <input 
                type="email" 
                placeholder="..."
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #222',
                  padding: '1rem',
                  color: 'white',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem'
                }} 
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)', letterSpacing: '2px' }}>{t('contact_message')}</label>
              <textarea 
                rows={5}
                placeholder="..."
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #222',
                  padding: '1rem',
                  color: 'white',
                  fontFamily: 'var(--font-mono)',
                  resize: 'none',
                  fontSize: '0.9rem'
                }} 
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: 'var(--primary-color)', color: 'black' }}
              whileTap={{ scale: 0.99 }}
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: 'transparent',
                border: '1px solid var(--primary-color)',
                color: 'var(--primary-color)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                letterSpacing: '2px'
              }}
            >
              {t('contact_send')} <Send size={16} />
            </motion.button>
          </form>
          
          <div style={{ textAlign: 'center' }}>
            <a 
              href="mailto:elliott.tache@example.com" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px',
                color: '#666',
                fontSize: '0.8rem',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#666')}
            >
              <Mail size={14} /> {t('contact_direct')} elliott.tache@example.com
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
            <Linkedin size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}>
            <Instagram size={28} />
          </a>
        </div>

        <div style={{
          width: '100%',
          borderTop: '1px solid #1a1a1a',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.7rem',
          color: '#444',
          letterSpacing: '1px'
        }}>
          <p>&copy; {new Date().getFullYear()} ELLIOTT_TÂCHE // SYSTEM_VER_2.2.0 // ALL_RIGHTS_RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
