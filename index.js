// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwo = function(drivers)
{
    let newArray = [drivers[0], drivers[1]]
    return newArray
}
return firstTwo(drivers)}

function returnLastTwoDrivers(drivers){
    const lastTwo = function(drivers)
{
    let newArray = [drivers[drivers.length-2], drivers[drivers.length-1]]
    return newArray
}
return lastTwo(drivers)}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

function fareDoubler(fare){
    const doubleFare = createFareMultiplier(2)(fare)
    return doubleFare
}

function fareTripler(fare){
    const tripleFare = createFareMultiplier(3)(fare)
    return tripleFare
}

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}