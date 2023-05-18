document.querySelector('body').style.height = '100vh'
document.querySelector('body').style.overflow = 'hidden'
document.querySelector('.overlay').style.display = 'flex'

setTimeout(() => {
    document.querySelector('body').style.overflow = 'initial'
    document.querySelector('.overlay').style.display = 'none'
    document.querySelector('body').style.height='fitContent'
}, 3000);