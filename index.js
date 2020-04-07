
// 1) The total salary of all players in a lineup may not exceed $45, 000
// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'


const validateLineup = (lineup) => {
  const allPositions = lineup.map((lineup) => lineup.position)
  const singlePositions = ['P', 'C', '1B', '2B', '3B', 'SS']
  const multiplePositions = ['OF']

  if (caculateSalary(lineup) <= 45000) return false
  if (evaluatePlayers(lineup.map((lineup) => lineup.gameId), 3)) return false
  if (evaluatePlayers(lineup.map((lineup) => lineup.teamId), 2)) return false
  if (evaluatePositions(allPositions, singlePositions, 1)) return false
  if (evaluatePositions(allPositions, multiplePositions, 3)) return false
  else return true
}
const caculateSalary = (lineup) => lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary, 0)
// maybe reduce salary

const evaluatePlayers = (players, max) => {
  for (let i = 0; i < players.length; i++) {
    if (filterEvaluate(players, players[i] > max)) return false
  }

  return true
  // if the amount of the players exceeds max amount return false
}
const evaluatePositions = (positions, neededPositions, max) => {
  for (let i = 0; i < positions.length; i++) {
    if (filterEvaluate(positions, neededPositions[i] > max) !== max) return false
  }

  return true
  // if the amount of the positions exceeds max amount return false
}

const filterEvaluate = (array, values) => array.filter((value) => (value === values)).length

// function that filter array for evaluateplayer and evaluatepositions
module.exports = validateLineup
