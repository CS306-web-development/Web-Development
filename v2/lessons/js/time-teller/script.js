const userNameEl = document.querySelector('.userName')
const timeEl = document.querySelector('.currentTime')
const btnEl = document.querySelector('.btn')
const msgEl = document.querySelector('.msg')
const greetEl = document.querySelector('.greetWrapper')
const timeQueryEl = document.querySelector('.queryWrapper')
let userName

do {
    userName = prompt("Please Enter Your Name:")
} while(userName == null || userName == "" )


function updateTime() {
const currentTime = new Date().toLocaleTimeString()
timeEl.textContent = currentTime
}
userNameEl.textContent = userName
greetEl.classList.remove('hidden')
const currentTime = new Date().toLocaleTimeString()
timeEl.textContent = currentTime
if(currentTime.includes('AM') ) {
    msgEl.textContent = 'Good Morning,'
} else {
    msgEl.textContent = 'Good Evening,'
}
btnEl.addEventListener('click',()=> {
    updateTime()
    btnEl.setAttribute('disabled','disabled')
    timeQueryEl.classList.remove('hidden')
    setTimeout(()=> {
    btnEl.removeAttribute('disabled')
    },60*1000)


})