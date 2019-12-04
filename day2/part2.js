const fs = require('fs')
const intcode = require('./lib/intcode')
const data = fs.readFileSync('./data.txt', 'utf8')
const baseDataList = data.split(',') 

// Find the output
function find(output){
  for(let noun = 0; noun <=99; noun++){
    for(let verb = 0; verb <=99; verb++){
      // reseting "memory"
      let memory = baseDataList

      // setting up noun and verb
      memory[1] = noun
      memory[2] = verb

      // trying out
      let result = intcode(memory.join(','))

      // validating result
      if(result) {
        if(parseInt(result.split(',')[0]) === output){
          console.log("noun", noun);
          console.log("verb", verb);
          console.log("alarm", 100 * noun + verb);
          return;
        }
      }
    }
  }
}

// Seting up "1202 program alarm"
find(19690720)
