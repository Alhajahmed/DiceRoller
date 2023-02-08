const numDice = process.argv[2];
const diceRolls = [];

for (let i = 0; i < numDice; i++) {
  diceRolls.push(Math.floor(Math.random() * 6) + 1);
}

console.log(`Rolled ${numDice} dice: ${diceRolls.join(", ")}`);
