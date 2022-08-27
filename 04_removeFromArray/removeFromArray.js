const removeFromArray = function (array, ...args) {

    for (i = 0; i < args.length; i++) {
        const removeIndex = array.indexOf(args[i]); // find the index of the current item in array
        array.splice(removeIndex, 1); // remove the item once using the index
    }

    return array; // return the edited array
};

// Do not edit below this line
module.exports = removeFromArray;
