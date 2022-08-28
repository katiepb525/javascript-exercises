const sumAll = function (num1, num2) {

    // store the result
    let result = 0;

    // store original given arguments
    let origNum1 = num1;
    let origNum2 = num2;

    //if the first argument is greater than the second
    switch (true) {

        case (num1 > num2):
            // switch their places
            num1 = origNum2;
            num2 = origNum1;
            break;

        case (num1 < 0 || num2 < 0):
            return "ERROR";
            break;

        case (typeof num1 === 'string' || typeof num2 === 'string'):
            return "ERROR";
            break;

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
