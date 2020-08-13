// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(arg) {
    return function(fare){
        return arg * fare 
    }
}

const fareDoubler = function(fare){
    return fare * 2 
}

const fareTripler = function (fare){
    return fare * 3 
}
function selectDifferentDrivers(driver_array, driver_function) {
    return driver_function(driver_array)
}