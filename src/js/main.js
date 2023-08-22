document.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.querySelector(".mobile-nav__button");
	const allNavItems = document.querySelectorAll(".mobile-nav__link");
	const navLinks = document.querySelector(".mobile-nav__links");
	const heroPlace = document.querySelector(".hero-place");
	const mobileNav = document.querySelector(".mobile-nav");
	const nav = document.querySelector(".nav");
	const showLinks = () => {
		navLinks.classList.toggle("active");
		heroPlace.classList.toggle("active-hero");
	};
	allNavItems.forEach((e) =>
		e.addEventListener("click", () => {
			navLinks.classList.remove("active");
			heroPlace.classList.remove("active-hero");
		})
	);
	const addShadow = () => {
		if (window.scrollY >= 320) {
			mobileNav.classList.add("shadow");
			navLinks.classList.add("shadow");
		} else {
			mobileNav.classList.remove("shadow");
			navLinks.classList.remove("shadow");
		}
	};

	window.addEventListener("scroll", addShadow);
	burgerBtn.addEventListener("click", showLinks);
});
