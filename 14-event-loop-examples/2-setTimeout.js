// started operating system process
console.log('first');
setTimeout(() => {          // setTimeout is asynchronous
  console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process

// OUTPUT
// first
// third
// second
