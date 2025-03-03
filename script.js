/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date(
	`Dec 31, ${new Date().getFullYear()} 23:59:59`
).getTime();
// let countDownDate = new Date(`Dec 31, 2025 23:59:59`).getTime();
// console.log(countDownDate);

let eventSection = document.querySelector(".events .info .text h2");
eventSection.textContent = `Tech Masters Event ${new Date().getFullYear()}`;

let counter = setInterval(() => {
	// Get Date Now
	let dateNow = new Date().getTime();

	// Find The Date Difference Between Now And Countdown Date
	let dateDiff = countDownDate - dateNow;

	// Get Time Units
	// let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
	let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

	document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
	document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
	document.querySelector(".minutes").innerHTML =
		minutes < 10 ? `0${minutes}` : minutes;
	document.querySelector(".seconds").innerHTML =
		seconds < 10 ? `0${seconds}` : seconds;

	if (dateDiff < 0) {
		clearInterval(counter);
	}
}, 1000);

/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".progress-bar span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
	// Skills Animate Width
	if (window.scrollY >= section.offsetTop - 250) {
		progressSpans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	}
	// Stats Increase Number
	if (window.scrollY >= statsSection.offsetTop - 300) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
};

function startCount(el) {
	let goal = el.dataset.goal;
	let count = setInterval(() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(count);
		}
	}, 2000 / goal);
}

let copyRight = document.querySelector("footer .copyright");
copyRight.innerHTML = `&copy; ${new Date().getFullYear()} Made With &lt;3 By Elzero`;

let megaMenu = document.querySelector(
	"header .main-nav>li:last-child>.mega-menu"
);
document.querySelector("header .main-nav>li:last-child>a").onclick = function (
	event
) {
	megaMenu.classList.toggle("open");
	document.body.classList.toggle("remove-scrolling")

};

addEventListener("click", function (event) {
	console.log(event.target.classList);
	console.log(event.target.matches("header .main-nav>li:last-child>a"))
	if (
		!event.target.matches("header .main-nav>li:last-child>a") &&
		!event.target.matches("header .main-nav>li:last-child>.mega-menu *:not(a)") &&
		!event.target.matches("header .main-nav>li:last-child>.mega-menu") &&
		megaMenu.classList.contains("open")
	) {
		megaMenu.classList.remove("open");
		document.body.classList.remove("remove-scrolling")
	}
});


window.onscroll = function () {
	if (megaMenu.classList.contains("open")) {
		document.body.classList.add("remove-scrolling")
	}
	else {
		document.body.classList.remove("remove-scrolling")
	}
}
