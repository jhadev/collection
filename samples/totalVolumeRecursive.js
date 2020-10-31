function totalVolume(count, total, ...boxes) {
  if (count === boxes.length) {
    return total;
  }

  const currentBoxVolume = boxes[count].reduce((total, item) => total * item);

  const newTotal = total + currentBoxVolume;

  return totalVolume(count + 1, newTotal, ...boxes);
}

const volume = totalVolume(0, 0, [4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);

console.log(volume);
