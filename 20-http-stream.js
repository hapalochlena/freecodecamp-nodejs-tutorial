const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res)   // .pipe => pushes data from ReadStream to WriteStream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(3000)


// In Browser: open Inspect and check the NETWORK tab:
// under "Size", we see that this file we just sent over the network was 1.8 MB!
// Not smart so send such large files over the network

// Better: SEND DATA IN CHUNKS with ReadStream
// After refactoring: under Network tab, in Headers you can see it says "chunks"
