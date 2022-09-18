const palindromes = function (rawString) {
    // //create a regex of punctuation.spaces to look out for
    // const punctuation = '/\s/!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    // //remove punctuation of string
    // let splitString = rawString.replace(punctuation, "").toLowerCase();
    // // rejoin split array
    // splitString.join();
    // // store modified original
    // let origString = splitString;

    let origString = rawString;

    // reverse the original string and store in variable
    let reversedString = ""; // initalize a blank string variable to store value into

    for (i = origString.length; i >= 0; i--) { // set i as length of string (so hello =  5) while 5 is equal to or less than 0; decrement i after each iteration.
        reversedString += rawString.charAt(i);
    }

    // compare the original string with the reversed one
    if (origString === reversedString) {
        // if theyre the same, return true, 

        return true;
    }
    else if (origString != reversedString) {
        // if theyre different, return false

        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
