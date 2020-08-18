// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [drivers.first,drivers[1]];
};

const returnLastTwoDrivers = (drivers)=>{
    return [drivers[drivers.length - 2],drivers.last];
};

const selectingDrivers = [];
    
selectingDrivers[0] = returnFirstTwoDrivers();
selectingDrivers[1] = returnLastTwoDrivers();