import { proxy } from 'valtio';

export interface TokenType {
  name: string;
  place: string;
  content: string;
  question: string;
  answers: Array<{ text: string; isCorrect: boolean }>;
  isCollected: boolean;
  coords: [number, number];
  desc: string;
  collect: () => void;
}

const defaultToken = {
  isCollected: false,
  collect() {
    this.isCollected = true;
  },
};

// Array of object of the Token questions
const tokensValt = proxy<TokenType[]>([
  {
    ...defaultToken,
    name: 'APV',
    place: 'APV Student housing',
    content:
      'This is the place where almost all international student from the HZ Green Wood campus are living at.',
    question: 'Which HZ campus in next to the APV?',
    answers: [
      { text: 'UCL Campus', isCorrect: false },
      { text: 'HZ Vlissineg', isCorrect: false },
      { text: 'HZ Green Wood', isCorrect: true },
      { text: 'Windmill', isCorrect: false },
    ],
    coords: [51.49283, 3.608213],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'HZ',
    place: 'HZ University',
    content:
      'This is our university Campus called Green Wood. The programms that are thought here are called: Architecture, HBO-ICT, Global Project and Change Management, Industrial Engineering (full-time), Water Management, Civil Engineering and the Masters in River Delta Development',
    question: 'Which course programe are not thought in HZ Green Wood?',
    answers: [
      { text: 'HBO-ICT', isCorrect: false },
      { text: 'Chemistry', isCorrect: true },
      { text: 'Civil Engineering', isCorrect: false },
      { text: 'Global Change Project', isCorrect: false },
    ],
    coords: [51.495142, 3.609632],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'AH',
    place: 'AH Supermarket',
    content:
      'Closest and largest supermarket next to the APV housing and HZ University campus. Here almost all students are buying their food. Here also can be found a TSmoskes, where the most frequent buyer is Deyan.',
    question: 'What is the name of the frequent Smoske buyer?',
    answers: [
      { text: 'Billy Herrington', isCorrect: false },
      { text: 'Van Darkholme', isCorrect: false },
      { text: 'Deyan', isCorrect: true },
      { text: 'Danny Lee', isCorrect: false },
    ],
    coords: [51.496209, 3.608172],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'STREET',
    place: 'Middelburg street',
    content:
      'The main street of the Middelburg, which leads to the main Square of the City.',
    question: 'Where does the road leed to?',
    answers: [
      { text: 'Main Square', isCorrect: true },
      { text: 'Domburg', isCorrect: false },
      { text: 'APV House', isCorrect: true },
      { text: 'HZ Campus', isCorrect: false },
    ],
    coords: [51.497865, 3.609009],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'TOWNHALL',
    place: 'Middelburg townhall',
    content:
      'The main street of the Middelburg, which leads to the main Square of the City.',
    question: 'Where does the road leed to?',
    answers: [
      { text: 'Main Square', isCorrect: true },
      { text: 'Domburg', isCorrect: false },
      { text: 'APV House', isCorrect: true },
      { text: 'HZ Campus', isCorrect: false },
    ],
    coords: [51.497485, 3.623887],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'STATION',
    place: 'Train station',
    content:
      'The main street of the Middelburg, which leads to the main Square of the City.',
    question: 'Where does the road leed to?',
    answers: [
      { text: 'Main Square', isCorrect: true },
      { text: 'Domburg', isCorrect: false },
      { text: 'APV House', isCorrect: true },
      { text: 'HZ Campus', isCorrect: false },
    ],
    coords: [51.495222, 3.618028],
    desc: 'This is descriptions that explains the token',
  },
]);

export default tokensValt;
