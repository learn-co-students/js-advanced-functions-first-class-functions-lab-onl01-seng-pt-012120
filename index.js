// Code your solution in this file!
function returnFirstTwoDrivers(arr){
  const newArr = arr.slice(0,2);
  return newArr
}

function returnLastTwoDrivers(arr){
  const newArr = arr.slice(-2);
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return function multiplier(fare){
    return num * fare;
  }
}

function fareDoubler(fare){
  let multiple = createFareMultiplier(2)(fare);
  return multiple;
}

function fareTripler(fare){
  let multiple = createFareMultiplier(3)(fare);
  return multiple;
}

function selectDifferentDrivers(arr,func){
  return func(arr);
}
