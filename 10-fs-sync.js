const { readFileSync, writeFileSync } = require('fs');

// same as:
// const fs = require('fs');
// fs.readFileSync()

console.log('start');

// Read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

// Create new file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
)

console.log('done with this task');
console.log('starting the next one');


// Node is reading this code SYNCHRONOUSLY:
// It is going line by line, reading these files, then arrives at the result.
// If this is something that takes a really long time, YOUR APPLICATION IS DOWN!
