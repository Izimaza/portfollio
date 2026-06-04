import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translation {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translation = {
  // Navigation
  nav_home: { fr: 'ACCUEIL', en: 'HOME' },
  nav_about: { fr: 'À PROPOS', en: 'ABOUT' },
  nav_projects: { fr: 'PROJETS', en: 'PROJECTS' },
  nav_journey: { fr: 'PARCOURS', en: 'JOURNEY' },
  nav_cv: { fr: 'CV', en: 'CV' },
  nav_contact: { fr: 'CONTACT', en: 'CONTACT' },
  
  // Hero
  hero_initializing: { fr: 'INITIALISATION_SYSTÈME...', en: 'INITIALIZING_SYSTEM...' },
  hero_subtitle: { fr: 'Étudiant en Informatique - IUT 2 Grenoble', en: 'Computer Science Student - IUT 2 Grenoble' },
  hero_button: { fr: 'ACCÉDER_À_LA_MÉMOIRE', en: 'ACCESS_CORE_MEMORY' },
  
  // Sections Titles
  title_about: { fr: '01_QUI_SUIS_JE', en: '01_WHO_AM_I' },
  title_projects: { fr: '02_MES_PROJETS', en: '02_MY_WORKS' },
  title_journey: { fr: '03_MON_PARCOURS', en: '03_MY_PATH' },
  title_cv: { fr: '04_CV', en: '04_CURRICULUM_VITAE' },
  title_contact: { fr: '05_CONTACTS', en: '05_CONTACTS' },
  
  // About / Terminal
  about_whoami: { fr: 'Elliott Tâche - Étudiant de 1ère année en Informatique.', en: 'Elliott Tâche - 1st Year Computer Science Student.' },
  about_languages: { fr: 'Langages : Java, HTML/CSS, JavaScript, PSQL, Assembleur, Shell, R', en: 'Languages: Java, HTML/CSS, JavaScript, PSQL, Assembly, Shell, R' },
  about_tools: { fr: 'Outils : Git, Linux, VS Code, IntelliJ, DBeaver, R Studio, Motorolla68000', en: 'Tools: Git, Linux, VS Code, IntelliJ, DBeaver, R Studio, Motorolla68000' },
  about_interests: { fr: 'Intérêts : Cybersécurité, Développement Web et applications', en: 'Interests: Cybersecurity, Web & App Development' },
  about_interests_2: { fr: 'Musique, Film/Série/Anime, Beatmaking', en: 'Music, Movies/Series/Anime, Beatmaking' },
  about_me: { fr: "Dynamique, sociable, esprit d'équipe", en: "Dynamic, sociable, team player" },

  // Projects
  proj_0_desc: { fr: "Création d'un site internet en HTML/CSS et un peu de JavaScript pour un client de l'entreprise HARDIS GROUP dans le but de créer un site avec pour objectif de faciliter la demande stage de 3eme.", en: "Developed an HTML/CSS/JS website for a client of HARDIS GROUP to streamline 9th-grade internship applications." },
  proj_1_desc: { fr: "Création d'une base de données en SQL pour une association fictive d'activitées nautique", en: "Designed a SQL database for a fictional nautical activities association." },
  proj_2_desc: { fr: "Code d'un chatbot en Java qui a pour objectif de repondre à des questions faisant parti de sa base de données, et capables, d'integrer une réponse à une question ne faisant pas partie de sa base de données.", en: "Java-based chatbot designed to answer database queries and dynamically learn responses for unknown questions." },
  proj_3_desc: { fr: "Création d'une application en JavaFx de gestion d'évennement de boîte de nuit", en: "Built a JavaFX application for nightclub event management." },
  proj_4_desc: { fr: "Installer une machine virtuelle DEBIAN 13 sur une station Linux", en: "Configured a DEBIAN 13 virtual machine on a Linux workstation." },
  proj_5_desc: { fr: "Codage d'un jeu casse-brique en Assembleur", en: "Developed a brick-breaker game in Assembly language." },

  // Journey
  journey_1_title: { fr: "BUT Informatique", en: "Bachelor of Technology in CS" },
  journey_1_desc: { fr: "Fondamentaux de la programmation orientée objets (Java), Bases de données (SQL, PostgreSQL), Systèmes et administration (Debian), Développement web (HTML, CSS, JavaScript)", en: "OOP fundamentals (Java), Databases (SQL, PostgreSQL), Systems & Administration (Debian), Web Development (HTML, CSS, JS)" },
  journey_2_title: { fr: "Baccalauréat Téchnologique", en: "Technological Baccalaureate" },
  journey_2_desc: { fr: "Lycée Polyvalent Vaucanson, Grenoble, Filière STI2D spécialité SIN, Mention assez bien", en: "Vaucanson High School, STI2D SIN major, Graduated with honors." },
  journey_3_title: { fr: "Brevet des Collèges", en: "Middle School Diploma" },
  journey_3_desc: { fr: "Collège Belledonne, Villard-Bonnot, mention assez bien", en: "Belledonne Middle School, Graduated with honors." },
  
  // CV
  cv_description: { fr: "Une question ? N'importe quoi ? Contactez moi !", en: "Any questions? Anything at all? Feel free to reach out!" },
  cv_download: { fr: "TÉLÉCHARGER_PDF", en: "DOWNLOAD_PDF" },
  cv_view: { fr: "VOIR_EN_LIGNE", en: "VIEW_ONLINE" },
  
  // Contact
  contact_name: { fr: "VOTRE_IDENTITÉ", en: "YOUR_IDENTITY" },
  contact_email: { fr: "VOTRE_ADRESSE_MAIL", en: "YOUR_EMAIL_ADDRESS" },
  contact_message: { fr: "MESSAGE", en: "MESSAGE" },
  contact_send: { fr: "ENVOYER", en: "SEND" },
  contact_direct: { fr: "Envoyer à :", en: "Send to:" },

  // Socials
  social_connect: { fr: "CONTACTEZ_MOI_SUR_MES_RESEAUX", en: "CONTACT ME ON SOCIAL MEDIA" }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
