// Read bytes in a file
const fs = require('fs');

module.exports.bytes = (filename) => {
  const { size } = fs.statSync(filename);
  console.log(size);
}

// bytes('./Documents/codingChallenges/CC1/test.txt');

// Read lines in a file
const lines = (filename) => {
  let count = 0;
  fs.createReadStream(filename, process.argv[2])
    .on('data', (chunk) => {
      for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] == 10) {
          count++;
        }
      }
    })
    .on('end', () => {
      console.log(count);
    });
}

// lines('./Documents/codingChallenges/CC1/test.txt');

// Read words in a file
// const wordCount = (string) => string.split(" ").length
// will overcount the number of words if the input text happens to have multiple spaces in a row.
/* console.log(wordCount(`
  foo        bar baz
  `));
*/
const words = (filename) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const words = data.match((/\S+/g) || []).length;
    console.log(words);
  });
}

// words('./Documents/codingChallenges/CC1/test.txt');

// Read characters in a file
const chars = (filename) => {
  let chars = 0;
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    for (const ch of data) {
      chars++;
    }
    console.log(chars);
  });
}


bytes('./Documents/codingChallenges/CC1/test.txt');
lines('./Documents/codingChallenges/CC1/test.txt');
words('./Documents/codingChallenges/CC1/test.txt');
chars('./Documents/codingChallenges/CC1/test.txt');
// Show stats in line words bytes output