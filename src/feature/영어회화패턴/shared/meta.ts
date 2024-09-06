
const SENTENCES_50 = [
  {
    'index': '1',
    'key': '~할 수 있다',
    'value': 'I can + 동사원형',
    'ex1': 'I can help you with your homework.',
    'ex2': 'I can understand French, but I can\'t speak it.'
  },
  {
    'index': '2',
    'key': '그냥 ~할 수 없다',
    'value': 'I just cant\'t + 동사원형',
    'ex1': 'I just can\'t eat that.',
    'ex2': 'I just can\'t look at him.'
  },
  {
    'index': '3',
    'key': '~할 수 있어요?',
    'value': 'Can you + 동사원형~?',
    'ex1': 'Can you show me how to use this software?',
    'ex2': 'Can you explain how this works?'
  },
  {
    'index': '4',
    'key': '~하실 수 있어요?',
    'value': 'Could you + 동사원형~?',
    'ex1': 'Could you hold this for me?',
    'ex2': 'Could you send me the details by email?'
  },
  {
    'index': '5',
    'key': '~해야 한다(강한의지)',
    'value': 'I have to + 동사원형',
    'ex1': 'I have to pick up my sister from the airport.',
    'ex2': 'I have to attend a meeting this afternoon.'
  },
  {
    'index': '6',
    'key': '~할 필요 없다(have to)',
    'value': 'You don\'t have to + 동사원형',
    'ex1': 'You don\'t have to hurry.',
    'ex2': 'You  don\'t have to wake up early.'
  },
  {
    'index': '7',
    'key': '~해야 했다',
    'value': 'I had to + 동사원형',
    'ex1': 'I had to buy this.',
    'ex2': 'I had to work hard.'
  },
  {
    'index': '8',
    'key': '~해야 해요?',
    'value': 'Do I have to + 동사원형~?',
    'ex1': 'Do I have to rush?',
    'ex2': 'Do I have to attend the meeting today?'
  },
  {
    'index': '9',
    'key': '~하겠다(계획되지 않은 미래)',
    'value': 'I will + 동사원형',
    'ex1': 'I will finish the report by tomorrow.',
    'ex2': 'I will call you when I arrive at the airport.'
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
    'key': '~하지 않겠다(갑작스런 상황)',
    'value': 'I won\'t + 동사원형',
    'ex1': 'I won\'t go out.',
    'ex2': 'I won\'t park here.'
  },
  {
    'index': '12',
    'key': '절대 ~ 안 할 거다',
    'value': 'I\'ll never + 동사원형',
    'ex1': 'I\'ll naver do that again.',
    'ex2': 'I\'ll never understand why he did that.'
  },
  {
    'index': '13',
    'key': '~해야겠다(작은의지)',
    'value': 'I should + 동사원형',
    'ex1': 'I should go on a diet.',
    'ex2': 'I should go home.'
  },
  {
    'index': '14',
    'key': '~했어야 했어는데',
    'value': 'I should have p.p',
    'ex1': 'I should have taken care of him.',
    'ex2': 'I should have studied harder for the exam.'
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
    'ex1': 'You may leave the office early today.',
    'ex2': 'You may come closer.'
  },
  {
    'index': '18',
    'key': '~해도 될까요?',
    'value': 'May I + 동사원형~?',
    'ex1': 'May I drop by?',
    'ex2': 'May I open the door?'
  },
  {
    'index': '19',
    'key': '틀림없이 ~이다',
    'value': 'It must be + 명사',
    'ex1': 'It must be true.',
    'ex2': 'It must be a new restaurant in town.'
  },
  {
    'index': '20',
    'key': '~일 것 같다(추측)',
    'value': 'It might be + 형용사 + to + 동사',
    'ex1': 'It might be hard to forget it.',
    'ex2': 'It might be raining later, so take an umbrella.'
  },
  {
    'index': '21',
    'key': '예전에 ~였다',
    'value': 'I used to + 동사원형',
    'ex1': 'I used to be fat.',
    'ex2': 'I used to practice yoga.'
  },
  {
    'index': '22',
    'key': '~에 익숙해졌다',
    'value': 'I got used to + 명사',
    'ex1': 'I got used to waking up early for work.',
    'ex2': 'I got used to the new routine at the gym.'
  },
  {
    'index': '23',
    'key': '~하지 말아요(명령문)',
    'value': 'Don\'t + 동사원형',
    'ex1': 'Don\'t laugh at me.',
    'ex2': 'Don\'t make a mess.'
  },
  {
    'index': '24',
    'key': '~하지 말아요(명령문 be)',
    'value': 'Dont\'t be + 형용사',
    'ex1': 'Don\'t be sorry.',
    'ex2': 'Don\'t be serious.'
  },
  {
    'index': '25',
    'key': '이것은 ~이다',
    'value': 'This is + 명사',
    'ex1': 'There is my job.',
    'ex2': 'There is the way I like it.'
  },
  {
    'index': '26',
    'key': '그거 ~한데!',
    'value': 'That\'s + 형용사!',
    'ex1': 'That\'s surprising!',
    'ex2': 'That\'s wonderful!'
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
    'ex1': 'It\'s not the size but the comfort that counts.',
    'ex2': 'It\'s not the price but the quality.'
  },
  {
    'index': '29',
    'key': '~하다는 게 정말이에요?',
    'value': 'Is it true + 주어 + 동사~?',
    'ex1': 'Is it ture he told a lie?',
    'ex2': 'Is it true they are divorced?'
  },
  {
    'index': '30',
    'key': '사실은 ~이다',
    'value': 'The truth is, + 주어 + 동사',
    'ex1': 'The truth is, he doesn’t really like that movie.',
    'ex2': 'The truth is, I forgot about the meeting.'
  },
  {
    'index': '31',
    'key': '~가 있다',
    'value': 'There is/are + 명사',
    'ex1': 'There is a book on the table.',
    'ex2': 'There are many opportunities for growth.'
  },
  {
    'index': '32',
    'key': '여기 ~ 있다',
    'value': 'Here is/are + 명사',
    'ex1': 'Here are rules to follow.',
    'ex2': 'Here are the keys you asked for.'
  },
  {
    'index': '33',
    'key': '~가 있나요?',
    'value': 'Is/Are there + 명사~?',
    'ex1': 'Is there a good restaurant around here?',
    'ex2': 'Are there any questions about the rules?'
  },
  {
    'index': '34',
    'key': '~가 있을까요?(기대 또는 추측)',
    'value': 'Will there be + 명사~?',
    'ex1': 'Will there be good news?',
    'ex2': 'Will there be any refreshments at the event?'
  },
  {
    'index': '35',
    'key': '~가 전혀없다',
    'value': 'There\'s nothing + 수식어구',
    'ex1': 'There\'s nothing wrong with it.',
    'ex2': 'There\'s nothing I can do.'
  },
  {
    'index': '36',
    'key': '~할 필요가 없다\b(there\'s)',
    'value': 'There\'s no need to + 동사원형',
    'ex1': 'There\'s no need to fear.',
    'ex2': 'There\'s no need to no worry about it.'
  },
  {
    'index': '37',
    'key': '~할 방법이 없다',
    'value': 'There\'s no way to + 동사원형',
    'ex1': 'There\'s no way to contact him right now.',
    'ex2': 'There\'s no way to get a refund after 30 days.'
  },
  {
    'index': '38',
    'key': '~할 방법이 없나요?',
    'value': 'Is there any way to + 동사원형',
    'ex1': 'Is there any way to find him?',
    'ex2': 'Is there any way to get there?'
  },
  {
    'index': '39',
    'key': '~하는 중이다',
    'value': 'Im + -ing',
    'ex1': 'Im cleaning the room.',
    'ex2': 'Im staying in Seoul.'
  },
  {
    'index': '40',
    'key': '~하고 있어요?',
    'value': 'Are you + -ing~?',
    'ex1': 'Are you studying for the exam?',
    'ex2': '(Why) Are you working on the task right now?'
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
    'key': '~할거에요?(미래 상대방의 의도 파악)',
    'value': 'Are you going to + 동사원형',
    'ex1': 'Are you going to take the new job offer?',
    'ex2': 'Are you going to renovate the house this summer?'
  },
  {
    'index': '44',
    'key': '~하려고 했다',
    'value': 'I was going to + 동사원형',
    'ex1': 'I was going to call you earlier, but I forgot.',
    'ex2': 'I was going to bake a cake, but I didn’t do it.'
  },
  {
    'index': '45',
    'key': '난 정말 ~하다',
    'value': 'Im really + 형용사',
    'ex1': 'Im really mad at her.',
    'ex2': 'I\'m really impressed by your performance.'
  },
  {
    'index': '46',
    'key': '난 좀 ~하다',
    'value': 'Im kind of + 형용사',
    'ex1': 'I\'m kind of tired after the long day.',
    'ex2': 'I\'m kind of excited about the upcoming trip.'
  },
  {
    'index': '47',
    'key': '~해서 정말 기쁘다',
    'value': 'Im so glad to + 동사원형',
    'ex1': 'I\'m so glad to work with you.',
    'ex2': 'I\'m so glad to hear that you got the job.'
  },
  {
    'index': '48',
    'key': '~한다면 좋겠다',
    'value': 'I\'d be happy to + 동사원형',
    'ex1': 'I\'d be happy to hear from you.',
    'ex2': 'I\'d be happy to join you for dinner tonight.'
  },
  {
    'index': '49',
    'key': '~를 무서워하다',
    'value': 'Im afraid of + 명사',
    'ex1': 'I\'m afraid of flying.',
    'ex2': 'I\'m afraid of making mistakes in the design.'
  },
  {
    'index': '50',
    'key': '아무래도 ~할 것 같다',
    'value': 'Im afraid + 주어 + 동사',
    'ex1': 'I\'m afraid we are lost.',
    'ex2': 'I\'m afraid it is going to rain.'
  }
]
const SENTENCES_100 = [
  {
    'index': '1',
    'key': '~을 잘하다',
    'value': 'Im good at + 명사',
    'ex1': 'Im good at + 명사',
    'ex2': 'I’m good at cooking.'
  },
  {
    'index': '2',
    'key': '~를 잘 알다',
    'value': 'Im familiar with + 명사',
    'ex1': 'I’m familiar with this area of town.',
    'ex2': 'I’m familiar with classical music.'
  },
  {
    'index': '3',
    'key': '~에 화가 나다',
    'value': 'Im mad at + 명사',
    'ex1': 'I’m mad at my friend for being late.',
    'ex2': 'I’m mad at the team for missing the deadline.'
  },
  {
    'index': '4',
    'key': '~때문에 초조하다',
    'value': 'Im nervouse about + 명사',
    'ex1': 'I’m nervous about the job interview.',
    'ex2': 'I’m nervous about speaking in public.'
  },
  {
    'index': '5',
    'key': '~에 질리다',
    'value': 'Im tired of + 명사',
    'ex1': 'I’m tired of the constant noise.',
    'ex2': 'I’m tired of waiting in long lines.'
  },
  {
    'index': '6',
    'key': '~가 지루하다',
    'value': 'Im bored with + 명사',
    'ex1': 'Im bored with + 명사',
    'ex2': 'I’m bored with the same routine every day.'
  },
  {
    'index': '7',
    'key': '~가 자랑스럽다',
    'value': 'Im proud of + 명사',
    'ex1': 'I’m proud of my team for finishing the project.',
    'ex2': 'I’m proud of him for starting his own business.'
  },
  {
    'index': '8',
    'key': '~가 부끄럽다',
    'value': 'Im ashamed of + 명사',
    'ex1': 'I’m ashamed of my behavior last night.',
    'ex2': 'I’m ashamed of not keeping my promises.'
  },
  {
    'index': '9',
    'key': '~할 준비가 됐어요?',
    'value': 'Are you ready to + 동사원형~?',
    'ex1': 'Are you ready to leave for the airport?',
    'ex2': 'Are you ready to take the exam?'
  },
  {
    'index': '10',
    'key': '~하려던 참이다',
    'value': 'Im about to + 동사원형',
    'ex1': 'I’m about to leave the house.',
    'ex2': 'I’m about to finish this book.'
  },
  {
    'index': '11',
    'key': '~하는 것이 틀림없다',
    'value': 'Im sure 주어 + 동사',
    'ex1': 'I’m sure she knows the answer.',
    'ex2': 'I’m sure they are going to enjoy the movie.'
  },
  {
    'index': '12',
    'key': '~가 틀림없이 ~할 것이다',
    'value': '주어 + be sure to + 동사원형',
    'ex1': 'You should be sure to check your email regularly.',
    'ex2': 'They are sure to arrive on time for the meeting.'
  },
  {
    'index': '13',
    'key': '정말 ~인가요?',
    'value': 'Are you sure + 주어 + 동사~?',
    'ex1': 'Are you sure she is coming to the party?',
    'ex2': 'Are you sure this is the right address?'
  },
  {
    'index': '14',
    'key': '꼭 ~하세요',
    'value': 'Be sure to + 동사원형',
    'ex1': 'Be sure to bring your ID to the airport.',
    'ex2': 'Be sure to turn off the lights when you leave the room.'
  },
  {
    'index': '15',
    'key': '당신은 정말 ~하다',
    'value': 'You\'re so + 형용사',
    'ex1': 'You\'re so talented.',
    'ex2': 'You\'re so brave.'
  },
  {
    'index': '16',
    'key': '당신은 정말 ~한 살마이다',
    'value': 'You\'re such a + 형용사 + 명사',
    'ex1': 'You\'re such a + 형용사 + 명사',
    'ex2': 'You\'re such a + 형용사 + 명사'
  },
  {
    'index': '17',
    'key': '~로 가득 차다',
    'value': '주어 + \bbe full of + 명사',
    'ex1': 'The garden is full of beautiful flowers.',
    'ex2': 'Her room is full of interesting books.'
  },
  {
    'index': '18',
    'key': '~로 가득 차다',
    'value': '주어 + \bbe filled with + 명사',
    'ex1': 'The museum is filled with ancient artifacts.',
    'ex2': 'The basket is filled with fresh fruits.'
  },
  {
    'index': '19',
    'key': '~에 가는 길이다',
    'value': '주어 + be on one\'s way + to 장소',
    'ex1': '주어 + be on one\'s way + to 장소',
    'ex2': 'we are on our way to the airport.'
  },
  {
    'index': '20',
    'key': '~로 가는 길에',
    'value': '주어 + on your way +  to 장소',
    'ex1': 'She is on her way to the gym.',
    'ex2': 'Are you on your way to the party?'
  },
  {
    'index': '21',
    'key': '~하자',
    'value': 'Let\'s + 동사원형',
    'ex1': 'Let\'s try a new restaurant for lunch.',
    'ex2': 'Let\'s visit the museum this weekend.'
  },
  {
    'index': '22',
    'key': '~하지 말자',
    'value': 'Let\'s not + 동사원형',
    'ex1': 'Let\'s try a new restaurant for lunch.',
    'ex2': 'Let’s not make any sudden decisions.'
  },
  {
    'index': '23',
    'key': '내가 ~하겠다',
    'value': 'Let me + 동사원형',
    'ex1': 'Let me help you with that.',
    'ex2': 'Let me know if you need anything.'
  },
  {
    'index': '24',
    'key': '~할 건지 알려 주세요',
    'value': 'Let me know + 의문사 + 주어 + 동사',
    'ex1': 'Let me know how I can assist you.',
    'ex2': 'Let me know what time the meeting starts.'
  },
  {
    'index': '25',
    'key': '너의 ~가 맘에 든다',
    'value': 'I like your + 명사',
    'ex1': 'I like your new shoes.',
    'ex2': 'I like your sense of humor.'
  },
  {
    'index': '26',
    'key': '~가 어때요?',
    'value': 'How do you like my + 명사?',
    'ex1': 'How do you like my presentation?',
    'ex2': 'How do you like my choice of restaurant?'
  },
  {
    'index': '27',
    'key': '~하는 것을 좋아하다',
    'value': 'I like + -ing',
    'ex1': 'I like reading books.',
    'ex2': 'I like going for a walk in the park.'
  },
  {
    'index': '28',
    'key': '누가 ~하는 방식이 좋다',
    'value': 'I like the way + 주어 + 동사',
    'ex1': 'I like the way she explains things clearly.',
    'ex2': 'I like the way they handle difficult situations.'
  },
  {
    'index': '29',
    'key': '~하고 싶다',
    'value': 'I\'d like to + 동사원형',
    'ex1': 'I\'d like to visit Japan someday.',
    'ex2': 'I\'d like to learn how to play the piano.'
  },
  {
    'index': '30',
    'key': '~하시겠어요?',
    'value': 'Would you like to + 동사원형~?',
    'ex1': 'Would you like to try some coffee?',
    'ex2': 'Would you like to watch a movie tonight?'
  },
  {
    'index': '31',
    'key': '~하고 싶다',
    'value': 'I want to + 동사원형',
    'ex1': 'I want to visit my friends this weekend.',
    'ex2': 'I want to see that new movie.'
  },
  {
    'index': '32',
    'key': '그냥 ~하고 싶었다',
    'value': 'I just wanted to + 동사원형',
    'ex1': 'I just wanted to say thank you.',
    'ex2': 'I just wanted to ask a quick question.'
  },
  {
    'index': '33',
    'key': '~하고 싶어요?',
    'value': 'Do you want to + 동사원형~?',
    'ex1': 'Do you want to help me with this task?',
    'ex2': 'Do you want to try this new restaurant?'
  },
  {
    'index': '34',
    'key': '당신이 ~해 주면 좋겠다',
    'value': 'I want you to + 동사원형',
    'ex1': 'I want you to help me with this project.',
    'ex2': 'I want you to bring me a drink.'
  },
  {
    'index': '35',
    'key': '~을 알고 있다',
    'value': 'I know + 주어 + 동사',
    'ex1': 'I know she works hard every day.',
    'ex2': 'I know they are planning a surprise party.'
  },
  {
    'index': '36',
    'key': '~할지 모르겠다',
    'value': 'I don\'t know + 관계사 + to + 동사원형',
    'ex1': 'I don\'t know how to fix this issue.',
    'ex2': 'I don\'t know where to find the information.'
  },
  {
    'index': '37',
    'key': '~라는 거 당신도 알잖아요',
    'value': 'You know + 주어 + 동사',
    'ex1': 'You know she always arrives early.',
    'ex2': 'You know they are planning a big event.'
  },
  {
    'index': '38',
    'key': '~는 아무도 모른다',
    'value': 'God knows + wh절',
    'ex1': 'God knows where he disappeared to.',
    'ex2': 'God knows why things turned out this way.'
  },
  {
    'index': '39',
    'key': '~인 것 같다',
    'value': 'I think + 주어 + 동사',
    'ex1': 'I think she is going to be promoted soon.',
    'ex2': 'I think we should leave now to avoid traffic.'
  },
  {
    'index': '40',
    'key': '~라고 생각해요?',
    'value': 'Do you think + 주어 + 동사~?',
    'ex1': 'Do you think she will accept the job offer?',
    'ex2': 'Do you think they are going to win the match?'
  },
  {
    'index': '41',
    'key': '~하는 것을 생각 중이다',
    'value': 'Im thinking of + -ing',
    'ex1': 'I’m thinking of taking a vacation next month.',
    'ex2': 'I’m thinking of starting a new hobby.'
  },
  {
    'index': '42',
    'key': '~에 대해 어떻게 생각해요?',
    'value': 'What do you think of + 명사?',
    'ex1': 'What do you think of the new policy at work?',
    'ex2': 'What do you think of my proposal?'
  },
  {
    'index': '43',
    'key': '~할 필요가 있다',
    'value': 'I need to + 동사원형',
    'ex1': 'I need to call my friend to confirm the plans.',
    'ex2': 'I need to study for the upcoming exam.'
  },
  {
    'index': '44',
    'key': '너는 ~할 필요 없다(need)',
    'value': 'You don\'t need to + 동사원형',
    'ex1': 'You don\'t need to worry about the details.',
    'ex2': 'You don\'t need to bring any food.'
  },
  {
    'index': '45',
    'key': '내 말은~',
    'value': 'I mean + 주어 + 동사',
    'ex1': 'I mean you should try harder.',
    'ex2': 'I mean we have to follow the instructions.'
  },
  {
    'index': '46',
    'key': '내 말뜻은~',
    'value': 'What I mean is + 주어 + 동사',
    'ex1': 'What I mean is you should take a break.',
    'ex2': 'What I mean is everyone needs to be on time.'
  },
  {
    'index': '47',
    'key': '\b~한 것 같다',
    'value': 'I feel + 형용사',
    'ex1': 'I feel relieved now that the presentation is over.',
    'ex2': 'I feel excited about starting the new job.'
  },
  {
    'index': '48',
    'key': '~때문에 ~한 느낌이 든다',
    'value': '주어 + make me feel + 형용사',
    'ex1': 'The movie made me feel nostalgic.',
    'ex2': 'The warm weather makes me feel energetic.'
  },
  {
    'index': '49',
    'key': '~할 것 같다',
    'value': 'I feel like + 명사',
    'ex1': 'I feel like a failure.',
    'ex2': 'I feel like a kid again.'
  },
  {
    'index': '50',
    'key': '~하는 것 같은 느낌이다',
    'value': 'I feel like I + 동사',
    'ex1': 'I feel like I should apologize.',
    'ex2': 'I feel like I need a vacation.'
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