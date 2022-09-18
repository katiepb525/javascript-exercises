const fibonacci = function (num) {
    //check if num is negative or a string
    if (num < 0) {
        return "OOPS";
    }
    else if (typeof num === "string") {
        parseInt(num);
    }

    // intialize variable to store array in
    let fiboArray = [0, 1];

    let currentNumber = 0;
    // generate an array of numbers using the fibonacci equation 
    // relative to the scope required
    for (let i = 2; i <= num; i++) {
        currentNumber = (fiboArray[i - 1]) + (fiboArray[i - 2]);
        fiboArray.push(currentNumber);
    }

    console.log(fiboArray);
    // search for the nth iteration in the array
    return fiboArray[num];


    // return the specified nth iteration
};

// Do not edit below this line
module.exports = fibonacci;
