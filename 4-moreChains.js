const { myPromise } = require("./myPromise");

// // Lets look at the "then" chain a little more closely.  What happens here?
myPromise(1)
  .then(result => result)
  .then(result => result)
  .then(result => result)
  .then(result => result)
  .then(result => { return { "result": result, "stuff": 5 }; }) // can push anything we want onto the chain
  .then(result => result)
  .then(result => console.log("then:", result))
  .catch(e => console.log("catch:", e));


// Here's an Example of a function that returns the results of a promise
// Along with some other data.  Very Useful pattern
const myFunction = function () {

  // promise.then() returns new promise, with our extra data inside
  const newPromise = myPromise(2)
    .then(res => {
      console.log("promise completed. Now lets return some data");
      return { res: res, otherdata: 500 };
    });

  //  This is the result of the previous then()  = a new promise
  return newPromise;
};

// Here's how we use it
const value = myFunction();
value.then(res => console.log("then: ", res));


// How about this?  Just return the error from the catch
myPromise(-1)
  .catch(e => e)
  .then(result => console.log("then:", result)); // hey! The "then" fired!  Why?