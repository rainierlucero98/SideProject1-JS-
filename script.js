const daysJ = document.getElementById('days');
const hoursJ = document.getElementById('hours');
const minsJ = document.getElementById('mins');
const secondsJ = document.getElementById('seconds');

const nextyear = "1 Jan 2022";

function countdown () {
    const nextyearDate = new Date(nextyear);
    const currentDate = new Date();

    const totalSeconds = (nextyearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;

    daysJ.innerHTML = days;
    hoursJ.innerHTML = hours;
    minsJ.innerHTML = mins;
    secondsJ.innerHTML = seconds;
}

//initial countdown
countdown ();

setInterval(countdown, 1000);