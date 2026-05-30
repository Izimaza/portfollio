import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CodeXml } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, github, demo }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        border: '1px solid var(--accent-color)',
        padding: '2rem',
        borderRadius: '4px',
        transition: 'border 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
      className="project-card"
    >
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{title}</h3>
        <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
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
      
      <div style={{ display: 'flex', gap: '15px' }}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <CodeXml size={20} />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      
      <style>{`
        .project-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
