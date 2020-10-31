function oddishOrEvenish(num) {
  let asString = num.toString();

  let sum = 0;

  for (let i = 0; i < asString.length; i++) {
    sum += parseInt(asString[i]);
  }

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(44));
