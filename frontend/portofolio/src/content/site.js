export const siteText = {
  seo: {
    defaultTitle: 'Olly Guo | Human-Centered AI & Behavioral Modeling',
  },
  navigation: {
    about: 'About',
    work: 'Work',
    cv: 'CV',
    blog: 'Blog',
  },
  homepage: {
    name: 'Olly Guo',
    portraitAlt: 'Olly Guo',
    caption: 'Computational user understanding through the behavioral traces people leave in interactive systems.',
    introduction: 'I am an M.S. Computer Science student at the University of Illinois Urbana-Champaign. I study behavior in interactive systems using telemetry, interpretable models, and human–AI studies. My current work spans LLM models of player actions, virtual embodiment, context-aware assistants, and AI-supported learning. I also teach STAT 107 and develop games in Unity.',
    chips: [
      'MSCS @ UIUC',
      'Behavioral modeling',
      'Product data science',
      'Computational HAI',
    ],
    scrollPrompt: 'Selected work',
    contactLinks: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
    },
  },
  lensExplorer: {
    eyebrow: 'Choose a view',
    title: 'One core direction, viewed through two lenses.',
    introduction: 'The same work can support product decisions or contribute new knowledge about people and interactive systems.',
    paths: [
      {
        key: 'product',
        audience: 'For product and applied-science teams',
        title: 'Product & Applied Data Science',
        summary: 'Behavioral and event data translated into product evidence, intervention hypotheses, and rigorous evaluation.',
        bestFor: 'Best for: Product Data Scientist, Behavioral Data Science, and Applied Scientist roles.',
        cta: 'View Industry Path',
      },
      {
        key: 'research',
        audience: 'For research readers',
        title: 'HCI & Human-Centered AI Research',
        summary: 'Interactive systems, human experience, interpretable models, validity, and generalization.',
        bestFor: 'Best for: PhD committees, faculty, and research labs.',
        cta: 'View Research Path',
      },
    ],
    archivePrompt: 'Prefer the complete archive?',
    archiveLink: 'View all work.',
    separator: 'Selected work',
  },
  work: {
    viewAsLabel: 'View as:',
    lensContextLabel: 'Viewing as',
  },
  buttons: {
    openCaseStudy: 'Open case study',
    viewAllProjects: 'View all projects',
    backToProjects: 'Back to projects',
    viewFullSize: 'View full size',
    close: 'Close',
  },
  projectDetail: {
    fallbackTitle: 'Project Details',
    notFoundTitle: 'Project not found',
    noMedia: 'No media available for this project.',
    increaseFontSize: 'Increase font size',
    decreaseFontSize: 'Decrease font size',
  },
  productView: {
    title: 'Behavioral Data → Product Decisions',
    introduction: [
      'I turn behavioral and event data into evidence that can guide product decisions. My work combines telemetry pipelines, statistical analysis, interpretable machine learning, and interactive prototyping to identify where users struggle, disengage, or respond differently across contexts.',
      'I am particularly interested in products where behavior unfolds over time—games, learning systems, immersive experiences, and human-centered AI. I connect predictive performance with practical questions: what should be measured, what might be changed, and how an intervention should be evaluated.',
    ],
    capabilitiesLabel: 'Product Data Workflow / Capabilities',
    capabilities: [
      {
        stage: 'Instrumentation & data',
        evidence: ['Event logs and session telemetry', 'Raw head-movement streams', 'Session-level outcome datasets'],
      },
      {
        stage: 'Analysis',
        evidence: ['Python and pandas', 'Behavioral feature engineering', 'Statistical comparison with SciPy'],
      },
      {
        stage: 'Modeling',
        evidence: ['scikit-learn and XGBoost', 'Group-aware evaluation', 'Time-based and held-out-context splits'],
      },
      {
        stage: 'Interpretation',
        evidence: ['SHAP feature attribution', 'Partial-dependence analysis', 'Hand-crafted behavioral detectors'],
      },
      {
        stage: 'Deployment',
        evidence: ['Unity/C# interactive VR prototypes', 'Iterative experience delivery informed by participant feedback'],
      },
      {
        stage: 'Infrastructure',
        evidence: ['HDF5 session datasets', 'Python feature, model, and interpretation pipeline'],
      },
    ],
    projectsLabel: 'Projects through this lens',
  },
  researchView: {
    title: 'Human-Centered AI & Interactive Systems',
    introduction: [
      'I study how people experience and interact with intelligent, immersive, and playful systems—and how computational methods can help us understand, evaluate, and improve those interactions.',
      'My work spans behavioral modeling, interpretable machine learning, VR/XR, learning technologies, and interactive system design. Across projects, I combine system building, empirical studies, and quantitative analysis, while paying particular attention to validity, generalization, and human agency.',
    ],
    threadLabel: 'Current research thread',
    thread: 'Modeling player actions and virtual embodiment, studying how assistants communicate awareness, and designing AI support for learning.',
    approachLabel: 'Research approach',
    approach: 'Build interactive systems → study human experience → model behavioral patterns → translate evidence into better design.',
    featuredLabel: 'Featured through this lens',
    projectLabel: 'Viewed through this lens',
    coreQuestionLabel: 'Research question',
    focusLabel: 'Research focus',
    evidenceLabel: 'Work to date',
    coreQuestion: 'Which early behavioral signals reliably represent user state and friction, and how well do they generalize across users and interactive contexts?',
    methodsLabel: 'Methods',
    methods: 'VR telemetry / behavioral modeling / interpretable ML / HCI',
    relevanceLabel: 'Research context & scope',
    relevance: 'This project grounds my current direction in computational user understanding while making the limits of behavioral inference explicit.',
    supportingLabel: 'Supporting Work',
    supportingTitle: 'Additional evidence for the research trajectory',
    methodsListLabel: 'Research Methods I Use',
    methodsList: [
      'Behavioral telemetry',
      'Interpretable ML',
      'User-state modeling',
      'Cross-context evaluation',
      'Experimental and observational analysis',
      'Sequence-model evaluation',
      'Survey-to-telemetry linkage',
      'Study and stimulus design',
      'Literature screening and evidence synthesis',
    ],
    archiveLabel: 'Full Archive',
  },
};

export const lensConfig = {
  product: {
    label: 'Product & Applied Data Science',
    title: 'Behavioral Data → Product Decisions',
    detailSectionOrder: [
      'Product Translation (Proposed)',
      'Current Status',
      'Project Description',
      'My Contribution',
      'My Responsibility',
      'My Role',
      'Tech Stack',
    ],
  },
  research: {
    label: 'HCI & Human-Centered AI Research',
    title: 'Human-Centered AI & Interactive Systems',
    detailSectionOrder: [
      'Current Status',
      'Project Description',
      'My Contribution',
      'My Responsibility',
      'My Role',
      'Tech Stack',
      'Product Translation (Proposed)',
    ],
  },
  all: {
    label: 'All Work',
    title: 'All Work',
    description: 'The complete project collection, shown without prioritizing one reader or professional narrative.',
  },
};

export default siteText;

