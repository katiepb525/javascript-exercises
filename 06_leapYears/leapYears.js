const leapYears = function (year) {
    // check if year is divisible by four and not divisible by 100
    if (year % 4 === 0 && (!(year % 100 === 0))) {
        return true;
    }
    // if year is divisible by 100, check if its divisible by 400
    else if ((year % 100 === 0) && (year % 400 === 0)) {
        return true;
    }
    // in all other cases
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
