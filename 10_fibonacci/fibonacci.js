const fibonacci = function (n) {
  if (n <= 1) {
    return n;
  } else {
    let previousFib = 0;
    let currentFib = 1;
    for (let i = 2; i <= n; i++) {
      let nextFib = previousFib + currentFib;
      previousFib = currentFib;
      currentFib = nextFib;
    }
    return currentFib;
  }
};

// Do not edit below this line
module.exports = fibonacci;
