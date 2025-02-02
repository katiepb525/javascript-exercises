const removeFromArray = function (array, ...args) {
    // make a copy of the original array using from
    let origArray = Array.from(array);
    // loop through each item in original array
    for (let i = 0; i < origArray.length; i++) {

        let currentVal = i;
        // loop arguments through current value
        for (let j = 0; j < args.length; j++) {

            if (origArray[currentVal] === args[j]) {
                let removeIndex = array.indexOf(args[j]); // find the index of the current item in array
                array.splice(removeIndex, 1); // remove the item once using the index
            }
        }
    }

    return array; // return the edited array
};

// Do not edit below this line
module.exports = removeFromArray;
