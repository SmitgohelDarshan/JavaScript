const date = new Date();
console.log("Original Date and Time:", date);

date.setFullYear(2025);
console.log("Updated Year:", date);

date.setMonth(11); // 11 is December because start with 0
console.log("Updated Month:", date);

date.setDate(25);
console.log("Updated Day of Month:", date);

date.setHours(10);
console.log("Updated Hour:", date);

date.setMinutes(30);
console.log("Updated Minutes:", date);

date.setSeconds(15);
console.log("Updated Seconds:", date);

date.setMilliseconds(500);
console.log("Updated Milliseconds:", date);
