// console.log("Hello world")

// const logger = () => console.log("Hello logger")

// logger()

// console.log("Hello world", __dirname)
// console.log("Hello world", __filename)

// const car = {name: 'MERS', color: 'black'}
// const carLogger = () => console.log('Logger car');

// const user = {name: 'Samar'}
// const userLogger = () => console.log('Logger user')

// console.log('Hello world')

const userData = require('./user')
const carData = require('./car')

console.log(userData.user);
userData.userLogger()

console.log(carData.car)
carData.carLogger()