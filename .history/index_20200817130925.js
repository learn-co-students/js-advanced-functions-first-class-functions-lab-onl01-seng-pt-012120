// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.splice(0,2);
};

const returnLastTwoDrivers = (drivers)=>{
    return drivers.splice(drivers.length-3,drivers.length-1);
};