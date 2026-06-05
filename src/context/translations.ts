export type Language = 'fr' | 'en';

export interface Translation {
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
  social_connect: { fr: "CONTACTEZ_MOI_SUR_MES_RESEAUX", en: "CONTACT ME ON SOCIAL MEDIA" },

  // Project Titles
  proj_title_0: { fr: "SITE INTERNET", en: "WEBSITE" },
  proj_title_1: { fr: "BASE DE DONNÉES", en: "DATABASE" },
  proj_title_2: { fr: "CHATBOT JAVA", en: "JAVA CHATBOT" },
  proj_title_3: { fr: "DEV APPICATION", en: "APP DEVELOPMENT" },
  proj_title_4: { fr: "INSTALLATION MACHINE VIRTUELLE", en: "VM INSTALLATION" },
  proj_title_5: { fr: "JEU ASSEMBLEUR", en: "ASSEMBLY GAME" },

  // Terminal Commands
  term_whoami: { fr: "qui_suis_je", en: "whoami" },
  term_skills: { fr: "cat competences.txt", en: "cat skills.txt" },
  term_interests: { fr: "cat interets.txt", en: "cat interests.txt" },
  term_personal: { fr: "ls personnel/", en: "ls personal/" },

  // Project Long Descriptions
  proj_0_long: {
    fr: `Nb de personnes : 5\n\nTechnique :\n• Coder le site en respectant les demande du client (nav-bar, onglet, carrousel, etc…)\n• rendre ces informations claires pour un public ne s’y connaissant pas en informatique\n\nDurée : 2 mois\n\nJe : Mon rôle était de construire la maquette et de coder la page de FAQ\n\nConclusion : Dans ce projet, j’ai appris à mieux apprendre le positionnement des marges et l’organisation du code en CSS.`,
    en: `Team Size: 5\n\nTechnique:\n• Coded the site following client requirements (navbar, tabs, carousel, etc.)\n• Made information clear for non-technical users\n\nDuration: 2 months\n\nI: My role was building the mockup and coding the FAQ page\n\nConclusion: In this project, I learned to better understand margin positioning and CSS code organization.`
  },
  proj_1_long: {
    fr: `Nb de personnes : 2\n\nTechnique :\n• créer des tables et des relations entre elles tout en respectant les contraintes demandées\n• extraire des informations de ces tables\n• rendre ces informations claires pour un public ne s’y connaissant pas en informatique\n\nDurée : 4 semaines\n\nJe : Mon rôle était d’établir le SEA (Schéma Entité Acquisition) et de créer les tables avec leurs contraintes.\n\nConclusion : Dans ce projet, j’ai appris comment intégrer les contraintes dans une tables, ce qui était compliqué pour ma part avant ce projet.`,
    en: `Team Size: 2\n\nTechnique:\n• Created tables and relationships while respecting requested constraints\n• Extracted information from these tables\n• Made this information clear for a non-technical audience\n\nDuration: 4 weeks\n\nI: My role was establishing the ERD (Entity Relationship Diagram) and creating the tables with their constraints.\n\nConclusion: In this project, I learned how to integrate constraints into tables, which was something I found challenging before this project.`
  },
  proj_2_long: {
    fr: `Nb de personnes : 2\n\nTechnique :\n• Permettre à un chatbot d’analyser la forme d’une question et donner une réponse si elle fait partie de sa base de donnée\n• Si la question ne fait pas partie de sa base de donnée, permettre de l’intégrer et d’y intégrer une réponse qu’on lui aura donnée\n\nDurée : 1 semaine\n\nJe : Mon rôle était de coder les tris que le chatbot allait faire pour analyser les mots de la question.\n\nConclusion : Ce projet m’a permis de développer un meilleur esprit d’équipe et une meilleure coordination de code avec ce qu’à fait mon coéquipier.`,
    en: `Team Size: 2\n\nTechnique:\n• Allowed a chatbot to analyze question structures and provide responses if present in its database\n• If a question is not in the database, enabled the system to learn and integrate a provided answer\n\nDuration: 1 week\n\nI: My role was coding the sorting algorithms used by the chatbot to analyze question keywords.\n\nConclusion: This project helped me develop better teamwork skills and improved code coordination with my teammate's work.`
  },
  proj_3_long: {
    fr: `Nb de personnes : 5\n\nTechnique :\n• Respecter chaque diagramme construit par nos soins pour développer l’application\n• Respecter la deadline imposée.\n• Rendre l’interface agréable en respectant les contraintes de l’expérience utilisateur et l’utilisabilité de l’application\n\nDurée : 3 mois\n\nJe : Mon rôle était de construire la maquette et de développer le diagramme de séquence, ainsi que de rédiger le persona de chaque utilisateur.\n\nConclusion : Dans ce projet, j’ai appris à mieux travailler en équipe et de rendre une application plus simple à utiliser.`,
    en: `Team Size: 5\n\nTechnique:\n• Followed every diagram we designed to develop the application\n• Respected the imposed deadline\n• Created a pleasant interface while respecting UX constraints and application usability\n\nDuration: 3 months\n\nI: My role was building the mockup, developing sequence diagrams, and writing user personas.\n\nConclusion: In this project, I learned to work better in a team and make an application easier to use.`
  },
  proj_4_long: {
    fr: `Nb de personnes : 1\n\nTechnique :\n• Permettre à cette machine virtuelle de créer une base de donnée et de gérer ses droit administrateur afin de permettre à un utilisateur de se connecter sur un autre poste en local\n\nDurée : 1 mois\n\nConclusion : Ce projet m’a permis de mieux comprendre la gestion admin.`,
    en: `Team Size: 1\n\nTechnique:\n• Enabled this virtual machine to create a database and manage admin rights to allow local remote user connections\n\nDuration: 1 month\n\nConclusion: This project helped me better understand administrator management.`
  },
  proj_5_long: {
    fr: `Nb de personnes : 1\n\nTechnique :\n• Coder une balle qui va rebondir sur le paddle, sur les briques ainsi que sur les murs\n• quand la balle touche un de ces éléments, son déplacement en X et en Y sont inversés grâce a des fonctions implémentées dans le code.\n\nDurée : 3 mois\n\nConclusion : J’ai appris à mieux comprendre la notion d’emplacement mémoire ainsi que l’utilisation de fonction.`,
    en: `Team Size: 1\n\nTechnique:\n• Coded a ball that bounces off the paddle, bricks, and walls\n• When the ball hits an element, its X and Y displacement are inverted using functions implemented in the code\n\nDuration: 3 months\n\nConclusion: I gained a better understanding of memory locations and the use of functions.`
  },
  // Labels
  card_learn_more: { fr: "cliquer pour en savoir plus...", en: "click to learn more..." },
  modal_objective: { fr: "Objectif :", en: "Objective:" },
  modal_execution: { fr: "Réalisation :", en: "Execution:" },
  modal_impact: { fr: "Impact :", en: "Impact:" },
  modal_source_code: { fr: "Code Source", en: "Source Code" },
  modal_view_demo: { fr: "Voir la Démo", en: "View Demo" }
};
