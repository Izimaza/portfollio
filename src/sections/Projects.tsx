import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj_title_0'),
      description: t('proj_0_desc'),
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      longDescription: t('proj_0_long')
    },
    {
      title: t('proj_title_1'),
      description: t('proj_1_desc'),
      tags: ["SQL", "R"],
      longDescription: t('proj_1_long')
    },
    {
      title: t('proj_title_2'),
      description: t('proj_2_desc'),
      tags: ["JAVA"],
      longDescription: t('proj_2_long')
    },
    {
      title: t('proj_title_3'),
      description: t('proj_3_desc'),
      tags: ["JAVAFX"],
      longDescription: t('proj_3_long')
    },
    {
      title: t('proj_title_4'),
      description: t('proj_4_desc'),
      tags: ["BASH"],
      longDescription: t('proj_4_long')
    },
    {
      title: t('proj_title_5'),
      description: t('proj_5_desc'),
      tags: ["SHELL"],
      longDescription: t('proj_5_long')
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
