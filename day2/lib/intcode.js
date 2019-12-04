module.exports = (commaList) => {
  let list = commaList.split(',')
  let pos = 0

  while(list[pos] && parseInt(list[pos]) !== 99){
    let aPos = list[pos + 1]
    let bPos = list[pos + 2]
    let resultPos = list[pos + 3]

    switch(parseInt(list[pos])){
      // Opcode 1: Adds values
      case 1:
        list[resultPos] = parseInt(list[aPos]) + parseInt(list[bPos])
        break

      // Opcode 2: Multiplies values
      case 2:
        list[resultPos] = parseInt(list[aPos]) * parseInt(list[bPos])
        break

      // Other code: Error
      default:
        console.error("Error. Something went wrong!", list[pos])
        return
    }

    // Next operation
    pos += 4
  }

  // Returns list after halt
  return list.join(',')
}
