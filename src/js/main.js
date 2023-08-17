document.addEventListener('DOMContentLoaded', () =>{
const burgerBtn = document.querySelector('.mobile-nav__button')
const allNavItems = document.querySelectorAll('.mobile-nav__link')
const navLinks = document.querySelector('.mobile-nav__links')
const heroPlace = document.querySelector('.hero-place')
const mobileNav = document.querySelector('.mobile-nav')
const contactBtn = document.querySelector('.contact__btn')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msgInput = document.querySelector('#msg')
const nameError = document.querySelector('.contact__name-error')
const msgError = document.querySelector('.msg__name-error')
const errorAlert = document.querySelectorAll('.error-alert')
const inputs = document.querySelectorAll('input')
const showLinks = () => {
   navLinks.classList.toggle('active')
   heroPlace.classList.toggle('active-hero')
}
allNavItems.forEach(e => e.addEventListener('click', () => {
   navLinks.classList.remove('active')
   heroPlace.classList.remove('active-hero')
}))
const addShadow = () => {
   if(window.scrollY >= 350){
   mobileNav.classList.add('shadow')
   navLinks.classList.add('shadow')
   }else{
      mobileNav.classList.remove('shadow')
   navLinks.classList.remove('shadow')
   }
}
const checkName = () => {
   if(nameInput.value === '' && msgInput.value === '' && emailInput.value === ''){
   errorAlert.forEach(e => e.textContent = 'Musisz Uzupełnić pole!')
   inputs.forEach(e => e.classList.add('error'))
   msgInput.classList.add('error')
   msgInput.setAttribute('placeholder', '')
   }else if(nameInput.value === '' && msgInput.value === ''){
      NO
   }
   else{
      errorAlert.forEach(e => e.textContent = '')
      inputs.forEach(e => e.classList.remove('error'))
      msgInput.classList.remove('error')
      msgInput.setAttribute('placeholder', 'Wpisz tekst')
   }
}

contactBtn.addEventListener('click', checkName,)
window.addEventListener('scroll', addShadow)
burgerBtn.addEventListener('click', showLinks)
})