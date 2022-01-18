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
      'Closest and largest supermarket next to the APV housing and HZ University campus. Here almost all students are buying their food. Here also can be found a TSmoskes, which sell great sandwiches.',
    question: 'What is the name of the sandwich place inside AH?',
    answers: [
      { text: 'Action', isCorrect: false },
      { text: 'Fruit Shop', isCorrect: false },
      { text: "T'Smoske", isCorrect: true },
      { text: 'Key Shop', isCorrect: false },
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
      'Middelburg Town Hall is situated at the market of Middelburg, Zeeland. It is considered[by whom?] one of the finest Gothic buildings in the Netherlands. Construction began in 1452 and was supervised by several generations of the Flemish family of architects Keldermans. Construction was completed in 1520, the town hall received a facade with Gothic windows, red-white shutters, smaller turrets and twenty-five statues of Zeelands counts and countesses.',
    question: 'When did construction of the Old Town Hall stopped?',
    answers: [
      { text: '2020', isCorrect: false },
      { text: '2015', isCorrect: false },
      { text: '1520', isCorrect: true },
      { text: '1950', isCorrect: false },
    ],
    coords: [51.497485, 3.623887],
    desc: 'This is descriptions that explains the token',
  },
  {
    ...defaultToken,
    name: 'STATION',
    place: 'Train station',
    content:
      'This is the only train station inside the beautiful city of Middelburg! It is located right next to the Canal that leads to the Vlissingen city. The ticket prices here are decent, but the Ticket price to Eindhoven cost 24$.',
    question: 'Where does the road leed to?',
    answers: [
      { text: '24$', isCorrect: true },
      { text: '50$', isCorrect: false },
      { text: '0.80$', isCorrect: false },
      { text: '10$', isCorrect: false },
    ],
    coords: [51.495222, 3.618028],
    desc: 'This is descriptions that explains the token',
  },
]);

export default tokensValt;
