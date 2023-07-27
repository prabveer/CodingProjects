const removeFromArray = function(array, num) {
    for(let x = 0; x < array.length; x++)
    {
        if(array[x] == num)
            array.splice(x, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
