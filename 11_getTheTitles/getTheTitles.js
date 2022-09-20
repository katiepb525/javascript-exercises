const getTheTitles = function (array) {
    // grab the list, then grab each element from the list, then grab the property of that element
    let finalArray = array.map((element) => element.title);
    return finalArray;
    // objects have elements, elements have attributes and properties
}


// Do not edit below this line
module.exports = getTheTitles;
