
import Sentences50 from './assets/1-50.json'
import Sentences100 from './assets/51-100.json'

const SENTENCES_50 = Sentences50

const SENTENCES_100 = Sentences100

const SENTENCES_150 = [
  {
    'index': '1',
    'key': '~해 보인다',
    'value': 'You look + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '2',
    'key': '~을 보세요',
    'value': 'Take a look at + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '3',
    'key': '~을 찾다',
    'value': 'Im looking for + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '4',
    'key': '~을 기대하다',
    'value': 'Im looking forward to + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '5',
    'key': '당신은 ~하는 것 같아 보인다',
    'value': 'You seem to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '6',
    'key': '~가 있는 것 같다',
    'value': 'There seems to be + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '7',
    'key': '~해서 고맙다',
    'value': 'Thank you for + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '8',
    'key': '~에 감사하다',
    'value': 'I appreciate + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '9',
    'key': '~해서 미안하다',
    'value': 'Sorry for + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '10',
    'key': '~을 사과드립니다',
    'value': 'I apologize for + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '11',
    'key': '~해서 미안하다',
    'value': 'Sorry to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '12',
    'key': '미안하지만 ~',
    'value': 'Im sorry, but + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '13',
    'key': '왜 ~인지 궁금하다',
    'value': 'I wonder why + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '14',
    'key': '~인지 궁금하다',
    'value': 'I wonder if + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '15',
    'key': '~인 것 같다',
    'value': 'I guess + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '16',
    'key': '~인지 맞춰 봐요',
    'value': 'Guess what + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '17',
    'key': '~한 것을 기억하다',
    'value': 'I remember + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '18',
    'key': '~할 것을 기억한다',
    'value': 'I remember to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '19',
    'key': '~할게 있다',
    'value': 'I have something to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '20',
    'key': '~가 하나도 없다',
    'value': 'I have nothing to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '21',
    'key': '~하는 것을 멈출 수 없다',
    'value': 'I can\'t stop + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '22',
    'key': '~을 참을 수 없다',
    'value': 'I can\'t stand + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '23',
    'key': '빨리 ~하고 싶다',
    'value': 'I can\'t wait to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '24',
    'key': '~가 ~할 때 까지 기다리세요',
    'value': 'Wait for + 명사 + to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '25',
    'key': '~하다니 믿을 수가 없다',
    'value': 'I cna\'t believe + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '26',
    'key': '~을 못 믿을 것이다',
    'value': 'You wouln\'t believe what + (주어) + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '27',
    'key': '~하지 않을 수 없다',
    'value': 'I can\'t help + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '28',
    'key': '~하지 않을 수 없다',
    'value': 'I can\'t help but + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '29',
    'key': '~을 계속하다',
    'value': 'Keep + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '30',
    'key': '~하도록 유지시키다',
    'value': 'Keep + 명사 + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '31',
    'key': '~를 선호하다',
    'value': 'I prefer + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '32',
    'key': 'B보다 A가 더 좋다',
    'value': 'I prefer A to B',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '33',
    'key': '나는 ~에 대해서 상관 안한다',
    'value': 'I don\'t care about + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '34',
    'key': '나는 ~를 신경안쓴다',
    'value': 'I don\'t care what + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '35',
    'key': '~에 갔다',
    'value': '주어 went to + 장소',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '36',
    'key': '~해졌다',
    'value': '주어 went + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '37',
    'key': '~하러 갔다',
    'value': '주어 went to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '38',
    'key': '~하러 갔다',
    'value': '주어 went + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '39',
    'key': '~를 가지고 가세요',
    'value': 'Get + 명사 + 전치사구',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '40',
    'key': '~을 ~되게 했다',
    'value': 'I got + 명사 + p.p',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '41',
    'key': '~하게 되었다',
    'value': '주어 + have got + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '42',
    'key': '되었다',
    'value': '주어 + have got + p.p',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '43',
    'key': '~을 취하겠다',
    'value': 'I\'ll take + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '44',
    'key': 'A를 B로 데리고 가겠다',
    'value': 'I\'ll take A (to) B',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '45',
    'key': '~를 돌보겠다',
    'value': 'I\'ll take care of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '46',
    'key': '~에 참석했다',
    'value': 'I took part in + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '47',
    'key': '~를 ~하게 했다',
    'value': 'You made me + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '48',
    'key': '~가 ~하게 만들었다',
    'value': 'I made + 명사 + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '49',
    'key': '~에게 ~을 해 주었다',
    'value': 'I made + 사람 + 사물',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '50',
    'key': '왜 ~했어요?',
    'value': 'What made you + 동사원형~?',
    'ex1': null,
    'ex2': null
  }
]
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