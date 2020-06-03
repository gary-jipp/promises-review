const { myPromise } = require("./myPromise");

// // Lets look at the "then" chain a little more closely.  What happens here?
myPromise(1)
  .then(result => result)
  .then(result => result)
  .then(result => result)
  .then(result => result)
  .then(result => { return { "result": result, "stuff": 5 } }) // can push anything we want onto the chain
  .then(result => result)
  .then(result => console.log("then:", result))
  .catch(e => console.log("catch:", e));

// How about this?  Just return the error from the catch
myPromise(-1)
  .catch(e => e)
  .then(result => console.log("then:", result)); // hey! The "then" fired!  Why?

