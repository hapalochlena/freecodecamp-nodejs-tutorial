 // readFile, readFileSync => you read the WHOLE file
// If it is a very BIG file
//    => you use up a lot of memory
//    => at a certain file size, eventually you will get an error that it doesn't work anymore to store it in a variable

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,    // argument => adjust size of the buffer (default 64kb) => now we get different-sized chunks of data
  encoding: 'utf8'
});

// default size of the Buffer: 64kb => We are reading data in chunks now
// chunks of 64kb; then last buffer = remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 9000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

stream.on('data', (result) => {
  console.log(result);
})
stream.on('error', (err) => {
  console.log(err);
})
