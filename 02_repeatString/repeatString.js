const repeatString = function (string = 'hey', num = 3) {
    newString = "";
    for (let i = 0; i < num; i++) {
        newString += string;
    }

    return newString;
};


// Do not edit below this line
module.exports = repeatString;
