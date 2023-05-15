
let btn = document.querySelector('.content').querySelectorAll('span')
btn.forEach((item) => {
    item.addEventListener('click', () => {
        window.location.href = 'blogSingle.html'
    })
})

const navHamBurger = document.querySelector('.navHamBurger')
const header = document.querySelector('.header')
let navState = false
navHamBurger.addEventListener('click', () => {
    if (!navState) {
        header.style.height = '25rem'
        navState = true;
    } else {
        header.style.height = '6rem'
        navState = false;
    }

})


