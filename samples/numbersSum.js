function numbersSum(arr) {
  return arr.reduce((sum, item) => {
    if (typeof item === 'number') {
      return sum + item;
    }

    return sum;
  }, 0);
}
console.log(numbersSum([true, false, 3, 9]));
