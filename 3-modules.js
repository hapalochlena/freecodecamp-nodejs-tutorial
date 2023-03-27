// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names') // const {john, peter} = require('./4-names')
// console.log(names)

const data = require('./6-alternative-flavor')
// console.log(data)

const sayHi = require('./5-utils')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

require('./7-mind-grenade')
// the function from 7-mind-grenade.js will directly be executed
