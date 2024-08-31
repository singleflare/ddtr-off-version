let A4Disabled = false;
let A1Disabled = false;
let allButtonsDisabled = false;

const playerSocket = io('/player');
const hostSocket = io('/host');

document.getElementById('disableA4').addEventListener('click', () => {
  if (!A4Disabled) {
    hostSocket.emit('disableA4');
    document.getElementById('disableA4').innerText = 'Bật đáp án 4';
    A4Disabled = true;
  } else {
    hostSocket.emit('enableA4');
    document.getElementById('disableA4').innerText = 'Tắt đáp án 4';
    A4Disabled = false;
  }
});

document.getElementById('disableA1').addEventListener('click', () => {
  if (!A1Disabled) {
    hostSocket.emit('disableA1');
    document.getElementById('disableA1').innerText = 'Bật đáp án 1';
    A1Disabled = true;
  } else {
    hostSocket.emit('enableA1');
    document.getElementById('disableA1').innerText = 'Tắt đáp án 1';
    A1Disabled = false;
  }
});

document.getElementById('disableAllMoneyBtn').addEventListener('click', () => {
  if (!allButtonsDisabled) {
    hostSocket.emit('disableAllButtons');
    document.getElementById('disableAllMoneyBtn').innerText = 'Bật cộng/trừ';
    allButtonsDisabled = true;
  } else {
    hostSocket.emit('enableAllButtons');
    document.getElementById('disableAllMoneyBtn').innerText = 'Tắt cộng/trừ';
    allButtonsDisabled = false;
  }
});

document.getElementById('ans1Wrong').addEventListener('click', () => {
  hostSocket.emit('ans 1 wrong');
});
document.getElementById('ans2Wrong').addEventListener('click', () => {
  hostSocket.emit('ans 2 wrong');
});
document.getElementById('ans3Wrong').addEventListener('click', () => {
  hostSocket.emit('ans 3 wrong');
});
document.getElementById('ans4Wrong').addEventListener('click', () => {
  hostSocket.emit('ans 4 wrong');
});

document.getElementById('openCat').addEventListener('click', () => {
  hostSocket.emit('show cat');
});
document.getElementById('openA1').addEventListener('click', () => {
  hostSocket.emit('show ans 1');
});
document.getElementById('openA2').addEventListener('click', () => {
  hostSocket.emit('show ans 2');
});
document.getElementById('openA3').addEventListener('click', () => {
  hostSocket.emit('show ans 3');
});
document.getElementById('openA4').addEventListener('click', () => {
  hostSocket.emit('show ans 4');
});
document.getElementById('openQ').addEventListener('click', () => {
  hostSocket.emit('show q')
});

document.getElementById('60s').addEventListener('click', () => {
  hostSocket.emit('countdown 60');
});
document.getElementById('30s').addEventListener('click', () => {
  hostSocket.emit('countdown 30');
});
document.getElementById('endClock').addEventListener('click', () => {
  hostSocket.emit('end clock');
});

document.getElementById('setMoneyBtn').addEventListener('click', () => {
  const money = document.getElementById('setMoney').value;
  hostSocket.emit('set money', money);
});

document.getElementById('resetMoneyPut').addEventListener('click', () => {
  hostSocket.emit('reset money put');
})

document.getElementById('startQ').addEventListener('click', () => {
  hostSocket.emit('start q sound');
});
document.getElementById('startProg').addEventListener('click', () => {
  hostSocket.emit('start prog sound');
});
document.getElementById('after60s').addEventListener('click', () => {
  hostSocket.emit('after 60s sound');
});
document.getElementById('beforeQ').addEventListener('click', () => {
  hostSocket.emit('before q sound');
});
document.getElementById('passQ').addEventListener('click', () => {
  hostSocket.emit('pass q sound');
});
document.getElementById('win').addEventListener('click', () => {
  hostSocket.emit('win sound');
});
document.getElementById('lose').addEventListener('click', () => {
  hostSocket.emit('lose sound');
});
document.getElementById('stopAll').addEventListener('click', () => {
  hostSocket.emit('stop all sounds');
});