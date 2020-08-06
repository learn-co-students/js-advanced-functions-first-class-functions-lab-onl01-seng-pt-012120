// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(2,4)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = (multiplier) => {
  return function(fare) { return fare * multiplier }
}

const fareDoubler = (fare) => {
  // 2 is provided because this is a doubling function
  // the fare parameter is passed to the createFareMultiplier
  // as it's arguement since createFareMultiplier returns
  // a frozen function!
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driverArray, fn) {
  return fn(driverArray)
}
