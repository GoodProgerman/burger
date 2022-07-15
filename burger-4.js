"use strict"
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone |iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/0pera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch');
}
else {
	document.body.classList.add('_pc');
}

// -------------
const menuArrows = document.querySelectorAll('.menu__arrow');
const menuLinksBig = document.querySelectorAll('.menu__link-big')

for (let index = 0; menuLinksBig.length > index; index++) {
	const menuLink = menuLinksBig[index];
	if (menuArrows.length > 0) {
		menuArrows.forEach(menuArrow => {
			menuArrow.addEventListener("click", function (event) {
				menuLink.classList.toggle('_active');
			});
		});
	}
}
// -------------

// -------------
const menuLinks = document.querySelectorAll('.menu__link a[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", function (event) {
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY -
					document.querySelector('.header').offsetHeight;

				if (menuIcon) {
					menuIcon.classList.remove('_active');
					menuBody.classList.remove('_active');
					document.body.classList.remove('_lock');
				}

				window.scrollTo({
					behavior: "smooth",
					top: gotoBlockValue
				});
				event.preventDefault();
			}
		});
	});
}
// -------------


// -------------
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
	menuIcon.addEventListener('click', function (event) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}