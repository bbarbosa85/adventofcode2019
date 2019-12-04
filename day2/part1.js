const fs = require('fs')
const intcode = require('./lib/intcode')
let data = fs.readFileSync('./data.txt', 'utf8')

// Seting up "1202 program alarm"
let newData = data.split(',')
newData[1] = 12
newData[2] = 2
data = newData.join(',')

// Run code with data
let result = intcode(data)
if(result) console.log(result);
