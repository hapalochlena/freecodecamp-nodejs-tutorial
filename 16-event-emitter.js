const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// Listeners =

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic`);
});


// Event emitter =
customEmitter.emit('response', 'john', 34);
