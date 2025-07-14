//Demonstrate “path” core module in NodeJS.
const path = require('path');

console.log('dirname: returns directory name (file name not included)');
console.log(path.dirname('/B.TECH 3rd sem/JS/LAB-17/demo.js'));

console.log('basename: returns only file name');
console.log(path.basename('/B.TECH 3rd sem/JS/LAB-17/demo.js'));

console.log('join: joins two paths');
console.log(path.join('/B.TECH 3rd sem', '/JS/LAB-17/demo.js'));

// normalize: resolves '..' and '.' segments in a path
console.log('normalize: cleans up path');
console.log(path.normalize('/B.TECH 3rd sem/JS/LAB-17/../demo.js'));

console.log('resolve: gives absolute path');
console.log(path.resolve('JS', 'LAB-17', 'demo.js'));

console.log('relative: relative path from one to another');
console.log(path.relative('/B.TECH 3rd sem/JS', '/B.TECH 3rd sem/JS/LAB-17/demo.js'));
