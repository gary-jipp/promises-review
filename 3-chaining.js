const { myPromise } = require("./myPromise");

// What happens if we return stuff from the "then"
myPromise(1)
  .then(result => {
    console.log(result);
    return "Hello World";
  })
  .then(result => console.log(result))  // --> The "stuff" ends up as a result in the next "then"
  .catch(e => console.log(e));

// If we return a promise it executes afer the 1st one. No more waterfalls!!
myPromise(1)
  .then(result => {
    console.log(result);
    return myPromise(1);
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => console.log(e));

// We can chain lots of promises. No more waterfalls!!
// The trick is in the return from the "then"
myPromise(1)
  .then(result => {
    console.log(result);
    return myPromise(1);
  })
  .then(result => {
    console.log(result);
    return myPromise(1);
  })
  .then(result => {
    console.log(result);
    return myPromise(1);
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => console.log(e));

// But if you return a promise, be sure to catch any errors later in the chain. If you dont ...
myPromise(1)
  .catch(e => console.log(e))
  .then(result => {
    console.log(result);
    return myPromise(-1);
  })
  .then(result => {
    console.log(result);
  });

// Usually we put catch at the end. Otherwise subsequent then's may grab its return if it fires
myPromise(1)
  .then(result => {
    console.log(result);
    return myPromise(-1);
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => console.log(e));  // Lets see what happens if we move this before 2nd then 
