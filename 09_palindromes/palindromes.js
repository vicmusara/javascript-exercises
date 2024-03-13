const palindromes = function (arr) {
    filteredArr = arr.replace(/[^A-Za-z0-9]/g, '')
    const check = filteredArr.toLowerCase().split('').reverse().join('');
    return (check === filteredArr.toLowerCase());   
};
console.log(palindromes("A man, a plan, a canal, Panama"))
// Do not edit below this line
module.exports = palindromes;
