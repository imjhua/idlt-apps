
const SENTENCES_50 = [
  {
    'index': '1',
    'key': '~할 수 있다',
    'value': 'I can + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '2',
    'key': '그냥 ~할 수 없다',
    'value': 'I just cant\'t + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '3',
    'key': '~할 수 있어요?',
    'value': 'Can you + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '4',
    'key': '~하실 수 있어요?',
    'value': 'Could you + 동사원형~?',
    'ex1': 'Could you hold this for me?',
    'ex2': null
  },
  {
    'index': '5',
    'key': '~해야 한다(강한의지)',
    'value': 'I have to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '6',
    'key': '~할 필요 없다',
    'value': 'You don\'t have to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '7',
    'key': '~해야 했다',
    'value': 'I had to + 동사원형',
    'ex1': 'I had to buy this.',
    'ex2': null
  },
  {
    'index': '8',
    'key': '~해야 해요?',
    'value': 'Do I have to + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '9',
    'key': '~하겠다(계획되지 않은 미래)',
    'value': 'I will + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '10',
    'key': '~좀 해 주시겠어요?',
    'value': 'Would you please + 동사원형~?',
    'ex1': 'Would you please give me a hand?',
    'ex2': 'Would you please get me a cold drink?'
  },
  {
    'index': '11',
    'key': '~하지 않겠다(갑작스런상황)',
    'value': 'I won\'t + 동사원형',
    'ex1': 'I won\'t go out.',
    'ex2': 'I won\'t park here.'
  },
  {
    'index': '12',
    'key': '절대 ~ 안 할 거다',
    'value': 'I\'ll never + 동사원형',
    'ex1': 'I\'ll naver do that again.',
    'ex2': null
  },
  {
    'index': '13',
    'key': '~해야겠다(작은 의지 / 좋다)',
    'value': 'I should + 동사원형',
    'ex1': 'I should go on a diet.',
    'ex2': 'I should go home.'
  },
  {
    'index': '14',
    'key': '~했어야 했어는데',
    'value': 'I should have p.p',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '15',
    'key': '~하셔야 할 것 같아요',
    'value': 'I think you should + 동사원형',
    'ex1': 'I think you should try.',
    'ex2': 'I think you should forget it.'
  },
  {
    'index': '16',
    'key': '~하시는 게 좋을 것 같아요',
    'value': 'I think you\'d better + 동사원형',
    'ex1': 'I think you\'d better leave now.',
    'ex2': 'I think you\'d better take a taxi.'
  },
  {
    'index': '17',
    'key': '~해도 된다',
    'value': 'You may + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '18',
    'key': '~해도 될까요?',
    'value': 'May I + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '19',
    'key': '틀림없이 ~이다',
    'value': 'It must be + 명사',
    'ex1': 'It must be true.',
    'ex2': null
  },
  {
    'index': '20',
    'key': '~일 것 같다(추측)',
    'value': 'It might be + 형용사 + to + 동사',
    'ex1': 'It might be hard to forget it.',
    'ex2': null
  },
  {
    'index': '21',
    'key': '예전에 ~였다',
    'value': 'I used to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '22',
    'key': '~에 익숙해졌다',
    'value': 'I got used to + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '23',
    'key': '~하지 말아요',
    'value': 'Don\'t + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '24',
    'key': '~하지 말아요',
    'value': 'Dont\'t be + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '25',
    'key': '이것은 ~이다',
    'value': 'This is + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '26',
    'key': '그거 ~한데!',
    'value': 'That\'s + 형용사!',
    'ex1': 'That\'s Amazing!',
    'ex2': null
  },
  {
    'index': '27',
    'key': '그건 ~가 아니다',
    'value': 'It\'s not + 명사/형용사',
    'ex1': 'It\'s not my fault.',
    'ex2': 'It\'s not easy.'
  },
  {
    'index': '28',
    'key': 'A가 아니라 B다',
    'value': 'It\'s not A but B',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '29',
    'key': '~하다는 게 정말이에요?',
    'value': 'Is it true + 주어 + 동사~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '30',
    'key': '사실은 ~이다',
    'value': 'The truth is, + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '31',
    'key': '~가 있다',
    'value': 'There is/are + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '32',
    'key': '여기 ~ 있다',
    'value': 'Here is/are + 명사',
    'ex1': 'Here are rules to follow.',
    'ex2': null
  },
  {
    'index': '33',
    'key': '~가 있나요?',
    'value': 'Is/Are there + 명사~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '34',
    'key': '~가 있을까요?',
    'value': 'Will there be + 명사~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '35',
    'key': '~가 전혀없다',
    'value': 'There\'s nothing + 수식어구',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '36',
    'key': '~할 필요가 없다',
    'value': 'There\'s no need to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '37',
    'key': '~할 방법이 없다',
    'value': 'There\'s no way to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '38',
    'key': '~할 방법이 없나요?',
    'value': 'Is there any way to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '39',
    'key': '~하는 중이다',
    'value': 'Im + -ing',
    'ex1': 'Im cleaning the room.',
    'ex2': null
  },
  {
    'index': '40',
    'key': '~하고 있어요?',
    'value': 'Are you + -ing~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '41',
    'key': '~할 것이다(예전부터 계획된 미래)',
    'value': 'Im going to + 동사원형',
    'ex1': 'Im going to be a doctor.',
    'ex2': 'Im going to take a bath.'
  },
  {
    'index': '42',
    'key': '~하지 않을 것이다(계획된것 취소)',
    'value': 'Im not gonna + 동사원형',
    'ex1': 'Im not \bgonna tell you.',
    'ex2': 'Im not \bgonna say yes.'
  },
  {
    'index': '43',
    'key': '~할거에요?',
    'value': 'Are you going to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '44',
    'key': '~하려고 했다',
    'value': 'I was going to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '45',
    'key': '난 정말 ~하다',
    'value': 'Im really + 형용사',
    'ex1': 'Im really mad at her.',
    'ex2': null
  },
  {
    'index': '46',
    'key': '난 좀 ~하다',
    'value': 'Im kind of + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '47',
    'key': '~해서 정말 기쁘다',
    'value': 'Im so glad to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '48',
    'key': '~한다면 좋겠다',
    'value': 'I\'d be happy to + 동사원형',
    'ex1': 'I\'d be happy to hear from you.',
    'ex2': 'I\'d be happy to live in New York.'
  },
  {
    'index': '49',
    'key': '~를 무서워하다',
    'value': 'Im afraid of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '50',
    'key': '아무래도 ~할 것 같다',
    'value': 'Im afraid + 주어 + 동사',
    'ex1': null,
    'ex2': null
  }
]
const SENTENCES_100 = [
  {
    'index': '1',
    'key': '~을 잘하다',
    'value': 'Im good at + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '2',
    'key': '~를 잘 알다',
    'value': 'Im familiar with + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '3',
    'key': '~에 화가 나다',
    'value': 'Im mad at + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '4',
    'key': '~때문에 초조하다',
    'value': 'Im nervouse about + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '5',
    'key': '~에 질리다',
    'value': 'Im tired of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '6',
    'key': '~가 지루하다',
    'value': 'Im bored with + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '7',
    'key': '~가 자랑스럽다',
    'value': 'Im proud of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '8',
    'key': '~가 부끄럽다',
    'value': 'Im ashamed of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '9',
    'key': '~할 준비가 됐어요?',
    'value': 'Are you ready to + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '10',
    'key': '~하려던 참이다',
    'value': 'Im about to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '11',
    'key': '~하는 것이 틀림없다',
    'value': 'Im sure 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '12',
    'key': '~가 틀림없이 ~할 것이다',
    'value': '주어 + be sure to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '13',
    'key': '정말 ~인가요?',
    'value': 'Are you sure + 주어 + 동사~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '14',
    'key': '꼭 ~하세요',
    'value': 'Be sure to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '15',
    'key': '당신은 정말 ~하다',
    'value': 'You\'re so + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '16',
    'key': '당신은 정말 ~한 살마이다',
    'value': 'You\'re such a + 형용사 + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '17',
    'key': '~로 가득 차다',
    'value': '주어 + \bbe full of + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '18',
    'key': '~로 가득 차다',
    'value': '주어 + \bbe filled with + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '19',
    'key': '~에 가는 길이다',
    'value': '주어 + be on one\'s way + to 장소',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '20',
    'key': '~로 가는 길에',
    'value': '주어 + on your way +  to 장소',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '21',
    'key': '~하자',
    'value': 'Let\'s + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '22',
    'key': '~하지 말자',
    'value': 'Let\'s not + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '23',
    'key': '내가 ~하겠다',
    'value': 'Let me + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '24',
    'key': '~할 건지 알려 주세요',
    'value': 'Let me know + 의문사 + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '25',
    'key': '너의 ~가 맘에 든다',
    'value': 'I like your + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '26',
    'key': '~가 어때요?',
    'value': 'How do you like my + 명사?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '27',
    'key': '~하는 것을 좋아하다',
    'value': 'I like + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '28',
    'key': '누가 ~하는 방식이 좋다',
    'value': 'I like the way + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '29',
    'key': '~하고 싶다',
    'value': 'I\'d like to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '30',
    'key': '~하시겠어요?',
    'value': 'Would you like to + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '31',
    'key': '~하고 싶다',
    'value': 'I want to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '32',
    'key': '그냥 ~하고 싶었다',
    'value': 'I just wanted to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '33',
    'key': '~하고 싶어요?',
    'value': 'Do you want to + 동사원형~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '34',
    'key': '당신이 ~해 주면 좋겠다',
    'value': 'I want you to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '35',
    'key': '~을 알고 있다',
    'value': 'I know + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '36',
    'key': '~할지 모르겠다',
    'value': 'I don\'t know + 관계사 + to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '37',
    'key': '~라는 거 당신도 알잖아요',
    'value': 'You know + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '38',
    'key': '~는 아무도 모른다',
    'value': 'God knows + wh절',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '39',
    'key': '~인 것 같다',
    'value': 'I think + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '40',
    'key': '~라고 생각해요?',
    'value': 'Do you think + 주어 + 동사~?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '41',
    'key': '~하는 것을 생각 중이다',
    'value': 'Im thinking of + -ing',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '42',
    'key': '~에 대해 어떻게 생각해요?',
    'value': 'What do you think of + 명사?',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '43',
    'key': '~할 필요가 있다',
    'value': 'I need to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '44',
    'key': '너는 ~할 필요 없다',
    'value': 'You don\'t need to + 동사원형',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '45',
    'key': '내 말은~',
    'value': 'I mean + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '46',
    'key': '내 말뜻은~',
    'value': 'What I mean is + 주어 + 동사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '47',
    'key': '\b~한 것 같다',
    'value': 'I feel + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '48',
    'key': '~때문에 ~한 느낌이 든다',
    'value': '주어 + make me feel + 형용사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '49',
    'key': '~할 것 같다',
    'value': 'I feel like + 명사',
    'ex1': null,
    'ex2': null
  },
  {
    'index': '50',
    'key': '~하는 것 같은 느낌이다',
    'value': 'I feel like I + 동사',
    'ex1': null,
    'ex2': null
  }
]
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