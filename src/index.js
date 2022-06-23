// TO DO LIST
// 1. Set a valid end date (starting w/static date, will need to automate going forward)
    // Daylight saving time 2022 in Vermont began at 2:00 AM on Sunday, March 13
    // and ends at 2:00 AM on Sunday, November 6
// 2. Calculate the time remaining
// 3. Convert the time to a usable format
// 4. Output the clock data as a reusable object
// 5. Display the clock on the page, and stop the clock when it reaches zero

const today = new Date();

// Set day and month - need to set this to daylight start and end dates for each year
// const endYear = new Date(2022, 11, 31, 23, 59, 59, 999);

const daylightSavingsStart = new Date('March 13 2022 02:00:00 GMT-0400');
const daylightSavingsEnd = new Date('November 6 2022 02:00:00 GMT-0400');

// Set year to this year
// endYear.setFullYear(today.getFullYear());

// Number of milliseconds per day
const msPerDay = 24 * 60 * 60 * 1000;

// calculate # of days today is from start and end of daylight savings
let daysFromStart = (daylightSavingsStart.getTime() - today.getTime()) / msPerDay;
let daysFromEnd = (daylightSavingsEnd.getTime() - today.getTime()) / msPerDay;

//returns days that today is currently from start and end of daylight savings
daysFromStart = Math.round(daysFromStart);
daysFromEnd = Math.round(daysFromEnd);

console.log(daysFromStart);
console.log(daysFromEnd);