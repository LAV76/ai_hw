const resultEl = document.getElementById('result')
const input1El = document.getElementById('input1')
const input2El = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}
const printResult = function (result) {
    if(result < 0){
        resultEl.style.color = 'red'
    } else {
        resultEl.style.color = 'green'
    }
    resultEl.textContent = result
}

submitBtn.onclick = function () {
    if (action === '+') {
        const sum = Number(input1El.value) + Number(input2El.value)
        printResult(sum)
    }else if (action === '-') {
        const sum = Number(input1El.value) - Number(input2El.value)
        printResult(sum)
    } 
}

