// Promisifying with util:
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const { readFile, writeFile } = require('fs').promises


// PROMISE:

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))



// ASYNC + AWAIT:

const start = async() => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    // const second = await readFilePromise('./content/second.txt', 'utf8');
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    // console.log(first, second);
    // await writeFilePromise(
    // await writeFile(
    //   './content/result-mind-grenade.txt',
    //   `THIS IS AWESOME: ${first}, ${second}`,
    //   { flag: 'a' }
    // );
    return first // NEED TO USE RETURN HERE IF WE WANT TO USE IT IN ANOTHER FUNCTION (SEE BELOW)
  } catch (error) {
    console.log(error);
  }
}

// start()

// USING AN ASYNC FUNCTION INSIDE ANOTHER FUNCTION:

// OPTION 1) .then
const helper = (start) => {
  start().then(data => console.log(data))
}

// OPTION 2) async+await
const helper = async (start) => {
  const data = await start()
  console.log(data)
}

helper(start)

// WITH CATCHING ERRORS:
// 1)
const helper = (start) => {
  start()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
// 2)
const helper = async (start) => {
  try {
    const data = await start()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
