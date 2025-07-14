function updateTimeAndGreeting() {
    const date = new Date();
    
    document.getElementById('dateTime').innerText = `Date and Time : ${date.toLocaleDateString("en-GB")} ${ date.toLocaleTimeString()}`;

    // document.getElementById('dateTime').innerText = `Date and Time : ${date.toLocaleString()}`;
    
    document.getElementById('Greeting').style.color = "blue";
    
    const time = date.getHours();
    
    if (time >= 4 && time < 12) {
        document.getElementById('Greeting').innerText = "Greeting : Good Morning!";
    } else if (time >= 12 && time < 17) {
        document.getElementById('Greeting').innerText = "Greeting : Good Afternoon!";
    } else if (time >= 17 && time < 22) {
        document.getElementById('Greeting').innerText = "Greeting : Good Evening!";
    } else {
        document.getElementById('Greeting').innerText = "Greeting : Good Night!";
    }
}

setInterval(updateTimeAndGreeting, 1000);


// const date = new Date();

// document.getElementById('dateTime').innerText = `Date and Time : ${date.toLocaleString()}`;

// document.getElementById('Greeting').style.color = "blue";

// const time = date.getHours();

// if (time >= 4 && time < 12) {
//     document.getElementById('Greeting').innerText = "Greeting : Good Morning!";
// } else if (time >= 12 && time < 17) {
//     document.getElementById('Greeting').innerText = "Greeting : Good Afternoon!";
// } else if (time >= 17 && time < 22) {
//     document.getElementById('Greeting').innerText = "Greeting : Good Evening!";
// } else {
//     document.getElementById('Greeting').innerText = "Greeting : Good Night!";
// }


// const date = new Date();
// document.getElementById('dateTime').innerText = `Date and Time : ${date}`;
// document.getElementById('Greeting').style.color = "blue";


// const time = date.toString().split(' ')[4].split(':')[0];

// if(time> 4 && time < 12){
//     document.getElementById('Greeting').innerText = "Greeting : Good Morning!";
// }

// else if(time >=12 && time < 17){
//     document.getElementById('Greeting').innerText = "Greeting : Good Afternoon!";

// }

// else if(time >=17 && time < 22){
//     document.getElementById('Greeting').innerText = "Greeting : Good Evening!";
// }

// else{
//     document.getElementById('Greeting').innerText = "Greeting : Good Night!";

// }