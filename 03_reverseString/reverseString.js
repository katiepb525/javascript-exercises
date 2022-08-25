const reverseString = function (string) {
    let reversedString = ""; // initalize a blank string variable to store value into

    for (i = string.length; i >= 0; i--) { // set i as length of string (so hello =  5) while 5 is equal to or less than 0; decrement i after each iteration.
        reversedString += string.charAt(i);
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
