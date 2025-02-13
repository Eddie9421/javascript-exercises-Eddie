const sumAll = function(integerA, integerB) {
    if (integerA < 0 || integerB < 0 || typeof(integerA) !== "number"
        || typeof(integerB) !== "number" || 
        Math.floor(integerA + integerB) !== integerA + integerB)
    {
        return "ERROR";
    }

    let minimumBound = (integerA < integerB) ? integerA : integerB;
    let maximumBound = (integerA > integerB) ? integerA : integerB; 

    let sum = 0;

    for (let i = minimumBound; i <= maximumBound; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
