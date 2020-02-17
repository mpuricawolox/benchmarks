const request = require('request-promise-native');
const got = require('got');
const Bluebird = require('bluebird');
const arr = require('./arraySample');
const foo = itm => got(`https://jsonplaceholder.typicode.com/albums/${itm.albumId}`).json();
const timeOut = itm => new Promise(resolve => setTimeout(() => {
  if (itm.thumbnailUrl.match(/(\/.+)+$/)) {
    console.log('match');
    let m = itm;
  }

  resolve(itm);
}, 10000));
const promiseArray = arr.map(foo);

// Promise.all tries to run all these async processes in paralell
// We're trying to execute 40000 requests
// This can block the even loop for too long
// And lead to memory leaks
Promise.all(promiseArray)
  .then(res => console.log('FINAL'))
  .catch(err => console.log(err));
// Bluebird.map(arr, foo, {concurrency: 50})
//   .then(res => console.log(res.length, 'FINAL'))
//   .catch(err => console.log(err));
