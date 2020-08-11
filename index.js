// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
        return arr.slice(0,2)
};

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
       return fare * int;
    };
};

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}

const selectDifferentDrivers= function(arr, driver) {
    return driver(arr)
}