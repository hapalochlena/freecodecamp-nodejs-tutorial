const path = require('path');

console.log(path.sep); // returns my platform-specific separator

const filePath = path.join('/content/', 'subfolder', 'test.txt') // the / after content gets removed, because it gets normalized!
console.log(filePath);

// access basename (name of file at the end)
const base = path.basename(filePath)
console.log(base);

// return an absolute path
// takes sequence of paths, resolves it into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
// output:
// /Users/Lena/Desktop/Coding_Projects_2023/Phase_1_Warmup/Nodejs_Expressjs_YouTube_Tutorial_freeCodeCamp/1_tutorial/content/subfolder/test.txt
// WHY?
// Our application is going to run in different environments
// => the path to some resource is going to be different on my machine than in e.g. Heroku
