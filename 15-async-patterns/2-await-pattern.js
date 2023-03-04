const { readFile, writeFile } = require('fs').promises

// COULD EVEN SKIP THIS !
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    // const second = await readFilePromise('./content/second.txt', 'utf8');
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(first, second);
    // await writeFilePromise(
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME: ${first}, ${second}`,
      { flag: 'a' }
    );
  } catch (error) {
    console.log(error);
  }
}

start()

// Don't need this anymore because of util.promisify(readFile)
// ---
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
