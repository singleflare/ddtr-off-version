const playerSocket = io('/player')

let money1 = 0
let money2 = 0
let money3 = 0
let money4 = 0
let remainMoney = 200

let money1para = document.getElementById('money1text')
let money2para = document.getElementById('money2text')
let money3para = document.getElementById('money3text')
let money4para = document.getElementById('money4text')
let remainMoneyPara = document.getElementById('remainMoneyText')

let plus1btn = document.getElementById('plus1')
let plus2btn = document.getElementById('plus2')
let plus3btn = document.getElementById('plus3')
let plus4btn = document.getElementById('plus4')
let minus1btn = document.getElementById('minus1')
let minus2btn = document.getElementById('minus2')
let minus3btn = document.getElementById('minus3')
let minus4btn = document.getElementById('minus4')

function disableAllButtons() {
  plus1btn.disabled = true
  plus2btn.disabled = true
  plus3btn.disabled = true
  plus4btn.disabled = true
  minus1btn.disabled = true
  minus2btn.disabled = true
  minus3btn.disabled = true
  minus4btn.disabled = true
}
function enableAllButtons() {
  plus1btn.disabled = false
  plus2btn.disabled = false
  plus3btn.disabled = false
  plus4btn.disabled = false
  minus1btn.disabled = false
  minus2btn.disabled = false
  minus3btn.disabled = false
  minus4btn.disabled = false
}

function disableA4() {
  $('#a4').css('opacity', '0')
  $('#money4').css('opacity', '0')
  $('#plus4').css('opacity', '0')
  $('#minus4').css('opacity', '0')
}
function disableA1() {
  $('#a1').css('opacity', '0')
  $('#money1').css('opacity', '0')
  $('#plus1').css('opacity', '0')
  $('#minus1').css('opacity', '0')
}
function enableA4() {
  $('#a4').css('opacity', '1')
  $('#money4').css('opacity', '1')
  $('#plus4').css('opacity', '1')
  $('#minus4').css('opacity', '1')
}
function enableA1() {
  $('#a1').css('opacity', '1')
  $('#money1').css('opacity', '1')
  $('#plus1').css('opacity', '1')
  $('#minus1').css('opacity', '1')
}

function disableMinusIfNoMoney() {
  if (money1 == 0) {
    minus1btn.disabled = true
  } else {
    minus1btn.disabled = false
  }
  if (money2 == 0) {
    minus2btn.disabled = true
  } else {
    minus2btn.disabled = false
  }
  if (money3 == 0) {
    minus3btn.disabled = true
  } else {
    minus3btn.disabled = false
  }
  if (money4 == 0) {
    minus4btn.disabled = true
  } else {
    minus4btn.disabled = false
  }
}
disableMinusIfNoMoney()

function disablePlusIf0() {
  if (remainMoney == 0) {
    console.log(remainMoney)
    plus1btn.disabled = true
    plus2btn.disabled = true
    plus3btn.disabled = true
    plus4btn.disabled = true
  } else {
    plus1btn.disabled = false
    plus2btn.disabled = false
    plus3btn.disabled = false
    plus4btn.disabled = false
  }
}

function wrongAns1() {
  $('#a1').css('background-color', 'red')
}
function wrongAns2() {
  $('#a2').css('background-color', 'red')
}
function wrongAns3() {
  $('#a3').css('background-color', 'red')
}
function wrongAns4() {
  $('#a4').css('background-color', 'red')
}

