const repeatString = (string, num) => {
   if (num<0) return "Error"
    
    return string.repeat(num);
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
