const sumAll = function (num1, num2) {

    // store the result
    let result = 0;
    let origNum1 = num1;
    let origNum2 = num2;

    //if the first argument is greater than the second
    if (num1 > num2) {
        num1 = origNum2;
        num2 = origNum1;
    }

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
