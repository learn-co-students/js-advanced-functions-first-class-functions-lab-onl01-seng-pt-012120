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

const fareDoubler = (fare)=>{
    return fare * 2;
};
    
const fareTripler = (fare)=>{
    return fare *3;
};

const selectDifferentDrivers = (drivers,func) =>{
    return func(drivers);
};