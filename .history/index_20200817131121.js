// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0],drivers[1]];
};

const returnLastTwoDrivers = (drivers)=>{
    return drivers.splice(drivers.length-3,drivers.length-1);
};