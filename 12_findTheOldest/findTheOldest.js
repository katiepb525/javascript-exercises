const findTheOldest = function (obj) {
    const sorted = obj.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        else {
            return -1;
        }
    })
    console.log(sorted);
    return sorted[1];

};

// Do not edit below this line
module.exports = findTheOldest;
