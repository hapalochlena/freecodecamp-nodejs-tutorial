// Option 1:
// instead of: const items = ['item1', 'item2'];
// directly say:
module.exports.items = ['item1', 'item2'];

// Option 2:

const person = {
  name: 'bob'
}

module.exports.singlePerson = person;
// ! syntax above apparently deprecated? didn't work for current project!
// what worked: module.exports = app instead of module.exports.app = app