function changeMoney(operation, ansPosition) {
  if (operation == "+") {
    if (ansPosition == 1) {
      money1 += 5
      if (money1 == 0) {
        money1para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money1para.innerHTML = `${money1}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 2) {
      money2 += 5
      if (money2 == 0) {
        money2para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money2para.innerHTML = `${money2}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 3) {
      money3 += 5
      if (money3 == 0) {
        money3para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money3para.innerHTML = `${money3}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 4) {
      money4 += 5
      if (money4 == 0) {
        money4para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money4para.innerHTML = `${money4}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == "remain") {
      remainMoney += 5
      if (remainMoney == 0) {
        remainMoneyPara.innerHTML = '0<span> đồng</span>'
      }
      else {
        remainMoneyPara.innerHTML = `${remainMoney}<span>.000.000 đồng</span>`
      }
    }
  }

  else if (operation == "-") {
    if (ansPosition == 1) {
      money1 -= 5
      if (money1 == 0) {
        money1para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money1para.innerHTML = `${money1}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 2) {
      money2 -= 5
      if (money2 == 0) {
        money2para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money2para.innerHTML = `${money2}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 3) {
      money3 -= 5
      if (money3 == 0) {
        money3para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money3para.innerHTML = `${money3}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == 4) {
      money4 -= 5
      if (money4 == 0) {
        money4para.innerHTML = '0<span> đồng</span>'
      }
      else {
        money4para.innerHTML = `${money4}<span>.000.000 đồng</span>`
      }
    }
    if (ansPosition == "remain") {
      remainMoney -= 5
      if (remainMoney == 0) {
        remainMoneyPara.innerHTML = '0<span> đồng</span>'
      }
      else {
        remainMoneyPara.innerHTML = `${remainMoney}<span>.000.000 đồng</span>`
      }
    }
  }
}

let countdown;
function endClock() {
  sounds.minute.stop()
  sounds.halfMinute.stop()
  sounds.minuteSoon.play('endSoon')
  disableAllButtons()
  clearInterval(countdown)
  document.getElementById('timer').innerHTML = '<p>0</p>'
  $('#timer').css('background-color', 'red')
}
function countdown60() {
  sounds.minute.play()
  $('#timer').css('background-color', 'black')
  let time = 59
  document.getElementById('timer').innerHTML = '<p>' + time + '</p>'
  countdown = setInterval(() => {
    time -= 1
    document.getElementById('timer').innerHTML = '<p>' + time + '</p>'
    if (time == 10) {
      $('#timer').css('background-color', 'red')
    }
    if (time == 0) {
      disableAllButtons()
      clearInterval(countdown)
    }
  }, 1000)
}
function countdown30() {
  sounds.halfMinute.play('half')
  $('#timer').css('background-color', 'black')
  let time = 29
  document.getElementById('timer').innerHTML = '<p>' + time + '</p>'
  countdown = setInterval(() => {
    time -= 1
    document.getElementById('timer').innerHTML = '<p>' + time + '</p>'
    if (time == 10) {
      $('#timer').css('background-color', 'red')
    }
    if (time == 0) {
      disableAllButtons()
      clearInterval(countdown)
    }
  }, 1000)
}

//event emissions
plus1btn.addEventListener('click', () => { playerSocket.emit('plus1') })
plus2btn.addEventListener('click', () => { playerSocket.emit('plus2') })
plus3btn.addEventListener('click', () => { playerSocket.emit('plus3') })
plus4btn.addEventListener('click', () => { playerSocket.emit('plus4') })
minus1btn.addEventListener('click', () => { playerSocket.emit('minus1') })
minus2btn.addEventListener('click', () => { playerSocket.emit('minus2') })
minus3btn.addEventListener('click', () => { playerSocket.emit('minus3') })
minus4btn.addEventListener('click', () => { playerSocket.emit('minus4') })

//event receptions
playerSocket.on('plus1', () => {
  changeMoney("+", 1)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('plus2', () => {
  changeMoney("+", 2)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('plus3', () => {
  changeMoney("+", 3)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('plus4', () => {
  changeMoney("+", 4)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('minus1', () => {
  changeMoney("-", 1)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('minus2', () => {
  changeMoney("-", 2)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('minus3', () => {
  changeMoney("-", 3)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('minus4', () => {
  changeMoney("-", 4)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
  disablePlusIf0()
})
playerSocket.on('disableA4', () => disableA4())
playerSocket.on('disableA1', () => disableA1())
playerSocket.on('enableA4', () => {
  enableA4();
  disableMinusIfNoMoney();
  disablePlusIf0()
})
playerSocket.on('enableA1', () => {
  enableA1();
  disableMinusIfNoMoney();
  disablePlusIf0()
})
playerSocket.on('disableAllButtons', () => disableAllButtons())
playerSocket.on('enableAllButtons', () => {
  enableAllButtons();
  disableMinusIfNoMoney();
  disablePlusIf0()
})

playerSocket.on('ans 1 wrong', () => {
  sounds.wrong.play()
  setTimeout(() => { wrongAns1(); }, 1000)
})
playerSocket.on('ans 2 wrong', () => {
  sounds.wrong.play()
  setTimeout(() => { wrongAns2(); }, 1000)
})
playerSocket.on('ans 3 wrong', () => {
  sounds.wrong.play()
  setTimeout(() => { wrongAns3(); }, 1000)
})
playerSocket.on('ans 4 wrong', () => {
  sounds.wrong.play()
  setTimeout(() => { wrongAns4(); }, 1000)
})

function opacityAndLoadQuestionData(data) {
  $('#a1, #a2, #a3, #a4').css('background-color', 'black')
  $('#category p').css('opacity', 0)
  $('#q').css('opacity', 0)
  $('#a1 p,#a2 p,#a3 p,#a4 p').css('opacity', 0)

  $('#category p').text(data.c)
  $('#q').text(data.q)
  $('#a1 p').text(data.a1)
  $('#a2 p').text(data.a2)
  $('#a3 p').text(data.a3)
  $('#a4 p').text(data.a4)
}
playerSocket.on('load q11', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q12', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q21', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q22', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q31', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q32', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q41', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q42', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q51', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q52', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q61', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q62', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q71', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q72', (data) => {
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q81', (data) => {
  isQ8 = true;
  opacityAndLoadQuestionData(data)
})
playerSocket.on('load q82', (data) => {
  isQ8 = true;
  opacityAndLoadQuestionData(data)
})

playerSocket.on('show cat', () => $('#category p').css('opacity', 1))
playerSocket.on('show ans 1', () => {
  $('#a1 p').css('opacity', 1)
  sounds.showQ.play()
})
playerSocket.on('show ans 2', () => {
  $('#a2 p').css('opacity', 1)
  if (isQ8) {
    sounds.showQ.play()
  }
  sounds.catChosen.play()
})
playerSocket.on('show ans 3', () => {
  $('#a3 p').css('opacity', 1)
  sounds.catChosen.play()
})
playerSocket.on('show ans 4', () => {
  $('#a4 p').css('opacity', 1)
  sounds.catChosen.play()
})
playerSocket.on('show q', () => $('#q').css('opacity', 1))

playerSocket.on('countdown 60', () => countdown60())
playerSocket.on('end clock', () => endClock())
playerSocket.on('countdown 30', () => countdown30())

playerSocket.on('set money', (money) => { remainMoney = money; remainMoneyPara.innerHTML = `${remainMoney}<span>.000.000 đồng</span>` })

playerSocket.on('reset money put', () => {
  money1 = 0
  money2 = 0
  money3 = 0
  money4 = 0

  money1para.innerHTML = '0<span> đồng</span>'
  money2para.innerHTML = '0<span> đồng</span>'
  money3para.innerHTML = '0<span> đồng</span>'
  money4para.innerHTML = '0<span> đồng</span>'

  disableMinusIfNoMoney()
})

playerSocket.on('start q sound', () => sounds.startQ.play())
playerSocket.on('start prog sound', () => sounds.startProg.play())
playerSocket.on('after 60s sound', () => sounds.bgmOpenCorrect.play())
playerSocket.on('before q sound', () => sounds.bgmBefore60s.play())
playerSocket.on('pass q sound', () => sounds.qPassed.play())
playerSocket.on('win sound', () => sounds.win.play())
playerSocket.on('lose sound', () => sounds.lose.play())
playerSocket.on('stop all sounds', () => {
  Howler.stop()
})