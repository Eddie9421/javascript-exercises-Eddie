const palindromes = function (string) {
    string = string.replaceAll(" ", "").replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase(); 
    const middleIndex = Math.floor(string.length / 2);
    for (let i = 0; i < middleIndex; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
