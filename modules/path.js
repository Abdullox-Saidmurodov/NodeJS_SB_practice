const path = require('path')

// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))

// console.log(path.basename(__dirname))
// console.log(path.dirname(__dirname))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))

// console.log(path.join(__dirname, 'templates', 'index.html'))
console.log(path.resolve(__dirname, './template', 'index.html'))