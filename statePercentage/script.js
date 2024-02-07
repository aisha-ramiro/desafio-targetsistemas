const stateValue = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

const totalValue = Object.values(stateValue).reduce((total, value) => total + value, 0);

const statePercentage = {};
for (let state in stateValue) {
  const percentual = (stateValue[state] / totalValue) * 100;
  statePercentage[state] = percentual.toFixed(2); 
}

console.log('O percentual de representação de cada estado é:');
for (let state in statePercentage) {
  console.log(`${state}: ${statePercentage[state]}%`);
}
