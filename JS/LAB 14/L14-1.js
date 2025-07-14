const date = new Date();

console.log("Current Date and Time:", date);
console.log("Year:", date.getFullYear());
console.log("Month (0-11):", date.getMonth()); // 0 for January, 11 for December
console.log("Day of Month:", date.getDate());
console.log("Day of Week (0-6):", date.getDay()); // 0 for Sunday, 6 for Saturday
console.log("Hour:", date.getHours());
console.log("Minute:", date.getMinutes());
console.log("Second:", date.getSeconds());
console.log("Millisecond:", date.getMilliseconds());
console.log("Time in Milliseconds since Jan 1, 1970:", date.getTime());
console.log("Time Zone Offset in Minutes:", date.getTimezoneOffset());