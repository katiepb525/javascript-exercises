const repeatString = function (string = 'hey', num = 3) {
    newString = "";

    if (num < 0) {
        newString = "ERROR"
        return newString;
    }

    for (let i = 0; i < num; i++) {
        newString += string;
    }

    return newString;
};


// Do not edit below this line
module.exports = repeatString;
