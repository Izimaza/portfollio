import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Project Zero",
      description: t('proj_0_desc'),
      tags: ["Python", "Cryptography", "CLI"],
      github: "#",
    },
    {
      title: "Cyber_Scan",
      description: t('proj_1_desc'),
      tags: ["C", "Networking", "Security"],
      github: "#",
    },
    {
      title: "Hacker_Portfolio",
      description: t('proj_2_desc'),
      tags: ["React", "Framer Motion", "Vite"],
      github: "#",
      demo: "#",
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_projects')}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%'
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
