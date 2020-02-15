const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const arr = require('./arraySample');

suite.add('For-loop', function() {
  for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
})
.add('Inverse For-loop', function() {
  for(let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
  }
})
.add('For-loop with array length caching', function() {
  for(let i = 0, len = arr.length; i < len; i++) {
    const element = arr[i];
  }
})
.add('Array forEach', function() {
  arr.forEach(itm => {
    const element = itm;
  });
})
.add('Array map', function() {
   const newArr = arr.map(itm => {
      const element = itm;
      return element;
    });
})
.add('While loop', function() {
  let len = arr.length;
  let i = len-1;
  while (len--) {
      const element = arr[i];
      i--;
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(`Arreglo de ${arr.length} elementos`);
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
