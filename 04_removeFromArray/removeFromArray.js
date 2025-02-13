const removeFromArray = function(array, ...argumentsToRemove) {
    let resultArray = [];

    for (const element of array)
    {
        if (!argumentsToRemove.includes(element))
        {
            resultArray.push(element);
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
