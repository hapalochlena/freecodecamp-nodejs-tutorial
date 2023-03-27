const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', (error, result) => {
//   if(error) {
//     console.log(error);
//     return
//   }
//   console.log(result);
// })

// OUTPUT:
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e 0a>
// BECAUSE WE DIDN'T GIVE IT THE UTF ENCODING !!!!!!!

//

// readFile('./content/first.txt', 'utf8', (error, result) => {
//   if(error) {
//     console.log(error);
//     return
//   }
//   console.log(result);
// })

//

// The above will lead to callback hell...

// What do we want to do?
// => read out first file, read out second file, create third file:

console.log('start');

readFile('./content/first.txt', 'utf8', (error, result) => {
  if(error) {
    console.log(error);
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (error, result) => {
    if(error) {
      console.log(error);
      return
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (error, result) => {
        if(error) {
          console.log(error);
          return
        }
        console.log('done with this taks');
      }
      )
  });
})

// = CALLBACK HELL => use promise (.then.catch) for cleaner syntax => use aync/await for even cleaner syntax

console.log('starting next task');

// OUTPUT

// start
// starting next task
// done with this taks

// >>> IT IS THIS WAY AROUND, because it is ASYNCHRONOUS !!!
// Node reads the first console.log, then starts the function, then
// goes immediately to the last console.log while waiting for the function to go through,
// then delivering the output of the function once it's done.
