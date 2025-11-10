import { QuizQuestion } from '../types.ts';

export const quizData: QuizQuestion[] = [
    {
        id: 1,
        type: 'Terminology',
        question: "What does 'Complexities' in a business context refer to?",
        options: ['Interrelated factors making situations hard to predict', 'Simple, straightforward tasks', 'Financial accounting rules', 'Marketing strategies'],
        correctAnswer: 'Interrelated factors making situations hard to predict',
        arabicTranslation: {
            question: "إلى ماذا يشير مصطلح 'التعقيدات' في سياق الأعمال؟",
            options: {
                'Interrelated factors making situations hard to predict': "عوامل مترابطة تجعل التنبؤ بالمواقف صعبًا",
                'Simple, straightforward tasks': "مهام بسيطة ومباشرة",
                'Financial accounting rules': "قواعد المحاسبة المالية",
                'Marketing strategies': "استراتيجيات التسويق"
            },
            hint: "فكر في العوامل المتعددة التي تتفاعل داخل أي منظمة، مثل الأشخاص والتقنيات، وكيف أن هذا التفاعل يجعل النتائج غير مؤكدة."
        },
        englishExplanation: "Complexities are layers of interrelated factors (like people, processes, tech) that make situations harder to predict or control."
    },
    {
        id: 2,
        type: 'Core Concepts',
        question: "Management is described as a purposeful process of coordinating people and resources to achieve what?",
        options: ['Results', 'Profits', 'Employee satisfaction', 'Market share'],
        correctAnswer: 'Results',
        arabicTranslation: {
            question: "توصف الإدارة بأنها عملية هادفة لتنسيق الأشخاص والموارد لتحقيق ماذا؟",
            options: {
                'Results': "النتائج",
                'Profits': "الأرباح",
                'Employee satisfaction': "رضا الموظفين",
                'Market share': "الحصة السوقية"
            },
            hint: "الإدارة لا تقتصر على تحقيق الأرباح فقط. فكر في الهدف الأساسي الذي تسعى إليه أي منظمة، سواء كانت شركة، مستشفى، أو مؤسسة خيرية."
        },
        englishExplanation: "Management is a purposeful process aimed at achieving specific results by coordinating people and resources through planning, organizing, directing, and controlling."
    },
    {
        id: 3,
        type: 'Management Thinkers',
        question: "Who defined management as a 'social organ that shapes organizations and focuses on objectives, people, and results'?",
        options: ['Peter F. Drucker', 'George R. Terry', 'Ordway Tead', 'Henri Fayol'],
        correctAnswer: 'Peter F. Drucker',
        arabicTranslation: {
            question: "من الذي عرّف الإدارة بأنها 'عضو اجتماعي يشكّل المنظمات ويركز على الأهداف والأشخاص والنتائج'؟",
            options: {
                'Peter F. Drucker': "بيتر ف. دراكر",
                'George R. Terry': "جورج ر. تيري",
                'Ordway Tead': "أوردواي تيد",
                'Henri Fayol': "هنري فايول"
            },
            hint: "هذا المفكر الإداري الشهير ركز على أن المنظمات هي كيانات اجتماعية. تعريفه يبرز الجانب الإنساني والعملي للإدارة بدلاً من مجرد كونها مجموعة من العمليات التقنية."
        },
        englishExplanation: "Peter F. Drucker, a renowned management consultant and author, provided this definition, emphasizing the social and results-oriented nature of management."
    },
    {
        id: 4,
        type: 'Characteristics of Management',
        question: "Management is considered an 'Economic Resource' because it integrates other factors of production like land, labor, and capital.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "تعتبر الإدارة 'مورداً اقتصادياً' لأنها تدمج عوامل الإنتاج الأخرى مثل الأرض والعمل ورأس المال.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "فكر في عناصر الإنتاج الأساسية (الأرض، العمل، رأس المال). هل تعمل هذه العناصر بمفردها، أم أنها تحتاج إلى عنصر آخر لتجميعها وتوجيهها بفعالية؟"
        },
        englishExplanation: "True. Management is considered a key factor of production, acting as the catalyst that assembles and integrates land, labor, and capital to produce goods and services."
    },
    {
        id: 5,
        type: 'Core Concepts',
        question: "Which of the following is NOT a key function of management as defined by George R. Terry?",
        options: ['Innovating', 'Planning', 'Organizing', 'Controlling'],
        correctAnswer: 'Innovating',
        arabicTranslation: {
            question: "أي مما يلي لا يعتبر وظيفة رئيسية للإدارة كما حددها جورج ر. تيري؟",
            options: {
                'Innovating': "الابتكار",
                'Planning': "التخطيط",
                'Organizing': "التنظيم",
                'Controlling': "الرقابة"
            },
            hint: "حدد جورج ر. تيري أربع وظائف أساسية تعتبر حجر الزاوية في العملية الإدارية. ابحث عن الخيار الذي لا يعتبر جزءًا من هذا الهيكل الأساسي التقليدي."
        },
        englishExplanation: "George R. Terry defined management as a process consisting of four key functions: planning, organizing, actuating (directing), and controlling. Innovation, while important, was not one of his core four."
    },
    {
        id: 6,
        type: 'Characteristics of Management',
        question: "The term 'Goal Oriented' means that management is a random activity with no specific purpose.",
        options: ['False', 'True'],
        correctAnswer: 'False',
        arabicTranslation: {
            question: "مصطلح 'موجه نحو الهدف' يعني أن الإدارة نشاط عشوائي ليس له غرض محدد.",
            options: {
                'False': "خطأ",
                'True': "صحيح"
            },
            hint: "كلمة 'هادف' أو 'موجه نحو الهدف' تشير إلى وجود نية وغرض محدد. هل يمكن أن يكون النشاط الذي له غرض محدد عشوائيًا؟"
        },
        englishExplanation: "False. 'Goal Oriented' means management is a purposeful activity that coordinates efforts to achieve well-defined organizational goals."
    },
    {
        id: 7,
        type: 'Characteristics of Management',
        question: "The functions of management like planning and organizing are described as 'Interwoven'. What does this imply?",
        options: ['They are complexly linked and the sequence is not rigid', 'They must always be performed in a strict order', 'Each function is completely independent of the others', 'Only one function can be performed at a time'],
        correctAnswer: 'They are complexly linked and the sequence is not rigid',
        arabicTranslation: {
            question: "توصف وظائف الإدارة مثل التخطيط والتنظيم بأنها 'متداخلة'. على ماذا يدل هذا؟",
            options: {
                'They are complexly linked and the sequence is not rigid': "أنها مرتبطة بشكل معقد والتسلسل ليس صارمًا",
                'They must always be performed in a strict order': "يجب أن يتم تنفيذها دائمًا بترتيب صارم",
                'Each function is completely independent of the others': "كل وظيفة مستقلة تمامًا عن الأخرى",
                'Only one function can be performed at a time': "يمكن أداء وظيفة واحدة فقط في كل مرة"
            },
            hint: "تخيل خيوط نسيج متشابكة. هل يمكنك بسهولة فصل خيط واحد أو تتبع مساره بترتيب ثابت دون التأثير على الخيوط الأخرى؟ هذا يصف طبيعة وظائف الإدارة."
        },
        englishExplanation: "'Interwoven' implies that management functions are so interconnected that it's not possible to lay down an exact, rigid sequence for them. They influence each other."
    },
    {
        id: 8,
        type: 'Management Hierarchy',
        question: "Which level of management is responsible for translating strategic goals into operational plans?",
        options: ['Middle Management', 'Top Management', 'Bottom Management', 'All levels equally'],
        correctAnswer: 'Middle Management',
        arabicTranslation: {
            question: "أي مستوى من الإدارة مسؤول عن ترجمة الأهداف الاستراتيجية إلى خطط تشغيلية؟",
            options: {
                'Middle Management': "الإدارة الوسطى",
                'Top Management': "الإدارة العليا",
                'Bottom Management': "الإدارة الدنيا",
                'All levels equally': "جميع المستويات بالتساوي"
            },
            hint: "الإدارة العليا تضع الرؤية الكبرى، والإدارة الدنيا تنفذ المهام اليومية. أي مستوى إداري يقع في المنتصف ويعمل كجسر لترجمة الرؤية إلى خطط عمل؟"
        },
        englishExplanation: "Middle Management (Management Control) is responsible for taking the long-term strategic goals set by Top Management and translating them into specific, actionable operational plans."
    },
    {
        id: 9,
        type: 'Management Thinkers',
        question: "Henri Fayol is considered one of the founders of which theory of management?",
        options: ['Modern Management Theory', 'Scientific Management', 'Human Relations Movement', 'Systems Theory'],
        correctAnswer: 'Modern Management Theory',
        arabicTranslation: {
            question: "يعتبر هنري فايول أحد مؤسسي أي نظرية إدارية؟",
            options: {
                'Modern Management Theory': "نظرية الإدارة الحديثة",
                'Scientific Management': "الإدارة العلمية",
                'Human Relations Movement': "حركة العلاقات الإنسانية",
                'Systems Theory': "نظرية النظم"
            },
            hint: "ركز هنري فايول على الوظائف والمبادئ الإدارية التي تنطبق على المنظمة ككل، مما وضع الأساس لما نعرفه اليوم بالإدارة الحديثة أو الإدارية."
        },
        englishExplanation: "Henri Fayol is considered a founder of Modern Management Theory (also known as Administrative Management). His work focused on the core functions that managers perform."
    },
    {
        id: 10,
        type: 'MIS Concepts',
        question: "A Management Information System (MIS) consists of which of the following elements?",
        options: ['People, machines, procedures, databases', 'Hardware and software only', 'Financial data only', 'External market research only'],
        correctAnswer: 'People, machines, procedures, databases',
        arabicTranslation: {
            question: "يتكون نظام المعلومات الإدارية (MIS) من أي من العناصر التالية؟",
            options: {
                'People, machines, procedures, databases': "الأشخاص، الآلات، الإجراءات، قواعد البيانات",
                'Hardware and software only': "الأجهزة والبرامج فقط",
                'Financial data only': "البيانات المالية فقط",
                'External market research only': "أبحاث السوق الخارجية فقط"
            },
            hint: "نظام المعلومات الإداري هو أكثر من مجرد تكنولوجيا. فكر في جميع المكونات التي تجعل النظام يعمل، بما في ذلك العنصر البشري والعمليات والبيانات نفسها."
        },
        englishExplanation: "A Management Information System (MIS) is a comprehensive system that includes people, machines (hardware), procedures (software/processes), and databases/data models as its core elements."
    },
    {
        id: 11,
        type: 'Characteristics of Management',
        question: "'Universal Application' implies that management principles are only applicable in business fields.",
        options: ['False', 'True'],
        correctAnswer: 'False',
        arabicTranslation: {
            question: "يعني 'التطبيق العالمي' أن مبادئ الإدارة قابلة للتطبيق في مجالات الأعمال فقط.",
            options: {
                'False': "خطأ",
                'True': "صحيح"
            },
            hint: "كلمة 'عالمي' تشير إلى الشمولية. هل تقتصر مبادئ التنظيم والتخطيط على نوع واحد فقط من المؤسسات؟"
        },
        englishExplanation: "False. 'Universal Application' means that management principles and techniques are equally applicable in various fields like business, education, military, government, and hospitals, not just business."
    },
    {
        id: 12,
        type: 'Management Hierarchy',
        question: "Direct supervision of employees and coordinating daily tasks is the primary responsibility of:",
        options: ['Bottom Management', 'Middle Management', 'Top Management', 'The CEO'],
        correctAnswer: 'Bottom Management',
        arabicTranslation: {
            question: "الإشراف المباشر على الموظفين وتنسيق المهام اليومية هو المسؤولية الأساسية لـ:",
            options: {
                'Bottom Management': "الإدارة الدنيا",
                'Middle Management': "الإدارة الوسطى",
                'Top Management': "الإدارة العليا",
                'The CEO': "الرئيس التنفيذي"
            },
            hint: "أي مستوى إداري هو الأقرب إلى الموظفين الذين يقومون بالعمل اليومي؟ هذا المستوى يركز على الإشراف المباشر والتنفيذ."
        },
        englishExplanation: "Bottom Management (Operational Control) consists of supervisors and front-line managers whose main responsibility is the direct supervision of employees and coordination of daily tasks."
    },
    {
        id: 13,
        type: 'MIS Concepts',
        question: "In MIS, what is the role of 'Reduce Uncertainty'?",
        options: ['To provide reliable data for more confident decisions', 'To create surprising outcomes', 'To hide information from managers', 'To increase risk'],
        correctAnswer: 'To provide reliable data for more confident decisions',
        arabicTranslation: {
            question: "في نظم المعلومات الإدارية، ما هو دور 'تقليل عدم اليقين'؟",
            options: {
                'To provide reliable data for more confident decisions': "توفير بيانات موثوقة لاتخاذ قرارات أكثر ثقة",
                'To create surprising outcomes': "خلق نتائج مفاجئة",
                'To hide information from managers': "إخفاء المعلومات عن المديرين",
                'To increase risk': "زيادة المخاطر"
            },
            hint: "عندما يكون لدى المدير معلومات دقيقة وموثوقة، هل يصبح أكثر أم أقل ثقة في قراراته؟ فكر في العلاقة بين المعلومات والثقة."
        },
        englishExplanation: "Reducing uncertainty is a key function of information. By providing reliable and accurate data, an MIS helps managers make more confident and precise decisions, thereby lowering risk."
    },
    {
        id: 14,
        type: 'Terminology',
        question: "A 'System' is defined as a set of unrelated components working towards different goals.",
        options: ['False', 'True'],
        correctAnswer: 'False',
        arabicTranslation: {
            question: "يعرّف 'النظام' بأنه مجموعة من المكونات غير المترابطة التي تعمل لتحقيق أهداف مختلفة.",
            options: {
                'False': "خطأ",
                'True': "صحيح"
            },
            hint: "فكر في نظام مثل جسم الإنسان أو محرك السيارة. هل تعمل أجزاؤه بشكل مستقل ومنفصل، أم أنها مترابطة وتعمل معًا لتحقيق هدف مشترك؟"
        },
        englishExplanation: "False. A system is defined as a set of interrelated components that work together to achieve a common goal. Its components are linked, not unrelated."
    },
    {
        id: 15,
        type: 'Management Thinkers',
        question: "Which management thinker focused on human relations, social responsibility, and empowering people?",
        options: ['Ordway Tead', 'Ralph C. Davis', 'Peter F. Drucker', 'George R. Terry'],
        correctAnswer: 'Ordway Tead',
        arabicTranslation: {
            question: "أي مفكر إداري ركز على العلاقات الإنسانية والمسؤولية الاجتماعية وتمكين الأفراد؟",
            options: {
                'Ordway Tead': "أوردواي تيد",
                'Ralph C. Davis': "رالف سي. ديفيس",
                'Peter F. Drucker': "بيتر ف. دراكر",
                'George R. Terry': "جورج ر. تيري"
            },
            hint: "هذا المنظّر ركز على الجانب الإنساني في الإدارة، معتقدًا أن تمكين الموظفين وتشجيع مشاركتهم هو مفتاح النجاح التنظيمي."
        },
        englishExplanation: "Ordway Tead was an organizational theorist and educator who focused on human relations and social responsibility. He believed management should empower people and encourage participation."
    },
    {
        id: 16,
        type: 'Characteristics of Management',
        question: "What does it mean for management to be a 'Multi-Disciplinary Subject'?",
        options: ['It draws knowledge from many other fields like psychology and engineering', 'It is a subject with only one core principle', 'It is only taught in business schools', 'It has no connection to other fields of study'],
        correctAnswer: 'It draws knowledge from many other fields like psychology and engineering',
        arabicTranslation: {
            question: "ماذا يعني أن تكون الإدارة 'موضوعًا متعدد التخصصات'؟",
            options: {
                'It draws knowledge from many other fields like psychology and engineering': "أنها تستمد المعرفة من العديد من المجالات الأخرى مثل علم النفس والهندسة",
                'It is a subject with only one core principle': "أنه موضوع له مبدأ أساسي واحد فقط",
                'It is only taught in business schools': "أنه يدرس فقط في كليات إدارة الأعمال",
                'It has no connection to other fields of study': "أنه لا علاقة له بمجالات الدراسة الأخرى"
            },
            hint: "كلمة 'متعدد' تشير إلى الكثرة والتنوع. كيف ينطبق هذا على مصادر المعرفة التي تعتمد عليها الإدارة لفهم السلوك البشري والعمليات والإنتاجية؟"
        },
        englishExplanation: "As a multi-disciplinary subject, management has grown by incorporating knowledge and inspiration from many other disciplines, such as engineering, sociology, psychology, and anthropology."
    },
    {
        id: 17,
        type: 'Management Hierarchy',
        question: "Strategic Management is the primary function of Top Management.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "الإدارة الاستراتيجية هي الوظيفة الأساسية للإدارة العليا.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "فكر فيمن يضع الرؤية طويلة الأمد ويحدد الاتجاه العام للمنظمة بأكملها. هل هذه مهمة المشرفين اليوميين أم القادة في قمة الهرم التنظيمي؟"
        },
        englishExplanation: "True. Top Management is responsible for Strategic Management, which involves setting long-term goals, defining overall strategies, and making major decisions that affect the entire organization."
    },
    {
        id: 18,
        type: 'Core Concepts',
        question: "The 'System Of Authority' in management refers to:",
        options: ['A hierarchy of command and control', 'A democratic voting process for all decisions', 'The company\'s IT system', 'A lack of clear leadership'],
        correctAnswer: 'A hierarchy of command and control',
        arabicTranslation: {
            question: "يشير 'نظام السلطة' في الإدارة إلى:",
            options: {
                'A hierarchy of command and control': "تسلسل هرمي للقيادة والتحكم",
                'A democratic voting process for all decisions': "عملية تصويت ديمقراطية لجميع القرارات",
                'The company\'s IT system': "نظام تكنولوجيا المعلومات في الشركة",
                'A lack of clear leadership': "نقص في القيادة الواضحة"
            },
            hint: "كل منظمة لديها هيكل يحدد من يقدم التقارير لمن. هذا الهيكل يخلق سلسلة من القيادة والتحكم من الأعلى إلى الأسفل."
        },
        englishExplanation: "The 'System of Authority' describes management as a hierarchy of command and control, where managers at different levels possess varying degrees of authority to perform their functions effectively."
    },
    {
        id: 19,
        type: 'Terminology',
        question: "Which term refers to 'the fact that management exists as a distinct and indispensable social institution'?",
        options: ['Existence of Management', 'Need of Management', 'System of Authority', 'Economic Resource'],
        correctAnswer: 'Existence of Management',
        arabicTranslation: {
            question: "أي مصطلح يشير إلى 'حقيقة وجود الإدارة كمؤسسة اجتماعية مميزة لا غنى عنها'؟",
            options: {
                'Existence of Management': "وجود الإدارة",
                'Need of Management': "الحاجة إلى الإدارة",
                'System of Authority': "نظام السلطة",
                'Economic Resource': "المورد الاقتصادي"
            },
            hint: "هذا المصطلح يصف الإدارة ليس كعملية أو حاجة، بل ككيان أو مؤسسة قائمة بحد ذاتها في المجتمع."
        },
        englishExplanation: "The term 'Existence of Management' refers to the fact that management is a distinct and indispensable social institution that enables organized activity."
    },
    {
        id: 20,
        type: 'Management Thinkers',
        question: "Ralph C. Davis defined management as the function of executive leadership, focused on directing and making decisions.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "عرّف رالف سي. ديفيس الإدارة بأنها وظيفة القيادة التنفيذية، التي تركز على التوجيه وصنع القرار.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "هذا المفكر ركز على الجانب العملي والقيادي في قمة المنظمة، معتبراً أن جوهر الإدارة هو اتخاذ القرارات وتوجيه الآخرين لتنفيذها."
        },
        englishExplanation: "True. Ralph C. Davis, a management writer and scholar, defined management as the function of executive leadership, with a focus on directing and decision-making."
    },
    {
        id: 21,
        type: 'Core Concepts',
        question: "According to the provided text, management is essential for which of the following?",
        options: ['Business concerns, hospitals, hotels, and charities', 'Only for-profit business concerns', 'Only for large corporations', 'Only for government agencies'],
        correctAnswer: 'Business concerns, hospitals, hotels, and charities',
        arabicTranslation: {
            question: "وفقًا للنص المقدم، الإدارة ضرورية لأي مما يلي؟",
            options: {
                'Business concerns, hospitals, hotels, and charities': "الشركات التجارية، المستشفيات، الفنادق، والجمعيات الخيرية",
                'Only for-profit business concerns': "فقط الشركات التجارية الربحية",
                'Only for large corporations': "فقط الشركات الكبيرة",
                'Only for government agencies': "فقط الوكالات الحكومية"
            },
            hint: "النص يؤكد على أن أهمية الإدارة تتجاوز عالم الأعمال التقليدي. ابحث عن الخيار الذي يعكس هذا التنوع الواسع."
        },
        englishExplanation: "The text explicitly states that 'Management is Essential not Only for Business Concerns but also for Hospitals, Hotels, Religious, Bodies, Charitable Trust etc...'"
    },
    {
        id: 22,
        type: 'MIS Concepts',
        question: "What is the 'Element of Surprise' in the context of information?",
        options: ['The ability to provide unexpected data that may alter decisions', 'A system that always provides predictable data', 'A sudden system crash', 'A planned event'],
        correctAnswer: 'The ability to provide unexpected data that may alter decisions',
        arabicTranslation: {
            question: "ما هو 'عنصر المفاجأة' في سياق المعلومات؟",
            options: {
                'The ability to provide unexpected data that may alter decisions': "القدرة على تقديم بيانات غير متوقعة قد تغير القرارات",
                'A system that always provides predictable data': "نظام يقدم دائمًا بيانات متوقعة",
                'A sudden system crash': "تعطل مفاجئ في النظام",
                'A planned event': "حدث مخطط له"
            },
            hint: "المعلومات القيمة لا تؤكد فقط ما نعرفه بالفعل. أحيانًا، تكون أكثر قيمة عندما تكشف عن شيء جديد تمامًا أو غير متوقع."
        },
        englishExplanation: "The 'Element of Surprise' in information is the ability to provide unexpected data to a manager, which can potentially lead to changes in decisions or strategies."
    },
    {
        id: 23,
        type: 'Characteristics of Management',
        question: "The essence of the 'Integrative Force' characteristic of management is the:",
        options: ['Integration of human and other resources to achieve objectives', 'Separation of human resources from other resources', 'Focus solely on financial integration', 'Use of force to manage employees'],
        correctAnswer: 'Integration of human and other resources to achieve objectives',
        arabicTranslation: {
            question: "جوهر خاصية 'القوة التكاملية' للإدارة هو:",
            options: {
                'Integration of human and other resources to achieve objectives': "تكامل الموارد البشرية والموارد الأخرى لتحقيق الأهداف",
                'Separation of human resources from other resources': "فصل الموارد البشرية عن الموارد الأخرى",
                'Focus solely on financial integration': "التركيز فقط على التكامل المالي",
                'Use of force to manage employees': "استخدام القوة لإدارة الموظفين"
            },
            hint: "كلمة 'تكامل' تعني الجمع بين أجزاء مختلفة لتكوين كل واحد متناغم. كيف ينطبق هذا على دور الإدارة في التعامل مع الموظفين والمواد والمعدات؟"
        },
        englishExplanation: "The 'Integrative Force' characteristic highlights that the essence of management is the integration of human and non-human resources to achieve the desired organizational objectives."
    },
    {
        id: 24,
        type: 'Terminology',
        question: "According to Henri Fayol, management principles are rigid rules that must be applied in the same way in every situation.",
        options: ['False', 'True'],
        correctAnswer: 'False',
        arabicTranslation: {
            question: "وفقًا لهنري فايول، مبادئ الإدارة هي قواعد صارمة يجب تطبيقها بنفس الطريقة في كل موقف.",
            options: {
                'False': "خطأ",
                'True': "صحيح"
            },
            hint: "هل يمكن تطبيق نفس المبادئ بنفس الصرامة في مستشفى وفي مصنع سيارات؟ فكر فيما إذا كانت المبادئ الإدارية يجب أن تكون مرنة أم جامدة لتكون فعالة."
        },
        englishExplanation: "False. Henri Fayol suggested that management principles are working guidelines which are flexible and capable of adaptation to every situation. They are not rigid, inflexible rules."
    },
    {
        id: 25,
        type: 'Terminology',
        question: "The term 'Discipline' in the context of a 'Multi-Disciplinary Subject' refers to:",
        options: ['A branch of knowledge or a field of study', 'Punishing employees for misconduct', 'Strict adherence to company rules', 'A military-style organization'],
        correctAnswer: 'A branch of knowledge or a field of study',
        arabicTranslation: {
            question: "يشير مصطلح 'تخصص' (Discipline) في سياق 'موضوع متعدد التخصصات' إلى:",
            options: {
                'A branch of knowledge or a field of study': "فرع من فروع المعرفة أو مجال للدراسة",
                'Punishing employees for misconduct': "معاقبة الموظفين على سوء السلوك",
                'Strict adherence to company rules': "الالتزام الصارم بقواعد الشركة",
                'A military-style organization': "منظمة على الطراز العسكري"
            },
            hint: "عندما نقول أن الإدارة تستفيد من علم النفس وعلم الاجتماع، فإننا نشير إلى هذه المجالات كـ...'أكاديمية'."
        },
        englishExplanation: "In the context of 'Multi-Disciplinary Subject', the word 'discipline' refers to a field of study or a branch of knowledge, such as engineering, anthropology, or psychology."
    },
    {
        id: 26,
        type: 'Core Concepts',
        question: "As you move down the managerial hierarchy, the degree of authority generally:",
        options: ['Reduces', 'Increases', 'Stays the same', 'Becomes irrelevant'],
        correctAnswer: 'Reduces',
        arabicTranslation: {
            question: "كلما نزلت في التسلسل الهرمي الإداري، فإن درجة السلطة بشكل عام:",
            options: {
                'Reduces': "تقل",
                'Increases': "تزيد",
                'Stays the same': "تبقى كما هي",
                'Becomes irrelevant': "تصبح غير ذات صلة"
            },
            hint: "فكر في الهرم التنظيمي. هل السلطة تتركز في القاعدة الواسعة أم في القمة الضيقة؟"
        },
        englishExplanation: "Generally, as we move down in the managerial hierarchy, from top management to bottom management, the degree of authority gradually reduces."
    },
    {
        id: 27,
        type: 'Terminology',
        question: "What does 'Purposeful' mean in the context of management being a 'Goal Oriented' activity?",
        options: ['Having a specific aim or goal it seeks to achieve', 'Being powerful', 'Being profitable', 'Being popular'],
        correctAnswer: 'Having a specific aim or goal it seeks to achieve',
        arabicTranslation: {
            question: "ماذا يعني مصطلح 'هادف' (Purposeful) في سياق كون الإدارة نشاطًا 'موجهًا نحو الهدف'؟",
            options: {
                'Having a specific aim or goal it seeks to achieve': "أن يكون له غاية أو هدف محدد يسعى لتحقيقه",
                'Being powerful': "أن يكون قوياً",
                'Being profitable': "أن يكون مربحًا",
                'Being popular': "أن يكون شائعًا"
            },
            hint: "النشاط الهادف ليس عشوائيًا أو بلا معنى. إنه مدفوع بنية واضحة لتحقيق شيء محدد."
        },
        englishExplanation: "In this context, 'Purposeful' means having a specific goal or aim. Management is a purposeful activity because it is not random; it is directed toward achieving defined objectives."
    },
    {
        id: 28,
        type: 'Terminology',
        question: "The term 'Applicable' means that something can be used or applied in different situations.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "مصطلح 'قابل للتطبيق' (Applicable) يعني أنه يمكن استخدام شيء ما أو تطبيقه في مواقف مختلفة.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "عندما نقول أن مبادئ الإدارة 'عالمية'، فإننا نعني أنها... في مجموعة متنوعة من المنظمات."
        },
        englishExplanation: "True. 'Applicable' means that something is relevant or appropriate and can be put into practice in various situations, which is a key feature of universal management principles."
    },
    {
        id: 29,
        type: 'Management Hierarchy',
        question: "Management Control is another term for Middle Management.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "الرقابة الإدارية (Management Control) هو مصطلح آخر للإدارة الوسطى.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "ارجع إلى الرسم البياني للتسلسل الهرمي الإداري. ما هو المصطلح المستخدم لوصف المستوى الموجود بين الإدارة العليا والإدارة التشغيلية؟"
        },
        englishExplanation: "True. The provided management hierarchy diagram explicitly labels the middle tier as 'management control (middle management)'."
    },
    {
        id: 30,
        type: 'Core Concepts',
        question: "An organization's objectives must be well-defined and understood by management at various levels for success.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "يجب أن تكون أهداف المنظمة محددة جيدًا ومفهومة من قبل الإدارة على مختلف المستويات لتحقيق النجاح.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "لكي تعمل الإدارة بفعالية كنشاط 'موجه نحو الهدف'، ما هو الشرط الأساسي المتعلق بالأهداف نفسها؟"
        },
        englishExplanation: "True. The text states it is 'imperative that the organizational goals must be well-defined and properly understood by the management at various levels' for management to be successful."
    },
    {
        id: 31,
        type: 'MIS Concepts',
        question: "An MIS gathers data from both internal and external sources of an organization.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "يجمع نظام المعلومات الإدارية البيانات من المصادر الداخلية والخارجية للمنظمة.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "لكي يقدم نظام المعلومات رؤية شاملة، هل يجب أن يقتصر على البيانات الموجودة داخل الشركة فقط، أم يجب أن يأخذ في الاعتبار أيضًا عوامل السوق والمنافسين؟"
        },
        englishExplanation: "True. The text states, 'The system gathers data from the internal and external sources of an organization.'"
    },
    {
        id: 32,
        type: 'Management Thinkers',
        question: "Which management thinker is described as being a 'concise and leadership-oriented' writer and scholar?",
        options: ['Ralph C. Davis', 'Ordway Tead', 'Peter F. Drucker', 'George R. Terry'],
        correctAnswer: 'Ralph C. Davis',
        arabicTranslation: {
            question: "أي مفكر إداري يوصف بأنه كاتب وباحث 'موجز ويركز على القيادة'؟",
            options: {
                'Ralph C. Davis': "رالف سي. ديفيس",
                'Ordway Tead': "أوردواي تيد",
                'Peter F. Drucker': "بيتر ف. دراكر",
                'George R. Terry': "جورج ر. تيري"
            },
            hint: "هذا المفكر ركز على الجانب التنفيذي للإدارة، معتبرًا أن القيادة وصنع القرار هما جوهر العملية الإدارية."
        },
        englishExplanation: "Ralph C. Davis is described in the text as a 'concise and leadership-oriented' management writer and scholar."
    },
    {
        id: 33,
        type: 'Characteristics of Management',
        question: "Harmonizing individuals' goals with organizational goals is a key aspect of which management characteristic?",
        options: ['Integrative Force', 'System of Authority', 'Economic Resource', 'Distinct Process'],
        correctAnswer: 'Integrative Force',
        arabicTranslation: {
            question: "تعتبر مواءمة أهداف الأفراد مع الأهداف التنظيمية جانبًا رئيسيًا لأي خاصية إدارية؟",
            options: {
                'Integrative Force': "القوة التكاملية",
                'System of Authority': "نظام السلطة",
                'Economic Resource': "المورد الاقتصادي",
                'Distinct Process': "العملية المميزة"
            },
            hint: "فكر في الدور الذي تلعبه الإدارة في الجمع بين الموظفين (بأهدافهم الشخصية) وأهداف الشركة لضمان عمل الجميع معًا بسلاسة."
        },
        englishExplanation: "The text states that as an 'Integrative Force', managers 'seek to harmonize the individuals' goals with the organizational goals for the smooth working of the organization.'"
    },
    {
        id: 34,
        type: 'Management Thinkers',
        question: "Henri Fayol, a French engineer, developed how many principles of management?",
        options: ['14', '10', '5', '20'],
        correctAnswer: '14',
        arabicTranslation: {
            question: "كم عدد مبادئ الإدارة التي طورها المهندس الفرنسي هنري فايول؟",
            options: {
                '14': "14",
                '10': "10",
                '5': "5",
                '20': "20"
            },
            hint: "طور فايول مجموعة شاملة من المبادئ التي لا تزال تؤثر في الإدارة اليوم. الرقم هو عدد زوجي معروف في أدبيات الإدارة."
        },
        englishExplanation: "Henri Fayol is famous for developing 14 principles of management that have had a significant impact on modern administrative practices."
    },
    {
        id: 35,
        type: 'Terminology',
        question: "A 'Difficult Task' is described as one that requires high skill and highlights the need for leadership.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "توصف 'المهمة الصعبة' بأنها تلك التي تتطلب مهارة عالية وتبرز الحاجة إلى القيادة.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "عندما تكون المهمة معقدة وتتطلب تنسيقًا كبيرًا، هل تزداد أم تقل أهمية وجود قائد لاتخاذ القرارات وتوجيه الفريق؟"
        },
        englishExplanation: "True. The text defines a 'Difficult Task' as an assignment requiring high skill, coordination, and limited resources, which 'highlights the need for leadership and decision-making.'"
    },
    {
        id: 36,
        type: 'Management Hierarchy',
        question: "What is another name for Bottom Management, as shown in the hierarchy diagram?",
        options: ['Operational Control', 'Strategic Control', 'Financial Control', 'Quality Control'],
        correctAnswer: 'Operational Control',
        arabicTranslation: {
            question: "ما هو الاسم الآخر للإدارة الدنيا، كما هو موضح في مخطط التسلسل الهرمي؟",
            options: {
                'Operational Control': "الرقابة التشغيلية",
                'Strategic Control': "الرقابة الاستراتيجية",
                'Financial Control': "الرقابة المالية",
                'Quality Control': "مراقبة الجودة"
            },
            hint: "هذا المستوى من الإدارة يركز على المهام اليومية والعمليات. أي من الخيارات يصف بشكل أفضل هذا التركيز؟"
        },
        englishExplanation: "The management hierarchy diagram explicitly labels the bottom tier as 'operational control (bottom management)'."
    },
    {
        id: 37,
        type: 'Terminology',
        question: "The management function of 'Staffing' primarily deals with:",
        options: ['Selecting, appointing, and training employees', 'Financial planning', 'Marketing and sales', 'Product development'],
        correctAnswer: 'Selecting, appointing, and training employees',
        arabicTranslation: {
            question: "تتعامل وظيفة الإدارة المسماة 'التوظيف' بشكل أساسي مع:",
            options: {
                'Selecting, appointing, and training employees': "اختيار وتعيين وتدريب الموظفين",
                'Financial planning': "التخطيط المالي",
                'Marketing and sales': "التسويق والمبيعات",
                'Product development': "تطوير المنتج"
            },
            hint: "كلمة 'Staff' باللغة الإنجليزية تشير إلى الموظفين أو فريق العمل. أي من الخيارات يتعلق بإدارة هذا الفريق؟"
        },
        englishExplanation: "Staffing is a core management function that involves the process of selecting, appointing, and training employees to fill roles within the organization."
    },
    {
        id: 38,
        type: 'Terminology',
        question: "The study of human beings, their culture, and societies is known as:",
        options: ['Anthropology', 'Sociology', 'Psychology', 'Engineering'],
        correctAnswer: 'Anthropology',
        arabicTranslation: {
            question: "تعرف دراسة البشر وثقافتهم ومجتمعاتهم بـ:",
            options: {
                'Anthropology': "الأنثروبولوجيا",
                'Sociology': "علم الاجتماع",
                'Psychology': "علم النفس",
                'Engineering': "الهندسة"
            },
            hint: "هذا التخصص العلمي يساعد المديرين على فهم كيفية تأثير الثقافة على السلوك التنظيمي."
        },
        englishExplanation: "Anthropology is the scientific study of humanity, concerned with human behavior, human biology, cultures, and societies, in both the present and past."
    },
    {
        id: 39,
        type: 'Management Thinkers',
        question: "George R. Terry was known as a logical, process-oriented academic and textbook author.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "كان جورج ر. تيري معروفًا بأنه أكاديمي ومؤلف كتب دراسية منطقي ويركز على العمليات.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "هذا المفكر قدم شرحًا منظمًا للإدارة من خلال وظائفها الرئيسية. هل يتوافق هذا مع كونه شخصًا منطقيًا ويركز على العمليات؟"
        },
        englishExplanation: "True. The text describes George R. Terry's personality as 'Academic and textbook author, logical and process-oriented'."
    },
    {
        id: 40,
        type: 'Core Concepts',
        question: "'The Need of Management' refers to the justification for converting resources into what?",
        options: ['Productive outputs', 'Company profits', 'Employee bonuses', 'Raw materials'],
        correctAnswer: 'Productive outputs',
        arabicTranslation: {
            question: "تشير 'الحاجة إلى الإدارة' إلى المبرر لتحويل الموارد إلى ماذا؟",
            options: {
                'Productive outputs': "مخرجات إنتاجية",
                'Company profits': "أرباح الشركة",
                'Employee bonuses': "مكافآت الموظفين",
                'Raw materials': "مواد خام"
            },
            hint: "الإدارة ليست هي الموارد نفسها، بل هي العملية التي تحول هذه الموارد إلى شيء ذي قيمة. ما هو المصطلح العام لهذا الشيء المنتج؟"
        },
        englishExplanation: "The text explains 'The Need of Management' as the justification for why management is necessary 'to convert resources into productive outputs.'"
    },
    {
        id: 41,
        type: 'Characteristics of Management',
        question: "The management function of monitoring performance and correcting deviations from plans is called:",
        options: ['Controlling', 'Planning', 'Organizing', 'Directing'],
        correctAnswer: 'Controlling',
        arabicTranslation: {
            question: "تسمى وظيفة الإدارة المتمثلة في مراقبة الأداء وتصحيح الانحرافات عن الخطط:",
            options: {
                'Controlling': "الرقابة",
                'Planning': "التخطيط",
                'Organizing': "التنظيم",
                'Directing': "التوجيه"
            },
            hint: "هذه الوظيفة تتضمن المقارنة بين ما تم التخطيط له وما تم إنجازه بالفعل، واتخاذ الإجراءات التصحيحية اللازمة."
        },
        englishExplanation: "'Controlling' is the management function that involves monitoring performance, comparing it with goals, and taking corrective action as needed."
    },
    {
        id: 42,
        type: 'Management Thinkers',
        question: "What was the title of Henri Fayol's influential book published in 1916?",
        options: ['Industrial and General Administration', 'The Principles of Scientific Management', 'The Human Problems of an Industrial Civilization', 'The Practice of Management'],
        correctAnswer: 'Industrial and General Administration',
        arabicTranslation: {
            question: "ما هو عنوان كتاب هنري فايول المؤثر الذي نشر عام 1916؟",
            options: {
                'Industrial and General Administration': "الإدارة الصناعية والعامة",
                'The Principles of Scientific Management': "مبادئ الإدارة العلمية",
                'The Human Problems of an Industrial Civilization': "المشاكل الإنسانية للحضارة الصناعية",
                'The Practice of Management': "ممارسة الإدارة"
            },
            hint: "عنوان الكتاب يعكس تركيز فايول على تطبيق مبادئ الإدارة ليس فقط في المصانع ولكن في جميع أنواع المنظمات."
        },
        englishExplanation: "Henri Fayol's seminal work, published in 1916, is titled 'Administration Industrielle et Générale', which translates to 'Industrial and General Administration'."
    },
    {
        id: 43,
        type: 'Terminology',
        question: "What does the term 'Distinct' mean?",
        options: ['Clearly separate or different', 'Similar or identical', 'Complex and interwoven', 'Purposeful and planned'],
        correctAnswer: 'Clearly separate or different',
        arabicTranslation: {
            question: "ماذا يعني مصطلح 'مميز' (Distinct)؟",
            options: {
                'Clearly separate or different': "منفصل أو مختلف بوضوح",
                'Similar or identical': "متشابه أو متطابق",
                'Complex and interwoven': "معقد ومتداخل",
                'Purposeful and planned': "هادف ومخطط له"
            },
            hint: "عندما نقول إن الإدارة عملية 'مميزة'، فإننا نعني أنها تختلف عن الوظائف الأخرى في المنظمة مثل المحاسبة أو التسويق."
        },
        englishExplanation: "The term 'Distinct' means recognizably different in nature from something else of a similar type. The text uses it to describe management as a unique process."
    },
    {
        id: 44,
        type: 'Core Concepts',
        question: "Management principles, as suggested by Henri Fayol, act as flexible guidelines.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "مبادئ الإدارة، كما اقترحها هنري فايول، تعمل كمبادئ توجيهية مرنة.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "هل يجب أن تكون القواعد الإدارية قابلة للتكيف مع المواقف المختلفة، أم يجب أن تكون صارمة وغير قابلة للتغيير؟ فكر في رأي فايول حول هذا الموضوع."
        },
        englishExplanation: "True. The text emphasizes that Fayol saw management principles as 'working with guidelines which are flexible and capable of adaptation to every organization.'"
    },
    {
        id: 45,
        type: 'Management Hierarchy',
        question: "A department head or division chief would typically belong to which level of management?",
        options: ['Middle Management', 'Top Management', 'Bottom Management', 'Non-managerial staff'],
        correctAnswer: 'Middle Management',
        arabicTranslation: {
            question: "إلى أي مستوى إداري ينتمي عادة رئيس قسم أو مدير إدارة؟",
            options: {
                'Middle Management': "الإدارة الوسطى",
                'Top Management': "الإدارة العليا",
                'Bottom Management': "الإدارة الدنيا",
                'Non-managerial staff': "الموظفون غير الإداريين"
            },
            hint: "هؤلاء المديرون يعملون كجسر بين الإدارة العليا التي تضع الاستراتيجيات والإدارة الدنيا التي تشرف على العمليات اليومية."
        },
        englishExplanation: "Department heads and division chiefs are classic examples of Middle Management. They are responsible for implementing the strategic plans developed by top managers."
    },
    {
        id: 46,
        type: 'Management Thinkers',
        question: "Peter F. Drucker was known for being practical, visionary, and focused on ______ and ______.",
        options: ['people and results', 'processes and rules', 'profits and shareholders', 'technology and innovation'],
        correctAnswer: 'people and results',
        arabicTranslation: {
            question: "كان بيتر ف. دراكر معروفًا بكونه عمليًا، وصاحب رؤية، ومركزًا على ______ و ______.",
            options: {
                'people and results': "الأشخاص والنتائج",
                'processes and rules': "العمليات والقواعد",
                'profits and shareholders': "الأرباح والمساهمين",
                'technology and innovation': "التكنولوجيا والابتكار"
            },
            hint: "ركز دراكر على الجانب الإنساني والهدف النهائي للإدارة. ما هما أهم عنصرين في هذا النهج؟"
        },
        englishExplanation: "The text describes Peter F. Drucker's personality as 'Known for being practical, visionary, and focused on people and results.'"
    },
    {
        id: 47,
        type: 'Characteristics of Management',
        question: "The management function 'Directing' involves guiding and motivating employees to achieve objectives.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "تتضمن وظيفة الإدارة 'التوجيه' إرشاد وتحفيز الموظفين لتحقيق الأهداف.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "بعد التخطيط والتنظيم، تحتاج الإدارة إلى التأكد من أن الموظفين يعملون بفعالية نحو الأهداف المحددة. هذه الوظيفة تتعلق بالقيادة والتواصل."
        },
        englishExplanation: "True. Directing (or Actuating) is the management function that involves leading, influencing, and motivating employees to perform the essential tasks."
    },
    {
        id: 48,
        type: 'MIS Concepts',
        question: "Based on the definition of a 'System', an MIS processes inputs to achieve specific outputs.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "بناءً على تعريف 'النظام'، يقوم نظام المعلومات الإداري بمعالجة المدخلات لتحقيق مخرجات محددة.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "يعرّف النص النظام بأنه يتكون من مدخلات تتم معالجتها لتحقيق مخرجات. هل ينطبق هذا التعريف على نظام المعلومات الإداري الذي يأخذ البيانات الخام (مدخلات) ويحولها إلى تقارير (مخرجات)؟"
        },
        englishExplanation: "True. The text defines a system as consisting of 'inputs that are processed to achieve specific outputs.' An MIS fits this definition perfectly, processing raw data (input) into meaningful information (output)."
    },
    {
        id: 49,
        type: 'Terminology',
        question: "The study of societies and social behavior is called:",
        options: ['Sociology', 'Psychology', 'Anthropology', 'Biology'],
        correctAnswer: 'Sociology',
        arabicTranslation: {
            question: "تسمى دراسة المجتمعات والسلوك الاجتماعي:",
            options: {
                'Sociology': "علم الاجتماع",
                'Psychology': "علم النفس",
                'Anthropology': "الأنثروبولوجيا",
                'Biology': "علم الأحياء"
            },
            hint: "يساعد هذا العلم المديرين على فهم ديناميكيات المجموعات والهياكل الاجتماعية داخل المنظمات وخارجها."
        },
        englishExplanation: "Sociology is the study of social life, social change, and the social causes and consequences of human behavior. It is one of the disciplines that contributes to management science."
    },
    {
        id: 50,
        type: 'Terminology',
        question: "What does the term 'Institution' mean in the context of the 'Existence of Management'?",
        options: ['An established organization or social structure', 'A financial company', 'A university or college', 'A government building'],
        correctAnswer: 'An established organization or social structure',
        arabicTranslation: {
            question: "ماذا يعني مصطلح 'مؤسسة' (Institution) في سياق 'وجود الإدارة'؟",
            options: {
                'An established organization or social structure': "منظمة أو هيكل اجتماعي راسخ",
                'A financial company': "شركة مالية",
                'A university or college': "جامعة أو كلية",
                'A government building': "مبنى حكومي"
            },
            hint: "عندما يوصف شيء بأنه 'مؤسسة'، فهذا يعني أنه جزء أساسي ومعترف به من المجتمع، وليس مجرد كيان مادي."
        },
        englishExplanation: "In this context, an 'Institution' refers to an established social structure or organization. The text identifies management as a distinct and indispensable social institution."
    },
    {
        id: 51,
        type: 'Management Thinkers',
        question: "Ordway Tead's focus on teamwork and encouraging participation aligns with which school of management thought?",
        options: ['Human Relations', 'Scientific Management', 'Administrative Management', 'Bureaucratic Management'],
        correctAnswer: 'Human Relations',
        arabicTranslation: {
            question: "يتوافق تركيز أوردواي تيد على العمل الجماعي وتشجيع المشاركة مع أي مدرسة فكرية في الإدارة؟",
            options: {
                'Human Relations': "العلاقات الإنسانية",
                'Scientific Management': "الإدارة العلمية",
                'Administrative Management': "الإدارة الإدارية",
                'Bureaucratic Management': "الإدارة البيروقراطية"
            },
            hint: "ركزت هذه المدرسة الفكرية على الجوانب النفسية والاجتماعية للعمل، مؤكدة على أن رضا الموظفين وتحفيزهم يؤدي إلى إنتاجية أعلى."
        },
        englishExplanation: "Ordway Tead was an organizational theorist focused on human relations. His emphasis on empowering people, encouraging participation, and teamwork are hallmarks of the Human Relations school of thought."
    },
    {
        id: 52,
        type: 'Terminology',
        question: "The term 'Knowledge' for a manager refers to the information, understanding, and experience they possess.",
        options: ['True', 'False'],
        correctAnswer: 'True',
        arabicTranslation: {
            question: "يشير مصطلح 'المعرفة' (Knowledge) للمدير إلى المعلومات والفهم والخبرة التي يمتلكها.",
            options: {
                'True': "صحيح",
                'False': "خطأ"
            },
            hint: "عندما يطبق المديرون مبادئ الإدارة، فإنهم يعتمدون على مجموعة من الأصول غير الملموسة التي اكتسبوها. ما هو المصطلح الذي يصف هذه الأصول؟"
        },
        englishExplanation: "True. In the context of the 'Integrative Force', the text mentions that 'Managers apply knowledge, experience and management principles' to get results. Knowledge here encompasses information, understanding, and expertise."
    }
];
