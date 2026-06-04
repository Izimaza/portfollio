import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download, ExternalLink } from 'lucide-react';

const CV: React.FC = () => {
  const { t } = useLanguage();
  const cvPath = "/CV_Elliott_Tache.pdf";

  return (
    <section id="cv" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_cv')}</h2>
      
      <div style={{
        width: '100%',
        maxWidth: '800px',
        backgroundColor: 'rgba(10, 10, 10, 0.6)',
        border: '1px solid var(--secondary-color)',
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          color: 'rgba(0, 255, 65, 0.05)',
          zIndex: 0,
          pointerEvents: 'none'
        }}>
          <FileText size={200} />
        </div>

        <p style={{ 
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
          color: '#aaa', 
          lineHeight: 1.6,
          zIndex: 1,
          maxWidth: '600px'
        }}>
          {t('cv_description')}
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap',
          zIndex: 1 
        }}>
          <motion.a
            href={cvPath}
            download="CV_Elliott_Tache.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--primary-color)',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              letterSpacing: '2px',
              borderRadius: '4px',
              transition: 'box-shadow 0.3s ease',
              textDecoration: 'none',
              minWidth: '200px'
            }}
          >
            <Download size={18} /> {t('cv_download')}
          </motion.a>

          <motion.a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              padding: '1rem 1.5rem',
              border: '1px solid #444',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              letterSpacing: '2px',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              minWidth: '200px'
            }}
          >
            <ExternalLink size={18} /> {t('cv_view')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CV;
