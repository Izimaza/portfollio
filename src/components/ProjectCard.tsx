import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CodeXml, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, longDescription, tags, github, demo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div
        layoutId={`card-${title}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setIsExpanded(true)}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          border: '1px solid var(--accent-color)',
          padding: '2rem',
          borderRadius: '4px',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          willChange: 'transform, opacity',
        }}
        className="project-card"
      >
        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>
            {title}
          </h3>
          <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.7rem',
                color: 'var(--primary-color)',
                border: '1px solid var(--primary-color)',
                padding: '2px 8px',
                borderRadius: '2px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            {github && <CodeXml size={20} style={{ opacity: 0.4 }} />}
            {demo && <ExternalLink size={20} style={{ opacity: 0.4 }} />}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontStyle: 'italic', opacity: 0.7 }}>
            {t('card_learn_more')}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
              }}
            />
            
            <motion.div
              layoutId={`card-${title}`}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                backgroundColor: 'rgba(10, 10, 10, 1)',
                border: '1px solid var(--primary-color)',
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                borderRadius: '8px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 2001,
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
                willChange: 'transform, opacity',
              }}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                style={{
                  position: 'absolute',
                  top: '0.8rem',
                  right: '0.8rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-color)',
                  cursor: 'pointer',
                  padding: '5px',
                  zIndex: 2002
                }}
              >
                <X size={20} />
              </button>

              <h3 style={{ marginBottom: '1rem', fontSize: 'clamp(1.5rem, 6vw, 2rem)', color: 'var(--primary-color)' }}>
                {title}
              </h3>
              
              <p style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)', opacity: 0.9 }}>
                {description}
              </p>

              <div style={{ color: '#bbb', lineHeight: '1.7', marginBottom: '2rem', fontSize: 'clamp(0.85rem, 3vw, 0.95rem)' }}>
                {longDescription ? (
                  <div dangerouslySetInnerHTML={{ __html: longDescription.replace(/\n/g, '<br />') }} />
                ) : (
                  <>
                    <p style={{ marginBottom: '1rem' }}>
                      <strong>{t('modal_objective')}</strong> Ce projet visait à résoudre des problématiques techniques complexes tout en optimisant l'expérience utilisateur finale.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      <strong>{t('modal_execution')}</strong> L'implémentation a suivi une approche rigoureuse, utilisant des technologies modernes pour garantir performance et évolutivité.
                    </p>
                    <p>
                      <strong>{t('modal_impact')}</strong> La solution a permis de répondre aux attentes initiales avec une robustesse exemplaire et une facilité de maintenance accrue.
                    </p>
                  </>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    color: 'var(--primary-color)',
                    border: '1px solid var(--primary-color)',
                    padding: '2px 8px',
                    borderRadius: '2px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      border: '1px solid var(--primary-color)',
                      borderRadius: '2px',
                      fontSize: '0.8rem',
                      flex: '1 1 auto',
                      justifyContent: 'center'
                    }}
                  >
                    <CodeXml size={16} /> {t('modal_source_code')}
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      backgroundColor: 'var(--primary-color)',
                      color: 'black',
                      borderRadius: '2px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flex: '1 1 auto',
                      justifyContent: 'center'
                    }}
                  >
                    <ExternalLink size={16} /> {t('modal_view_demo')}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <style>{`
        .project-card:hover {
          border-color: var(--primary-color) !important;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.15);
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
