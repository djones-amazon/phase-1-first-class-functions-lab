const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return (drivers.slice((drivers.length - 2),drivers.length));
}


var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare) {
    let adjustedFare = () => {
        return (fare ** 2);
    };
    return (adjustedFare);
}

const fareDoubler = (fare) => fare * 2;
const fareTripler = (fare) => fare * 3;

function selectDifferentDrivers (drivers, fn) {
    const selectedDrivers = fn(drivers);
    return selectedDrivers;
}