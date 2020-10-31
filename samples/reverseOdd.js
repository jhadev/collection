function reverseOdd(str) {
  str = str.split(' ');
  const result = str.map((word) => {
    if (word.length % 2 !== 0) {
      word = word.split('').reverse().join('');
    }
    return word;
  });

  return result.join(' ');
}

console.log(reverseOdd('Make sure uoy only esrever sdrow of ddo length'));
