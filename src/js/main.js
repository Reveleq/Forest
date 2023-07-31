const burgerBtn = document.querySelector('.mobile-nav__button')
const navLinks = document.querySelector('.mobile-nav__links')
const showLinks = () => {
 
 if(navLinks.classList.contains('animation-show')){
    navLinks.classList.remove('animation-show')
    navLinks.classList.add('animation-hide')
     setTimeout( () => navLinks.classList.toggle('active'), 500)
 }else{
    navLinks.classList.remove('animation-hide')
    navLinks.classList.add('animation-show') 
    navLinks.classList.toggle('active')
 }


}
burgerBtn.addEventListener('click', showLinks)