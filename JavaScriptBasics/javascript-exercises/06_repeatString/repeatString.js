const repeatString = function(word, repeat) {
    if (repeat < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < repeat; i++) {
        string += word
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
