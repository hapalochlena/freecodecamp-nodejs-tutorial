// Globals   - NO WINDOW !!!!

// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (CommonJS)
// module      - info about current FILE (module)
// process     - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
