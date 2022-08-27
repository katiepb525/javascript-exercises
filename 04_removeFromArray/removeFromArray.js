const removeFromArray = function (array, ...args) {

    // loop if items in array are present in args

    for (i = 0; i < array.length; i++) {
        // if item in array does equal item in args, continue with removal

        if 
        
    }


    // if item in array does not equal item in args, ignore and continue loop 


    // only run if items in given array are 

    for (i = 0; i < args.length; i++) { // loop through the entire length of current arguments
        const removeIndex = array.indexOf(args[i]); // find the index of the current item in array
        array.splice(removeIndex, 1); // remove the item once using the index
    }

    return array; // return the edited array
};

// Do not edit below this line
module.exports = removeFromArray;
