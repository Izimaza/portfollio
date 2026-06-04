import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Journey: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      year: "2026",
      title: t('journey_1_title'),
      description: t('journey_1_desc')
    },
    {
      year: "2025",
      title: t('journey_2_title'),
      description: t('journey_2_desc')
    },
    {
      year: "2022",
      title: t('journey_3_title'),
      description: t('journey_3_desc')
    }
  ];

  return (
    <section id="journey" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_journey')}</h2>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
        {/* The "Git Branch" line */}
        <div style={{
          position: 'absolute',
          left: 'clamp(15px, 4vw, 20px)',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: 'var(--secondary-color)',
        }} />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              paddingLeft: 'clamp(40px, 10vw, 60px)',
              marginBottom: '3rem',
              position: 'relative',
            }}
          >
            {/* The "Commit" node */}
            <div style={{
              position: 'absolute',
              left: 'clamp(6px, 2vw, 11px)',
              top: '5px',
              width: 'clamp(16px, 3vw, 20px)',
              height: 'clamp(16px, 3vw, 20px)',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-color)',
              border: '2px solid var(--primary-color)',
              boxShadow: '0 0 10px var(--primary-color)',
              zIndex: 1,
            }} />
            
            <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {step.year}
            </span>
            <h3 style={{ margin: '0.5rem 0', fontSize: 'clamp(1rem, 4vw, 1.2rem)' }}>{step.title}</h3>
            <p style={{ color: '#aaa', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
