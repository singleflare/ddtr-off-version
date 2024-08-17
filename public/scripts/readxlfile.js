let q11json = {}
async function handleFileAsync(e) {
  try {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data)
    const sheet = workbook.Sheets['Sheet1']
    let catCell = sheet['B2'].v
    let questionCell = sheet['C2'].v
    let ans1Cell = sheet['D2'].v
    let ans2Cell = sheet['E2'].v
    let ans3Cell = sheet['F2'].v
    let ans4Cell = sheet['G2'].v
    q11json = {
      cat: catCell,
      question: questionCell,
      ans1: ans1Cell,
      ans2: ans2Cell,
      ans3: ans3Cell,
      ans4: ans4Cell
    }
    console.log(q11json)
  } catch (e) {
    console.error(e)
  }
}
document.getElementById('xlsxFileInput').addEventListener('change', handleFileAsync)
document.getElementById('toQ1').addEventListener('click', () => {
  hostSocket.emit('toQ1', (q11json))
})