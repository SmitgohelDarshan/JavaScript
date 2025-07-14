//Demonstrate “child_process” core module in NodeJS
const child_process = require('child_process');
child_process.exec('first.txt',err =>{
    if(err) return console.log(err);
    console.log('file successfully opend on notepad');
})

child_process.exec('node p2.js',(err,stdout) =>{
    if(err) return console.log(err);
    console.log('js file successfully opend on notepad');
    console.log(stdout)
})