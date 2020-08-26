// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let firstTwo= []
    for(let i = 0; i < 2; i++){ 
        firstTwo.push(array[i])
    }
    return firstTwo
}

const returnLastTwoDrivers = function(array){
    let lastTwo= []
    for(let i = (array.length- 2); i < (array.length); i++){ 
        lastTwo.push(array[i])
    }
    return lastTwo
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
   return function(fare){
    return fare*multiplier
    }
}
const fareDoubler = function(fare){
    return fare*2
}
const fareTripler = function(fare){
    return fare*3
}
const selectDifferentDrivers= function(array, fun){
    return fun(array);
}