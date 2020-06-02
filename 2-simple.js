const { myPromise } = require("./myPromise");

// Most basic promise pattern, but not very useful
myPromise(1).then();

// the "then" takes a function where you can do "stuff" when the promise completes
myPromise(1).then(() => {
  console.log("complete");
});

// It also gives you a result/response parameter from the promise
myPromise(1).
  then(result => { console.log(result); });

// What happens if we don't handle rejection well
myPromise(-5)
  .then(result => console.log(result));  // --> oops!

// Need to "catch" the error
myPromise(-5)
  .then(result => console.log(result))
  .catch(e => console.log(e));

// what happens if we reverse the order of the then-catch. More about this later
myPromise(-1)
  .catch(e => console.log("catch:", e))
  .then(result => console.log("then:", result));

// A "finally" executes regardless
myPromise(-5)
  .then(result => console.log(result))
  .catch(e => console.log(e))
  .finally(() => console.log("finally"));
