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
  
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driverArray, fn) {
  return fn(driverArray)
}