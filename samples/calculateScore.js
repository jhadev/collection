function calculateScore(games) {
  const results = games.reduce(
    ([abigailWins, bensonWins], [abigailChoice, bensonChoice]) => {
      if (abigailChoice === bensonChoice) {
        return total;
      } else if (abigailChoice === 'R' && bensonChoice === 'S') {
        abigailWins += 1;
      } else if (abigailChoice === 'S' && bensonChoice === 'P') {
        abigailWins += 1;
      } else if (abigailChoice === 'P' && bensonChoice === 'R') {
        abigailWins += 1;
      } else {
        bensonWins += 1;
      }

      return [abigailWins, bensonWins];
    },
    [0, 0]
  );

  if (results[0] > results[1]) {
    return 'Abigail';
  }

  if (results[1] > results[0]) {
    return 'Benson';
  }

  return 'Tie';
}
console.log(
  calculateScore([
    ['R', 'P'],
    ['R', 'S'],
    ['S', 'P'],
  ])
);
