const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  } else if (req.url === '/about') {
    // BLOCKING CODE !!!!
    for(let i = 0; i < 1000; i++){
      for(let j = 0; j < 1000; j++){
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page')
  } else {
    res.end('Error Page')
  }
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
})

// 3 Users (represented by 3 different browser tabs) request these 3 pages => life is beautiful
// UNTIL we put in some BLOCKING CODE!
// Now, when a user requests the /about page, the page will load and only display the result AFTER the for loop is completed.
// BUT - when someone requests the other 2 pages in the meantime, they will ALSO load until the for loop is completed!

// => YOU SHOULD ALWAYS SET UP YOUR CODE ASYNCHRONOUSLY !!!
