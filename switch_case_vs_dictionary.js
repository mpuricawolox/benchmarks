const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const getWithSwitch = option => {
  let result;

  switch (option) {
    case 1:
      result = 1;
      break;

    case 2:
      result = 2;
      break;

    case 3:
      result = 3;
      break;

    case 4:
      result = 4;
      break;

    case 5:
      result = 5;
      break;

    case 6:
      result = 6;
      break;

    case 7:
      result = 7;
      break;

    case 8:
      result = 8;
      break;

    default:
      result = 1;
      break;
  }

  return result;
};
const obj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8
};
const getWithObjectOutside = option => {
  return obj[option] || obj[1];
};

const getWithObjectInside = option => {
  const set = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8
  };
  return set[option] || set[1];
};

suite
.add('Switch/Case', function() {
  getWithSwitch(10);
})
.add('Dictionary (Object literal) Outside function', function() {
  getWithObjectOutside(10);
})
.add('Dictionary (Object literal) Inside function', function() {
  getWithObjectInside(10);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
