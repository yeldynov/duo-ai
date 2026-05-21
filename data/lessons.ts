import type { Lesson } from '@/types/learning'

export const lessons: Lesson[] = [
  // ── Spanish – Unit 1 ──────────────────────────────────────────────────────

  {
    id: 'es-lesson-1',
    unitId: 'es-unit-1',
    title: 'Greetings & Introductions',
    description: 'Learn to greet people and introduce yourself in Spanish.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-greetings/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach greetings: hola, adiós, buenos días, and how to say "Me llamo…". Keep it simple and encouraging.',
    goals: [
      'Say hello and goodbye in Spanish',
      'Use time-based greetings',
      'Introduce yourself',
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
        word: 'me llamo',
        translation: 'my name is',
        pronunciation: 'meh YAH-moh',
        example: 'Me llamo Carlos.',
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
        question: 'Complete: "Buenos ___"',
        options: ['días', 'hola', 'noche', 'bien'],
        answer: 'días',
        hint: 'Used in the morning.',
      },
      {
        id: 'es-l1-a3',
        type: 'match_pairs',
        question: 'Match each Spanish word to its English meaning.',
        options: ['hola', 'adiós', 'buenos días', 'me llamo'],
        answer: 'hello|goodbye|good morning|my name is',
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
    title: 'Daily Life',
    description: 'Talk about everyday activities and routines.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-daily/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach daily routine vocabulary: desayuno, trabajo, casa, dormir. Help the student form simple sentences about their day.',
    goals: [
      'Describe daily routines in Spanish',
      'Use common action verbs',
      'Talk about times of day',
    ],
    vocabulary: [
      {
        word: 'desayuno',
        translation: 'breakfast',
        pronunciation: 'deh-sah-YOO-noh',
        example: 'Como el desayuno a las ocho.',
      },
      {
        word: 'trabajo',
        translation: 'work / job',
        pronunciation: 'trah-BAH-hoh',
        example: 'Voy al trabajo en autobús.',
      },
      {
        word: 'casa',
        translation: 'house / home',
        pronunciation: 'KAH-sah',
        example: 'Estoy en casa.',
      },
      {
        word: 'dormir',
        translation: 'to sleep',
        pronunciation: 'dor-MEER',
        example: 'Necesito dormir ocho horas.',
      },
    ],
    phrases: [
      {
        text: '¿Qué haces todos los días?',
        translation: 'What do you do every day?',
        pronunciation: 'keh AH-sehs TOH-dohs lohs DEE-ahs',
      },
      {
        text: 'Me levanto a las siete.',
        translation: 'I wake up at seven.',
        pronunciation: 'meh leh-BAHN-toh ah lahs SYEH-teh',
      },
    ],
    activities: [
      {
        id: 'es-l2-a1',
        type: 'vocabulary',
        question: 'What does "casa" mean?',
        options: ['work', 'breakfast', 'house', 'sleep'],
        answer: 'house',
      },
      {
        id: 'es-l2-a2',
        type: 'fill_in_blank',
        question: '"Voy al ___." (I go to work)',
        options: ['casa', 'trabajo', 'dormir', 'desayuno'],
        answer: 'trabajo',
      },
      {
        id: 'es-l2-a3',
        type: 'ai_teacher',
        question: 'Describe your daily routine to your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-3',
    unitId: 'es-unit-1',
    title: 'At the Café',
    description: 'Order food and drinks at a Spanish café.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-cafe/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Roleplay a café scene. Teach: un café, por favor, la cuenta, quiero, ¿cuánto cuesta? Practice ordering drinks and snacks.',
    goals: [
      'Order a drink or snack in Spanish',
      'Ask for the bill',
      'Use polite café phrases',
    ],
    vocabulary: [
      {
        word: 'un café',
        translation: 'a coffee',
        pronunciation: 'oon kah-FEH',
        example: 'Quiero un café, por favor.',
      },
      {
        word: 'por favor',
        translation: 'please',
        pronunciation: 'por fah-BOR',
        example: 'Un vaso de agua, por favor.',
      },
      {
        word: 'la cuenta',
        translation: 'the bill',
        pronunciation: 'lah KWEHN-tah',
        example: '¿Me trae la cuenta, por favor?',
      },
      {
        word: 'quiero',
        translation: 'I want',
        pronunciation: 'KYEH-roh',
        example: 'Quiero un croissant.',
      },
    ],
    phrases: [
      {
        text: '¿Qué desea?',
        translation: 'What would you like?',
        pronunciation: 'keh deh-SEH-ah',
      },
      {
        text: '¿Cuánto cuesta?',
        translation: 'How much does it cost?',
        pronunciation: 'KWAHN-toh KWEHS-tah',
      },
    ],
    activities: [
      {
        id: 'es-l3-a1',
        type: 'vocabulary',
        question: 'What does "la cuenta" mean?',
        options: ['the coffee', 'the menu', 'the bill', 'the waiter'],
        answer: 'the bill',
      },
      {
        id: 'es-l3-a2',
        type: 'fill_in_blank',
        question: '"___ un café, por favor."',
        options: ['Tengo', 'Quiero', 'Soy', 'Estoy'],
        answer: 'Quiero',
      },
      {
        id: 'es-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at the café with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-4',
    unitId: 'es-unit-1',
    title: 'Travel & Directions',
    description: 'Ask for and understand directions while travelling.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-travel/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach direction phrases: a la derecha, a la izquierda, todo recto, ¿dónde está? Role-play asking for directions.',
    goals: [
      'Ask where something is in Spanish',
      'Understand left/right/straight directions',
      'Name common places in a city',
    ],
    vocabulary: [
      {
        word: 'a la derecha',
        translation: 'to the right',
        pronunciation: 'ah lah deh-REH-chah',
        example: 'Gira a la derecha.',
      },
      {
        word: 'a la izquierda',
        translation: 'to the left',
        pronunciation: 'ah lah ees-KYEHR-dah',
        example: 'El banco está a la izquierda.',
      },
      {
        word: 'todo recto',
        translation: 'straight ahead',
        pronunciation: 'TOH-doh REHK-toh',
        example: 'Sigue todo recto.',
      },
      {
        word: '¿dónde está?',
        translation: 'where is it?',
        pronunciation: 'DOHN-deh ehs-TAH',
        example: '¿Dónde está el metro?',
      },
    ],
    phrases: [
      {
        text: 'Perdone, ¿cómo llego al hotel?',
        translation: 'Excuse me, how do I get to the hotel?',
        pronunciation: 'per-DOH-neh, KOH-moh YEH-goh al oh-TEL',
      },
      {
        text: 'Está cerca de aquí.',
        translation: 'It is close to here.',
        pronunciation: 'ehs-TAH SEHR-kah deh ah-KEE',
      },
    ],
    activities: [
      {
        id: 'es-l4-a1',
        type: 'vocabulary',
        question: 'What does "todo recto" mean?',
        options: ['turn left', 'turn right', 'straight ahead', 'stop here'],
        answer: 'straight ahead',
      },
      {
        id: 'es-l4-a2',
        type: 'fill_in_blank',
        question: '"¿___ está la estación?"',
        options: ['Cómo', 'Dónde', 'Cuándo', 'Qué'],
        answer: 'Dónde',
      },
      {
        id: 'es-l4-a3',
        type: 'match_pairs',
        question: 'Match directions to their meanings.',
        options: ['derecha', 'izquierda', 'recto', 'cerca'],
        answer: 'right|left|straight|near',
      },
      {
        id: 'es-l4-a4',
        type: 'ai_teacher',
        question: 'Practice asking for directions with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-5',
    unitId: 'es-unit-1',
    title: 'Shopping',
    description: 'Buy things and talk about prices in Spanish.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-shopping/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach shopping phrases: ¿cuánto cuesta?, es caro, barato, quiero comprar, talla. Roleplay a shopping scenario.',
    goals: [
      'Ask for prices in Spanish',
      'Describe items as cheap or expensive',
      'Complete a simple shopping transaction',
    ],
    vocabulary: [
      {
        word: 'caro',
        translation: 'expensive',
        pronunciation: 'KAH-roh',
        example: 'Este vestido es muy caro.',
      },
      {
        word: 'barato',
        translation: 'cheap',
        pronunciation: 'bah-RAH-toh',
        example: '¡Qué barato! Lo compro.',
      },
      {
        word: 'la talla',
        translation: 'the size',
        pronunciation: 'lah TAH-yah',
        example: '¿Tiene esta camisa en talla M?',
      },
      {
        word: 'comprar',
        translation: 'to buy',
        pronunciation: 'kohm-PRAHR',
        example: 'Quiero comprar estos zapatos.',
      },
    ],
    phrases: [
      {
        text: '¿Cuánto cuesta esto?',
        translation: 'How much does this cost?',
        pronunciation: 'KWAHN-toh KWEHS-tah EHS-toh',
      },
      {
        text: 'Me lo llevo.',
        translation: "I'll take it.",
        pronunciation: 'meh loh YEH-boh',
      },
    ],
    activities: [
      {
        id: 'es-l5-a1',
        type: 'vocabulary',
        question: 'What does "barato" mean?',
        options: ['expensive', 'beautiful', 'cheap', 'big'],
        answer: 'cheap',
      },
      {
        id: 'es-l5-a2',
        type: 'fill_in_blank',
        question: '"Quiero ___ este libro."',
        options: ['vender', 'comprar', 'leer', 'tener'],
        answer: 'comprar',
      },
      {
        id: 'es-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'es-lesson-6',
    unitId: 'es-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family and relationships in Spanish.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/es-family/800/420',
    aiTeacherPrompt:
      'You are a friendly Spanish teacher. Teach family vocabulary: madre, padre, hermano, hermana, amigo. Help the student describe their family.',
    goals: [
      'Name family members in Spanish',
      'Describe relationships',
      'Talk about your family',
    ],
    vocabulary: [
      {
        word: 'madre',
        translation: 'mother',
        pronunciation: 'MAH-dreh',
        example: 'Mi madre se llama Rosa.',
      },
      {
        word: 'padre',
        translation: 'father',
        pronunciation: 'PAH-dreh',
        example: 'Mi padre trabaja en Madrid.',
      },
      {
        word: 'hermano',
        translation: 'brother',
        pronunciation: 'ehr-MAH-noh',
        example: 'Tengo un hermano mayor.',
      },
      {
        word: 'amigo',
        translation: 'friend',
        pronunciation: 'ah-MEE-goh',
        example: 'Él es mi mejor amigo.',
      },
    ],
    phrases: [
      {
        text: 'Tengo dos hermanos.',
        translation: 'I have two siblings.',
        pronunciation: 'TEHN-goh dohs ehr-MAH-nohs',
      },
      {
        text: '¿Tienes hermanos?',
        translation: 'Do you have siblings?',
        pronunciation: 'TYEH-nehs ehr-MAH-nohs',
      },
    ],
    activities: [
      {
        id: 'es-l6-a1',
        type: 'vocabulary',
        question: 'What does "padre" mean?',
        options: ['brother', 'friend', 'mother', 'father'],
        answer: 'father',
      },
      {
        id: 'es-l6-a2',
        type: 'fill_in_blank',
        question: '"Mi ___ se llama Ana." (My mother…)',
        options: ['padre', 'hermano', 'madre', 'amigo'],
        answer: 'madre',
      },
      {
        id: 'es-l6-a3',
        type: 'match_pairs',
        question: 'Match the family words.',
        options: ['madre', 'padre', 'hermano', 'amigo'],
        answer: 'mother|father|brother|friend',
      },
      {
        id: 'es-l6-a4',
        type: 'ai_teacher',
        question: 'Describe your family to your AI teacher.',
        answer: '',
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
    image: 'https://picsum.photos/seed/fr-greetings/800/420',
    aiTeacherPrompt:
      'You are an encouraging French teacher. Teach: bonjour, bonsoir, salut, au revoir. Explain formal vs. informal greetings.',
    goals: [
      'Greet someone in French at different times of day',
      'Distinguish formal from informal greetings',
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
    image: 'https://picsum.photos/seed/fr-intro/800/420',
    aiTeacherPrompt:
      'You are a warm French teacher. Help the student practice: "Je m\'appelle…", "Enchanté(e)." Role-play a short introduction.',
    goals: [
      'State your name in French',
      "Ask for someone's name",
      'Respond to an introduction',
    ],
    vocabulary: [
      {
        word: "je m'appelle",
        translation: 'my name is',
        pronunciation: 'zhuh mah-PEL',
        example: "Je m'appelle Sophie.",
      },
      {
        word: 'enchanté(e)',
        translation: 'nice to meet you',
        pronunciation: 'ahn-shahn-TAY',
        example: "Enchanté, je m'appelle Paul.",
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
        text: "Comment tu t'appelles?",
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

  {
    id: 'fr-lesson-3',
    unitId: 'fr-unit-1',
    title: 'Au Café',
    description: 'Order food and drinks at a French café.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/fr-cafe/800/420',
    aiTeacherPrompt:
      "You are a warm French teacher. Teach café vocabulary: un café, s'il vous plaît, l'addition, je voudrais. Roleplay ordering at a Parisian café.",
    goals: [
      'Order a drink in French',
      'Ask for the bill politely',
      "Use s'il vous plaît in context",
    ],
    vocabulary: [
      {
        word: 'un café',
        translation: 'a coffee',
        pronunciation: 'uh kah-FEH',
        example: "Un café, s'il vous plaît.",
      },
      {
        word: "s'il vous plaît",
        translation: 'please (formal)',
        pronunciation: 'seel voo PLEH',
        example: "L'addition, s'il vous plaît.",
      },
      {
        word: "l'addition",
        translation: 'the bill',
        pronunciation: 'lah-dee-SYOHN',
        example: "L'addition, s'il vous plaît.",
      },
      {
        word: 'je voudrais',
        translation: 'I would like',
        pronunciation: 'zhuh voo-DREH',
        example: 'Je voudrais un croissant.',
      },
    ],
    phrases: [
      {
        text: 'Vous désirez?',
        translation: 'What would you like?',
        pronunciation: 'voo deh-zee-REH',
      },
      {
        text: "C'est combien?",
        translation: 'How much is it?',
        pronunciation: 'seh kohn-BYAHN',
      },
    ],
    activities: [
      {
        id: 'fr-l3-a1',
        type: 'vocabulary',
        question: 'What does "je voudrais" mean?',
        options: ['I have', 'I want', 'I would like', 'I eat'],
        answer: 'I would like',
      },
      {
        id: 'fr-l3-a2',
        type: 'fill_in_blank',
        question: '"___ un thé, s\'il vous plaît."',
        options: ['Bonjour', 'Je voudrais', 'Merci', 'Au revoir'],
        answer: 'Je voudrais',
      },
      {
        id: 'fr-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at a café with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'fr-lesson-4',
    unitId: 'fr-unit-1',
    title: 'Numbers & Time',
    description: 'Count in French and tell the time.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/fr-numbers/800/420',
    aiTeacherPrompt:
      'You are a warm French teacher. Teach numbers 1–10 and how to tell the time: Il est une heure, Il est midi. Practice counting with simple exercises.',
    goals: [
      'Count from 1 to 10 in French',
      'Tell the time in French',
      'Use numbers in sentences',
    ],
    vocabulary: [
      { word: 'un', translation: '1', pronunciation: 'uhn' },
      { word: 'deux', translation: '2', pronunciation: 'duh' },
      { word: 'trois', translation: '3', pronunciation: 'trwah' },
      { word: 'quatre', translation: '4', pronunciation: 'katr' },
      { word: 'cinq', translation: '5', pronunciation: 'sank' },
      { word: 'six', translation: '6', pronunciation: 'sees' },
      { word: 'sept', translation: '7', pronunciation: 'set' },
      { word: 'huit', translation: '8', pronunciation: 'weet' },
      { word: 'neuf', translation: '9', pronunciation: 'nuhf' },
      { word: 'dix', translation: '10', pronunciation: 'dees' },
      {
        word: 'midi',
        translation: 'noon',
        pronunciation: 'mee-DEE',
        example: 'Il est midi.',
      },
    ],
    phrases: [
      {
        text: 'Quelle heure est-il?',
        translation: 'What time is it?',
        pronunciation: 'kel uhr eh-TEEL',
      },
      {
        text: 'Il est trois heures.',
        translation: "It is three o'clock.",
        pronunciation: 'eel eh trwaz uhr',
      },
    ],
    activities: [
      {
        id: 'fr-l4-a1',
        type: 'vocabulary',
        question: 'What is "trois" in English?',
        options: ['1', '2', '3', '4'],
        answer: '3',
      },
      {
        id: 'fr-l4-a2',
        type: 'fill_in_blank',
        question: 'un, deux, ___',
        options: ['quatre', 'cinq', 'trois', 'six'],
        answer: 'trois',
      },
      {
        id: 'fr-l4-a3',
        type: 'ai_teacher',
        question: 'Practice numbers with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'fr-lesson-5',
    unitId: 'fr-unit-1',
    title: 'Shopping',
    description: 'Buy things and talk about prices in French.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/fr-shopping/800/420',
    aiTeacherPrompt:
      "You are a warm French teacher. Teach: c'est cher, pas cher, je cherche, la taille, combien. Roleplay a shopping trip.",
    goals: [
      'Ask for prices in French',
      'Describe items as expensive or cheap',
      'Complete a simple purchase',
    ],
    vocabulary: [
      {
        word: 'cher',
        translation: 'expensive',
        pronunciation: 'shehr',
        example: "C'est trop cher.",
      },
      {
        word: 'pas cher',
        translation: 'cheap / not expensive',
        pronunciation: 'pah shehr',
        example: 'Ce livre est pas cher.',
      },
      {
        word: 'je cherche',
        translation: 'I am looking for',
        pronunciation: 'zhuh shehrsh',
        example: 'Je cherche une robe.',
      },
      {
        word: 'la taille',
        translation: 'the size',
        pronunciation: 'lah TIE',
        example: 'Quelle est votre taille?',
      },
    ],
    phrases: [
      {
        text: "C'est combien?",
        translation: 'How much is it?',
        pronunciation: 'seh kohn-BYAHN',
      },
      {
        text: 'Je le prends.',
        translation: "I'll take it.",
        pronunciation: 'zhuh luh prahn',
      },
    ],
    activities: [
      {
        id: 'fr-l5-a1',
        type: 'vocabulary',
        question: 'What does "cher" mean?',
        options: ['cheap', 'expensive', 'big', 'beautiful'],
        answer: 'expensive',
      },
      {
        id: 'fr-l5-a2',
        type: 'fill_in_blank',
        question: '"Je ___ une chemise bleue."',
        options: ['voudrais', 'cherche', 'suis', 'mange'],
        answer: 'cherche',
      },
      {
        id: 'fr-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping in French with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'fr-lesson-6',
    unitId: 'fr-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family and describe relationships in French.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/fr-family/800/420',
    aiTeacherPrompt:
      'You are a warm French teacher. Teach family vocabulary: mère, père, frère, sœur, ami. Help the student describe their family.',
    goals: [
      'Name family members in French',
      'Describe your family',
      'Use possessive adjectives (mon, ma)',
    ],
    vocabulary: [
      {
        word: 'mère',
        translation: 'mother',
        pronunciation: 'mehr',
        example: "Ma mère s'appelle Marie.",
      },
      {
        word: 'père',
        translation: 'father',
        pronunciation: 'pehr',
        example: 'Mon père est médecin.',
      },
      {
        word: 'frère',
        translation: 'brother',
        pronunciation: 'frehr',
        example: "J'ai un frère.",
      },
      {
        word: 'ami',
        translation: 'friend',
        pronunciation: 'ah-MEE',
        example: "C'est mon meilleur ami.",
      },
    ],
    phrases: [
      {
        text: "J'ai deux frères.",
        translation: 'I have two brothers.',
        pronunciation: 'zheh duh frehr',
      },
      {
        text: 'Tu as des frères et sœurs?',
        translation: 'Do you have siblings?',
        pronunciation: 'tü ah deh frehr eh suhr',
      },
    ],
    activities: [
      {
        id: 'fr-l6-a1',
        type: 'vocabulary',
        question: 'What does "père" mean?',
        options: ['brother', 'friend', 'mother', 'father'],
        answer: 'father',
      },
      {
        id: 'fr-l6-a2',
        type: 'fill_in_blank',
        question: '"Ma ___ s\'appelle Claire." (My mother…)',
        options: ['père', 'frère', 'mère', 'ami'],
        answer: 'mère',
      },
      {
        id: 'fr-l6-a3',
        type: 'ai_teacher',
        question: 'Describe your family in French to your AI teacher.',
        answer: '',
      },
    ],
  },

  // ── Japanese – Unit 1 ─────────────────────────────────────────────────────

  {
    id: 'ja-lesson-1',
    unitId: 'ja-unit-1',
    title: 'はじめまして',
    description:
      'Learn essential Japanese greetings and how to introduce yourself.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-greetings/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach: こんにちは, おはようございます, こんばんは, はじめまして. Explain polite vs. casual speech briefly.',
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
        translation: 'Please be kind to me.',
        pronunciation: 'yo-ro-shi-ku o-ne-ga-i-shi-mas',
      },
    ],
    activities: [
      {
        id: 'ja-l1-a1',
        type: 'vocabulary',
        question: 'What does "こんにちは" mean?',
        options: [
          'good morning',
          'good night',
          'hello / good afternoon',
          'goodbye',
        ],
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

  {
    id: 'ja-lesson-2',
    unitId: 'ja-unit-1',
    title: 'Numbers & Time',
    description: 'Count in Japanese and tell the time.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-numbers/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach numbers 1–10 in Japanese: ichi, ni, san, shi, go, roku, nana, hachi, ku, juu. Practice counting exercises.',
    goals: [
      'Count from 1 to 10 in Japanese',
      'Recognise hiragana for numbers',
      'Use numbers in sentences',
    ],
    vocabulary: [
      { word: 'いち', translation: '1', pronunciation: 'i-chi' },
      { word: 'に', translation: '2', pronunciation: 'ni' },
      { word: 'さん', translation: '3', pronunciation: 'san' },
      { word: 'ご', translation: '5', pronunciation: 'go' },
    ],
    phrases: [
      {
        text: 'なんじですか？',
        translation: 'What time is it?',
        pronunciation: 'nan-ji des-ka',
      },
      {
        text: 'さんじです。',
        translation: "It is three o'clock.",
        pronunciation: 'san-ji des',
      },
    ],
    activities: [
      {
        id: 'ja-l2-a1',
        type: 'vocabulary',
        question: 'What is "さん" in English?',
        options: ['1', '2', '3', '5'],
        answer: '3',
      },
      {
        id: 'ja-l2-a2',
        type: 'fill_in_blank',
        question: 'いち、に、___',
        options: ['ご', 'よん', 'さん', 'ろく'],
        answer: 'さん',
      },
      {
        id: 'ja-l2-a3',
        type: 'ai_teacher',
        question: 'Practice Japanese numbers with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ja-lesson-3',
    unitId: 'ja-unit-1',
    title: 'At the Restaurant',
    description: 'Order food and drinks at a Japanese restaurant.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-restaurant/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach restaurant phrases: ください, おすすめ, おいしい, おかいけい. Roleplay ordering at a Japanese restaurant.',
    goals: [
      'Order food in Japanese',
      'Ask for the bill',
      'Express that food is delicious',
    ],
    vocabulary: [
      {
        word: 'ください',
        translation: 'please give me',
        pronunciation: 'ku-da-sai',
        example: 'みずをください。',
      },
      {
        word: 'おいしい',
        translation: 'delicious',
        pronunciation: 'o-i-shi-i',
        example: 'これはおいしいです。',
      },
      {
        word: 'おかいけい',
        translation: 'the bill',
        pronunciation: 'o-ka-i-ke-i',
        example: 'おかいけいをください。',
      },
      {
        word: 'おすすめ',
        translation: 'recommendation',
        pronunciation: 'o-su-su-me',
        example: 'おすすめはなんですか？',
      },
    ],
    phrases: [
      {
        text: 'これをください。',
        translation: 'This one please.',
        pronunciation: 'ko-re wo ku-da-sai',
      },
      {
        text: 'とてもおいしいです。',
        translation: 'It is very delicious.',
        pronunciation: 'to-te-mo o-i-shi-i des',
      },
    ],
    activities: [
      {
        id: 'ja-l3-a1',
        type: 'vocabulary',
        question: 'What does "おいしい" mean?',
        options: ['expensive', 'delicious', 'big', 'hot'],
        answer: 'delicious',
      },
      {
        id: 'ja-l3-a2',
        type: 'fill_in_blank',
        question: '"みずを ___。" (Water please)',
        options: ['ありがとう', 'ください', 'おいしい', 'どうぞ'],
        answer: 'ください',
      },
      {
        id: 'ja-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at a restaurant with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ja-lesson-4',
    unitId: 'ja-unit-1',
    title: 'Getting Around',
    description: 'Navigate Japan with essential travel phrases.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-travel/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach transport and direction phrases: えき, みぎ, ひだり, まっすぐ, どこ. Roleplay asking for directions.',
    goals: [
      'Ask for directions in Japanese',
      'Understand basic transport vocabulary',
      'Name common places',
    ],
    vocabulary: [
      {
        word: 'えき',
        translation: 'train station',
        pronunciation: 'e-ki',
        example: 'えきはどこですか？',
      },
      {
        word: 'みぎ',
        translation: 'right',
        pronunciation: 'mi-gi',
        example: 'みぎにまがってください。',
      },
      {
        word: 'ひだり',
        translation: 'left',
        pronunciation: 'hi-da-ri',
        example: 'ひだりにいってください。',
      },
      {
        word: 'まっすぐ',
        translation: 'straight ahead',
        pronunciation: 'mas-su-gu',
        example: 'まっすぐいってください。',
      },
    ],
    phrases: [
      {
        text: 'えきはどこですか？',
        translation: 'Where is the train station?',
        pronunciation: 'e-ki wa do-ko des-ka',
      },
      {
        text: 'ちかいですか？',
        translation: 'Is it near?',
        pronunciation: 'chi-ka-i des-ka',
      },
    ],
    activities: [
      {
        id: 'ja-l4-a1',
        type: 'vocabulary',
        question: 'What does "みぎ" mean?',
        options: ['left', 'straight', 'right', 'stop'],
        answer: 'right',
      },
      {
        id: 'ja-l4-a2',
        type: 'fill_in_blank',
        question: '"___ はどこですか？" (Where is the station?)',
        options: ['バス', 'えき', 'みぎ', 'ひだり'],
        answer: 'えき',
      },
      {
        id: 'ja-l4-a3',
        type: 'ai_teacher',
        question: 'Practice asking for directions with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ja-lesson-5',
    unitId: 'ja-unit-1',
    title: 'Shopping',
    description: 'Shop in Japan and ask about prices.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-shopping/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach shopping phrases: いくらですか, たかい, やすい, かいます. Roleplay a shopping trip.',
    goals: [
      'Ask for prices in Japanese',
      'Say something is expensive or cheap',
      'Complete a purchase',
    ],
    vocabulary: [
      {
        word: 'いくら',
        translation: 'how much',
        pronunciation: 'i-ku-ra',
        example: 'これはいくらですか？',
      },
      {
        word: 'たかい',
        translation: 'expensive',
        pronunciation: 'ta-ka-i',
        example: 'これはたかいです。',
      },
      {
        word: 'やすい',
        translation: 'cheap',
        pronunciation: 'ya-su-i',
        example: 'このシャツはやすいです。',
      },
      {
        word: 'かいます',
        translation: 'I will buy',
        pronunciation: 'ka-i-mas',
        example: 'これをかいます。',
      },
    ],
    phrases: [
      {
        text: 'これはいくらですか？',
        translation: 'How much is this?',
        pronunciation: 'ko-re wa i-ku-ra des-ka',
      },
      {
        text: 'これをください。',
        translation: "I'll take this.",
        pronunciation: 'ko-re wo ku-da-sai',
      },
    ],
    activities: [
      {
        id: 'ja-l5-a1',
        type: 'vocabulary',
        question: 'What does "やすい" mean?',
        options: ['expensive', 'big', 'cheap', 'new'],
        answer: 'cheap',
      },
      {
        id: 'ja-l5-a2',
        type: 'fill_in_blank',
        question: '"これは ___ ですか？" (How much is this?)',
        options: ['なに', 'いくら', 'どこ', 'だれ'],
        answer: 'いくら',
      },
      {
        id: 'ja-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping in Japanese with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ja-lesson-6',
    unitId: 'ja-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family in Japanese.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ja-family/800/420',
    aiTeacherPrompt:
      'You are a patient Japanese teacher. Teach family vocabulary: おかあさん, おとうさん, あに, いもうと, ともだち. Help the student describe their family.',
    goals: [
      'Name family members in Japanese',
      'Describe your family',
      'Use です in sentences',
    ],
    vocabulary: [
      {
        word: 'おかあさん',
        translation: 'mother',
        pronunciation: 'o-ka-a-san',
        example: 'おかあさんはやさしいです。',
      },
      {
        word: 'おとうさん',
        translation: 'father',
        pronunciation: 'o-to-u-san',
        example: 'おとうさんはいしゃです。',
      },
      {
        word: 'あに',
        translation: 'older brother',
        pronunciation: 'a-ni',
        example: 'あには東京にいます。',
      },
      {
        word: 'ともだち',
        translation: 'friend',
        pronunciation: 'to-mo-da-chi',
        example: 'ともだちとあそびます。',
      },
    ],
    phrases: [
      {
        text: 'かぞくはなんにんですか？',
        translation: 'How many people are in your family?',
        pronunciation: 'ka-zo-ku wa nan-nin des-ka',
      },
      {
        text: 'よにんかぞくです。',
        translation: 'My family has four people.',
        pronunciation: 'yo-nin ka-zo-ku des',
      },
    ],
    activities: [
      {
        id: 'ja-l6-a1',
        type: 'vocabulary',
        question: 'What does "おとうさん" mean?',
        options: ['mother', 'brother', 'friend', 'father'],
        answer: 'father',
      },
      {
        id: 'ja-l6-a2',
        type: 'fill_in_blank',
        question: '"___ はやさしいです。" (Mother is kind.)',
        options: ['おとうさん', 'あに', 'おかあさん', 'ともだち'],
        answer: 'おかあさん',
      },
      {
        id: 'ja-l6-a3',
        type: 'ai_teacher',
        question: 'Describe your family in Japanese to your AI teacher.',
        answer: '',
      },
    ],
  },

  // ── German – Unit 1 ───────────────────────────────────────────────────────

  {
    id: 'de-lesson-1',
    unitId: 'de-unit-1',
    title: 'Hallo!',
    description: 'Learn German greetings and a simple self-introduction.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-greetings/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach: Hallo, Guten Morgen, Guten Abend, Tschüss, Auf Wiedersehen. Practice introductions with "Ich heiße…".',
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
        example: "Hallo, wie geht's?",
      },
      {
        word: 'Guten Morgen',
        translation: 'good morning',
        pronunciation: 'GOO-ten MOR-gen',
        example: 'Guten Morgen, Frau Müller.',
      },
      {
        word: 'Tschüss',
        translation: 'bye (informal)',
        pronunciation: 'chüss',
        example: 'Tschüss, bis morgen!',
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
        type: 'ai_teacher',
        question: 'Practice German greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'de-lesson-2',
    unitId: 'de-unit-1',
    title: 'Daily Life',
    description: 'Describe your daily routine in German.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-daily/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach daily routine vocabulary: Frühstück, Arbeit, Haus, schlafen. Help form simple sentences about the day.',
    goals: [
      'Describe a daily routine in German',
      'Use common verbs',
      'Talk about times of day',
    ],
    vocabulary: [
      {
        word: 'Frühstück',
        translation: 'breakfast',
        pronunciation: 'FRÜH-shtük',
        example: 'Ich esse Frühstück um acht Uhr.',
      },
      {
        word: 'Arbeit',
        translation: 'work',
        pronunciation: 'AR-byte',
        example: 'Ich gehe zur Arbeit.',
      },
      {
        word: 'Haus',
        translation: 'house',
        pronunciation: 'hows',
        example: 'Ich bin zu Hause.',
      },
      {
        word: 'schlafen',
        translation: 'to sleep',
        pronunciation: 'SHLAH-fen',
        example: 'Ich schlafe acht Stunden.',
      },
    ],
    phrases: [
      {
        text: 'Was machst du jeden Tag?',
        translation: 'What do you do every day?',
        pronunciation: 'vahs mahkst doo YEH-den tahk',
      },
      {
        text: 'Ich stehe um sieben Uhr auf.',
        translation: "I wake up at seven o'clock.",
        pronunciation: 'ikh SHTEH-eh oom ZEE-ben oor owf',
      },
    ],
    activities: [
      {
        id: 'de-l2-a1',
        type: 'vocabulary',
        question: 'What does "Frühstück" mean?',
        options: ['lunch', 'dinner', 'breakfast', 'snack'],
        answer: 'breakfast',
      },
      {
        id: 'de-l2-a2',
        type: 'fill_in_blank',
        question: '"Ich bin zu ___." (I am at home.)',
        options: ['Arbeit', 'Hause', 'Schule', 'Markt'],
        answer: 'Hause',
      },
      {
        id: 'de-l2-a3',
        type: 'ai_teacher',
        question: 'Describe your daily routine to your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'de-lesson-3',
    unitId: 'de-unit-1',
    title: 'Im Café',
    description: 'Order food and drinks at a German café.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-cafe/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach: einen Kaffee bitte, die Rechnung, ich möchte, was kostet das. Roleplay ordering at a café.',
    goals: [
      'Order a drink in German',
      'Ask for the bill',
      'Use polite café phrases',
    ],
    vocabulary: [
      {
        word: 'einen Kaffee',
        translation: 'a coffee',
        pronunciation: 'EY-nen KAH-feh',
        example: 'Ich möchte einen Kaffee.',
      },
      {
        word: 'bitte',
        translation: 'please',
        pronunciation: 'BIT-eh',
        example: 'Einen Tee, bitte.',
      },
      {
        word: 'die Rechnung',
        translation: 'the bill',
        pronunciation: 'dee REKH-noong',
        example: 'Die Rechnung, bitte.',
      },
      {
        word: 'ich möchte',
        translation: 'I would like',
        pronunciation: 'ikh MÖHKH-teh',
        example: 'Ich möchte ein Croissant.',
      },
    ],
    phrases: [
      {
        text: 'Was darf es sein?',
        translation: 'What can I get you?',
        pronunciation: 'vahs darf es zyn',
      },
      {
        text: 'Was kostet das?',
        translation: 'How much does that cost?',
        pronunciation: 'vahs KOS-tet dahs',
      },
    ],
    activities: [
      {
        id: 'de-l3-a1',
        type: 'vocabulary',
        question: 'What does "die Rechnung" mean?',
        options: ['the menu', 'the waiter', 'the bill', 'the coffee'],
        answer: 'the bill',
      },
      {
        id: 'de-l3-a2',
        type: 'fill_in_blank',
        question: '"Ich ___ einen Kaffee."',
        options: ['habe', 'möchte', 'bin', 'gehe'],
        answer: 'möchte',
      },
      {
        id: 'de-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at a café with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'de-lesson-4',
    unitId: 'de-unit-1',
    title: 'Travel & Directions',
    description: 'Ask for and understand directions in German.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-travel/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach: rechts, links, geradeaus, wo ist, Entschuldigung. Roleplay asking for directions.',
    goals: [
      'Ask where something is in German',
      'Understand left/right/straight',
      'Name common places',
    ],
    vocabulary: [
      {
        word: 'rechts',
        translation: 'right',
        pronunciation: 'rekhts',
        example: 'Biegen Sie rechts ab.',
      },
      {
        word: 'links',
        translation: 'left',
        pronunciation: 'links',
        example: 'Die Bank ist links.',
      },
      {
        word: 'geradeaus',
        translation: 'straight ahead',
        pronunciation: 'geh-RAH-deh-owss',
        example: 'Gehen Sie geradeaus.',
      },
      {
        word: 'wo ist',
        translation: 'where is',
        pronunciation: 'voh ist',
        example: 'Wo ist der Bahnhof?',
      },
    ],
    phrases: [
      {
        text: 'Entschuldigung, wo ist der Bahnhof?',
        translation: 'Excuse me, where is the station?',
        pronunciation: 'ent-SHOOL-dee-goong, voh ist dehr BAHN-hof',
      },
      {
        text: 'Es ist nicht weit.',
        translation: 'It is not far.',
        pronunciation: 'es ist nikht vyt',
      },
    ],
    activities: [
      {
        id: 'de-l4-a1',
        type: 'vocabulary',
        question: 'What does "geradeaus" mean?',
        options: ['turn left', 'turn right', 'straight ahead', 'stop'],
        answer: 'straight ahead',
      },
      {
        id: 'de-l4-a2',
        type: 'fill_in_blank',
        question: '"___ ist der Bahnhof?"',
        options: ['Was', 'Wer', 'Wo', 'Wie'],
        answer: 'Wo',
      },
      {
        id: 'de-l4-a3',
        type: 'ai_teacher',
        question: 'Practice asking for directions with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'de-lesson-5',
    unitId: 'de-unit-1',
    title: 'Shopping',
    description: 'Buy things and talk about prices in German.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-shopping/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach: teuer, billig, ich suche, die Größe, wie viel kostet. Roleplay shopping.',
    goals: [
      'Ask for prices in German',
      'Describe items as cheap or expensive',
      'Complete a purchase',
    ],
    vocabulary: [
      {
        word: 'teuer',
        translation: 'expensive',
        pronunciation: 'TOY-er',
        example: 'Das ist zu teuer.',
      },
      {
        word: 'billig',
        translation: 'cheap',
        pronunciation: 'BIL-ig',
        example: 'Das ist sehr billig!',
      },
      {
        word: 'ich suche',
        translation: 'I am looking for',
        pronunciation: 'ikh ZOO-kheh',
        example: 'Ich suche ein T-Shirt.',
      },
      {
        word: 'die Größe',
        translation: 'the size',
        pronunciation: 'dee GROH-sse',
        example: 'Welche Größe haben Sie?',
      },
    ],
    phrases: [
      {
        text: 'Wie viel kostet das?',
        translation: 'How much does that cost?',
        pronunciation: 'vee feel KOS-tet dahs',
      },
      {
        text: 'Ich nehme es.',
        translation: "I'll take it.",
        pronunciation: 'ikh NEH-meh es',
      },
    ],
    activities: [
      {
        id: 'de-l5-a1',
        type: 'vocabulary',
        question: 'What does "billig" mean?',
        options: ['expensive', 'beautiful', 'cheap', 'big'],
        answer: 'cheap',
      },
      {
        id: 'de-l5-a2',
        type: 'fill_in_blank',
        question: '"Ich ___ ein Hemd." (I am looking for a shirt.)',
        options: ['kaufe', 'suche', 'finde', 'nehme'],
        answer: 'suche',
      },
      {
        id: 'de-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping in German with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'de-lesson-6',
    unitId: 'de-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family and relationships in German.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/de-family/800/420',
    aiTeacherPrompt:
      'You are a friendly German teacher. Teach family vocabulary: Mutter, Vater, Bruder, Schwester, Freund. Help the student describe their family.',
    goals: [
      'Name family members in German',
      'Describe your family',
      'Use mein/meine correctly',
    ],
    vocabulary: [
      {
        word: 'Mutter',
        translation: 'mother',
        pronunciation: 'MOO-ter',
        example: 'Meine Mutter heißt Anna.',
      },
      {
        word: 'Vater',
        translation: 'father',
        pronunciation: 'FAH-ter',
        example: 'Mein Vater arbeitet in Berlin.',
      },
      {
        word: 'Bruder',
        translation: 'brother',
        pronunciation: 'BROO-der',
        example: 'Ich habe einen Bruder.',
      },
      {
        word: 'Freund',
        translation: 'friend',
        pronunciation: 'froynt',
        example: 'Er ist mein bester Freund.',
      },
    ],
    phrases: [
      {
        text: 'Ich habe zwei Geschwister.',
        translation: 'I have two siblings.',
        pronunciation: 'ikh HAH-beh tsvy geh-SHVIS-ter',
      },
      {
        text: 'Hast du Geschwister?',
        translation: 'Do you have siblings?',
        pronunciation: 'hast doo geh-SHVIS-ter',
      },
    ],
    activities: [
      {
        id: 'de-l6-a1',
        type: 'vocabulary',
        question: 'What does "Vater" mean?',
        options: ['brother', 'friend', 'mother', 'father'],
        answer: 'father',
      },
      {
        id: 'de-l6-a2',
        type: 'fill_in_blank',
        question: '"Meine ___ heißt Anna." (My mother…)',
        options: ['Vater', 'Bruder', 'Mutter', 'Freund'],
        answer: 'Mutter',
      },
      {
        id: 'de-l6-a3',
        type: 'ai_teacher',
        question: 'Describe your family in German to your AI teacher.',
        answer: '',
      },
    ],
  },

  // ── Korean – Unit 1 ───────────────────────────────────────────────────────

  {
    id: 'ko-lesson-1',
    unitId: 'ko-unit-1',
    title: 'Greetings & Introductions',
    description: 'Learn essential Korean greetings and self-introduction.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-greetings/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach: 안녕하세요, 안녕히 계세요, 반갑습니다, 저는 [name]입니다. Explain formal speech.',
    goals: [
      'Say hello and goodbye in Korean',
      'Introduce yourself',
      'Recognise Hangul greetings',
    ],
    vocabulary: [
      {
        word: '안녕하세요',
        translation: 'hello (formal)',
        pronunciation: 'an-nyeong-ha-se-yo',
        example: '안녕하세요, 선생님.',
      },
      {
        word: '안녕히 계세요',
        translation: 'goodbye (to one staying)',
        pronunciation: 'an-nyeong-hi gye-se-yo',
        example: '안녕히 계세요!',
      },
      {
        word: '반갑습니다',
        translation: 'nice to meet you',
        pronunciation: 'ban-gap-seum-ni-da',
        example: '반갑습니다, 저는 민준입니다.',
      },
      {
        word: '감사합니다',
        translation: 'thank you',
        pronunciation: 'gam-sa-ham-ni-da',
        example: '감사합니다!',
      },
    ],
    phrases: [
      {
        text: '저는 [name]입니다.',
        translation: 'I am [name].',
        pronunciation: 'jeo-neun [name] im-ni-da',
      },
      {
        text: '잘 부탁드립니다.',
        translation: 'Please take care of me.',
        pronunciation: 'jal bu-tak-deu-rim-ni-da',
      },
    ],
    activities: [
      {
        id: 'ko-l1-a1',
        type: 'vocabulary',
        question: 'What does "안녕하세요" mean?',
        options: ['goodbye', 'thank you', 'hello (formal)', 'nice to meet you'],
        answer: 'hello (formal)',
      },
      {
        id: 'ko-l1-a2',
        type: 'vocabulary',
        question: 'Which phrase means "nice to meet you"?',
        options: ['감사합니다', '안녕하세요', '반갑습니다', '안녕히 계세요'],
        answer: '반갑습니다',
      },
      {
        id: 'ko-l1-a3',
        type: 'ai_teacher',
        question: 'Practice Korean greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ko-lesson-2',
    unitId: 'ko-unit-1',
    title: 'Daily Life',
    description: 'Talk about everyday activities in Korean.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-daily/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach daily routine vocabulary: 아침, 학교, 집, 자다. Help the student form simple sentences.',
    goals: [
      'Describe a daily routine in Korean',
      'Use common verbs',
      'Talk about places',
    ],
    vocabulary: [
      {
        word: '아침',
        translation: 'morning / breakfast',
        pronunciation: 'a-chim',
        example: '아침을 먹어요.',
      },
      {
        word: '학교',
        translation: 'school',
        pronunciation: 'hak-gyo',
        example: '학교에 가요.',
      },
      {
        word: '집',
        translation: 'house / home',
        pronunciation: 'jip',
        example: '집에 있어요.',
      },
      {
        word: '자다',
        translation: 'to sleep',
        pronunciation: 'ja-da',
        example: '일찍 자요.',
      },
    ],
    phrases: [
      {
        text: '매일 뭐 해요?',
        translation: 'What do you do every day?',
        pronunciation: 'mae-il mwo hae-yo',
      },
      {
        text: '일곱 시에 일어나요.',
        translation: 'I wake up at 7.',
        pronunciation: 'il-gop si-e i-reo-na-yo',
      },
    ],
    activities: [
      {
        id: 'ko-l2-a1',
        type: 'vocabulary',
        question: 'What does "집" mean?',
        options: ['school', 'morning', 'house', 'sleep'],
        answer: 'house',
      },
      {
        id: 'ko-l2-a2',
        type: 'fill_in_blank',
        question: '"___ 에 가요." (I go to school.)',
        options: ['집', '학교', '아침', '친구'],
        answer: '학교',
      },
      {
        id: 'ko-l2-a3',
        type: 'ai_teacher',
        question: 'Describe your daily routine to your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ko-lesson-3',
    unitId: 'ko-unit-1',
    title: 'At the Café',
    description: 'Order food and drinks at a Korean café.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-cafe/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach café phrases: 주세요, 아메리카노, 얼마예요, 주문. Roleplay ordering at a Korean café.',
    goals: [
      'Order a drink in Korean',
      'Ask for the price',
      'Use 주세요 correctly',
    ],
    vocabulary: [
      {
        word: '주세요',
        translation: 'please give me',
        pronunciation: 'ju-se-yo',
        example: '아메리카노 주세요.',
      },
      {
        word: '아메리카노',
        translation: 'Americano coffee',
        pronunciation: 'a-me-ri-ka-no',
        example: '아이스 아메리카노 주세요.',
      },
      {
        word: '얼마예요',
        translation: 'how much is it',
        pronunciation: 'eol-ma-ye-yo',
        example: '이거 얼마예요?',
      },
      {
        word: '영수증',
        translation: 'receipt',
        pronunciation: 'yeong-su-jeung',
        example: '영수증 주세요.',
      },
    ],
    phrases: [
      {
        text: '주문하시겠어요?',
        translation: 'Are you ready to order?',
        pronunciation: 'ju-mun-ha-si-ge-sseo-yo',
      },
      {
        text: '이거 하나 주세요.',
        translation: 'One of these, please.',
        pronunciation: 'i-geo ha-na ju-se-yo',
      },
    ],
    activities: [
      {
        id: 'ko-l3-a1',
        type: 'vocabulary',
        question: 'What does "얼마예요" mean?',
        options: ['please', 'thank you', 'how much is it', 'delicious'],
        answer: 'how much is it',
      },
      {
        id: 'ko-l3-a2',
        type: 'fill_in_blank',
        question: '"아메리카노 ___." (Americano please.)',
        options: ['감사합니다', '주세요', '안녕하세요', '반갑습니다'],
        answer: '주세요',
      },
      {
        id: 'ko-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at a café with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ko-lesson-4',
    unitId: 'ko-unit-1',
    title: 'Travel & Directions',
    description: 'Navigate Korea with essential travel phrases.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-travel/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach: 오른쪽, 왼쪽, 직진, 어디예요. Roleplay asking for directions.',
    goals: [
      'Ask for directions in Korean',
      'Understand left/right/straight',
      'Name common places',
    ],
    vocabulary: [
      {
        word: '오른쪽',
        translation: 'right',
        pronunciation: 'o-reun-jjok',
        example: '오른쪽으로 가세요.',
      },
      {
        word: '왼쪽',
        translation: 'left',
        pronunciation: 'oen-jjok',
        example: '왼쪽에 있어요.',
      },
      {
        word: '직진',
        translation: 'straight ahead',
        pronunciation: 'jik-jin',
        example: '직진하세요.',
      },
      {
        word: '지하철역',
        translation: 'subway station',
        pronunciation: 'ji-ha-cheol-yeok',
        example: '지하철역이 어디예요?',
      },
    ],
    phrases: [
      {
        text: '지하철역이 어디예요?',
        translation: 'Where is the subway station?',
        pronunciation: 'ji-ha-cheol-yeok-i eo-di-ye-yo',
      },
      {
        text: '가까워요?',
        translation: 'Is it near?',
        pronunciation: 'ga-kka-wo-yo',
      },
    ],
    activities: [
      {
        id: 'ko-l4-a1',
        type: 'vocabulary',
        question: 'What does "직진" mean?',
        options: ['turn left', 'turn right', 'straight ahead', 'stop'],
        answer: 'straight ahead',
      },
      {
        id: 'ko-l4-a2',
        type: 'fill_in_blank',
        question: '"지하철역이 ___ 예요?"',
        options: ['얼마', '어디', '누구', '언제'],
        answer: '어디',
      },
      {
        id: 'ko-l4-a3',
        type: 'ai_teacher',
        question: 'Practice asking for directions with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ko-lesson-5',
    unitId: 'ko-unit-1',
    title: 'Shopping',
    description: 'Shop in Korea and ask about prices.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-shopping/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach: 비싸다, 싸다, 사다, 사이즈. Roleplay a shopping trip.',
    goals: [
      'Ask for prices in Korean',
      'Say something is expensive or cheap',
      'Complete a purchase',
    ],
    vocabulary: [
      {
        word: '비싸요',
        translation: 'expensive',
        pronunciation: 'bi-ssa-yo',
        example: '이거 너무 비싸요.',
      },
      {
        word: '싸요',
        translation: 'cheap',
        pronunciation: 'ssa-yo',
        example: '이 가방 정말 싸요!',
      },
      {
        word: '살게요',
        translation: 'I will buy it',
        pronunciation: 'sal-ge-yo',
        example: '이거 살게요.',
      },
      {
        word: '사이즈',
        translation: 'size',
        pronunciation: 'sa-i-jeu',
        example: '어떤 사이즈 드릴까요?',
      },
    ],
    phrases: [
      {
        text: '이거 얼마예요?',
        translation: 'How much is this?',
        pronunciation: 'i-geo eol-ma-ye-yo',
      },
      {
        text: '이거 주세요.',
        translation: "I'll take this.",
        pronunciation: 'i-geo ju-se-yo',
      },
    ],
    activities: [
      {
        id: 'ko-l5-a1',
        type: 'vocabulary',
        question: 'What does "싸요" mean?',
        options: ['expensive', 'new', 'cheap', 'big'],
        answer: 'cheap',
      },
      {
        id: 'ko-l5-a2',
        type: 'fill_in_blank',
        question: '"이거 ___ 예요?" (How much is this?)',
        options: ['언제', '누구', '얼마', '어디'],
        answer: '얼마',
      },
      {
        id: 'ko-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping in Korean with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'ko-lesson-6',
    unitId: 'ko-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family in Korean.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/ko-family/800/420',
    aiTeacherPrompt:
      'You are a patient Korean teacher. Teach: 엄마, 아빠, 오빠, 친구. Help the student describe their family.',
    goals: [
      'Name family members in Korean',
      'Describe your family',
      'Use 있어요 in sentences',
    ],
    vocabulary: [
      {
        word: '엄마',
        translation: 'mom',
        pronunciation: 'eom-ma',
        example: '엄마가 요리해요.',
      },
      {
        word: '아빠',
        translation: 'dad',
        pronunciation: 'a-ppa',
        example: '아빠는 회사원이에요.',
      },
      {
        word: '오빠',
        translation: 'older brother (female speaker)',
        pronunciation: 'o-ppa',
        example: '오빠가 있어요.',
      },
      {
        word: '친구',
        translation: 'friend',
        pronunciation: 'chin-gu',
        example: '제 친구는 재미있어요.',
      },
    ],
    phrases: [
      {
        text: '형제가 있어요?',
        translation: 'Do you have siblings?',
        pronunciation: 'hyeong-je-ga i-sseo-yo',
      },
      {
        text: '가족이 몇 명이에요?',
        translation: 'How many people are in your family?',
        pronunciation: 'ga-jok-i myeot myeong-i-e-yo',
      },
    ],
    activities: [
      {
        id: 'ko-l6-a1',
        type: 'vocabulary',
        question: 'What does "아빠" mean?',
        options: ['mom', 'brother', 'friend', 'dad'],
        answer: 'dad',
      },
      {
        id: 'ko-l6-a2',
        type: 'fill_in_blank',
        question: '"___ 가 요리해요." (Mom cooks.)',
        options: ['아빠', '친구', '엄마', '오빠'],
        answer: '엄마',
      },
      {
        id: 'ko-l6-a3',
        type: 'ai_teacher',
        question: 'Describe your family in Korean to your AI teacher.',
        answer: '',
      },
    ],
  },

  // ── Chinese – Unit 1 ──────────────────────────────────────────────────────

  {
    id: 'zh-lesson-1',
    unitId: 'zh-unit-1',
    title: 'Greetings & Introductions',
    description: 'Learn essential Mandarin greetings and introduce yourself.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-greetings/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach: 你好, 再见, 谢谢, 我叫[name]. Keep it simple and fun.',
    goals: [
      'Say hello and goodbye in Mandarin',
      'Introduce yourself',
      'Use 谢谢 appropriately',
    ],
    vocabulary: [
      {
        word: '你好',
        translation: 'hello',
        pronunciation: 'nǐ hǎo',
        example: '你好，我是学生。',
      },
      {
        word: '再见',
        translation: 'goodbye',
        pronunciation: 'zài jiàn',
        example: '再见，明天见！',
      },
      {
        word: '谢谢',
        translation: 'thank you',
        pronunciation: 'xiè xiè',
        example: '谢谢你！',
      },
      {
        word: '我叫',
        translation: 'my name is',
        pronunciation: 'wǒ jiào',
        example: '我叫小明。',
      },
    ],
    phrases: [
      {
        text: '你好吗？',
        translation: 'How are you?',
        pronunciation: 'nǐ hǎo ma',
      },
      {
        text: '我很好，谢谢。',
        translation: "I'm fine, thank you.",
        pronunciation: 'wǒ hěn hǎo, xiè xiè',
      },
    ],
    activities: [
      {
        id: 'zh-l1-a1',
        type: 'vocabulary',
        question: 'What does "你好" mean?',
        options: ['goodbye', 'thank you', 'hello', 'please'],
        answer: 'hello',
      },
      {
        id: 'zh-l1-a2',
        type: 'vocabulary',
        question: 'Which phrase means "thank you"?',
        options: ['你好', '再见', '谢谢', '我叫'],
        answer: '谢谢',
      },
      {
        id: 'zh-l1-a3',
        type: 'ai_teacher',
        question: 'Practice Mandarin greetings with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'zh-lesson-2',
    unitId: 'zh-unit-1',
    title: 'Daily Life',
    description: 'Talk about everyday activities in Mandarin.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-daily/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach daily routine: 早饭, 上班, 家, 睡觉. Help form simple sentences.',
    goals: [
      'Describe daily routines in Mandarin',
      'Use common verbs',
      'Talk about home and work',
    ],
    vocabulary: [
      {
        word: '早饭',
        translation: 'breakfast',
        pronunciation: 'zǎo fàn',
        example: '我吃早饭。',
      },
      {
        word: '上班',
        translation: 'go to work',
        pronunciation: 'shàng bān',
        example: '我每天上班。',
      },
      {
        word: '家',
        translation: 'home / family',
        pronunciation: 'jiā',
        example: '我在家。',
      },
      {
        word: '睡觉',
        translation: 'to sleep',
        pronunciation: 'shuì jiào',
        example: '我十点睡觉。',
      },
    ],
    phrases: [
      {
        text: '你每天做什么？',
        translation: 'What do you do every day?',
        pronunciation: 'nǐ měi tiān zuò shén me',
      },
      {
        text: '我七点起床。',
        translation: 'I get up at seven.',
        pronunciation: 'wǒ qī diǎn qǐ chuáng',
      },
    ],
    activities: [
      {
        id: 'zh-l2-a1',
        type: 'vocabulary',
        question: 'What does "家" mean?',
        options: ['work', 'breakfast', 'sleep', 'home'],
        answer: 'home',
      },
      {
        id: 'zh-l2-a2',
        type: 'fill_in_blank',
        question: '"我___ 早饭。" (I eat breakfast.)',
        options: ['喝', '看', '吃', '买'],
        answer: '吃',
      },
      {
        id: 'zh-l2-a3',
        type: 'ai_teacher',
        question: 'Describe your daily routine to your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'zh-lesson-3',
    unitId: 'zh-unit-1',
    title: 'At the Café',
    description: 'Order food and drinks at a Chinese café or teahouse.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-cafe/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach: 请给我, 一杯茶, 多少钱, 买单. Roleplay ordering at a café.',
    goals: [
      'Order a drink in Mandarin',
      'Ask for the bill',
      'Use polite phrases',
    ],
    vocabulary: [
      {
        word: '请给我',
        translation: 'please give me',
        pronunciation: 'qǐng gěi wǒ',
        example: '请给我一杯茶。',
      },
      {
        word: '一杯茶',
        translation: 'a cup of tea',
        pronunciation: 'yī bēi chá',
        example: '请给我一杯茶。',
      },
      {
        word: '多少钱',
        translation: 'how much money',
        pronunciation: 'duō shǎo qián',
        example: '这个多少钱？',
      },
      {
        word: '买单',
        translation: 'the bill',
        pronunciation: 'mǎi dān',
        example: '买单，谢谢。',
      },
    ],
    phrases: [
      {
        text: '你想要什么？',
        translation: 'What would you like?',
        pronunciation: 'nǐ xiǎng yào shén me',
      },
      {
        text: '这个多少钱？',
        translation: 'How much is this?',
        pronunciation: 'zhè ge duō shǎo qián',
      },
    ],
    activities: [
      {
        id: 'zh-l3-a1',
        type: 'vocabulary',
        question: 'What does "多少钱" mean?',
        options: ['please', 'thank you', 'how much money', 'the bill'],
        answer: 'how much money',
      },
      {
        id: 'zh-l3-a2',
        type: 'fill_in_blank',
        question: '"请给我 ___。" (Please give me a cup of tea.)',
        options: ['买单', '多少钱', '一杯茶', '谢谢'],
        answer: '一杯茶',
      },
      {
        id: 'zh-l3-a3',
        type: 'ai_teacher',
        question: 'Practice ordering at a café with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'zh-lesson-4',
    unitId: 'zh-unit-1',
    title: 'Travel & Directions',
    description: 'Navigate China with essential travel phrases.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-travel/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach: 右边, 左边, 直走, 在哪里. Roleplay asking for directions.',
    goals: [
      'Ask for directions in Mandarin',
      'Understand basic directions',
      'Name common places',
    ],
    vocabulary: [
      {
        word: '右边',
        translation: 'right side',
        pronunciation: 'yòu biān',
        example: '地铁站在右边。',
      },
      {
        word: '左边',
        translation: 'left side',
        pronunciation: 'zuǒ biān',
        example: '医院在左边。',
      },
      {
        word: '直走',
        translation: 'go straight',
        pronunciation: 'zhí zǒu',
        example: '请直走。',
      },
      {
        word: '在哪里',
        translation: 'where is it',
        pronunciation: 'zài nǎ lǐ',
        example: '地铁站在哪里？',
      },
    ],
    phrases: [
      {
        text: '请问，地铁站在哪里？',
        translation: 'Excuse me, where is the subway?',
        pronunciation: 'qǐng wèn, dì tiě zhàn zài nǎ lǐ',
      },
      { text: '很近。', translation: 'Very close.', pronunciation: 'hěn jìn' },
    ],
    activities: [
      {
        id: 'zh-l4-a1',
        type: 'vocabulary',
        question: 'What does "直走" mean?',
        options: ['turn left', 'turn right', 'go straight', 'stop'],
        answer: 'go straight',
      },
      {
        id: 'zh-l4-a2',
        type: 'fill_in_blank',
        question: '"地铁站___ 哪里？"',
        options: ['是', '在', '有', '去'],
        answer: '在',
      },
      {
        id: 'zh-l4-a3',
        type: 'ai_teacher',
        question: 'Practice asking for directions with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'zh-lesson-5',
    unitId: 'zh-unit-1',
    title: 'Shopping',
    description: 'Shop in China and ask about prices.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-shopping/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach: 贵, 便宜, 我要买, 尺码. Roleplay a shopping trip.',
    goals: [
      'Ask for prices in Mandarin',
      'Say something is expensive or cheap',
      'Complete a purchase',
    ],
    vocabulary: [
      {
        word: '贵',
        translation: 'expensive',
        pronunciation: 'guì',
        example: '这个太贵了。',
      },
      {
        word: '便宜',
        translation: 'cheap',
        pronunciation: 'pián yí',
        example: '这个很便宜！',
      },
      {
        word: '我要买',
        translation: 'I want to buy',
        pronunciation: 'wǒ yào mǎi',
        example: '我要买这件衬衫。',
      },
      {
        word: '尺码',
        translation: 'size',
        pronunciation: 'chǐ mǎ',
        example: '你穿什么尺码？',
      },
    ],
    phrases: [
      {
        text: '这个多少钱？',
        translation: 'How much is this?',
        pronunciation: 'zhè ge duō shǎo qián',
      },
      {
        text: '我买了。',
        translation: "I'll buy it.",
        pronunciation: 'wǒ mǎi le',
      },
    ],
    activities: [
      {
        id: 'zh-l5-a1',
        type: 'vocabulary',
        question: 'What does "便宜" mean?',
        options: ['expensive', 'beautiful', 'cheap', 'large'],
        answer: 'cheap',
      },
      {
        id: 'zh-l5-a2',
        type: 'fill_in_blank',
        question: '"这个太 ___ 了。" (This is too expensive.)',
        options: ['便宜', '好', '贵', '大'],
        answer: '贵',
      },
      {
        id: 'zh-l5-a3',
        type: 'ai_teacher',
        question: 'Practice shopping in Mandarin with your AI teacher.',
        answer: '',
      },
    ],
  },

  {
    id: 'zh-lesson-6',
    unitId: 'zh-unit-1',
    title: 'Family & Friends',
    description: 'Talk about your family in Mandarin.',
    xpReward: 10,
    image: 'https://picsum.photos/seed/zh-family/800/420',
    aiTeacherPrompt:
      'You are a patient Mandarin teacher. Teach: 妈妈, 爸爸, 哥哥, 朋友. Help the student describe their family.',
    goals: [
      'Name family members in Mandarin',
      'Describe your family',
      'Use 有 in sentences',
    ],
    vocabulary: [
      {
        word: '妈妈',
        translation: 'mom',
        pronunciation: 'mā ma',
        example: '妈妈做饭。',
      },
      {
        word: '爸爸',
        translation: 'dad',
        pronunciation: 'bā ba',
        example: '爸爸上班。',
      },
      {
        word: '哥哥',
        translation: 'older brother',
        pronunciation: 'gē ge',
        example: '我有一个哥哥。',
      },
      {
        word: '朋友',
        translation: 'friend',
        pronunciation: 'péng yǒu',
        example: '他是我的好朋友。',
      },
    ],
    phrases: [
      {
        text: '你有兄弟姐妹吗？',
        translation: 'Do you have siblings?',
        pronunciation: 'nǐ yǒu xiōng dì jiě mèi ma',
      },
      {
        text: '我家有四口人。',
        translation: 'My family has four people.',
        pronunciation: 'wǒ jiā yǒu sì kǒu rén',
      },
    ],
    activities: [
      {
        id: 'zh-l6-a1',
        type: 'vocabulary',
        question: 'What does "爸爸" mean?',
        options: ['mom', 'brother', 'friend', 'dad'],
        answer: 'dad',
      },
      {
        id: 'zh-l6-a2',
        type: 'fill_in_blank',
        question: '"___ 做饭。" (Mom cooks.)',
        options: ['爸爸', '朋友', '妈妈', '哥哥'],
        answer: '妈妈',
      },
      {
        id: 'zh-l6-a3',
        type: 'ai_teacher',
        question: 'Describe your family in Mandarin to your AI teacher.',
        answer: '',
      },
    ],
  },
]
