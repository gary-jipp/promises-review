const { myPromise } = require("./myPromise");

// So let's look at Promise.all()
let promise1 = myPromise(1);
let promise2 = myPromise(-1);
let promise3 = myPromise(2);

// Recall that they "All" resolve or they all fail
Promise.all([promise1, promise2, promise3])
	.catch(e => console.log("catch:", e))
	.then(result => console.log("then:", result))		// Why does this still fire??
	.finally(() => console.log("finally"));

// Brain Teaser:  why did we get the "undefined" in the console log above but not here?? 
Promise.all([promise1, promise2, promise3])
	.then(result => console.log("then", result))  // nothing on the "then" stack
	.catch(e => console.log("catch:", e))
	.finally(() => console.log("finally"));

// So lets Fix our promises so they will all finish
promise1 = myPromise(1).catch(e => e);
promise2 = myPromise(-1).catch(e => e);
promise3 = myPromise(2).catch(e => e);

// Notice we don't need a catch here.  It would never fire
Promise.all([promise1, promise2, promise3])
	.then(result => console.log("then:", result))
	.finally(() => console.log("finally"));