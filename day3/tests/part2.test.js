const assert = require('assert');
const Wire = require('../lib/wire.class')


function test(wireAData, wireBData){
  let A = new Wire(wireAData)
  let B = new Wire(wireBData)
  return A.getCloserCrossing(B)
}

try {
  assert.equal(test("R75,D30,R83,U83,L12,D49,R71,U7,L72", "U62,R66,U55,R34,D71,R55,D58,R83"), 610, "Test 1")
  assert.equal(test("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51", "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"), 410, "Test 2")
  console.log("All tests OK")
} catch (err) {
  console.error(err)
}