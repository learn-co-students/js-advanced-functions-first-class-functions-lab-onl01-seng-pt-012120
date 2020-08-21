// Code your solution in this file!

//1.  returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

//2.returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

//3. selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//4. createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(ride) {
    return function (fare) {
        return ride * fare
    }

}

//5. fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = function (fare) {
   return createFareMultiplier(2)(fare)
}

//6. fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, fn) {
    return fn(arr)
}