const items = require('./data')

/**
 * Calculates how much fuel is needed for a certain mass
 * @param integer mass 
 */
function fuel(mass){
  return Math.floor(mass / 3) - 2
}

// Total fuel sum
let total = 0;

for(i in items) {
  let item = parseInt(items[i]);
  total += fuel(item)
}

// Print result
console.log(total)
