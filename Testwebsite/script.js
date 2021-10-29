<<<<<<< HEAD
=======

>>>>>>> 2f3331d393114657ead9c26bd3d1ba51b20cdc63
function onLoad() {
    const btn = document.querySelector('.nav-button')
    const nav = document.querySelector('.navigation ')

    btn.addEventListener("click", function() {
        if(nav.classList.contains('open') ) {
            nav.classList.remove('open')
        }
        else {
            nav.classList.add('open')
        }
    }   )   
}
<<<<<<< HEAD
=======
function onLoad() {
    const btn = document.querySelector('.nav-button')
    const nav = document.querySelector('.navigation ')

    btn.addEventListener("click", function() {
        if(nav.classList.contains('open') ) {
            nav.classList.remove('open')
        }
        else {
            nav.classList.add('open')
        }
    }   )   

>>>>>>> 2f3331d393114657ead9c26bd3d1ba51b20cdc63
window.addEventListener('load', onLoad)