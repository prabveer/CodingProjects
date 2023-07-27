const reverseString = function(str) {
    returnStr = "";
    for(let x = str.length-1; x >= 0; x--)
    {
        returnStr += str[x];
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
