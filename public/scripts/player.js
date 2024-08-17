const playerSocket = io('/player')

let money1 = 0
let money2 = 0
let money3 = 0
let money4 = 0
let remainMoney = 200
let currentMoneyIn60s = remainMoney

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

function opacityAns1() {
  $('#a1').css('opacity', '0.8')
  $('#a1').css('background-color', 'red')
  $('#money1').css('background-color', 'gray')
  $('#money1text').css('color', 'white')
}
function opacityAns2() {
  $('#a2').css('opacity', '0.5')
  $('#money2').css('opacity', '0.5', 'color', 'red')
}
function opacityAns3() {
  $('#a3').css('opacity', '0.5')
  $('#money3').css('opacity', '0.5', 'color', 'red')
}
function opacityAns4() {
  $('#a4').css('opacity', '0.5')
  $('#money4').css('opacity', '0.5', 'color', 'red')
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
      currentMoneyIn60s += 5
      if (currentMoneyIn60s == 0) {
        remainMoneyPara.innerHTML = '0<span> đồng</span>'
      }
      else {
        remainMoneyPara.innerHTML = `${currentMoneyIn60s}<span>.000.000 đồng</span>`
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
      currentMoneyIn60s -= 5
      if (currentMoneyIn60s == 0) {
        remainMoneyPara.innerHTML = '0<span> đồng</span>'
      }
      else {
        remainMoneyPara.innerHTML = `${currentMoneyIn60s}<span>.000.000 đồng</span>`
      }
    }
  }
}

function playSound(sound) {
  var sound = new Howl({ src: ['/sounds/' + sound] })
  sound.play()
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
})
playerSocket.on('plus2', () => {
  changeMoney("+", 2)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('plus3', () => {
  changeMoney("+", 3)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('plus4', () => {
  changeMoney("+", 4)
  changeMoney("-", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('minus1', () => {
  changeMoney("-", 1)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('minus2', () => {
  changeMoney("-", 2)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('minus3', () => {
  changeMoney("-", 3)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('minus4', () => {
  changeMoney("-", 4)
  changeMoney("+", "remain")
  disableMinusIfNoMoney()
})
playerSocket.on('disableA4', () => disableA4())
playerSocket.on('disableA1', () => disableA1())
playerSocket.on('enableA4', () => enableA4())
playerSocket.on('enableA1', () => enableA1())
playerSocket.on('disableAllButtons', () => disableAllButtons())
playerSocket.on('enableAllButtons', () => enableAllButtons())

playerSocket.on('ans 1 wrong', () => { opacityAns1(); playSound('sai.wav') })
playerSocket.on('ans 2 wrong', () => { opacityAns2(); playSound('sai.wav') })
playerSocket.on('ans 3 wrong', () => { opacityAns3(); playSound('sai.wav') })
playerSocket.on('ans 4 wrong', () => { opacityAns4(); playSound('sai.wav') })

playerSocket.on('toQ1', (q11json) => {
  $('#category p').css('opacity', 0)
  $('#q').css('opacity', 0)
  $('#a1 p').css('opacity', 0)
  $('#a2 p').css('opacity', 0)
  $('#a3 p').css('opacity', 0)
  $('#a4 p').css('opacity', 0)

  $('#category p').text(q11json.cat)
  $('#q').text(q11json.question)
  $('#a1 p').text(q11json.ans1)
  $('#a2 p').text(q11json.ans2)
  $('#a3 p').text(q11json.ans3)
  $('#a4 p').text(q11json.ans4)
})

playerSocket.on('show cat', () => $('#category p').css('opacity', 1))
playerSocket.on('show ans 1', () => $('#a1 p').css('opacity', 1))
playerSocket.on('show ans 2', () => $('#a2 p').css('opacity', 1))
playerSocket.on('show ans 3', () => $('#a3 p').css('opacity', 1))
playerSocket.on('show ans 4', () => $('#a4 p').css('opacity', 1))
playerSocket.on('show q', () => $('#q').css('opacity', 1))
