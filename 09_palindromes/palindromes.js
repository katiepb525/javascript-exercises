const palindromes = function (rawString) {
    //create a regex of punctuation.spaces to look out for
    const punctuation = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    //remove punctuation of string
    let cleanString = rawString.replace(punctuation, "").toLowerCase();

    // store modified original
    let origString = cleanString;

    // reverse the original string and store in variable
    let reversedString = ""; // initalize a blank string variable to store value into

    for (i = origString.length; i >= 0; i--) { // set i as length of string (so hello =  5) while 5 is equal to or less than 0; decrement i after each iteration.
        reversedString += origString.charAt(i);
    }


    // compare the original string with the reversed one
    if (origString === reversedString) {
        // if theyre the same, return true, 
        console.log(`true ${reversedString}`);
        console.log(`true ${origString}`);

        return true;
    }
    else if (origString != reversedString) {
        // if theyre different, return false
        console.log(`false ${reversedString}`);
        console.log(`false ${origString}`);

        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
