const removeFromArray = function (array, ...args) {
    let origArrayLength = array.length;
    // loop through each item in original array
    for (let i = 0; i < origArrayLength; i++) {

        let currentVal = i;
        // loop argumenets through current value
        for (let j = 0; j < args.length; j++) {

            if (currentVal === args[j]) {
                let removeIndex = array.indexOf(args[j]); // find the index of the current item in array
                array.splice(removeIndex, 1); // remove the item once using the index
            }
        }
    }

    return array; // return the edited array
};

// Do not edit below this line
module.exports = removeFromArray;
