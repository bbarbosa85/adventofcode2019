const assert = require('assert');
const intcode = require('../intcode')

try {
  assert.equal(intcode("1,0,0,0,99"), "2,0,0,0,99", "Test 1")
  assert.equal(intcode("2,3,0,3,99"), "2,3,0,6,99", "Test 2")
  assert.equal(intcode("2,4,4,5,99,0"), "2,4,4,5,99,9801", "Test 3")
  assert.equal(intcode("1,1,1,4,99,5,6,0,99"), "30,1,1,4,2,5,6,0,99", "Test 4")
  console.log("All tests OK")
} catch (err) {
  console.error(err)
}