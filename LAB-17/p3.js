// Demonstrate “fs” core module in NodeJS.
const fs = require('fs');

fs.writeFile('first.txt', 'hello world', err => {
    if (err) return console.log(err);
    console.log('File successfully written');
});

fs.readFile('first.txt', (err, data) => {
    if (err) return console.log(err);
    console.log('File content:', data.toString());
});

fs.appendFile('first.txt', '\nappend text', err => {
    if (err) return console.log(err);
    console.log('File successfully appended');
});

// Open file (r = read mode)
fs.open('first.txt', 'r', (err, fd) => {
    if (err) return console.log(err);
    console.log('File opened successfully');

    fs.close(fd, (err) => {
        if (err) return console.log(err);
        console.log('File closed successfully');
    });
});

// Get file information/statistics
fs.stat('first.txt', (err, stats) => {
    if (err) return console.log(err);
    console.log('File Stats:');
    console.log(`- Size: ${stats.size} bytes`);
    console.log(`- Created: ${stats.birthtime}`);
    console.log(`- Modified: ${stats.mtime}`);
});

fs.exists('first.txt', (exists) => {
    if (exists) {
        console.log('File exists');
    } else {
        console.log('File does not exist');
    }
});
