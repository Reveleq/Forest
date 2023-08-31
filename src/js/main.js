document.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.querySelector(".mobile-nav__button");
	const allNavItems = document.querySelectorAll(".mobile-nav__link");
	const navLinks = document.querySelector(".mobile-nav__links");
	const closeBtn = document.querySelector('.close')
	const secondNavLinks = document.querySelector('.nav__links')
	const heroPlace = document.querySelector(".hero-place");
	const mobileNav = document.querySelector(".mobile-nav");
	const nav = document.querySelector(".nav");
	const acutalYearSpan = document.querySelector('.forest__year-actual')
	const year = new Date().getFullYear()
	const sections = document.querySelectorAll('section')
	acutalYearSpan.textContent = year

	const checkNav = () => {
	if(window.innerWidth >= 992 && window.scrollY >= 400){
		
			nav.classList.add("shadow");
	}else if(window.innerWidth >= 992 && window.scrollY < 400) {
			nav.classList.remove("shadow");
		}else if(window.innerWidth < 992 && window.scrollY >= 320){
			mobileNav.classList.add("shadow");
			navLinks.classList.add("shadow");	
		}else if(window.innerWidth < 992 && window.scrollY < 320){
			mobileNav.classList.remove("shadow");
			navLinks.classList.remove("shadow");
		}
	}	
	const showLinks = () => {
		burgerBtn.classList.add('hide')
		setTimeout( () => {
burgerBtn.classList.remove('hide')
		}, 300)
		navLinks.classList.toggle("active");
	};
	const closeLinks = () => {
		closeBtn.classList.add('hide')
		setTimeout( () => {
closeBtn.classList.remove('hide')
		}, 300)
		navLinks.classList.remove('active')
	}
	allNavItems.forEach((e) =>
		e.addEventListener("click", () => {
			navLinks.classList.remove("active");
			heroPlace.classList.remove("active-hero");
		})
	);
	window.addEventListener('scroll', checkNav)
	burgerBtn.addEventListener("click", showLinks);
	closeBtn.addEventListener('click', closeLinks )
});
