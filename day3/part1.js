const fs = require('fs')
const data = fs.readFileSync('./data.txt', 'utf8').split("\n")
const Wire = require('./lib/wire.class')

let A = new Wire(data[0])
let B = new Wire(data[1])

console.log(A.getClosestCrossingFromCenter(B));