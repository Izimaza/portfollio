import React from 'react';
import Terminal from '../components/Terminal';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const bioLines = [
    "whoami",
    t('about_whoami'),
    "cat skills.txt",
    t('about_languages'),
    t('about_tools'),
    t('about_interests'),
    "ls missions/",
    t('about_mission_1'),
    t('about_mission_2'),
    t('about_mission_3'),
    `echo '${t('about_ready')}'`
  ];

  return (
    <section id="about" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_about')}</h2>
      <Terminal lines={bioLines} />
    </section>
  );
};

export default About;
