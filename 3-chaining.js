const { myPromise } = require("./myPromise");

// What happens if we return stuff from the "then"
myPromise(1)
  .then(result => {
    console.log("then:", result);
    return "Hello World";
  })
  .then(result => console.log(result))  // --> The "stuff" ends up as a result in the next "then"
  .catch(e => console.log("catch: ", e));

// If we return a promise it executes afer the 1st one. No more waterfalls!!
myPromise(1)
  .then(result => {
    console.log("then:", result);
    return myPromise(1);
  })
  .then(result => console.log("then:", result))
  .catch(e => console.log("catch: ", e));

// We can chain lots of promises. No more waterfalls!!
// The trick is to return a new promise from the "then"
myPromise(1)
  .then(result => {
    console.log("then 1:", result);
    return myPromise(1);
  })
  .then(result => {
    console.log("then 2:", result);
    return myPromise(1);
  })
  .then(result => {
    console.log("then 3:", result);
    return myPromise(1);
  })
  .then(result => {
    console.log("then 4:", result);
  })
  .catch(e => console.log("catch: ", e));

// But if you return a promise, be sure to catch any errors later in the chain. If you dont ...
myPromise(1)
  .catch(e => console.log("catch: ", e))
  .then(result => {
    console.log("then:", result);
    return myPromise(-1);
  })
  .then(result => {
    console.log("then:", result);
  });

// Usually we put catch at the end. Otherwise subsequent then's may grab its return if it fires
myPromise(1)
  .then(result => {
    console.log("then:", result);
    return myPromise(-1);
  })
  .then(result => {
    console.log("then:", result);
  })
  .catch(e => console.log("catch:", e));  // Lets see what happens if we move this before 2nd then 

// How about here here?
myPromise(1)
  .then(result => result)
  .then(result => console.log("then:", result))
  .then(result => console.log("then:", result)) // --> Zombie "then" was fired. Why??
  .catch(e => console.log("catch:", e));

  // Its all about what happens with the return from a "then" or a "catch"