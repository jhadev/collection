const makePlusFunction = (baseNum) => (num) => baseNum + num;

const plusFive = makePlusFunction(5);

console.log(plusFive(2));

console.log(plusFive(-8));
