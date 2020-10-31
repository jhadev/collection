function testJackpot(result) {
  result = [...new Set(result)];
  return result.length === 1 ? true : false;
}

console.log(testJackpot(['SS', 'SS', 'SS', 'Ss']));
