const allPresets = document.querySelectorAll('.preset')
const setBtnEl = document.querySelector('.btn')
const colorInputEl = document.querySelector('#color')

allPresets.forEach((preset)=> {
    preset.addEventListener('click', (e)=> {
        document.body.style.backgroundColor = e.target.classList[1]
    })
}) 

setBtnEl.addEventListener('click',(e)=> {
    e.preventDefault();
    document.body.style.backgroundColor = colorInputEl.value;
})


