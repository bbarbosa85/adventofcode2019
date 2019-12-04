class Wire {
  constructor(path){
    this.path = []
    this.pathObj = {}
    this.jsonPath = []
    this.currentPos = {
      'y': 0,
      'x': 0
    }

    // setting wire path
    this.setPath(path)
  }

  go(axe, steps){
    let orientation = steps >= 0 ? 1 : -1
    let distance = Math.abs(steps)
    for(let i=0; i < distance; i++){
      this.currentPos[axe] += orientation
      this.path.push([this.currentPos.y, this.currentPos.x])
      this.pathObj[JSON.stringify([this.currentPos.y, this.currentPos.x])] = 1
    }
  }

  setPath(input){
    let path = input.split(',')
    path.map(val => {
      let direction = val.substr(0, 1)
      let steps = parseInt(val.substr(1))
  
      switch(direction){
        case 'U':
          this.go('y', steps)
          break
        case 'D':
          this.go('y', -1 * steps)
          break
        case 'R':
          this.go('x', steps)
          break
        case 'L':
          this.go('x', -1 * steps)
          break
        default:
          throw new Error('Invalid direction')
      }
    })

    // Setting jsonpath so it can be easier to find crossings
    this.jsonPath = this.path.map(JSON.stringify)
  }

  getCrossings(wire){
    let crossings = []
    this.jsonPath.forEach((pos, index) => {
      if(pos in wire.pathObj){
        crossings.push(this.path[index])
      }
    })
    return crossings
  }

  getDistanceFromCenter(position){
    return Math.abs(position[0]) + Math.abs(position[1])
  }

  getClosestCrossingFromCenter(wire){
    let crossings = this.getCrossings(wire)
    let closestDistance = null
    crossings.forEach((position) => {
      let distance = this.getDistanceFromCenter(position)
      if(closestDistance == null || distance < closestDistance){
        closestDistance = distance
      }
    })
    return closestDistance
  }

  /**
   * For part 2
   * @param {*} wire 
   */
  getStepsToCrossing(position){
    let search = JSON.stringify(position)
    let step = 0
    while(step < this.jsonPath.length){
      if(this.jsonPath[step] == search){
        return step + 1 //counting position [0, 0]
      }
      step++
    }

    throw new Error('Position not found')
  }

  /**
   * For part 2
   * @param {*} wire 
   */
  getCloserCrossing(wire){
    let crossings = this.getCrossings(wire)
    let totalSteps = null

    crossings.forEach((position) => {
      let localSteps = this.getStepsToCrossing(position)
      let otherSteps = wire.getStepsToCrossing(position)
      let sumSteps = localSteps + otherSteps
      if(totalSteps == null || sumSteps < totalSteps){
        totalSteps = sumSteps
      }
    })

    return totalSteps
  }
}

module.exports = Wire