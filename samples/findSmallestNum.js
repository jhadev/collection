function findSmallestNum(arr) {
  return arr.sort((a, b) => a - b)[0];
}

console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
