const repeatString = function(string, num) {
    var output = "";
    if (num < 0) {
        return("ERROR");
    } else
    for (let i = 0; i < num; i++){
        var test = output;
        var output = test + string;
    }
    return(output);
};

// Do not edit below this line
module.exports = repeatString;
