// Read bytes in a file
module.exports.bytes = (filename) => {
  const { size } = fs.statSync(filename);
  console.log(size);
}

// Read lines in a file
module.exports.lines = (filename) => {
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

// Read words in a file
// const wordCount = (string) => string.split(" ").length
// will overcount the number of words if the input text happens to have multiple spaces in a row.
/* console.log(wordCount(`
  foo        bar baz
  `));
*/
module.exports.words = (filename) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    const words = data.match((/\S+/g) || []).length;
    console.log(words);
  });
}

// Read characters in a file
module.exports.chars = (filename) => {
  let chars = 0;
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    for (const ch of data) {
      chars++;
    }
    console.log(chars);
  });
}
// Show stats in line words bytes output