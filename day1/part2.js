const items = require('./data')

/**
 * Calculates how much fuel is needed for a certain mass
 * @param integer mass 
 */
function fuel(mass){
  return Math.floor(mass / 3) - 2
}

/**
 * Calculates how much fuel is needed for a certain mass, 
 * considering the fuel needed
 * @param integer mass 
 */
function fuelMass(mass){
  let addedFuel = fuel(mass)
  let totalAddedFuel = 0
  while(addedFuel > 0) {
    totalAddedFuel += addedFuel
    addedFuel = fuel(addedFuel)
  }
  return totalAddedFuel
}

// Total fuel sum
let total = 0;

for(i in items) {
  let item = parseInt(items[i]);
  total += fuelMass(item)
}

// Print result
console.log(total)
