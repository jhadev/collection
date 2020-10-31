function totalVolume(...boxes) {
  return boxes.reduce((total, [length, width, height]) => {
    const volume = length * width * height;
    return total + volume;
  }, 0);
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
