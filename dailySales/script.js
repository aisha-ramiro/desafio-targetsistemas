const fs = require('fs');

const salesData = JSON.parse(fs.readFileSync('data.json'));

const salesDays = salesData.filter(item => item.valor !== 0).map(item => item.valor);

const lowerSales = Math.min(...salesDays);
const higherSales = Math.max(...salesDays);

const sumSales = salesDays.reduce((total, value) => total + value, 0);
const monthlyAvarage = sumSales / salesDays.length;

const daysAboveAverage = salesDays.filter(value => value > monthlyAvarage).length;

console.log('O menor valor de faturamento diário foi de:', lowerSales);
console.log('O maior valor de faturamento diário foi de:', higherSales);
console.log('O número total de dias com faturamento acima da média mensal é de:', daysAboveAverage);
