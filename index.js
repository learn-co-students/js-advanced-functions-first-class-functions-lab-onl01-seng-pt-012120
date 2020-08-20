const   returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers, //function
  returnLastTwoDrivers // function
];

function  createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function  selectDifferentDrivers(arrayOfDrivers, functionDrivers) {
  return functionDrivers(arrayOfDrivers);
};