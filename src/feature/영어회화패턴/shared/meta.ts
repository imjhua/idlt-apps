
import Sentences50 from './assets/1-50.json'
import Sentences100 from './assets/51-100.json'
import Sentences150 from './assets/101-150.json'

const SENTENCES_50 = Sentences50

const SENTENCES_100 = Sentences100

const SENTENCES_150 = Sentences150

const SENTENCES_200 = [
  {
    'index': '1',
    'key': '~하도록 노력했다',
    'value': 'I tried to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '2',
    'key': '~하지 않으려고 애썼다',
    'value': 'I tried not to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '3',
    'key': '~하려는 게 아니었다',
    'value': 'I didn\'t mean to + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '4',
    'key': '~가 무슨 말인가요?',
    'value': 'What do you mean by + 명사?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '5',
    'key': '~하는 것을 잊어버렸다',
    'value': 'I forgot to + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '6',
    'key': '잊지 말고 ~하세요',
    'value': 'Don\'t forget to + 동사원형',
    'ex1': null,
    'ex2': null
  }
]
// const SENTENCES_250 = []

export const SENTENCES = [
  ...SENTENCES_50,
  ...SENTENCES_100,
  ...SENTENCES_150,
  ...SENTENCES_200,
]