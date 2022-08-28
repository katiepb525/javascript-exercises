const sumAll = function (arguments) {
    // store the result
    let result;

    // store the original length
    const origLength = arguments.length;

    // loop through all arguments
    for (i = 0; i < origLength; i++) {
        result += arguments;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
