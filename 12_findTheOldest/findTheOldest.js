const findTheOldest = function (obj) {
    const currentYear = (new Date()).getFullYear();
    const sorted = obj.sort((a, b) => {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        }
        else {
            return 1;
        }

    })
    console.log(sorted);
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
