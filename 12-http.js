const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our homepage')
  }
  if(req.url === '/about') {
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't weem to find the page you are looking for</p>
    <a href="/">back home</a>
  `)
})

server.listen(3000)

// req => the request object is a giant object
// showcase the property of this giant req object that GETS US THE URL / ENDPOINT:
// if(req.url === '/') - because / is the url of the homepage
