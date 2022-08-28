const sumAll = function (num1, num2) {

    // store the result
    let result = 0;

    //loop through every number between num1 and num2
    for (i = num1; i <= num2; i++) {
        // add each number to the result
        result += i;

    }

    // return the result after loop is finished
    return result;
};

// Do not edit below this line
module.exports = sumAll;
