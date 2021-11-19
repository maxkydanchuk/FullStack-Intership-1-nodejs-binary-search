const data = require('./prize.json');
const algorithms = require('./binary-search.js');


const sort = algorithms.quickSort(data.prizes, 'year', 'asc');
const result = algorithms.binarySearch(sort, 'year', '1994');

console.log(result);

