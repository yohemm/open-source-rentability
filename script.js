const menuHamburger = document.querySelector(".menuburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click' , ()=> {
    navLinks.classList.toggle('mobile-menu')
})
