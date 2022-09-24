const findTheOldest = function (obj) {
    // get the current year
    const currentYear = (new Date()).getFullYear();

    // look and compare two elements at a time in the array
    // return obj.reduce((olderPerson, currentPerson) => {
    //     // store current oldest age
    //     let oldestAge = olderPerson.yearOfDeath - olderPerson.yearOfBirth;
    //     // store current age
    //     let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    //     // compare the two
    //     if (oldestAge < currentAge) {
    //         // set the oldest person to the newer oldest person, because the current value has "outcompeted" the previous one
    //         olderPerson = currentPerson;
    //     }
    //     // return the element in the array that has "outcompeted" all others
    //     return olderPerson;
    //     // return doesnt end the function here... just returns the last iteration of "olderPerson" or the total value
    // });

    // modified to work with a living person...
    return obj.reduce((olderPerson, currentPerson) => {
        // store current oldest age
        // check if current oldest age has a date of death..
        // ..if so, continue normal yearofdeath-yearofbirth
        // ..if not so, use currentdate - yearofbirth
        let oldestAge = (olderPerson.hasOwnProperty('yearOfDeath') ? olderPerson.yearOfDeath - olderPerson.yearOfBirth : currentYear - olderPerson.yearOfBirth);

        // same for current age
        let currentAge = (currentPerson.hasOwnProperty('yearOfDeath') ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : currentYear - olderPerson.yearOfBirth);

        // compare the two
        if (oldestAge < currentAge) {
            // set the oldest person to the newer oldest person, because the current value has "outcompeted" the previous one
            olderPerson = currentPerson;
        }
        // return the element in the array that has "outcompeted" all others
        return olderPerson;
        // return doesnt end the function here... just returns the last iteration of "olderPerson" or the total value
    });

};

// Do not edit below this line
module.exports = findTheOldest;
