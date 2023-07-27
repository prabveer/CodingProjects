const repeatString = function(phrase, num) {
    let returnPhrase = "";
    for(let x = 0; x < num; x++)
        returnPhrase += phrase;
    return returnPhrase;
};

// Do not edit below this line
module.exports = repeatString;
