
function hamburgerMenu() {
	const body = document.querySelector('body')
	const btnMenu = document.querySelector('#js-menu')
	const nav = document.querySelector("#js-showMobile")
	var scrollPosition = 0;

	btnMenu.addEventListener("click", function(){
		this.classList.contains('open') ? closeHamburgerMenu() : openHarburgerMenu()
	})
	function openHarburgerMenu() {
		scrollPosition = window.scrollY;
		body.style.top = -scrollPosition + 'px';
		nav.classList.add('is-active')
		body.classList.add('u-hide-scroll')
		btnMenu.classList.add('open')
	}
	
	function closeHamburgerMenu() {
		window.scrollTo(0, scrollPosition);
		body.classList.remove("u-hide-scroll");
		body.removeAttribute('style')
		nav.classList.add('is-active')
		btnMenu.classList.remove('open')
	}
}
hamburgerMenu()

function anchorLink() {
	location.hash && toSection(location.hash)
}

function toSection(el) {
	const headerHeight =  document.querySelector('#js-showMobile').offsetHeight
	const section = document.querySelector(el).getBoundingClientRect();
	console.log("section",section.top + window.scrollY)	
	window.scrollTo({
		top: section.top + window.scrollY - headerHeight,
		behavior: 'smooth'
	});
}

const navElements = document.querySelectorAll('.js-nav');
for (const navElement of navElements) {
	navElement.addEventListener('click', anchorLink);
}

