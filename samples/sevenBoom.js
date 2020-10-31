function sevenBoom(arr) {
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (`${arr[i]}`.includes('7')) {
      flag = true;
      break;
    }
  }

  return flag ? 'Boom' : 'there is no 7 in the array';
}
console.log(sevenBoom([2, 55, 60, 97, 86]));
