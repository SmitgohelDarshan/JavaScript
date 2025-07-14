function dateDiff(date1, date2) {
    return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

function leftdayscalculation() {
    const dob = document.getElementById('dob').value.trim().split('-');
    const day = parseInt(dob[0]);
    const month = parseInt(dob[1]) - 1; // Months are zero-based in JavaScript Date

    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, month, day);

    // If the birthday has already passed this year, move to the next year
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const daysLeft = dateDiff(today, nextBirthday);

    document.getElementById('leftdays').innerText =`${daysLeft} days  are left in your birthday...`;
}

// For example: for month parseInt(dob[1]) - 1 logic.

// If the input month is 03 (March), parseInt(dob[1]) would be 3.
// Subtracting 1 makes it 2, which represents March in JavaScript’s Date object.
// Without the - 1, new Date(currentYear, month, day) would interpret 03 as April instead of March, which would lead to incorrect dates.


// another ....


// it is almost correct but have issue in month calculation bec.. some month has 30 and some has 31 and feb only 28.
// function leftdayscalculation(){
//     const dob = document.getElementById('dob').value.trim().split('-');
//     const date = dob[0];
//     const month = dob[1];

//     const currentdate = parseInt(new Date().toISOString().split('-')[2].split('T')[0]);
//     const currentmonth = parseInt(new Date().toISOString().split('-')[1]);

//     let leftdays = 0;
//     let leftmonth = 0;

//     if(currentdate > date){
//         leftdays = currentdate -date;
//     }

//     else{
//         leftdays = date-currentdate;
//     }

//     if(currentmonth > month){
//         leftmonth = currentmonth - month;
//     }

//     else{
//         leftmonth = month - currentmonth;
//     }
//     console.log(leftdays);
//     console.log(leftmonth); 
    
//     leftmonth = 12 - leftmonth;
//     const leftmonthdays = leftmonth*30;

//     const result = leftdays+leftmonthdays;

//     document.getElementById('leftdays').innerText=result;
// } 