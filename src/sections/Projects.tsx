import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "SITE INTERNET",
      description: t('proj_0_desc'),
      tags: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "BASE DE DONNÉES",
      description: t('proj_1_desc'),
      tags: ["SQL", "R"],
    },
    {
      title: "CHATBOT JAVA",
      description: t('proj_2_desc'),
      tags: ["JAVA"],
    },
    {
      title: "DEV APPICATION",
      description: t('proj_3_desc'),
      tags: ["JAVAFX"],
    },
    {
      title: "INSTALLATION MACHINE VIRTUELLE",
      description: t('proj_4_desc'),
      tags: ["SHELL"],
    },
    {
      title: "INSTALLATION MACHINE VIRTUELLE",
      description: t('proj_5_desc'),
      tags: ["SHELL"],
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_projects')}</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem',
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
