const returnFirstTwoDrivers = (function(a) {return [a[0], a[1]]});

const returnLastTwoDrivers = (function(a) {
    let n = a.splice(-2, 2);
    Object.assign(a, [...a, ...n]);
    return n;
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function(x) {return x * n}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(a, f) {return f(a)}