// TO DO LIST
// 1. Set a valid end date (starting w/static date, will need to automate going forward)
    // Daylight saving time 2022 in Vermont began at 2:00 AM on Sunday, March 13
    // and ends at 2:00 AM on Sunday, November 6
// 2. Calculate the time remaining
// 3. Convert the time to a usable format
// 4. Output the clock data as a reusable object
// 5. Display the clock on the page, and stop the clock when it reaches zero

// Set day and month - need to set this to daylight start and end dates for each year
// const endYear = new Date(2022, 11, 31, 23, 59, 59, 999);

let interval;
const daylightSavingsStart = new Date('March 13 2022 02:00:00 GMT-0400');
const daylightSavingsEnd = new Date('November 6 2022 02:00:00 GMT-0400');

// Set year to this year
// endYear.setFullYear(today.getFullYear());

// set up time variables
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
// Number of milliseconds per day
const msPerDay = 24 * 60 * 60 * 1000;

// set time/date fields
let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

const countDownFn = () => {
    everySecond = setInterval(countDownFn, second);
    everyMinute = setInterval(countDownFn, minute);
    everyHour = setInterval(countDownFn, hour);
    let now = new Date();
    let timeSpan = daylightSavingsStart - now;
    // if timeSpan is negative, the daylightSavingsStart date has already passed, 
    // i.e. we are currently in daylight savings time, so we should count toward 
    // daylightSavingsEnd
    if (timeSpan <= -now) {
        // count toward daylightSavingsEnd
        console.log('Need to create a timer to count toward daylightSavingsEnd')
        clearInterval(interval);
        return
    // if today is daylightSavingsStart, add a one day special image and saying here
    } else if (timeSpan = 0) {
        onsole.log('add a one day special image and saying here')
        clearInterval(interval);
        return
    } else {
        const days = Math.floor(timeSpan / day);
        const hours = Math.floor((timeSpan % day) / hour);
        const minutes = Math.floor((timeSpan % hour) / minute);
        const seconds = Math.floor((timeSpan % minute) / second);
  
        // Set fields to view on screen
        dayField.innerHTML = days;
        hourField.innerHTML = hours;
        minuteField.innerHTML = minutes;
        secondField.innerHTML = seconds;
    }

    // if timeSpan is positive, we are not currently in daylight savings,
    // so we are counting toward daylightSavingsStart

}

interval = setInterval(countDownFn, second);

console.log(countDownFn())
let now = new Date();
console.log(now)


//////////////////////////////////////////////////////////////////////////////////////
// calculate # of days today is from start and end of daylight savings
// let daysFromStart = (daylightSavingsStart.getTime() - now.getTime()) / msPerDay;
// let daysFromEnd = (daylightSavingsEnd.getTime() - now.getTime()) / msPerDay;

// //returns days that today is currently from start and end of daylight savings
// daysFromStart = Math.round(daysFromStart);
// daysFromEnd = Math.round(daysFromEnd);

// console.log(daysFromStart);
// console.log(daysFromEnd);