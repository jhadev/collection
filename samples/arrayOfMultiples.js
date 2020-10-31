function arrayOfMultiples(num, length) {
  const result = [];

  for (let i = 1; i <= length; i++) {
    result.push(num * i);
  }

  return result;
}
console.log(arrayOfMultiples(17, 6));
