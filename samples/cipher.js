const cipher = {
  a: '!',
  b: '@',
  c: '#',
  d: '$',
  e: '%',
  f: '^',
  g: '&',
  h: '*',
  i: '(',
  j: ')',
  k: '-',
  l: '_',
  m: '+',
  n: '=',
  o: ':',
  p: ';',
  q: '<',
  r: '>',
  s: ',',
  t: '.',
  u: '1',
  v: '8',
  w: '3',
  x: '2',
  y: '4',
  z: '6',
};

const doCipher = (arg, str) => {
  str = str.split('');

  const cipherKeys = Object.keys(cipher);

  if (arg === 'encode') {
    const encoded = str.map((char) => {
      return cipher[char] || char;
    });
    return encoded.join('');
  } else {
    const decoded = str.map((char) => {
      return cipherKeys.find((key) => cipher[key] === char) || char;
    });
    return decoded.join('');
  }
};

const encoded = doCipher('encode', 'my name is josh');

const decoded = doCipher('decode', encoded);
console.log(encoded);
console.log(decoded);

module.exports = { cipher, doCipher };
