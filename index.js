const returnFirstTwoDrivers = function(array) {
    let newArray = []
    newArray.push(array[0])
    newArray.push(array[1])
    return newArray
};

const returnLastTwoDrivers = function(array) {
    let newArray = []
    newArray.push(array[array.length - 2])
    newArray.push(array[array.length - 1])
    return newArray
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare
    };
};

const fareDoubler = function(fare) {
    return fare * 2
};

const fareTripler = function(fare) {
    return fare * 3
};

function selectDifferentDrivers(array, func) {
    return func(array)
};