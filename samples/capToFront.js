function capToFront(s) {
  s = s.split('');

  const upper = [];
  const lower = [];

  s.forEach((letter) => {
    if (letter === letter.toUpperCase()) {
      upper.push(letter);
    } else {
      lower.push(letter);
    }
  });

  return [...upper, ...lower].join('');
}

console.log(capToFront('moveMENT'));
