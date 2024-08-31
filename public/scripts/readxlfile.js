let qna = {
  "c1q1": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q1": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q2": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q2": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q3": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q3": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q4": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q4": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q5": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q5": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q6": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q6": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q7": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q7": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c1q8": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  },
  "c2q8": {
    "c": "",
    "q": "",
    "a1": "",
    "a2": "",
    "a3": "",
    "a4": ""
  }
}

async function handleFileAsync(e) {
  try {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data)
    const sheet = workbook.Sheets['Sheet1']

    qna.c1q1.c = sheet['B2'].v
    qna.c1q1.q = sheet['C2'].v
    qna.c1q1.a1 = sheet['D2'].v
    qna.c1q1.a2 = sheet['E2'].v
    qna.c1q1.a3 = sheet['F2'].v
    qna.c1q1.a4 = sheet['G2'].v

    qna.c2q1.c = sheet['B3'].v
    qna.c2q1.q = sheet['C3'].v
    qna.c2q1.a1 = sheet['D3'].v
    qna.c2q1.a2 = sheet['E3'].v
    qna.c2q1.a3 = sheet['F3'].v
    qna.c2q1.a4 = sheet['G3'].v

    qna.c1q2.c = sheet['B4'].v
    qna.c1q2.q = sheet['C4'].v
    qna.c1q2.a1 = sheet['D4'].v
    qna.c1q2.a2 = sheet['E4'].v
    qna.c1q2.a3 = sheet['F4'].v
    qna.c1q2.a4 = sheet['G4'].v

    qna.c2q2.c = sheet['B5'].v
    qna.c2q2.q = sheet['C5'].v
    qna.c2q2.a1 = sheet['D5'].v
    qna.c2q2.a2 = sheet['E5'].v
    qna.c2q2.a3 = sheet['F5'].v
    qna.c2q2.a4 = sheet['G5'].v

    qna.c1q3.c = sheet['B6'].v
    qna.c1q3.q = sheet['C6'].v
    qna.c1q3.a1 = sheet['D6'].v
    qna.c1q3.a2 = sheet['E6'].v
    qna.c1q3.a3 = sheet['F6'].v
    qna.c1q3.a4 = sheet['G6'].v

    qna.c2q3.c = sheet['B7'].v
    qna.c2q3.q = sheet['C7'].v
    qna.c2q3.a1 = sheet['D7'].v
    qna.c2q3.a2 = sheet['E7'].v
    qna.c2q3.a3 = sheet['F7'].v
    qna.c2q3.a4 = sheet['G7'].v

    qna.c1q4.c = sheet['B8'].v
    qna.c1q4.q = sheet['C8'].v
    qna.c1q4.a1 = sheet['D8'].v
    qna.c1q4.a2 = sheet['E8'].v
    qna.c1q4.a3 = sheet['F8'].v
    qna.c1q4.a4 = sheet['G8'].v

    qna.c2q4.c = sheet['B9'].v
    qna.c2q4.q = sheet['C9'].v
    qna.c2q4.a1 = sheet['D9'].v
    qna.c2q4.a2 = sheet['E9'].v
    qna.c2q4.a3 = sheet['F9'].v
    qna.c2q4.a4 = sheet['G9'].v

    qna.c1q5.c = sheet['B10'].v
    qna.c1q5.q = sheet['C10'].v
    qna.c1q5.a1 = sheet['D10'].v
    qna.c1q5.a2 = sheet['E10'].v
    qna.c1q5.a3 = sheet['F10'].v

    qna.c2q5.c = sheet['B11'].v
    qna.c2q5.q = sheet['C11'].v
    qna.c2q5.a1 = sheet['D11'].v
    qna.c2q5.a2 = sheet['E11'].v
    qna.c2q5.a3 = sheet['F11'].v

    qna.c1q6.c = sheet['B12'].v
    qna.c1q6.q = sheet['C12'].v
    qna.c1q6.a1 = sheet['D12'].v
    qna.c1q6.a2 = sheet['E12'].v
    qna.c1q6.a3 = sheet['F12'].v

    qna.c2q6.c = sheet['B13'].v
    qna.c2q6.q = sheet['C13'].v
    qna.c2q6.a1 = sheet['D13'].v
    qna.c2q6.a2 = sheet['E13'].v
    qna.c2q6.a3 = sheet['F13'].v

    qna.c1q7.c = sheet['B14'].v
    qna.c1q7.q = sheet['C14'].v
    qna.c1q7.a1 = sheet['D14'].v
    qna.c1q7.a2 = sheet['E14'].v
    qna.c1q7.a3 = sheet['F14'].v

    qna.c2q7.c = sheet['B15'].v
    qna.c2q7.q = sheet['C15'].v
    qna.c2q7.a1 = sheet['D15'].v
    qna.c2q7.a2 = sheet['E15'].v
    qna.c2q7.a3 = sheet['F15'].v

    qna.c1q8.c = sheet['B16'].v
    qna.c1q8.q = sheet['C16'].v
    qna.c1q8.a2 = sheet['E16'].v
    qna.c1q8.a3 = sheet['F16'].v

    qna.c2q8.c = sheet['B17'].v
    qna.c2q8.q = sheet['C17'].v
    qna.c2q8.a2 = sheet['E17'].v
    qna.c2q8.a3 = sheet['F17'].v

    console.log(qna)
  } catch (e) {
    console.error(e)
  }
}
document.getElementById('xlsxFileInput').addEventListener('change', handleFileAsync)

document.getElementById('loadQ11').addEventListener('click', () => {
  hostSocket.emit('load q11', (qna.c1q1))
})
document.getElementById('loadQ12').addEventListener('click', () => {
  hostSocket.emit('load q12', (qna.c2q1))
})
document.getElementById('loadQ21').addEventListener('click', () => {
  hostSocket.emit('load q21', (qna.c1q2))
})
document.getElementById('loadQ22').addEventListener('click', () => {
  hostSocket.emit('load q22', (qna.c2q2))
})
document.getElementById('loadQ31').addEventListener('click', () => {
  hostSocket.emit('load q31', (qna.c1q3))
})
document.getElementById('loadQ32').addEventListener('click', () => {
  hostSocket.emit('load q32', (qna.c2q3))
})
document.getElementById('loadQ41').addEventListener('click', () => {
  hostSocket.emit('load q41', (qna.c1q4))
})
document.getElementById('loadQ42').addEventListener('click', () => {
  hostSocket.emit('load q42', (qna.c2q4))
})
document.getElementById('loadQ51').addEventListener('click', () => {
  hostSocket.emit('load q51', (qna.c1q5))
})
document.getElementById('loadQ52').addEventListener('click', () => {
  hostSocket.emit('load q52', (qna.c2q5))
})
document.getElementById('loadQ61').addEventListener('click', () => {
  hostSocket.emit('load q61', (qna.c1q6))
})
document.getElementById('loadQ62').addEventListener('click', () => {
  hostSocket.emit('load q62', (qna.c2q6))
})
document.getElementById('loadQ71').addEventListener('click', () => {
  hostSocket.emit('load q71', (qna.c1q7))
})
document.getElementById('loadQ72').addEventListener('click', () => {
  hostSocket.emit('load q72', (qna.c2q7))
})
document.getElementById('loadQ81').addEventListener('click', () => {
  hostSocket.emit('load q81', (qna.c1q8))
})
document.getElementById('loadQ82').addEventListener('click', () => {
  hostSocket.emit('load q82', (qna.c2q8))
})