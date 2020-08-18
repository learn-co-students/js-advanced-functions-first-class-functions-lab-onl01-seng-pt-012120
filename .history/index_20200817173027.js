// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0],drivers[1]];
};

const returnLastTwoDrivers = (drivers)=>{
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) =>{
    return function (multiplier) {
        return num * multiplier;
    };
};
    