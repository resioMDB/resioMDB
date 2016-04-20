var mockDB = {};

mockDB['qwerty'] = [
  { cType: 'bar',
    question: 'Who has the coolest scratch project?',
    choices: [{ Brandon: 0, Danny: 0, Masha: 0}],
    qType: 'multiple'
  },
  { cType: 'pie',
    question: 'What is your favorite beer?',
    choices: [{ 'Stone IPA': 0, 'Corona Light': 0, 'Guiness': 0, 'Sierra Nevada': 0, 'Blue Moon': 0, "I don't drink beer, I drink bourbon": 0}],
    qType: 'multiple'
  }
];

mockDB['asdfgh'] = [
  {
    cType: 'bar',
    question: 'What was your favorite company that came to hiring day?',
    choices: [{ 'Dog Vacay': 0, 'Dollar Shave Club': 0, 'LA Body Points': 0, Whisper: 0, Procore: 0, ESPN: 0, Ticketmaster: 0 }],
    qType: 'multiple'
  }
];

module.exports = mockDB;
