export const projects = [
  {
    "id": 8,
    "category": "research",
    "title": "Frozen LLMs for Player Action Prediction",
    "brief": "Testing whether action semantics and gameplay history help frozen language models predict a player's next action.",
    "meta": "LLM evaluation / gameplay sequences",
    "signal": "Separating semantic information from sequence regularity",
    "tags": [
      "LLMs",
      "behavioral modeling",
      "sequence prediction",
      "evaluation"
    ],
    "slug": "frozen-llm-player-action-prediction",
    "status": "Ongoing research · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "Can a frozen language model use the meaning of gameplay actions to predict what a player will do next? In collaboration with Dominic Kao, I am evaluating Llama 3.1 8B on event sequences from Waddle, an educational VR game. The project compares different amounts of history and different ways of representing actions, including meaningful descriptions and deliberately mismatched descriptions."
        },
        {
          "heading": "My Contribution",
          "body": "Build the evaluation pipeline from gameplay logs to action sequences and model scores\nDefine the player-event vocabulary and document event meanings against game source code\nCompare language-model predictions with Markov and previous-event repetition baselines\nCheck duplicate events, session separation, scoring, and sensitivity to numerical precision\nCoordinate independent human-written action descriptions and run GPU experiments on NCSA Delta"
        },
        {
          "heading": "Current Status",
          "body": "Evaluation infrastructure and initial experiment runs are in place. Controlled comparisons of semantic descriptions, history length, and numerical precision are ongoing. Current runs are development evidence; the project does not yet claim that LLMs outperform the sequence baselines."
        },
        {
          "heading": "Tech Stack",
          "body": "Python, PyTorch, Llama 3.1, gameplay telemetry, NCSA Delta, GPU computing"
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 2,
        "summary": "I am testing when action meaning adds predictive information beyond event repetition and local sequence structure. A controlled evaluation varies action descriptions and available history, with Markov baselines, duplicate-event checks, and precision comparisons. Formal comparisons are ongoing.",
        "emphasis": "Do language semantics improve models of player behavior?",
        "featuredEvidence": "Implemented evaluation pipeline, documented event vocabulary, baseline comparisons, and initial GPU runs."
      },
      "product": {
        "order": 2,
        "summary": "Before using an LLM to anticipate a user's next action, a team should know whether it improves on simple behavioral baselines. I am building that comparison on VR gameplay logs, with attention to event definitions, evaluation validity, and model cost. This is evaluation work in progress.",
        "emphasis": "Testing whether an LLM earns its added complexity",
        "featuredEvidence": "A working gameplay-sequence evaluation pipeline with Markov and repetition baselines."
      }
    }
  },
  {
    "id": 9,
    "category": "research",
    "title": "AI Assistant Awareness, Warmth & Eeriness",
    "brief": "Designing a study of how an assistant's expressed knowledge about a person and their surroundings changes the experience of AI assistance.",
    "meta": "Human–AI interaction / study design",
    "signal": "When does an aware assistant begin to feel intrusive?",
    "tags": [
      "human–AI interaction",
      "XR",
      "study design",
      "user experience"
    ],
    "slug": "ai-assistant-awareness",
    "status": "Study design · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "How much should an assistant reveal that it knows about a user and their surroundings? With Dominic Kao and Revan, I am developing a study of expressed awareness, perceived warmth, and eeriness. The work examines what people interpret as awareness and how assistants can communicate context without making the interaction uncomfortable."
        },
        {
          "heading": "My Contribution",
          "body": "Develop the study procedure and participant-facing materials\nAnalyze how different types of awareness could be represented in assistant remarks\nPlan coding of elicited remarks and the evaluation of perceived awareness, warmth, and eeriness\nCompare video-based and live-interaction study procedures and their implications for participant experience"
        },
        {
          "heading": "Current Status",
          "body": "Study design, stimulus development, and IRB preparation are in progress. The pilot and main-study procedures are still being aligned. AR and live, researcher-triggered remarks are being considered; they are not presented here as completed study conditions or findings."
        },
        {
          "heading": "Methods",
          "body": "Participant elicitation, qualitative coding, controlled assistant remarks, rating scales, interviews, and interactive prototyping."
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 3,
        "summary": "The project asks how people interpret an assistant's awareness of themselves and their environment. I am developing stimuli and an end-to-end study procedure, including how awareness should be represented and measured. Pilot and main-study choices remain under development.",
        "emphasis": "Understanding the boundary between helpful awareness and eeriness",
        "featuredEvidence": "Study procedures, participant-facing materials, and assistant-stimulus development in progress."
      },
      "product": {
        "order": 5,
        "summary": "Context-aware assistants need to communicate what they know in ways users can understand and accept. I am designing a study to examine that interaction boundary through perceived awareness, warmth, and eeriness. Design guidance will depend on the eventual study evidence.",
        "emphasis": "Designing how assistants reveal contextual knowledge",
        "featuredEvidence": "An evolving study protocol and materials for evaluating assistant remarks."
      }
    }
  },
  {
    "id": 10,
    "category": "research",
    "title": "Behavioral Signatures of Virtual Embodiment",
    "brief": "Linking embodiment questionnaires with VR movement and interaction traces to test interpretable behavioral measures.",
    "meta": "Embodiment / survey–telemetry analysis",
    "signal": "Connecting reported experience with observable behavior",
    "tags": [
      "embodiment",
      "VR telemetry",
      "data linkage",
      "replication"
    ],
    "slug": "behavioral-signatures-embodiment",
    "status": "Ongoing analysis · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "In collaboration with Dominic Kao, I am investigating how movement and interaction traces relate to a person's reported experience of a virtual body. The work considers dimensions such as ownership, agency, response, location, and appearance, while distinguishing survey reports from behavioral proxies."
        },
        {
          "heading": "My Contribution",
          "body": "Link appointment and questionnaire records to gameplay sessions\nCheck linkage quality and document uncertain or unresolved matches\nDevelop interpretable posture and movement features\nPrepare replication across separate lab batches using a fixed feature definition\nExamine how differences between questionnaire instruments limit direct comparisons"
        },
        {
          "heading": "Current Status",
          "body": "Data linkage, quality checks, and replication preparation are in progress. Behavioral features are candidate indicators of embodiment; they are not established substitutes for participants' self-reports."
        },
        {
          "heading": "Tech Stack",
          "body": "Python, survey analysis, VR telemetry, behavioral feature engineering"
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 4,
        "summary": "I am studying whether interpretable movement features relate to reported virtual embodiment. The work centers on careful survey-to-session linkage, uncertain matches, and replication across lab batches, including limitations introduced by different questionnaire instruments.",
        "emphasis": "Testing behavioral proxies against reported embodiment",
        "featuredEvidence": "Survey-to-telemetry linkage work, match-quality checks, and a replication plan."
      },
      "product": {
        "order": 7,
        "summary": "Behavioral data may help explain how an immersive experience feels, but only if the logs can be reliably matched to participant reports. I am building and checking those links before evaluating candidate embodiment features.",
        "emphasis": "Making experience data usable without overinterpreting it",
        "featuredEvidence": "A linkage and quality-check workflow for surveys and VR sessions."
      }
    }
  },
  {
    "id": 11,
    "category": "research",
    "title": "Hatched / Waddle: Penguin Perspective Study",
    "brief": "Building Unity study infrastructure for a comparison of embodied penguin and scientist perspectives.",
    "meta": "VR development / research infrastructure",
    "signal": "Turning a VR game into a controlled study environment",
    "tags": [
      "Unity",
      "C#",
      "VR",
      "telemetry",
      "study infrastructure"
    ],
    "slug": "penguin-perspective-study",
    "status": "Development & validation · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "This collaboration with Bonbon, Nikhil, and the project team develops a matched-content comparison of embodied penguin and scientist perspectives. My work combines Unity implementation, instrumentation, and data analysis so that the game can support a research study."
        },
        {
          "heading": "My Contribution",
          "body": "Contribute Unity/C# changes to study interactions and locomotion controls\nDevelop and check head, hand, and interaction-event logging\nWork on LSL synchronization and XDF-based logging validation\nCoordinate implementation requirements and integration with the development team"
        },
        {
          "heading": "Current Status",
          "body": "Study-build integration and logging validation are ongoing. Completed local checks support development, while full study readiness and participant outcomes remain to be established."
        },
        {
          "heading": "Tech Stack",
          "body": "Unity, C#, VR interaction, Lab Streaming Layer (LSL), XDF, telemetry"
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 5,
        "summary": "I contribute study infrastructure and analysis for a matched-content comparison of penguin and scientist perspectives. The work includes Unity interactions, head/hand telemetry, event logging, and synchronization; integration and study validation are ongoing.",
        "emphasis": "Supporting a controlled comparison of embodied perspectives",
        "featuredEvidence": "Unity implementation and local telemetry/synchronization validation."
      },
      "product": {
        "order": 4,
        "summary": "A research VR build needs dependable interactions and logs before its behavior can be evaluated. I contribute Unity/C# development, instrumentation, and synchronization checks while coordinating changes with the team.",
        "emphasis": "Building instrumentation alongside interactive functionality",
        "featuredEvidence": "Study-build development, interaction-event logging, and local validation."
      }
    }
  },
  {
    "id": 12,
    "category": "research",
    "title": "Avatar Color: Scoping Review",
    "brief": "Screening and synthesizing research on avatar color and user experience with a collaborative review team.",
    "meta": "Evidence synthesis / avatar research",
    "signal": "Mapping what avatar-color research actually supports",
    "tags": [
      "avatars",
      "scoping review",
      "literature screening",
      "evidence synthesis"
    ],
    "slug": "avatar-color-scoping-review",
    "status": "Review in progress · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "With Swati, Dominic Kao, and Lux, I am contributing to a scoping review of avatar-color research. The review brings together relevant studies and tracks the evidence behind inclusion and exclusion decisions."
        },
        {
          "heading": "My Contribution",
          "body": "Screen candidate papers and review full texts\nRecord inclusion/exclusion decisions and supporting evidence\nDiscuss ambiguous cases and reconcile screening judgments with the team\nPrepare evidence summaries for synthesis"
        },
        {
          "heading": "Current Status",
          "body": "Screening, full-text review, and evidence synthesis are ongoing. The review is not yet a published synthesis, and the current page does not claim a final search yield or pooled effect."
        },
        {
          "heading": "Methods",
          "body": "Literature screening, full-text review, evidence extraction, reviewer agreement checks, ASReview, and Catchii."
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 6,
        "summary": "I contribute full-text screening, evidence extraction, and discussion of ambiguous cases to an avatar-color scoping review. The work aims to map the evidence and its gaps; screening and synthesis are still in progress.",
        "emphasis": "Building an accountable evidence base for avatar design",
        "featuredEvidence": "Completed screening contributions and an evidence summary within an ongoing team review."
      },
      "product": {
        "order": 9,
        "summary": "Avatar design decisions need evidence that remains connected to study context. I contribute screening and evidence summaries to a collaborative scoping review so design claims can be checked against the underlying papers.",
        "emphasis": "Connecting avatar-design claims to their supporting studies",
        "featuredEvidence": "Documented screening decisions and full-text evidence summaries."
      }
    }
  },
  {
    "id": 13,
    "category": "research",
    "title": "Support Without Sycophancy",
    "brief": "A class research project separating emotional validation from agreement with a person's interpretation of an interpersonal situation.",
    "meta": "Human–AI interaction / class research",
    "signal": "Supportive responses without automatic agreement",
    "tags": [
      "LLMs",
      "human–AI interaction",
      "sycophancy",
      "study design"
    ],
    "slug": "support-without-sycophancy",
    "status": "Class project in progress · Fall 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "Can an AI acknowledge someone's feelings without reinforcing an unsupported interpretation? This class research project examines emotional validation, interpretive agreement, and belief revision in ambiguous interpersonal scenarios."
        },
        {
          "heading": "My Contribution",
          "body": "Develop outcome measures and an interpretation-transition coding scheme\nDistinguish changes in interpretation from changes in confidence\nPlan independent coding, agreement checks, and baseline-adjusted analysis\nAlign survey instruments, proposal materials, and the interpretation of short-term outcomes"
        },
        {
          "heading": "Current Status",
          "body": "Study design, coding, and instrument alignment are ongoing. Any transfer beyond the immediate task is exploratory; the project does not yet establish lasting changes in beliefs or behavior."
        },
        {
          "heading": "Methods",
          "body": "Scenario-based study design, survey measures, qualitative response coding, agreement checks, and quantitative analysis planning."
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 7,
        "summary": "The project separates emotional validation from interpretive agreement when an AI responds to ambiguous interpersonal experiences. My contribution focuses on outcome measures, interpretation-transition coding, and analysis planning, with careful limits on short-term and transfer claims.",
        "emphasis": "Measuring interpretation change separately from confidence",
        "featuredEvidence": "Draft coding scheme, outcome measures, and an analysis plan."
      },
      "product": {
        "order": 6,
        "summary": "Supportive conversational AI should be evaluated on more than whether it sounds agreeable. I am helping design measures and coding that distinguish validation, agreement, interpretation revision, and confidence in a class research study.",
        "emphasis": "Defining better evaluation criteria for supportive AI",
        "featuredEvidence": "An interpretation-transition codebook and aligned outcome-measure planning."
      }
    }
  },
  {
    "id": 14,
    "category": "research",
    "title": "Adaptive AI Assistance for Learning",
    "brief": "An AIs in the World group project studying when an AI tutor should offer hints or answers.",
    "meta": "Learning systems / adaptive assistance",
    "signal": "Choosing assistance around the learner and the learning goal",
    "tags": [
      "AI tutoring",
      "adaptive systems",
      "learning",
      "evaluation"
    ],
    "slug": "adaptive-ai-assistance-learning",
    "status": "Class project in progress · Fall 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "This AIs in the World group project studies how an AI tutor could choose hints or answers according to a learner's knowledge, skill, and future learning. It connects assistance policies with the behaviors and outcomes used to evaluate them."
        },
        {
          "heading": "My Contribution",
          "body": "Contribute to the project plan and evaluation direction\nHelp align the proposed assistance strategy with learner state and learning outcomes\nWork with the team on the path from simulation to real-data evaluation"
        },
        {
          "heading": "Current Status",
          "body": "The project is in progress, with simulation and real-data evaluation as the current direction. It does not yet support a claim of improved learning effectiveness."
        },
        {
          "heading": "Methods",
          "body": "Adaptive assistance policies, learner-state modeling, simulation, and real-data evaluation."
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 8,
        "summary": "The project asks when hints or answers are appropriate for a learner's current knowledge and future learning. I contribute to the evaluation direction and project planning as the group connects simulation with real-data evaluation.",
        "emphasis": "Evaluating assistance choices against learning goals",
        "featuredEvidence": "A group project and evaluation plan in progress."
      },
      "product": {
        "order": 3,
        "summary": "More assistance is not automatically better learning support. This group project studies how a tutor could select hints or answers using learner state and learning goals. My work contributes to the plan and evaluation direction; effectiveness remains to be tested.",
        "emphasis": "Evaluating when and how an AI tutor should help",
        "featuredEvidence": "Assistance-strategy and evaluation planning for a learning-system project."
      }
    }
  },
  {
    "id": 15,
    "category": "research",
    "title": "Generative AI for Lab Enrichment",
    "brief": "A teaching inquiry into meaningful extension activities for students who finish introductory data-science lab work early.",
    "meta": "Teaching inquiry / AI-supported learning",
    "signal": "Making advanced students' lab time more useful",
    "tags": [
      "teaching",
      "data science",
      "generative AI",
      "learning design"
    ],
    "slug": "generative-ai-lab-enrichment",
    "status": "Teaching proposal · Fall 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "In my STAT 107 teaching, students who already understand the core material can need a different kind of support from those still building that understanding. This teaching inquiry explores whether generative AI can help those students identify meaningful extensions while the teaching team supports classmates who need more direct help."
        },
        {
          "heading": "My Contribution",
          "body": "Identify the problem through reflection on my own lab teaching\nReview research on AI-supported tutoring and differentiated learning\nDevelop a poster and activity-design proposal for AI-supported extensions"
        },
        {
          "heading": "Current Status",
          "body": "Literature review and instructional-design proposal. The proposed activities have not been evaluated as a classroom intervention, and no learning gains are claimed."
        },
        {
          "heading": "Design Focus",
          "body": "Help students extend familiar concepts through deeper questions and follow-up tasks, with attention to the quality of AI guidance, the student's own reasoning, and the time available during a lab."
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 10,
        "summary": "This teaching inquiry starts from students' different needs in a shared lab. I am reviewing literature and proposing how generative AI could support extensions for students already comfortable with the core concepts. Classroom effectiveness has not been tested.",
        "emphasis": "Designing enrichment around students' existing understanding",
        "featuredEvidence": "TA reflection, literature review, and a poster/activity proposal."
      },
      "product": {
        "order": 8,
        "summary": "A lab can leave advanced students without a meaningful next step while instructors help others. I am exploring AI-supported extension activities that address that specific teaching problem. The current output is a design proposal, not a deployed tutoring product.",
        "emphasis": "Turning a classroom need into an instructional design proposal",
        "featuredEvidence": "A defined teaching problem and proposed AI-supported extension activities."
      }
    }
  },
  {
    "id": 16,
    "category": "games",
    "title": "Unity Game Prototype Collection",
    "brief": "A set of small game concepts exploring memory, attention, perspective, drawing, and the consequences of wishes.",
    "meta": "Game design / Unity prototyping",
    "signal": "Testing mechanics through small playable experiments",
    "tags": [
      "Unity",
      "C#",
      "game design",
      "narrative",
      "prototyping"
    ],
    "slug": "unity-game-prototype-collection",
    "status": "Concept development · 2026",
    "details": {
      "media": [],
      "sections": [
        {
          "heading": "Project Description",
          "body": "I am designing a collection of small Unity 2D game prototypes to explore different interactions and narrative ideas before choosing a concept to expand. Each concept is intended to have its own project, visual direction, and focused playable loop."
        },
        {
          "heading": "Prototype Directions",
          "body": "<strong>Tribe Memory:</strong> a memory-focused game concept.<br/><strong>Messy Notifications:</strong> notification, daily-life, and wake-up interactions that become increasingly chaotic.<br/><strong>You Are the Boulder:</strong> a game built around an unusual player perspective.<br/><strong>Draw &amp; Guess:</strong> drawing and guessing interactions.<br/><strong>Reverse Monkeyclaw:</strong> a concept about wishes and their consequences."
        },
        {
          "heading": "My Contribution",
          "body": "Develop game concepts, narrative direction, and design briefs\nSpecify distinct visual styles and focused prototype scopes\nDefine Unity/C# implementation requirements and intended playable interactions"
        },
        {
          "heading": "Current Status",
          "body": "The collection is at the concept-development stage, with Unity prototypes planned. It is not presented as five completed or publicly released games; individual demo links will be added when a shareable build is available."
        },
        {
          "heading": "Tech Stack",
          "body": "Unity 2D, C#, game design, narrative design"
        }
      ]
    },
    "lenses": {
      "research": {
        "order": 14,
        "summary": "Small game prototypes give me a way to explore memory, attention, perspective, and narrative consequences through interaction. These are creative design experiments under development, rather than formal user studies or finished research results.",
        "emphasis": "Exploring interaction ideas through playable systems",
        "featuredEvidence": "Defined prototype concepts and visual/design directions."
      },
      "product": {
        "order": 14,
        "summary": "I am planning tightly scoped Unity prototypes to explore whether an interaction is worth expanding into a larger game. The collection spans memory, notifications, perspective, drawing, and wishes, with distinct design directions.",
        "emphasis": "Testing an interaction before expanding the scope",
        "featuredEvidence": "Named prototype concepts and focused design briefs."
      }
    }
  },
  {
    id: 2,
    status: 'Manuscript under review · TVCG 2026',
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/Waddle/1.jpg`,
    title: 'Predicting Early Quitting from VR Telemetry',
    brief: 'Interpretable behavioral modeling across 7,000+ VR sessions, extended into a testable product-intervention proposal.',
    meta: 'Behavioral modeling / VR telemetry',
    signal: 'From embodied signals to testable intervention',
    tags: ['behavioral modeling', 'VR', 'interpretable ML', 'user state'],
    slug: 'vr-early-quit-prediction',
    details: {
      media: [
        '/img/Waddle/1.jpg',
        '/img/Waddle/2.png',
        '/img/Waddle/3.png',
        '/img/Waddle/4.png',
        '/img/Waddle/5.png',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'This project asks whether early head-movement telemetry can identify sessions at risk of quitting. We extract quaternion-based head rotations (and positions when available) from gameplay logs, convert them to per-frame Euler deltas, and segment the stream into direction-consistent intervals in yaw, pitch, and roll. Interval durations and movement magnitudes are binned on power-of-two time scales to create length-invariant behavioral features. Using more than 7,000 sessions, we train group-aware classifiers (Random Forest, XGBoost, Logistic Regression) and evaluate them with within-game, time-based, and held-out-game splits. T-tests, hand-crafted detectors, SHAP, and partial-dependence plots help distinguish predictive associations from explanations that still require validation.',
        },
        {
          heading: 'My Responsibility',
          body: 'Implemented the head-rotation feature pipeline from raw VR telemetry\nConstructed balanced session-level datasets (quit vs. non-quit)\nTrained and compared multiple classifiers (Random Forest, XGBoost, Logistic Regression)\nEvaluated robustness with time-based and cross-game splits\nRan SHAP and other interpretability analyses to identify movement patterns associated with completion and early quitting',
        },
        {
          heading: 'Product Translation (Proposed)',
          body: 'The model results motivate a product hypothesis, not a claim of proven impact: when sustained high quitting risk coincides with an actionable moment, offer an optional contextual help prompt. The proposed primary metric is whether the player completes a meaningful next action within 120 seconds. Guardrails include immediate headset removal, unproductive dwell time, interruption, discomfort, and perceived loss of autonomy. A triggered randomized experiment would compare eligible high-risk moments with and without the prompt. This intervention and its effects have not yet been deployed or validated.',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, pandas, SciPy, scikit-learn, XGBoost, h5py (HDF5), matplotlib',
        },
      ],
    },
    lenses: {
      research: {
        order: 1,
        summary: 'Can early head movement reveal when a learner is likely to leave a VR session, and do those signals generalize across games? I built a feature and modeling pipeline over 7,000+ sessions, then tested it with within-game, time-based, and held-out-game splits. The work examines how performance changes across evaluation settings; SHAP patterns remain predictive associations, not validated psychological explanations.',
        emphasis: 'Validating interpretable behavioral signals across VR contexts',
        featuredEvidence: '7,000+ sessions, within-game and held-out-game evaluations, and a TVCG manuscript under review.',
      },
      product: {
        order: 1,
        summary: 'Educational VR teams need earlier evidence of where players disengage. From raw head-rotation telemetry and quit outcomes across 7,000+ sessions, I engineered behavioral features and compared interpretable classifiers across within-game, time-based, and held-out-game evaluations. The signals could support a carefully triggered help prompt, but that intervention has not been deployed or validated.',
        emphasis: 'Turning early-quit signals into a measurable intervention hypothesis',
        featuredEvidence: 'Cross-context model performance and SHAP evidence from 7,000+ VR sessions.',
      },
      creative: {
        headline: 'Using movement data as feedback for experience design',
        priority: 4,
      },
    },
  },
  {
    id: 3,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/GOA/GOA0.png`,
    title: 'Virtual Theatre: Beyond the Garden of Adrian',
    brief: 'An immersive theatre study where narrative, embodiment, and spatial interaction become the research material.',
    meta: 'VR theatre / interaction',
    signal: 'Studying actor-audience presence in VR',
    tags: ['VR', 'HCI', 'theatre', 'presence', 'embodiment'],
    slug: 'beyond-the-garden-of-adrian',
    details: {
      media: [
        '/img/GOA/2.png', '/img/GOA/6.png', '/img/GOA/7.png',
        '/img/GOA/8.png', '/img/GOA/9.png', '/img/GOA/11.png',
        '/img/GOA/12.png', '/img/GOA/13.png', '/img/GOA/14.png',
        '/img/GOA/16.png', '/img/GOA/17.png', '/img/GOA/18.png',
        '/img/GOA/21.png', '/img/GOA/23.png', '/img/GOA/24.png',
        '/img/GOA/25.png', '/img/GOA/27.png', '/img/GOA/28.png',
        '/img/GOA/29.png', '/img/GOA/32.png',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'Beyond the Garden of Adrian is a virtual theatre experience created in Unity and adapted from a one-on-one immersive theatre performance by Adrian Howells. The experiment explores the potential for building intimate experiences in a virtual environment and how each element uniquely contributes to audience immersion and embodiment.',
        },
        {
          heading: 'My Responsibility',
          body: 'Designed and implemented two versions of Beyond the Garden of Adrian for structured comparison\nCollaborated with the team to design and implement interactive elements while aligning technical decisions with the artistic vision\nOptimized the VR experience based on audience feedback to provide smooth and immersive interaction',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Blender, Adobe Photoshop, Oculus VR',
        },
      ],
    },
    lenses: {
      research: {
        order: 2,
        summary: 'How do design choices in a one-on-one virtual theatre experience shape presence, embodiment, and actor-audience interaction? I helped build two Unity/C# versions, collaborated on the interactive design, and iterated from participant feedback. This project contributes implemented systems and participant-informed design evidence.',
        emphasis: 'Studying presence, embodiment, and audience agency in virtual theatre',
        featuredEvidence: 'Two implemented VR versions and participant-informed iteration.',
      },
      product: {
        order: 2,
        summary: 'An intimate VR theatre experience needed interaction choices that preserved presence while supporting smooth participant engagement. I helped build two Unity/C# versions and iterated the experience from audience feedback. This work supports interactive prototyping and design decisions for immersive products; it does not establish a deployed personalization or causal experiment result.',
        emphasis: 'Using participant evidence to improve an immersive interaction',
        featuredEvidence: 'Two Unity/C# VR prototypes developed and refined with audience feedback.',
      },
      creative: {
        headline: 'Building narrative systems where spatial interaction shapes the story',
        priority: 1,
      },
    },
  },
  {
    id: 4,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/POMDP/output.png`,
    title: 'Partially Observable Markov Decision Process',
    brief: 'Comparing Nash Q-learning, DQN, and fictitious play in multi-agent reinforcement learning environments.',
    meta: 'RL / multi-agent systems',
    signal: 'Solving strategy under uncertainty',
    tags: ['reinforcement learning', 'multi-agent systems', 'uncertainty', 'ML'],
    slug: 'partially-observable-markov-decision-process',
    details: {
      media: ['/img/POMDP/3.png', '/img/POMDP/1.png', '/img/POMDP/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'This research explores partially observable Markov games and multi-agent reinforcement learning across several benchmark problems: a competitive Car-Truck 3x3 grid world, the classic Tiger POMDP, Rock-Paper-Scissors with learning dynamics, and a general DQN setup for single-agent control. The goal is to systematically compare game-theoretic learning (Nash Q-learning, Nash-QMDP, fictitious play) and deep RL methods (DQN with replay, target networks, epsilon-greedy exploration), under both full and partial observability.',
        },
        {
          heading: 'My Role',
          body: 'Designed and implemented the Car-Truck grid world, Tiger POMDP, Rock-Paper-Scissors, and reward-only POMG transition models\nImplemented Nash Q-learning with linear-programming-based equilibrium computation and Nash-QMDP style value iteration\nBuilt DQN agents with experience replay, target networks, and epsilon-greedy exploration\nImplemented fictitious play and best-response dynamics for Rock-Paper-Scissors\nConstructed belief-state and reward-state transition matrices and analyzed their effect on policy behavior\nCompared convergence and stability across Nash Q, DQN, and fictitious play',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, SciPy, Matplotlib, Jupyter Notebooks, Linear Programming (PuLP), GitHub',
        },
      ],
    },
    lenses: {
      research: {
        order: 3,
        summary: 'How should agents learn when state and other agents’ strategies are only partly observable? I implemented benchmark environments and compared Nash Q-learning, DQN, Nash-QMDP, and fictitious play through convergence and policy behavior. The work clarifies algorithmic behavior in controlled simulations; it does not make a claim about human decision-making.',
        emphasis: 'Modeling adaptive decision-making under partial observability',
        featuredEvidence: 'Implemented multiple environments and compared learning dynamics across four algorithm families.',
      },
      product: {
        order: 4,
        summary: 'Adaptive systems often act with incomplete state information. I built controlled multi-agent and partially observable environments and compared Nash Q-learning, DQN, Nash-QMDP, and fictitious play. The work offers technical grounding for reasoning about adaptive policies, but it is simulation research rather than a validated user-facing deployment.',
        emphasis: 'Reasoning about adaptive policies under incomplete information',
        featuredEvidence: 'Controlled comparisons across Nash Q-learning, DQN, Nash-QMDP, and fictitious play.',
      },
      creative: {
        headline: 'Exploring uncertainty as a structure for strategic interaction',
        priority: 6,
      },
    },
  },
  {
    id: 5,
    category: 'research',
    media: `${process.env.PUBLIC_URL}/img/Milky/Milky1.png`,
    title: 'Probe the Milky Way Density Structure',
    brief: 'Computational modeling of galactic density distributions, using data analysis to make structure visible.',
    meta: 'Astrophysics / modeling',
    signal: 'Turning observation data into structure',
    tags: ['computational modeling', 'data analysis', 'visualization'],
    slug: 'milky-way-density-structure',
    details: {
      media: ['/img/Milky/Slide1.png', '/img/Milky/Milky0.png', '/img/Milky/Milky1.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'Used Gaia DR3 stellar catalogues and a Milky Way-like N-body simulation to probe the Galaxy’s bar and density structure. I trained a TensorFlow model on Gaia photometry to automatically identify red clump giants (standard-candle tracers), then applied the classifier to hundreds of millions of stars and to the simulation to locate bar-induced dark gaps and compare observed and simulated density patterns.',
        },
        {
          heading: 'My Responsibility',
          body: 'Cleaned and filtered Gaia DR data and constructed training and test samples\nImplemented and tuned the TensorFlow red-clump classifier and evaluated it on held-out data\nApplied the model to Gaia data and the N-body simulation and generated comparison plots and maps\nInterpreted bar density profiles and dark gaps with the team and designed the research poster',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, NumPy, pandas, SciPy, Matplotlib, Astropy',
        },
      ],
    },
    lenses: {
      research: {
        order: 4,
        summary: 'Can a learned stellar classifier help reveal structure that is difficult to observe directly in the Milky Way? I prepared Gaia and simulation data, trained a TensorFlow red-clump classifier, evaluated it on held-out data, and generated comparative density maps. The analysis supports astronomical structure inference, not claims about people or interactive systems.',
        emphasis: 'Testing computational methods that reveal hidden structure',
        featuredEvidence: 'Held-out classifier evaluation followed by observed-versus-simulated density comparisons.',
      },
      product: {
        order: 3,
        summary: 'A large observational dataset needed reliable tracers before researchers could compare Galactic structure. I cleaned Gaia data, constructed training and test samples, trained a TensorFlow classifier, and applied it across observed and simulated data to produce interpretable density maps. This demonstrates large-scale data preparation and model-to-analysis translation, not a product deployment.',
        emphasis: 'Turning large observational datasets into interpretable signals',
        featuredEvidence: 'A held-out classifier applied to Gaia observations and an N-body simulation.',
      },
      creative: {
        headline: 'Using computation to reveal large-scale invisible patterns',
        priority: 5,
      },
    },
  },
  {
    id: 1,
    category: 'games',
    media: `${process.env.PUBLIC_URL}/img/LOM/Lom0.png`,
    title: 'Library of Meialia',
    brief: 'A 2D roguelike with 80+ skills, 50+ items, and 20+ mobs across 4 biomes. Lead Narrative Designer role.',
    meta: 'Steam game / narrative',
    signal: 'Narrative systems inside roguelike play',
    tags: ['game design', 'narrative systems', 'player agency', 'systems design'],
    slug: 'library-of-meialia',
    details: {
      media: [
        '<iframe src="https://www.youtube.com/embed/bmvixL7_W3U?si=n01pKqSLFrixn6K4"></iframe>',
        '<iframe src="https://www.youtube.com/embed/phOQqNVjwQc?si=Ax3zJgtA3FK0zCYz"></iframe>',
        '<iframe src="https://www.youtube.com/embed/O75uy3WHBLg?si=pIvCF0UF4TefT6pz"></iframe>',
        '/img/LOM/1.jpg', '/img/LOM/2.jpg', '/img/LOM/3.jpg',
        '/img/LOM/4.jpg', '/img/LOM/5.jpg',
      ],
      sections: [
        {
          heading: 'Project Description',
          body: 'Library of Meialia is a 2D roguelike pixel game developed by Minerva Studio. The player takes the role of the dragon Almos, exploring the ancient library of Meialia and gradually uncovering its secrets. The game features 80+ skills, 50+ unique items, and 20+ mobs across four biomes, each with a unique boss. While still in early access, the game has already reached 3,000+ players.\n\nSteam page: https://store.steampowered.com/app/3102950/Library_of_Meialia/',
        },
        {
          heading: 'My Responsibility',
          body: 'Served as Lead Narrative Designer while contributing to game design, programming, marketing, and project management\nCollaborated with other team leads to align combat flow and story progression\nLed story arc, world-building, character development, and dialogue writing\nDesigned and implemented in-game tools for displaying and managing storylines\nContributed to level and enemy design',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Lua, Aseprite, Inky, GitHub, System Design',
        },
      ],
    },
    lenses: {
      research: {
        order: 5,
        summary: 'How can narrative and progression systems preserve player agency inside a dense roguelike? As lead narrative designer, I aligned story structure with combat and progression while contributing implementation and project coordination. The shipped early-access game reached 3,000+ players, but the current evidence does not support behavioral telemetry or controlled research claims.',
        emphasis: 'Building a playable system around narrative agency and progression',
        featuredEvidence: 'A shipped early-access game with 3,000+ players and cross-functional design ownership.',
      },
      product: {
        order: 5,
        summary: 'A content-dense roguelike needed narrative, combat, and progression to work as one player experience. As lead narrative designer, I coordinated story systems with other team leads and contributed design, implementation, marketing, and project management. The early-access game reached 3,000+ players; no behavioral metric or experiment result is claimed.',
        emphasis: 'Coordinating a shipped game experience across narrative and progression',
        featuredEvidence: '3,000+ early-access players and lead ownership across narrative systems.',
      },
      creative: {
        headline: 'Designing narrative agency inside dense roguelike systems',
        priority: 2,
      },
    },
  },
  {
    id: 6,
    category: 'games',
    media: `${process.env.PUBLIC_URL}/img/OtherSide/0.png`,
    title: 'The Otherside',
    brief: 'A puzzle game combining word solving, chase mechanics, and maze exploration. Game and level design lead.',
    meta: 'Puzzle / level design',
    signal: 'Language puzzles under pressure',
    tags: ['game design', 'level design', 'puzzles', 'player agency'],
    slug: 'the-otherside',
    details: {
      media: ['/img/OtherSide/1.png', '/img/OtherSide/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'The Otherside is a puzzle game in active development that combines word puzzles, chase mechanics, and maze exploration. The player is a firefly who has lost their memory and awakened in a strange maze with spiders in pursuit. They collect scattered characters to retrieve their memory and find a way out.\n\nItch.io page: https://ollieii.itch.io/the-other-side',
        },
        {
          heading: 'My Responsibility',
          body: 'Designed and iterated the game mechanics and levels\nCollaborated with the artist and programmer to create a cohesive atmosphere\nManaged the team and project timeline\nConducted playtesting and adjusted the design based on feedback',
        },
        {
          heading: 'Tech Stack',
          body: 'Unity, C#, Game Design, Level Design, Project Management',
        },
      ],
    },
    lenses: {
      research: {
        order: 6,
        summary: 'How do word puzzles, pursuit, and maze navigation combine into a legible but tense play experience? I led game and level design, collaborated across disciplines, and adjusted the design through playtesting. The project offers iterative design evidence, while the current record contains no formal study or quantified outcome.',
        emphasis: 'Studying comprehension and persistence through iterative puzzle design',
        featuredEvidence: 'Playtest-informed iteration of mechanics, levels, pacing, and atmosphere.',
      },
      product: {
        order: 6,
        summary: 'A puzzle game combining word solving, chase pressure, and maze exploration needed readable difficulty and pacing. I designed and iterated mechanics and levels, managed the team timeline, and used playtesting feedback to adjust the experience. This supports qualitative product iteration; no quantified behavioral outcome is claimed.',
        emphasis: 'Improving puzzle pacing through playtest-informed iteration',
        featuredEvidence: 'Mechanics and levels revised from direct playtesting feedback.',
      },
      creative: {
        headline: 'Combining language, pursuit, and maze design into a tense puzzle loop',
        priority: 3,
      },
    },
  },
  {
    id: 7,
    category: 'experience',
    media: `${process.env.PUBLIC_URL}/img/CS639/0.png`,
    title: 'CS639 Deep Learning for Computer Vision',
    brief: 'Implemented CNNs, GANs, and object detection algorithms from scratch using PyTorch and NumPy.',
    meta: 'Computer vision / PyTorch',
    signal: 'Building core vision models from scratch',
    tags: ['computer vision', 'deep learning', 'PyTorch', 'NumPy'],
    slug: 'deep-learning-for-computer-vision',
    details: {
      media: ['/img/CS639/0.png', '/img/CS639/1.png', '/img/CS639/2.png'],
      sections: [
        {
          heading: 'Project Description',
          body: 'This work was completed with Yibo Kong for CS639 at the University of Wisconsin-Madison in 2024. The course adapts material from Stanford CS231n and Michigan EECS 498-007/598-005. The projects implement foundational deep-learning algorithms and architectures, including neural-network forward and backward passes, from scratch.\n\nGitHub repository: https://github.com/OllieII/-CS639-Deep-Learning-for-Computer-Vision/tree/main',
        },
        {
          heading: 'My Responsibility',
          body: 'Implemented image classification, k-nearest neighbors, SVM, Softmax, ReLU, and fully connected networks\nImplemented convolutional networks, batch normalization, Kaiming initialization, and max pooling\nBuilt FPN and FCOS object detection with box regression, centerness, and non-maximum suppression\nImplemented GANs, style transfer, total-variation regularization, and Gram matrices',
        },
        {
          heading: 'Tech Stack',
          body: 'Python, PyTorch, NumPy, Matplotlib, Jupyter Notebook',
        },
      ],
    },
    lenses: {
      research: {
        order: 7,
        summary: 'What implementation details make modern visual models work? I built core classifiers, convolutional networks, object detection, GANs, and style-transfer components from foundational operations. The work demonstrates technical depth and reproducibility, but it is coursework rather than a novel empirical HCI contribution.',
        emphasis: 'Building technical foundations for intelligent visual systems',
        featuredEvidence: 'From-scratch implementations spanning classification, detection, GANs, and style transfer.',
      },
      product: {
        order: 7,
        summary: 'Intelligent interfaces depend on reliable visual-model building blocks. I implemented classification, convolutional networks, FCOS detection, GANs, and style transfer from foundational operations using PyTorch and NumPy. The project demonstrates model implementation depth, not a deployed product outcome.',
        emphasis: 'Implementing visual-model building blocks from first principles',
        featuredEvidence: 'Working implementations of classification, detection, GAN, and style-transfer pipelines.',
      },
      creative: {
        headline: 'Understanding visual models as tools for creative systems',
        priority: 7,
      },
    },
  },
];


// Keep a single record per project; each view changes only its reading order.
const projectOrder = [2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 3, 4, 5, 1, 6, 7];
const lensOrder = {
  research: [2, 8, 9, 10, 11, 12, 13, 14, 3, 15, 4, 5, 1, 16, 6, 7],
  product: [2, 8, 14, 11, 9, 13, 10, 15, 12, 3, 5, 4, 1, 16, 6, 7],
};
projects.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));
projects.forEach(project => {
  Object.entries(lensOrder).forEach(([lens, order]) => {
    project.lenses[lens].order = order.indexOf(project.id) + 1;
  });
});

export const getProjectById = id =>
  projects.find(project => String(project.id) === String(id) || project.slug === id);

export default projects;

