const reverseString = function(string) {
    let resultString = ""

    for (let i = string.length - 1; i >= 0; i--)
    {
        resultString += string.at(i);
    }

    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
