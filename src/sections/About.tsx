import React from 'react';
import Terminal from '../components/Terminal';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const bioLines = [
    t('term_whoami'),
    t('about_whoami'),
    t('term_skills'),
    t('about_languages'),
    t('about_tools'),
    t('term_interests'),
    t('about_interests'),
    t('about_interests_2'),
    t('term_personal'),
    t('about_me')
  ];

  return (
    <section id="about" className="container">
      <h2 style={{ marginBottom: '3rem', alignSelf: 'flex-start' }}>{t('title_about')}</h2>
      <Terminal lines={bioLines} key={language} />
    </section>
  );
};

export default About;
