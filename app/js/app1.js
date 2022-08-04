
// function hamburgerMenu() {
// 	$("#js-menu").click((function() {
// 		$(this).is(".open") ? closeHamburgerMenu() : openHarburgerMenu()
// 	})), 
//     $("#js-showMobile").find("a[href]").click((function(e) {
// 		$(window).innerWidth() <= 768 && closeHamburgerMenu()
// 	}))
// }

// function openHarburgerMenu() {
// 	$("#js-showMobile").slideDown().addClass("is-active"), $("body").css({
// 		position: "initial",
// 		top: "auto"
// 	}).addClass("u-hide-scroll"), $("#js-menu").addClass("open")
// }

// function closeHamburgerMenu() {
// 	$("body").removeClass("u-hide-scroll").css({
// 		position: "static",
// 		top: "0"
// 	}).scrollTop($(window).scrollTop()), $("#js-showMobile").slideUp().addClass("is-active"), $("#js-menu").removeClass("open")
// }
function anchorLink(e) {
	e.preventDefault();
	console.log(e)
	location.hash && toSection(location.hash)
}

function toSection(el) {
	const headerHeight =  document.querySelector('#js-header').offsetHeight
	const section = document.querySelector(el).getBoundingClientRect()
	console.log("section",section.top)	
	// document.querySelector(el).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}

const navElements = document.querySelectorAll('.js-nav');
for (const navElement of navElements) {
	navElement.addEventListener('click', (e) => anchorLink(e));
}
