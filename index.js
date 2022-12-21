/* SELECAO DE ELEMENTOS */
const menuHamburguer = document.querySelector('.menu-mobile')
const xMenuMobile = document.querySelector('.close-menu-mobile')

const menuMobileOpen = document.querySelector('.menu-mobile-open')
const aMenuMobile = document.querySelectorAll('li>a')

const toTopBtn = document.querySelector('.back-to-top')
const speakers = document.querySelector('#speakers')
const speakersHeight = hello.offsetHeight;




/* FUNCOES */
function openMenu() {
    menuMobileOpen.classList.add('show')
    xMenuMobile.classList.add('show')
}

function closeMenu() {
    menuMobileOpen.classList.remove('show')
    xMenuMobile.classList.remove('show')
}

menuHamburguer.addEventListener('click', openMenu)

xMenuMobile.addEventListener('click', closeMenu)

aMenuMobile.forEach(e => {
    e.addEventListener('click', closeMenu)
});

window.addEventListener('scroll', backToTop)

/* SCROLL */
function backToTop (){
    if (window.scrollY > speakersHeight) {
        toTopBtn.classList.add('scroll')
    } else {
        toTopBtn.classList.remove('scroll')
    }
}
