const sounds = {
  minute: new Howl({ src: ['../sounds/1pcleaner.mp3'] }),
  minuteSoon: new Howl({ src: ['../sounds/1pcleaner.mp3'], sprite: { endSoon: [59000, 6000] } }),
  halfMinute: new Howl({ src: ['../sounds/1pcleaner.mp3'], sprite: { half: [30000, 36000] } }),
  twoCats: new Howl({ src: ['../sounds/2chude.wav'] }),
  startQ: new Howl({ src: ['../sounds/batdaucauhoi.wav'], volume: 0.4 }),
  startProg: new Howl({ src: ['../sounds/batdauchtr.wav'] }),
  catChosen: new Howl({ src: ['../sounds/chonchude.wav'] }),
  endFull: new Howl({ src: ['../sounds/full.wav'] }),
  showQ: new Howl({ src: ['../sounds/mocauhoi.wav'] }),
  bgmOpenCorrect: new Howl({ src: ['../sounds/nenmodapandungloop5.wav'], loop: true }),
  bgmBefore60s: new Howl({ src: ['../sounds/nentruoccauhoi.wav'] }),
  qPassed: new Howl({ src: ['../sounds/quacauhoi.wav'] }),
  wrong: new Howl({ src: ['../sounds/sai.wav'] }),
  win: new Howl({ src: ['../sounds/thangcuoc.wav'] }),
  lose: new Howl({ src: ['../sounds/thuacuoc.wav'] }),
}