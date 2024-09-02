const reverseString = function(word) {
    let str = word.split("");
    let revStr = str.reverse();
    let output = revStr.join("");
    return output;
};

// Do not edit below this line
module.exports = reverseString;
