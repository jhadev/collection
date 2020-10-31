function allTruthy(...args) {
  const asTrueOrFalse = args.map((arg) => !!arg);

  return asTrueOrFalse.indexOf(false) !== -1 ? false : true;
}

console.log(allTruthy(1, 2, 3, 4));

module.exports = allTruthy