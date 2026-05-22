/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://isaacew.netlify.app/',
  meta: {
    title: 'Isaac E. Weintraub | Aerospace Control Engineer',
    description:
      'Senior Electronics Engineer at AFRL specializing in autonomous control, optimal control, and differential games for aerospace applications.',
  },
  hero: {
    name: 'Isaac E. Weintraub',
    role: 'Aerospace Control Engineer',
    tagline: 'Optimization and differential games for autonomous aerospace systems.',
    contact: 'Senior Electronics Engineer at Air Force Research Laboratory',
    avatarSrc: '/avatar.png',
    avatarAlt: 'Isaac E. Weintraub',
  },
  about: {
    paragraphs: [
      'I am a Senior Electronics Engineer in the Autonomous Controls branch in the Power and Control division of the Aerospace Systems Directorate in the Air Force Research Laboratory. I received my PhD in Electrical Engineering from the Air Force Institute of Technology in 2021, my MS in Electrical Engineering from the University of Texas at Arlington in 2011, and my BS in Mechanical Engineering from Rose-Hulman Institute of Technology in 2009.',
      'My research interests lie in automation and control of aerospace systems for defense applications, with a focus on optimal control theory and differential games. I am an associate fellow of the American Institute of Aeronautics and Astronautics (AIAA) and a senior member of the Institute of Electrical and Electronics Engineers (IEEE).',
      {
        heading: 'Research Focus Areas',
        bullets: [
          'Autonomous Control of Aerospace Systems',
          'Optimal Control and Differential Games',
          'Nonlinear Feedback Control',
          'Multi-agent Systems and Formation Control',
          'Pursuit-Evasion Problems',
        ],
      },
      {
        heading: 'Affiliations & Memberships',
        bullets: [
          'Air Force Research Laboratory - Senior Electronics Engineer',
          'AIAA - Associate Fellow, Intelligent Systems Technical Committee',
          'IEEE - Senior Member, Robotics & Automation Society, Control Systems Society',
        ],
      },
    ],
  },
  experiences: [
    {
      period: '2021–Present',
      title: 'Senior Electronics Engineer',
      company: 'Air Force Research Laboratory',
      summary:
        'Leading research in autonomous control of aerospace systems with emphasis on optimal control theory and differential games.',
      highlights: [
        'Developed optimal trajectory planning algorithms for aircraft avoidance of dynamic threat zones',
        'Designed competitive analysis frameworks for perimeter defense problems',
        'Advanced formation control strategies using online algorithms and real-time control methods',
        'Published 30+ peer-reviewed papers in control theory and aerospace applications',
      ],
      tech: ['Optimal Control', 'MATLAB', 'Differential Games', 'C++', 'Python'],
    },
    {
      period: '2015–2021',
      title: 'PhD Research & Development',
      company: 'Air Force Institute of Technology',
      summary:
        'Conducted doctoral research on optimal guidance strategies and control methods for autonomous systems.',
      highlights: [
        'Developed novel optimal control solutions for pursuit-evasion scenarios',
        'Implemented advanced numerical methods using MATLAB and GPOPS-II',
        'Collaborated with AFRL on transitioning research to operational systems',
        'Authored dissertation on optimal guidance for aerospace vehicles',
      ],
      tech: ['Optimal Control Theory', 'MATLAB', 'GPOPS-II', 'Numerical Methods'],
    },
    {
      period: '2011–2015',
      title: 'Control Systems Engineer',
      company: 'Air Force Institute of Technology',
      summary:
        'Conducted master\'s level research and contributed to control system development projects.',
      highlights: [
        'Researched adaptive control methods for uncertain systems',
        'Developed event-triggered control strategies for networked multi-agent systems',
        'Published work on cooperative control and distributed algorithms',
      ],
      tech: ['Adaptive Control', 'Multi-agent Systems', 'MATLAB', 'Control Theory'],
    },
  ],
  publications: [
    {
      title: 'An Optimal Strategy for Off-Board Proximal Sensing of a Target: Part 2',
      year: 2025,
      authors: 'Alexander Hansen, Michael D. Zollars, Isaac E. Weintraub, Alexander L Von Moll',
      publication: 'AIAA SciTech 2025 Forum',
      doi: '10.2514/6.2025-1350',
      type: 'Conference',
      abstract: 'Determines optimal trajectories for unmanned turn-constrained pursuers with dynamic engagement zones.',
      url: 'https://arc.aiaa.org/doi/epdf/10.2514/6.2025-1350',
    },
    {
      title: 'Optimal Trajectories for Aircraft Avoidance of Multiple Weapon Engagement Zones',
      year: 2023,
      authors: 'Isaac E. Weintraub',
      publication: 'Journal of Guidance, Control, and Dynamics',
      doi: '10.2514/1.I011224',
      type: 'Journal',
      abstract: 'Expresses optimal control problem for air vehicles to navigate through dynamic keep-out zones while minimizing flight time.',
      url: '',
    },
    {
      title: 'Determining Follower Aircraft\'s Optimal Trajectory in Relation to a Dynamic Formation Ring',
      year: 2023,
      authors: 'Alexander L Von Moll, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2023 Forum',
      doi: '10.1109/AERO55745.2023.10115672',
      type: 'Conference',
      abstract: 'Develops tool for calculating optimal trajectory of follower aircraft completing formation rejoin and maintenance.',
      url: 'https://arxiv.org/pdf/2210.01665.pdf',
    },
    {
      title: 'A Leader-Follower Control Strategy Built and Refined using Relational Maneuver Primitives',
      year: 2024,
      authors: 'Alexander L Von Moll, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2024 Forum',
      doi: '10.2514/6.2024-2760',
      type: 'Conference',
      abstract: 'Presents control strategy using genetic algorithm and lookup tables for approximating optimal trajectories in real-time.',
      url: '',
    },
    {
      title: 'Optimal Strategies for the Game of Protecting a Plane in 3-D',
      year: 2022,
      authors: 'Isaac E. Weintraub, Alexander L Von Moll',
      publication: 'American Control Conference',
      doi: '10.23919/ACC53348.2022.9867567',
      type: 'Conference',
      abstract: 'Addresses differential game of protecting target in 3-D space with state-feedback saddle-point strategies.',
      url: '',
    },
    {
      title: 'Competitive Perimeter Defense of Conical Environments',
      year: 2022,
      authors: 'Isaac E. Weintraub, Alexander L Von Moll',
      publication: 'IEEE Conference on Decision and Control',
      doi: '10.1109/CDC51059.2022.9993007',
      type: 'Conference',
      abstract: 'Competitive analysis approach for single vehicle defending concentric perimeter from mobile intruders.',
      url: 'https://arxiv.org/pdf/2110.04667.pdf',
    },
    {
      title: 'An Intercept and Following Strategy for a Multi-rotor Platform using Modified Proportional Navigation',
      year: 2019,
      authors: 'Jay Wilhelm, Isaac E. Weintraub',
      publication: 'AIAA SciTech 2019 Forum',
      doi: '10.2514/6.2019-0683',
      type: 'Conference',
      abstract: 'Pseudotarget based proportional navigation guidance algorithm for UAV interception with uncertain sensor data.',
      url: 'https://www.researchgate.net/publication/330201357',
    },
    {
      title: 'Adaptive Event-triggered Cooperative Control of Uncertain Networked Systems',
      year: 2018,
      authors: 'Isaac E. Weintraub',
      publication: 'IFAC-PapersOnLine',
      doi: '10.1016/j.ifacol.2018.07.092',
      type: 'Journal',
      abstract: 'Distributed leader following with adaptive controllers and event-triggered multi-agent control.',
      url: '',
    }
  ],
  featuredProjects: [],
  projectArchivePage: {
    title: 'Projects',
    description: 'Project archive',
    intro: 'Archive of research projects and collaborations.',
  },
  projectArchive: [],
  contact: {
    email: 'isaac.weintraub.1@afrl.af.mil',
    github: 'https://github.com/isaacew',
    linkedin: 'https://www.linkedin.com/in/isaac-weintraub-a06a591b/',
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];
