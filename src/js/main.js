const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');


const openNavMobile = () => {
	nav.classList.toggle('nav__items--active');

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active');
		});
	});
};


burger.addEventListener('click', openNavMobile);