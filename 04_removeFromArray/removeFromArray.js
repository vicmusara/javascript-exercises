const removeFromArray = (arr, ...valuesToRemove) => {
    return arr.filter(item => !valuesToRemove.includes(item));
};
// "..."means abitrary number of arguments

// Do not edit below this line
module.exports = removeFromArray;
