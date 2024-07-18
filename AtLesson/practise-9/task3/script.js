const num = document.getElementById('num')
const resultBtn = document.getElementById('btn')
const result = document.getElementById('result')

resultBtn.addEventListener('click', () => {
    result.innerText = parseFloat(num.value)*parseFloat(num.value)
})