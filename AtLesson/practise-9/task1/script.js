const numOne = document.getElementById('numone')
const numTwo = document.getElementById('numtwo')
const resultBtn = document.getElementById('result-btn')
const result = document.getElementById('result')


resultBtn.addEventListener('click', function (){
    let sum = parseFloat(numOne.value) + parseFloat(numTwo.value)
    result.textContent = 'Netice:' + sum
})