import { atom } from 'jotai'


//Array of object of the Token questions
const tokens = {
    'APV': {
        place: 'APV',
        question: 'What is the most common fish in around waters in ZEELAND',
        answers: [
            { text: 'Salmonela', isCorrect: false },
            { text: 'Carp', isCorrect: false },
            { text: 'Fluke', isCorrect: true },
            { text: 'Salmon', isCorrect: false },
        ],
        isCollected: false,
        coords: [51.492830, 3.608213],
    },
    'HZ': {
        place: 'HZ',
        question: 'What is the tasties sea food in ZEELAND according to the articles?',
        answers: [
            { text: 'Measles', isCorrect: false },
            { text: 'Musels', isCorrect: true },
            { text: 'Muscules', isCorrect: false },
            { text: 'Fish', isCorrect: false },
        ],
        isCollected: false,
        coords: [51.495142, 3.609632],
    },
    'AH': {
        place: 'AH',
        question: 'Where is Gondola now?',
        answers: [
            { text: 'Knowhere', isCorrect: false },
            { text: 'Knowhere', isCorrect: false },
            { text: 'GERMANY', isCorrect: true },
            { text: 'Knowhere', isCorrect: false },
        ],
        isCollected: false,
        coords: [51.496209, 3.608172],
    },
    'STREET': {
        place: 'STREET',
        question: 'HOW WILL ARTIC MELTING ICE AFFECT THE ZEELANDS LAND?',
        answers: [
            { text: 'It will get flooded.', isCorrect: true },
            { text: 'Zeelands becomes desert.', isCorrect: false },
            { text: 'Nothing', isCorrect: true },
            { text: 'No Smoske for Deyan.', isCorrect: false },
        ],
        isCollected: false,
        coords: [51.497865, 3.609009],
    }
};

const tokensAtom = atom(tokens);

export default tokensAtom;