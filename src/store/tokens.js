import { atom } from 'jotai';

//Array of object of the Token questions
const tokens = {
  APV: {
    place: 'APV',
    content:
      'This is the place where almost all international student from the HZ Green Wood campus are living at.',
    question: 'Which HZ campus in next to the APV?',
    answers: [
      { text: 'UCL Campus', isCorrect: false },
      { text: 'HZ Vlissineg', isCorrect: false },
      { text: 'HZ Green Wood', isCorrect: true },
      { text: 'Windmill', isCorrect: false },
    ],
    isCollected: false,
    coords: [51.49283, 3.608213],
  },
  HZ: {
    place: 'HZ',
    content:
      'This is our university Campus called Green Wood. The programms that are thought here are called: Architecture, HBO-ICT, Global Project and Change Management, Industrial Engineering (full-time), Water Management, Civil Engineering and the Masters in River Delta Development',
    question: 'Which course programe are not thought in HZ Green Wood?',
    answers: [
      { text: 'HBO-ICT', isCorrect: false },
      { text: 'Chemistry', isCorrect: true },
      { text: 'Civil Engineering', isCorrect: false },
      { text: 'Global Change Project', isCorrect: false },
    ],
    isCollected: false,
    coords: [51.495142, 3.609632],
  },
  AH: {
    place: 'AH',
    content:
      'Closest and largest supermarket next to the APV housing and HZ University campus. Here almost all students are buying their food. Here also can be found a TSmoskes, where the most frequent buyer is Deyan.',
    question: 'What is the name of the frequent Smoske buyer?',
    answers: [
      { text: 'Billy Herrington', isCorrect: false },
      { text: 'Van Darkholme', isCorrect: false },
      { text: 'Deyan', isCorrect: true },
      { text: 'Danny Lee', isCorrect: false },
    ],
    isCollected: false,
    coords: [51.496209, 3.608172],
  },
  STREET: {
    place: 'STREET',
    content: 'The main street of the Middelburg, which leads to the main Square of the City.',
    question: 'Where does the road leed to?',
    answers: [
      { text: 'Main Square', isCorrect: true },
      { text: 'Domburg', isCorrect: false },
      { text: 'APV House', isCorrect: true },
      { text: 'HZ Campus', isCorrect: false },
    ],
    isCollected: false,
    coords: [51.497865, 3.609009],
  },
};

const tokensAtom = atom(tokens);

export default tokensAtom;
