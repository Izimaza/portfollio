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
  nav_contact: { fr: 'CONTACT', en: 'CONTACT' },
  
  // Hero
  hero_initializing: { fr: 'INITIALISATION_SYSTÈME...', en: 'INITIALIZING_SYSTEM...' },
  hero_subtitle: { fr: 'Étudiant en Informatique & Passionné de Cybersécurité', en: 'Computer Science Student & Cybersecurity Enthusiast' },
  hero_button: { fr: 'ACCÉDER_À_LA_MÉMOIRE', en: 'ACCESS_CORE_MEMORY' },
  
  // Sections Titles
  title_about: { fr: '01_QUI_SUIS_JE', en: '01_WHO_AM_I' },
  title_projects: { fr: '02_PROJETS_SÉLECTIONNÉS', en: '02_SELECTED_WORK' },
  title_journey: { fr: '03_MON_PARCOURS', en: '03_MY_PATH' },
  title_contact: { fr: '04_ÉTABLIR_CONNEXION', en: '04_ESTABLISH_CONNECTION' },
  
  // About / Terminal
  about_whoami: { fr: 'Elliott Tâche - Étudiant de 1ère année en Informatique.', en: 'Elliott Tâche - 1st Year Computer Science Student.' },
  about_languages: { fr: 'Langages : C, Python, HTML/CSS, JavaScript/TypeScript', en: 'Languages: C, Python, HTML/CSS, JavaScript/TypeScript' },
  about_tools: { fr: 'Outils : Git, Linux, Docker, VS Code', en: 'Tools: Git, Linux, Docker, VS Code' },
  about_interests: { fr: 'Intérêts : Cybersécurité, Développement Web, Automatisation', en: 'Interests: Cybersecurity, Web Development, Automation' },
  about_mission_1: { fr: 'Explorer la frontière numérique.', en: 'Explore the digital frontier.' },
  about_mission_2: { fr: 'Construire des systèmes sécurisés et efficaces.', en: 'Build secure and efficient systems.' },
  about_mission_3: { fr: 'Apprendre quelque chose de nouveau chaque jour.', en: 'Learn something new every single day.' },
  about_ready: { fr: "Prêt à hacker le futur...", en: "Ready to hack the future..." },

  // Projects
  proj_0_desc: { fr: "Un système d'authentification sécurisé. Focus sur le hachage et le sel.", en: "A secure authentication system. Focused on hashing and salt." },
  proj_1_desc: { fr: "Un outil de scan réseau qui identifie les appareils actifs et les ports ouverts.", en: "A network scanning tool that identifies active devices and open ports." },
  proj_2_desc: { fr: "Ce portfolio même. Conçu pour montrer mes compétences et mon esthétique.", en: "This very portfolio. Designed to showcase my skills and aesthetic." },
  
  // Journey
  journey_1_title: { fr: "BUT Informatique", en: "Bachelor of Technology in CS" },
  journey_1_desc: { fr: "Algorithmique, génie logiciel et administration système.", en: "Algorithmic thinking, software engineering, and system administration." },
  journey_2_title: { fr: "Baccalauréat Général", en: "High School Diploma" },
  journey_2_desc: { fr: "Spécialités Mathématiques et NSI. Mention Très Bien.", en: "Specialized in Math and CS. Graduated with honors." },
  journey_3_title: { fr: "Premières lignes de code", en: "First Lines of Code" },
  journey_3_desc: { fr: "Découverte de Python et de la puissance du terminal.", en: "Discovered the power of Python and the terminal." },
  
  // Contact
  contact_signal: { fr: "Le signal est ouvert. Envoyez votre message sur le réseau.", en: "Signal is open. Send your message across the network." },
  contact_name: { fr: "IDENTITÉ_SOURCE", en: "SOURCE_IDENTITY" },
  contact_email: { fr: "ADRESSE_RETOUR", en: "RETURN_ADDRESS" },
  contact_message: { fr: "MESSAGE_ENCORDÉ", en: "ENCODED_MESSAGE" },
  contact_send: { fr: "ENVOYER_SIGNAL", en: "SEND_SIGNAL" },
  contact_direct: { fr: "Lien Direct :", en: "Direct Link:" },

  // Socials
  social_connect: { fr: "REJOINDRE_SUR_LE_RÉSEAU", en: "CONNECT_WITH_ME" }
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
