const removeFromArray = function (array, toRemove) {
    const indexRemoved = array.indexOf(toRemove);
    array.splice(indexRemoved);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
