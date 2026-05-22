/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export interface TechCategory {
  category: string;
  items: readonly string[];
}

export interface FeaturedProject {
  readonly title: string;
  readonly period?: string;
  readonly summary: string;
  readonly solution?: string;
  readonly impact?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly techCategories: readonly TechCategory[];
}

export interface ProjectArchiveRow {
  readonly date: string;
  readonly project: string;
  readonly role: string;
  readonly techStack: string;
}

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
      title: 'Deep Neural Network as 5-D Image for Threat Avoidance',
      year: 2026,
      authors: 'Alexander W. Denton, Michael P. Riddick, Isaac E. Weintraub, Donald L. Kunz',
      publication: 'AIAA SCITECH 2026 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:285363515'
    },
    {
      title: 'Bi-Objective Dynamic Zone Navigation',
      year: 2026,
      authors: 'Reyshwanth Ganeshan, Sivakumar Rathinam, Swaroop Darbha, Satyanarayana G Manyam, Isaac E. Weintraub, David W. Casbeer',
      publication: 'AIAA SCITECH 2026 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:285234519'
    },
    {
      title: 'Basic Engagement Zone Avoidance Using Pseudospectral Methods',
      year: 2026,
      authors: 'Qiang Le, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2026 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:285180213'
    },
    {
      title: 'A Comparison of Reinforcement Learning and Optimal Control Methods for Path Planning',
      year: 2026,
      authors: 'Qiang Le, Yaguang Yang, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:287473622'
    },
    {
      title: 'Learning-Augmented Adaptive Guidance for Target Interception',
      year: 2026,
      authors: 'Rajnikant Sharma, Abhinav Sinha, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2026 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:285212934'
    },
    {
      title: 'On the Synthesis of Optimal Control Laws On the Synthesis of Optimal Control Laws',
      year: 2026,
      authors: 'Meir Pachter, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:266193812'
    },
    {
      title: 'Maximum Kinetic Energy Paths for a Decaying-Speed Dubins Vehicle',
      year: 2025,
      authors: 'Artur Wolek, David W. Casbeer, Isaac E. Weintraub, Alexander Von Moll',
      publication: 'AIAA SCITECH 2025 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276325511'
    },
    {
      title: 'Reactive Vehicle Guidance Using Dynamic Maneuvering Cue',
      year: 2025,
      authors: 'Alexander Von Moll, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2026 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:283721994'
    },
    {
      title: 'Mutual Support by Sensor-Attacker Team for a Passive Target',
      year: 2025,
      authors: 'Prajakta Surve, Shaunak Dattaprasad Bopardikar, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer',
      publication: 'IEEE Open Journal of Control Systems',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:281203290'
    },
    {
      title: 'One-vs-one Threat-Aware Weaponeering with Basic Engagement Zones',
      year: 2025,
      authors: 'Alexander Von Moll, Dejan Milutinović, Isaac E. Weintraub, David W. Casbeer',
      publication: '2025 International Conference on Unmanned Aircraft Systems (ICUAS)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276937890'
    },
    {
      title: 'Probabilistic Weapon Engagement Zones for a Turn Constrained Pursuer',
      year: 2025,
      authors: 'Grant Stagg, Isaac E. Weintraub, Cameron K. Peterson',
      publication: 'ArXiv',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:283693328'
    },
    {
      title: 'Engagement Zones for a Turn Constrained Pursuer',
      year: 2025,
      authors: 'Thomas Chapman, Isaac E. Weintraub, Alexander Von Moll, Eloy García',
      publication: '2025 International Conference on Unmanned Aircraft Systems (ICUAS)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276095218'
    },
    {
      title: 'Cooperative Pursuit-Evasion Games With a Flat Sphere Condition',
      year: 2025,
      authors: 'Dejan Milutinović, Alexander Von Moll, Satyanarayana Gupta Manyam, David W. Casbeer, Isaac E. Weintraub, Meir Pachter',
      publication: 'IEEE Open Journal of Control Systems',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:281046061'
    },
    {
      title: 'Dubins Path With Terminal Range and Field-of-View Constraints',
      year: 2025,
      authors: 'Satyanarayana Gupta Manyam, David W. Casbeer, Alexander Von Moll, Isaac E. Weintraub',
      publication: 'IEEE Control Systems Letters',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:279646941'
    },
    {
      title: 'Influence of Malicious Agents in a Team Seeking to Contain an Evader',
      year: 2025,
      authors: 'Braulio Mora, Animesh Chakravarthy, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer',
      publication: 'AIAA SCITECH 2025 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276325643'
    },
    {
      title: 'An Optimal Strategy for Off-Board Proximal Sensing of a Target: Part 1',
      year: 2025,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Alexander Hansen, Michael D. Zollars',
      publication: 'AIAA SCITECH 2025 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276322685'
    },
    {
      title: 'The Basic Engagement Zone in 3-D',
      year: 2025,
      authors: 'Alexander W. Denton, Donald L. Kunz, Isaac E. Weintraub, Alexander Von Moll',
      publication: 'NAECON 2025 - IEEE National Aerospace and Electronics Conference',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:283098275'
    },
    {
      title: 'Heterogeneous Pursuit of an Active Target Under Sensing Constraints',
      year: 2025,
      authors: 'Prajakta Surve, Shaunak Dattaprasad Bopardikar, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer',
      publication: 'IEEE Control Systems Letters',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:283959873'
    },
    {
      title: 'Stochastic Optimal Avoidance of Multiple Engagement Zones',
      year: 2025,
      authors: 'Dejan Milutinović, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer',
      publication: 'J. Aerosp. Inf. Syst.',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:278274816'
    },
    {
      title: 'Policy for Optimal Avoidance of Multiple Engagement Zones',
      year: 2025,
      authors: 'Dejan Milutinović, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer',
      publication: 'AIAA SCITECH 2025 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276322890'
    },
    {
      title: 'An Optimal Strategy for Off-Board Proximal Sensing of a Target: Part 2',
      year: 2025,
      authors: 'Alexander Hansen, Michael D. Zollars, Isaac E. Weintraub, Alexander Von Moll',
      publication: 'AIAA SCITECH 2025 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:276327868'
    },
    {
      title: 'Shortest Dubins Path to a Moving Circle with Free Final Heading',
      year: 2025,
      authors: 'Satyanarayana Gupta Manyam, David W. Casbeer, Alexander Von Moll, Isaac E. Weintraub',
      publication: '2025 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:280706300'
    },
    {
      title: 'Safe Navigation in the Presence of Range-Limited Pursuers',
      year: 2025,
      authors: 'Thomas Chapman, Alexander Von Moll, Isaac E. Weintraub',
      publication: 'IEEE Control Systems Letters',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:281103399'
    },
    {
      title: 'Sampling-Based Risk-Aware Path Planning Around Dynamic Engagement Zones',
      year: 2024,
      authors: 'Artur Wolek, Isaac E. Weintraub, Alexander Von Moll, David W. Casbeer, Satyanarayana Gupta Manyam',
      publication: 'ArXiv',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:268297320'
    },
    {
      title: 'Modeling and Detection of Cyber-Attacks in UAV Swarms using a 2D-LWR Model and Gaussian Processes',
      year: 2024,
      authors: 'Abhishek Kashyap, Animesh Chakravarthy, Kamesh Subbarao, David W. Casbeer, Isaac E. Weintraub, Brandon Hencey',
      publication: 'AIAA SCITECH 2024 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:267360269'
    },
    {
      title: 'Minimum Time Escape from a Circular Region of a Dubins Car',
      year: 2024,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Meir Pachter',
      publication: 'NAECON 2024 - IEEE National Aerospace and Electronics Conference',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:269635368'
    },
    {
      title: 'Relational Maneuvering of Leader-Follower Unmanned Aerial Vehicles for Flexible Formation',
      year: 2024,
      authors: 'Praveen Kumar Ranjan, Abhinav Sinha, Yongcan Cao, David W. Casbeer, Isaac E. Weintraub',
      publication: 'IEEE Transactions on Cybernetics',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:271862353'
    },
    {
      title: 'Multi Agent Pathfinding for Noise Restricted Hybrid Fuel Unmanned Aerial Vehicles',
      year: 2024,
      authors: 'Drew Scott, Satyanarayana Gupta Manyam, David W. Casbeer, Manish Kumar, Isaac E. Weintraub',
      publication: '2024 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:268691571'
    },
    {
      title: 'Pure Pursuit of a Target on a Circular Trajectory',
      year: 2024,
      authors: 'Alexander Von Moll, David W. Casbeer, Isaac E. Weintraub, Meir Pachter',
      publication: 'AIAA SCITECH 2024 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:267356856'
    },
    {
      title: 'A Leader-Follower Control Strategy Built and Refined using Relational Maneuver Primitives for Approximating Optimal Trajectories in Real-Time',
      year: 2024,
      authors: 'Charles Allen Gotwald, Michael D. Zollars, Jonah A. Reeger, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2024 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:267360484'
    },
    {
      title: 'Pursuit-Evasion on a Sphere and When It Can Be Considered Flat',
      year: 2024,
      authors: 'Dejan Milutinović, Alexander Von Moll, Satyanarayana Gupta Manyam, David W. Casbeer, Isaac E. Weintraub, Meir Pachter',
      publication: '2024 IEEE 63rd Conference on Decision and Control (CDC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:268667061'
    },
    {
      title: 'Noise Aware Path Planning and Power Management of Hybrid Fuel UAVs',
      year: 2024,
      authors: 'Drew Scott, Satyanarayana Gupta Manyam, Isaac E. Weintraub, David W. Casbeer, Manish Kumar',
      publication: 'IEEE Transactions on Automation Science and Engineering',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:268032478'
    },
    {
      title: 'Min-Time Escape of a Dubins Car from a Polygon',
      year: 2024,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, David W. Casbeer, Satyanarayana Gupta Manyam, Meir Pachter, Colin Taylor, Thomas Chapman',
      publication: '2025 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:280705148'
    },
    {
      title: 'Energy-efficient Ring Formation Control with Constrained Inputs',
      year: 2023,
      authors: 'Praveen Kumar Ranjan, Abhinav Sinha, Yongcan Cao, Dzung Tran, David W. Casbeer, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2023 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:256163225'
    },
    {
      title: 'Optimal Trajectories for Multiple-UAS Simultaneous Target Acquisition with Obstacle Avoidance',
      year: 2023,
      authors: 'Michael D. Zollars, David J. Grymin, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:257833795'
    },
    {
      title: 'Range-Limited Pursuit-Evasion',
      year: 2023,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Meir Pachter',
      publication: 'NAECON 2023 - IEEE National Aerospace and Electronics Conference',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:266563220'
    },
    {
      title: 'Optimal Generator Policy for Hybrid Fuel UAV under Airspace Noise Restrictions',
      year: 2023,
      authors: 'Drew Scott, Isaac E. Weintraub, Satyanarayana Gupta Manyam, David W. Casbeer, Manish Kumar',
      publication: 'IFAC-PapersOnLine',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:266450926'
    },
    {
      title: 'Escape from an Orbiting Pursuer with a Nonzero Capture Radius',
      year: 2023,
      authors: 'Braulio Mora, Alexander Von Moll, Isaac E. Weintraub, David W. Casbeer, Animesh Chakravarthy',
      publication: 'NAECON 2024 - IEEE National Aerospace and Electronics Conference',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:263605525'
    },
    {
      title: 'Basic Engagement Zones',
      year: 2023,
      authors: 'Alexander Von Moll, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:265128618'
    },
    {
      title: 'Optimal Trajectories for Aircraft Avoidance of Multiple Weapon Engagement Zones',
      year: 2023,
      authors: 'Patrick M. Dillon, Michael D. Zollars, Isaac E. Weintraub, Alexander Von Moll',
      publication: 'J. Aerosp. Inf. Syst.',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:259414938'
    },
    {
      title: 'Virtual Target Selection for a Multiple-Pursuer-Multiple-Evader Scenario',
      year: 2023,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, David W. Casbeer, Satyanarayana Gupta Manyam',
      publication: 'J. Aerosp. Inf. Syst.',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:258987925'
    },
    {
      title: 'On Improving the Potential Field Method for Ring Formation',
      year: 2022,
      authors: 'Dzung Tran, David W. Casbeer, Isaac E. Weintraub, Dejan Milutinović',
      publication: '2022 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:252098172'
    },
    {
      title: 'Power Management for Noise Aware Path Planning of Hybrid UAVs',
      year: 2022,
      authors: 'Drew Scott, Satyanarayana Gupta Manyam, David W. Casbeer, Manish Kumar, Michael Rothenberger, Isaac E. Weintraub',
      publication: '2022 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:252101799'
    },
    {
      title: 'Energy-aware 3D Leader-Follower Flight Trajectory Optimization for Fixed-Wing Aircraft',
      year: 2022,
      authors: 'Praveen Kumar Ranjan, Johnathan Votion, Yong-Shang Cao, Dzung Tran, David W. Casbeer, Isaac E. Weintraub',
      publication: 'AIAA SCITECH 2022 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:245719588'
    },
    {
      title: 'Development of Linear Battery Model for Path Planning with Mixed Integer Linear Programming: Simulated and Experimental Validation',
      year: 2022,
      authors: 'Drew Scott, Satyanarayana Gupta Manyam, David W. Casbeer, Manish Kumar, Isaac E. Weintraub, Michael Rothenberger',
      publication: 'IFAC-PapersOnLine',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:253708268'
    },
    {
      title: 'Path Planning and Energy Management of Hybrid Air Vehicles for Urban Air Mobility',
      year: 2022,
      authors: 'Satyanarayana Gupta Manyam, David W. Casbeer, Swaroop Darbha, Isaac E. Weintraub, Krishnamoorthy Kalyanam',
      publication: 'IEEE Robotics and Automation Letters',
      type: 'Journal',
      url: 'https://api.semantcholar.org/CorpusID:249191315'
    },
    {
      title: 'Surveillance of a Faster Fixed-Course Target',
      year: 2022,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Eloy García, David W. Casbeer, Meir Pachter',
      publication: 'IEEE Transactions on Aerospace and Electronic Systems',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:252519282'
    },
    {
      title: 'Optimal Strategies for the Game of Protecting a Plane in 3-D',
      year: 2022,
      authors: 'Eloy García, Isaac E. Weintraub, David W. Casbeer, Meir Pachter',
      publication: '2022 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:246607899'
    },
    {
      title: 'Determining Follower Aircraft\'s Optimal Trajectory in Relation to a Dynamic Formation Ring',
      year: 2022,
      authors: 'Charles Allen Gotwald, Michael D. Zollars, Isaac E. Weintraub',
      publication: '2023 IEEE Aerospace Conference',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:252693170'
    },
    {
      title: 'Maximum Observation of a Target by a Slower Observer in Three Dimensions',
      year: 2021,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Eloy García, Meir Pachter',
      publication: 'Journal of Guidance Control and Dynamics',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:233777283'
    },
    {
      title: 'Ring Formation Maneuver: Double-Integrator Kinematics with Input Saturation',
      year: 2021,
      authors: 'Dzung Tran, David W. Casbeer, Eloy García, Isaac E. Weintraub, Dejan Milutinović',
      publication: 'Journal of Guidance, Control, and Dynamics',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:239207414'
    },
    {
      title: 'Ring Formation Maneuvering with Double Integrator Dynamics*',
      year: 2021,
      authors: 'Dzung Tran, David W. Casbeer, Eloy García, Isaac E. Weintraub, Dejan Milutinović',
      publication: '2021 International Conference on Unmanned Aircraft Systems (ICUAS)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:236187935'
    },
    {
      title: 'An Optimal Engagement Zone Avoidance Scenario in 2-D',
      year: 2021,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Christian Carrizales, Nicholas Hanlon, Zachariah E. Fuchs',
      publication: 'AIAA SCITECH 2022 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:243986002'
    },
    {
      title: 'The Synthesis of Optimal Control Laws Using Isaacs’ Method for the Solution of Differential Games',
      year: 2021,
      authors: 'Meir Pachter, Isaac E. Weintraub',
      publication: 'Journal of Optimization Theory and Applications',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:257834217'
    },
    {
      title: 'Continuous Monitoring of a Path-Constrained Moving Target by Multiple Unmanned Aerial Vehicles',
      year: 2021,
      authors: 'Camilla Tabasso, Calvin Kielas-Jensen, Venanzio Cichella, Satyanarayana Gupta Manyam, David W. Casbeer, Isaac E. Weintraub',
      publication: 'Journal of Guidance, Control, and Dynamics',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:244162741'
    },
    {
      title: 'Trajectory Optimization For Rendezvous Planning Using Quadratic B\'ezier Curves',
      year: 2021,
      authors: 'Satyanarayana Gupta Manyam, David W. Casbeer, Isaac E. Weintraub, Colin J. Taylor',
      publication: '2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:245263439'
    },
    {
      title: 'Persistent Monitoring by Multiple Unmanned Aerial Vehicles Using Bernstein Polynomials',
      year: 2021,
      authors: 'Calvin Kielas-Jensen, Venanzio Cichella, David W. Casbeer, Satyanarayana Gupta Manyam, Isaac E. Weintraub',
      publication: 'Journal of Optimization Theory and Applications',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:254751832'
    },
    {
      title: 'Competitive Perimeter Defense of Conical Environments',
      year: 2021,
      authors: 'Shivam Bajaj, Eric K. Torng, Shaunak Dattaprasad Bopardikar, Alexander Von Moll, Isaac E. Weintraub, Eloy García, David W. Casbeer',
      publication: '2022 IEEE 61st Conference on Decision and Control (CDC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:238582866'
    },
    {
      title: 'On the Synthesis of Optimal Control Laws',
      year: 2021,
      authors: 'Meir Pachter, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:245353752'
    },
    {
      title: 'Engagement Zone Defense of a Non-Maneuvering Evader',
      year: 2021,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, David W. Casbeer, Eloy García, Meir Pachter',
      publication: '2021 IEEE Conference on Control Technology and Applications (CCTA)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:245693804'
    },
    {
      title: 'Optimal Evasion in an Active Target Defense Scenario',
      year: 2020,
      authors: 'Isaac E. Weintraub, Eloy García, David W. Casbeer, Meir Pachter',
      publication: 'AIAA Scitech 2021 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:234294898'
    },
    {
      title: 'Maximum Observation of a Faster Non-Maneuvering Target by a Slower Observer',
      year: 2020,
      authors: 'Isaac E. Weintraub, Alexander Von Moll, Eloy García, David W. Casbeer, Zachary J. L. Demers, Meir Pachter',
      publication: '2020 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:220889996'
    },
    {
      title: 'An Introduction to Pursuit-evasion Differential Games',
      year: 2020,
      authors: 'Isaac E. Weintraub, Meir Pachter, Eloy García',
      publication: '2020 American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:212657428'
    },
    {
      title: 'Quadratic Bezier Curves for Multi-Agent Coordinated Arrival in the Presence of Obstacles',
      year: 2020,
      authors: 'Satyanarayana Gupta Manyam, David W. Casbeer, Isaac E. Weintraub, Dzung Tran, Justin M. Bradley, Swaroop Darbha',
      publication: 'AIAA Scitech 2021 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:234297681'
    },
    {
      title: 'Direct Methods Comparison for the Active Target Defense Scenario',
      year: 2020,
      authors: 'Isaac E. Weintraub, Richard G. Cobb, William P. Baker, Meir Pachter',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:213614642'
    },
    {
      title: 'Ring Formation Maneuver: Single-Integrator Kinematics',
      year: 2020,
      authors: 'Dzung Tran, David W. Casbeer, Eloy García, Isaac E. Weintraub, Dejan Milutinović, Satyanarayana Gupta Manyam',
      publication: 'AIAA Scitech 2021 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:234264848'
    },
    {
      title: 'Circular Rejoin in 3D Using B\'ezier Paths',
      year: 2020,
      authors: 'Isaac E. Weintraub, Zachary J. L. Demers, Jason E. Shroyer, Nathan P. Ritsema, Dillon P. Sluss',
      publication: '2020 IEEE Conference on Control Technology and Applications (CCTA)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:222097712'
    },
    {
      title: 'Optimal guidance strategy for the defense of a non‐manoeuvrable target in 3‐dimensions',
      year: 2020,
      authors: 'Isaac E. Weintraub, Eloy García, Meir Pachter',
      publication: 'Iet Control Theory and Applications',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:216221822'
    },
    {
      title: 'An Intercept and Following Strategy for a Multi-rotor Platform using a Modified Proportional Navigation',
      year: 2019,
      authors: 'Garrett Clem, Jay Wilhelm, David W. Casbeer, Isaac E. Weintraub, David J. Grymin',
      publication: 'AIAA Scitech 2019 Forum',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:68053831'
    },
    {
      title: 'A Kinematic Rejoin Method for Active Defense of Non-Maneuverable Aircraft',
      year: 2018,
      authors: 'Isaac E. Weintraub, Eloy García, Meir Pachter',
      publication: '2018 Annual American Control Conference (ACC)',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:52018020'
    },
    {
      title: 'An Optimal-Stochastic Aircraft Defense Strategy for the Active Target Defense Scenario',
      year: 2018,
      authors: 'Isaac E. Weintraub, Eloy García, Meir Pachter',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:196016752'
    },
    {
      title: 'Adaptive Event-triggered Cooperative Control of Uncertain Networked Systems',
      year: 2018,
      authors: 'Eloy García, Isaac E. Weintraub, David W. Casbeer',
      publication: 'IFAC-PapersOnLine',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:86553855'
    },
    {
      title: 'Wing Design and Testing for a Tailless Flapping Wing Micro-Air Vehicle',
      year: 2017,
      authors: 'Michael W. Oppenheimer, David O. Sigthorsson, David B. Doman, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:125123162'
    },
    {
      title: 'Wing Flexibility Induced Control Reversal For Flapping Wing Vehicles: Theoretical Analysis',
      year: 2017,
      authors: 'David O. Sigthorsson, Michael W. Oppenheimer, David B. Doman, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:125156322'
    },
    {
      title: 'An Optimal Aircraft Defense Strategy for the Active Target Defense Scenario',
      year: 2017,
      authors: 'Isaac E. Weintraub, Eloy García, David W. Casbeer, Meir Pachter',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:125311416'
    },
    {
      title: 'Wing Flexibility Induced Control Reversal For Flapping Wing Vehicles: Observation and Evaluation',
      year: 2017,
      authors: 'David O. Sigthorsson, Michael W. Oppenheimer, David B. Doman, Isaac E. Weintraub',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:125440014'
    },
    {
      title: 'Kinematic Selection for a Tailless Flapping Wing Micro-Air Vehicle',
      year: 2016,
      authors: 'Isaac E. Weintraub, David O. Sigthorsson, Michael W. Oppenheimer, David B. Doman',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:113023562'
    },
    {
      title: 'Experimental Measurements of Cycle Averaged Forces for a Flapping Wing Vehicle',
      year: 2015,
      authors: 'Michael W. Oppenheimer, Isaac E. Weintraub, David O. Sigthorsson, David B. Doman',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:123860424'
    },
    {
      title: 'Control of a Minimally Actuated Biomimetic Vehicle Using Quarter-Cycle Wingbeat Modulation',
      year: 2015,
      authors: 'Michael W. Oppenheimer, Isaac E. Weintraub, David O. Sigthorsson, David B. Doman',
      publication: 'Journal of Guidance Control and Dynamics',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:120959824'
    },
    {
      title: 'Quarter Cycle Modulation of a Minimally Actuated Biomimetic Vehicle',
      year: 2014,
      authors: 'Michael W. Oppenheimer, Isaac E. Weintraub, David O. Sigthorsson, David B. Doman',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:124886632'
    },
    {
      title: 'Wing Velocity Control System for Testing Body Motion Control Methods for Flapping Wing MAVs',
      year: 2013,
      authors: 'Michael W. Oppenheimer, David O. Sigthorsson, Isaac E. Weintraub, David B. Doman, Benjamin M. Perseghetti',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:112925698'
    },
    {
      title: 'Development of a Flapping Wing Mechanism that Can Produce Lift Greater than Weight',
      year: 2013,
      authors: 'Michael W. Oppenheimer, David O. Sigthorsson, Isaac E. Weintraub, Todd J. Smith, Jaderic C. Dawson, David B. Doman',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:123767696'
    },
    {
      title: 'Implementation of Split-Cycle Control for Micro Aerial Vehicles',
      year: 2013,
      authors: 'Isaac E. Weintraub, David O. Sigthorsson, Michael W. Oppenheimer, David B. Doman',
      publication: 'International Conference on Robot Intelligence Technology and Applications',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:42380451'
    },
    {
      title: 'Structural Technology Evaluation and Analysis Program (STEAP). Delivery Order 0035: Dynamics and Control and Computational Design of Flapping Wing Micro Air Vehicles',
      year: 2012,
      authors: 'David O. Sigthorsson, Isaac E. Weintraub, Christopher Smithson',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:107917049'
    },
    {
      title: 'Computation of Inertial Forces and Torques Associated with Flapping Wings',
      year: 2012,
      authors: 'Michael W. Oppenheimer, Shorya Awtar, David O. Sigthorsson, Isaac E. Weintraub, David B. Doman',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:110325608'
    },
    {
      title: 'Flapping Wing Technology for Micro Air Vehicles Incorporating a Lead Zirconate Titanate (PZT) Bimorph Actuator',
      year: 2012,
      authors: 'Asha Hall, Richard Roberts, Isaac E. Weintraub, Jaret C. Riddick',
      publication: '',
      type: 'Conference',
      url: 'https://api.semanticscholar.org/CorpusID:137645305'
    },
    {
      title: 'Plane Motion of a Particle Subject to Curvature Constraints',
      year: 1975,
      authors: 'Ernest J. Cockayne, G. W. C. Hall',
      publication: 'Siam Journal on Control',
      type: 'Journal',
      url: 'https://api.semanticscholar.org/CorpusID:119808273'
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
