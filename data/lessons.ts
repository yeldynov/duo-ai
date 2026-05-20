import type { Lesson } from '@/types/learning'

export const lessons: Lesson[] = [
  // ── Spanish – Unit 1 ──────────────────────────────────────────────────────

  {
    id: 'es-lesson-1',
    unitId: 'es-unit-1',
    title: 'Hello & Goodbye',
    description: 'Learn to greet people and say farewell in Spanish.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach the student basic greetings: hola, adiós, buenos días, buenas noches. Use simple examples and encourage them to repeat each phrase.',
    goals: [
      'Say hello and goodbye in Spanish',
      'Use time-based greetings (morning, night)',
      'Recognise written and spoken greetings',
    ],
    vocabulary: [
      {
        word: 'hola',
        translation: 'hello',
        pronunciation: 'OH-lah',
        example: '¡Hola! ¿Cómo estás?',
      },
      {
        word: 'adiós',
        translation: 'goodbye',
        pronunciation: 'ah-DYOHS',
        example: '¡Adiós! Hasta mañana.',
      },
      {
        word: 'buenos días',
        translation: 'good morning',
        pronunciation: 'BWEH-nohs DEE-ahs',
        example: 'Buenos días, señora.',
      },
      {
        word: 'buenas noches',
        translation: 'good night',
        pronunciation: 'BWEH-nahs NOH-chehs',
        example: 'Buenas noches, hasta mañana.',
      },
    ],
    phrases: [
      {
        text: '¿Cómo estás?',
        translation: 'How are you?',
        pronunciation: 'KOH-moh ehs-TAHS',
      },
      {
        text: 'Estoy bien, gracias.',
        translation: 'I am fine, thank you.',
        pronunciation: 'ehs-TOY byehn, GRAH-syahs',
      },
    ],
    activities: [
      {
        id: 'es-l1-a1',
        type: 'vocabulary',
        question: 'What does "hola" mean?',
        options: ['goodbye', 'hello', 'thank you', 'please'],
        answer: 'hello',
      },
      {
        id: 'es-l1-a2',
        type: 'fill_in_blank',
        question: 'Complete the greeting: "Buenos ___"',
        options: ['días', 'hola', 'noche', 'bien'],
        answer: 'días',
        hint: 'Used in the morning.',
      },
      {
        id: 'es-l1-a3',
        type: 'match_pairs',
        question: 'Match each Spanish word to its English meaning.',
        options: ['hola', 'adiós', 'buenos días', 'buenas noches'],
        answer: 'hello|goodbye|good morning|good night',
      },
      {
        id: 'es-l1-a4',
        type: 'ai_teacher',
        question: 'Practice greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-2',
    unitId: 'es-unit-1',
    title: 'Introductions',
    description: 'Introduce yourself and ask someone their name.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Help the student practice introducing themselves: "Me llamo…", "¿Cómo te llamas?", "Mucho gusto." Keep it conversational and encouraging.',
    goals: [
      'State your name in Spanish',
      'Ask someone their name',
      'Respond to an introduction politely',
    ],
    vocabulary: [
      {
        word: 'me llamo',
        translation: 'my name is',
        pronunciation: 'meh YAH-moh',
        example: 'Me llamo Carlos.',
      },
      {
        word: 'mucho gusto',
        translation: 'nice to meet you',
        pronunciation: 'MOO-choh GOOS-toh',
        example: '¡Mucho gusto!',
      },
      {
        word: 'soy',
        translation: 'I am',
        pronunciation: 'soy',
        example: 'Soy estudiante.',
      },
    ],
    phrases: [
      {
        text: '¿Cómo te llamas?',
        translation: 'What is your name?',
        pronunciation: 'KOH-moh teh YAH-mahs',
      },
      {
        text: 'Me llamo Ana.',
        translation: 'My name is Ana.',
        pronunciation: 'meh YAH-moh AH-nah',
      },
    ],
    activities: [
      {
        id: 'es-l2-a1',
        type: 'vocabulary',
        question: 'What does "me llamo" mean?',
        options: ['I like', 'my name is', 'I am from', 'nice to meet you'],
        answer: 'my name is',
      },
      {
        id: 'es-l2-a2',
        type: 'fill_in_blank',
        question: 'Complete: "___ llamo María."',
        options: ['Me', 'Te', 'Se', 'Le'],
        answer: 'Me',
      },
      {
        id: 'es-l2-a3',
        type: 'ai_teacher',
        question: 'Introduce yourself to your AI teacher in Spanish.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-3',
    unitId: 'es-unit-2',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Spanish.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach numbers 1 to 10 in Spanish: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez. Drill them with simple counting exercises.',
    goals: [
      'Count from 1 to 10 in Spanish',
      'Recognise written Spanish numbers',
      'Use numbers in simple sentences',
    ],
    vocabulary: [
      { word: 'uno', translation: '1', pronunciation: 'OO-noh' },
      { word: 'dos', translation: '2', pronunciation: 'dohs' },
      { word: 'tres', translation: '3', pronunciation: 'trehs' },
      { word: 'cuatro', translation: '4', pronunciation: 'KWAH-troh' },
      { word: 'cinco', translation: '5', pronunciation: 'SEEN-koh' },
      { word: 'seis', translation: '6', pronunciation: 'seys' },
      { word: 'siete', translation: '7', pronunciation: 'SYEH-teh' },
      { word: 'ocho', translation: '8', pronunciation: 'OH-choh' },
      { word: 'nueve', translation: '9', pronunciation: 'NWEH-beh' },
      { word: 'diez', translation: '10', pronunciation: 'dyehs' },
    ],
    phrases: [
      {
        text: 'Tengo cinco manzanas.',
        translation: 'I have five apples.',
        pronunciation: 'TEHN-goh SEEN-koh mahn-SAH-nahs',
      },
    ],
    activities: [
      {
        id: 'es-l3-a1',
        type: 'vocabulary',
        question: 'What is "cinco" in English?',
        options: ['3', '4', '5', '6'],
        answer: '5',
      },
      {
        id: 'es-l3-a2',
        type: 'listen_and_select',
        question: 'Select the number you hear.',
        options: ['dos', 'tres', 'cuatro', 'siete'],
        answer: 'tres',
      },
      {
        id: 'es-l3-a3',
        type: 'fill_in_blank',
        question: 'uno, dos, ___, cuatro',
        options: ['cinco', 'tres', 'seis', 'ocho'],
        answer: 'tres',
      },
    ],
  },

  // ── French – Unit 1 ───────────────────────────────────────────────────────

  {
    id: 'fr-lesson-1',
    unitId: 'fr-unit-1',
    title: 'Bonjour!',
    description: 'Master French greetings for any time of day.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are an encouraging French teacher. Teach the student essential greetings: bonjour, bonsoir, salut, au revoir. Explain when to use formal vs. informal greetings.',
    goals: [
      'Greet someone in French at different times of day',
      'Distinguish formal (bonjour) from informal (salut) greetings',
      'Say goodbye in French',
    ],
    vocabulary: [
      {
        word: 'bonjour',
        translation: 'hello / good day',
        pronunciation: 'bohn-ZHOOR',
        example: 'Bonjour, madame.',
      },
      {
        word: 'bonsoir',
        translation: 'good evening',
        pronunciation: 'bohn-SWAHR',
        example: 'Bonsoir, comment ça va?',
      },
      {
        word: 'salut',
        translation: 'hi (informal)',
        pronunciation: 'sah-LÜ',
        example: 'Salut, ça va?',
      },
      {
        word: 'au revoir',
        translation: 'goodbye',
        pronunciation: 'oh ruh-VWAHR',
        example: 'Au revoir et bonne journée!',
      },
    ],
    phrases: [
      {
        text: 'Comment ça va?',
        translation: 'How are you?',
        pronunciation: 'koh-MAHN sah VAH',
      },
      {
        text: 'Ça va bien, merci.',
        translation: 'I am doing well, thank you.',
        pronunciation: 'sah VAH byahn, mehr-SEE',
      },
    ],
    activities: [
      {
        id: 'fr-l1-a1',
        type: 'vocabulary',
        question: 'What does "bonjour" mean?',
        options: ['goodbye', 'good evening', 'hello / good day', 'hi'],
        answer: 'hello / good day',
      },
      {
        id: 'fr-l1-a2',
        type: 'fill_in_blank',
        question: 'Evening greeting: "Bon___"',
        options: ['jour', 'soir', 'nuit', 'matin'],
        answer: 'soir',
      },
      {
        id: 'fr-l1-a3',
        type: 'ai_teacher',
        question: 'Practice French greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'fr-lesson-2',
    unitId: 'fr-unit-1',
    title: 'Nice to Meet You',
    description: 'Introduce yourself and ask others their name in French.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a warm French teacher. Help the student practice: "Je m\'appelle…", "Comment vous appelez-vous?", "Enchanté(e)." Role-play a short introduction dialogue.',
    goals: [
      'State your name in French',
      'Ask for someone\'s name (formal and informal)',
      'Respond to an introduction',
    ],
    vocabulary: [
      {
        word: 'je m\'appelle',
        translation: 'my name is',
        pronunciation: 'zhuh mah-PEL',
        example: 'Je m\'appelle Sophie.',
      },
      {
        word: 'enchanté(e)',
        translation: 'nice to meet you',
        pronunciation: 'ahn-shahn-TAY',
        example: 'Enchanté, je m\'appelle Paul.',
      },
      {
        word: 'je suis',
        translation: 'I am',
        pronunciation: 'zhuh SWEE',
        example: 'Je suis étudiant.',
      },
    ],
    phrases: [
      {
        text: 'Comment vous appelez-vous?',
        translation: 'What is your name? (formal)',
        pronunciation: 'koh-MAHN vooz ah-play-VAY voo',
      },
      {
        text: 'Comment tu t\'appelles?',
        translation: 'What is your name? (informal)',
        pronunciation: 'koh-MAHN tü tah-PEL',
      },
    ],
    activities: [
      {
        id: 'fr-l2-a1',
        type: 'vocabulary',
        question: 'What does "enchanté" mean?',
        options: ['goodbye', 'I am', 'nice to meet you', 'my name is'],
        answer: 'nice to meet you',
      },
      {
        id: 'fr-l2-a2',
        type: 'fill_in_blank',
        question: '"___ m\'appelle Claire."',
        options: ['Tu', 'Je', 'Il', 'Vous'],
        answer: 'Je',
      },
      {
        id: 'fr-l2-a3',
        type: 'ai_teacher',
        question: 'Introduce yourself to your AI teacher in French.',
        answer: '',
      },
    ],
  },

  // ── Japanese – Unit 1 ─────────────────────────────────────────────────────

  {
    id: 'ja-lesson-1',
    unitId: 'ja-unit-1',
    title: 'はじめまして (Nice to Meet You)',
    description: 'Learn essential Japanese greetings and how to introduce yourself.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach the student: こんにちは (konnichiwa), おはようございます (ohayou gozaimasu), こんばんは (konbanwa), and はじめまして (hajimemashite). Explain the concept of polite vs. casual speech briefly.',
    goals: [
      'Say hello in Japanese at different times of day',
      'Introduce yourself with "はじめまして"',
      'Recognise hiragana for common greetings',
    ],
    vocabulary: [
      {
        word: 'こんにちは',
        translation: 'hello / good afternoon',
        pronunciation: 'kon-ni-chi-wa',
        example: 'こんにちは、田中さん。',
      },
      {
        word: 'おはようございます',
        translation: 'good morning (polite)',
        pronunciation: 'o-ha-yo go-za-i-mas',
        example: 'おはようございます、先生。',
      },
      {
        word: 'こんばんは',
        translation: 'good evening',
        pronunciation: 'kon-ban-wa',
        example: 'こんばんは！',
      },
      {
        word: 'はじめまして',
        translation: 'nice to meet you',
        pronunciation: 'ha-ji-me-ma-shi-te',
        example: 'はじめまして、よろしくおねがいします。',
      },
      {
        word: 'ありがとう',
        translation: 'thank you',
        pronunciation: 'a-ri-ga-tou',
        example: 'ありがとうございます。',
      },
    ],
    phrases: [
      {
        text: 'わたしは[name]です。',
        translation: 'I am [name].',
        pronunciation: 'wa-ta-shi wa [name] des',
      },
      {
        text: 'よろしくおねがいします。',
        translation: 'Nice to meet you / Please be kind to me.',
        pronunciation: 'yo-ro-shi-ku o-ne-ga-i-shi-mas',
      },
    ],
    activities: [
      {
        id: 'ja-l1-a1',
        type: 'vocabulary',
        question: 'What does "こんにちは" mean?',
        options: ['good morning', 'good night', 'hello / good afternoon', 'goodbye'],
        answer: 'hello / good afternoon',
      },
      {
        id: 'ja-l1-a2',
        type: 'vocabulary',
        question: 'Which phrase means "nice to meet you"?',
        options: ['ありがとう', 'こんばんは', 'はじめまして', 'おはよう'],
        answer: 'はじめまして',
      },
      {
        id: 'ja-l1-a3',
        type: 'ai_teacher',
        question: 'Practice Japanese greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  // ── German – Unit 1 ───────────────────────────────────────────────────────

  {
    id: 'de-lesson-1',
    unitId: 'de-unit-1',
    title: 'Hallo!',
    description: 'Learn German greetings, farewells, and a simple self-introduction.',
    xpReward: 10,
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach the student: Hallo, Guten Morgen, Guten Abend, Tschüss, Auf Wiedersehen. Practice a short introduction using "Ich heiße…" and "Wie heißt du?".',
    goals: [
      'Greet people in German at different times',
      'Say farewell formally and informally',
      'Introduce yourself using "Ich heiße"',
    ],
    vocabulary: [
      {
        word: 'Hallo',
        translation: 'hello',
        pronunciation: 'HAH-loh',
        example: 'Hallo, wie geht\'s?',
      },
      {
        word: 'Guten Morgen',
        translation: 'good morning',
        pronunciation: 'GOO-ten MOR-gen',
        example: 'Guten Morgen, Frau Müller.',
      },
      {
        word: 'Guten Abend',
        translation: 'good evening',
        pronunciation: 'GOO-ten AH-bent',
        example: 'Guten Abend, alle zusammen.',
      },
      {
        word: 'Tschüss',
        translation: 'bye (informal)',
        pronunciation: 'chüss',
        example: 'Tschüss, bis morgen!',
      },
      {
        word: 'Auf Wiedersehen',
        translation: 'goodbye (formal)',
        pronunciation: 'owf VEE-der-zay-en',
        example: 'Auf Wiedersehen, Herr Schmidt.',
      },
      {
        word: 'ich heiße',
        translation: 'my name is',
        pronunciation: 'ikh HY-sse',
        example: 'Ich heiße Lukas.',
      },
    ],
    phrases: [
      {
        text: 'Wie heißt du?',
        translation: 'What is your name? (informal)',
        pronunciation: 'vee hysst doo',
      },
      {
        text: 'Wie geht es Ihnen?',
        translation: 'How are you? (formal)',
        pronunciation: 'vee gayt es EE-nen',
      },
      {
        text: 'Mir geht es gut, danke.',
        translation: 'I am fine, thank you.',
        pronunciation: 'meer gayt es goot, DAHN-ke',
      },
    ],
    activities: [
      {
        id: 'de-l1-a1',
        type: 'vocabulary',
        question: 'What does "Guten Morgen" mean?',
        options: ['good evening', 'good night', 'good morning', 'goodbye'],
        answer: 'good morning',
      },
      {
        id: 'de-l1-a2',
        type: 'fill_in_blank',
        question: '"Ich ___ Lukas."',
        options: ['bin', 'heiße', 'habe', 'gehe'],
        answer: 'heiße',
      },
      {
        id: 'de-l1-a3',
        type: 'match_pairs',
        question: 'Match each German phrase to its English meaning.',
        options: ['Hallo', 'Tschüss', 'Guten Morgen', 'Auf Wiedersehen'],
        answer: 'hello|bye (informal)|good morning|goodbye (formal)',
      },
      {
        id: 'de-l1-a4',
        type: 'ai_teacher',
        question: 'Practice German greetings with your AI teacher.',
        answer: '',
      },
    ],
  },
]
