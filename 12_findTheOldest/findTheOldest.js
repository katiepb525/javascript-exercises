const findTheOldest = function (obj) {
    // get the current year
    // const currentYear = (new Date()).getFullYear();


    // look and compare two elements at a time in the array
    return obj.reduce((olderPerson, currentPerson) => {
        // store current oldest age
        let oldestAge = olderPerson.yearOfDeath - olderPerson.yearOfBirth;
        // store current age
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        // compare the two
        if (oldestAge < currentAge) {
            // set the oldest person to the newer oldest person, because the current value has "outcompeted" the previous one
            olderPerson = currentPerson;
        }
        // return the element in the array that has "outcompeted" all others
        return olderPerson;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
