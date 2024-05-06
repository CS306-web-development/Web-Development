const decrementBtnEl = document.querySelector('.decrementBtn')
const incrementBtnEl = document.querySelector('.incrementBtn')
const counterDisplayEl = document.querySelector('.counterDisplay')
const allBtns = document.querySelectorAll('.btn')



function checkIfEqualZero() {
    if (Number(counterDisplayEl.textContent) === 0) {
        decrementBtnEl.setAttribute('disabled','disabled')
    } else {
        decrementBtnEl.removeAttribute('disabled')
    }
    
}

checkIfEqualZero()
allBtns.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        switch(e.target.name) {
            case 'increment':
                counterDisplayEl.textContent = Number(counterDisplayEl.textContent) + 1
                break;
            case 'decrement':
                counterDisplayEl.textContent = Number(counterDisplayEl.textContent) - 1
                break;
            default:
                break;
        }
        checkIfEqualZero()

    })
})
