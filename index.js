/** @format */

const date = new Date();

function myCalendar() {
	date.setDate(1);

	const monthDays = document.querySelector(".days__all");

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();

	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	document.querySelector(".date__month").innerHTML = months[date.getMonth()];

	document.querySelector(".date__year").innerHTML = date.getFullYear();

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date"></div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div id="today" class="days__all">${i}</div>`;
		} else {
			days += `<div class="days__all">${i}</div>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date"></div>`;
		monthDays.innerHTML = days;
	}
}

document.querySelector(".prev").addEventListener("click", function () {
	date.setMonth(date.getMonth() - 1);
	myCalendar();
});

document.querySelector(".next").addEventListener("click", function () {
	date.setMonth(date.getMonth() + 1);
	myCalendar();
});

myCalendar();
