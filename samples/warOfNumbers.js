const arr = [5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243];

function warOfNumbers(arr) {
  const sums = arr.reduce(
    (sum, num) => {
      if (num % 2 === 0) {
        sum[0] += num;
      } else {
        sum[1] += num;
      }

      return sum;
    },
    [0, 0]
  );

  const [evenSum, oddSum] = sums;

  if (evenSum > oddSum) {
    return evenSum - oddSum;
  }

  return oddSum - evenSum;
}

console.log(warOfNumbers(arr));