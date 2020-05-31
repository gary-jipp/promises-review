const { myPromise } = require("./myPromise");

// // Most basic promise pattern, but not very useful
// myPromise(1).then();

// myPromise(1).then(result => {
// 	console.log("complete");
// });

// myPromise(1).then(result => {
// 	console.log(result);
// });

// // What happens if we don't handle rejection well
// myPromise(-5).then(result => {
// 	console.log(result);
// });

// // Need to "catch" the error
// myPromise(-5)
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e));

// // A "finally" executes regardless
// myPromise(-5)
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e))
// 	.finally(()=>console.log("finally"));

// // What happens if we return something from the "then"
// myPromise(1)
// 	.then(result => {
// 		console.log(result);
// 		return "Hello World";
// 	})
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e));

// // If we return a promise it executes synchronously. No more waterfalls!!
// myPromise(1)
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(e => console.log(e))

// // We can chain lots of promises. No more waterfalls!!
// // The trick is in the return from the "then"
// myPromise(1)
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(e => console.log(e));

// // But if you return a promise, be sure to catch any errors later in the chain. If you dont ...
// myPromise(1)
// 	.catch(e => console.log(e))
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(-1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 	})

// // Usually we put catch at the end. Otherwise subsequent then's may grab its return
// myPromise(1)
// 	.then(result => {
// 		console.log(result);
// 		return myPromise(-1);
// 	})
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(e => console.log(e));

// // Lets look at the promise chain a little more closely.  What happens here?
// myPromise(1)
// 	.then(result => result)
// 	.then(result => result)
// 	.then(result => result)
// 	.then(result => result)
// 	.then(result => 5)
// 	.then(result => result)
// 	.then(result => console.log(result))
// 	.catch(e => console.log(e));

// // How about this?  Just return the error from the catch
// myPromise(-1)
// 	.catch(e => e)
// 	.then(result => console.log("Result:", result)); // hey! The "then" got called!  Why?

// So let's revisit Promise.all()
// promise1 = myPromise(1);
// promise2 = myPromise(-1);
// promise3 = myPromise(2);

// // All resolve or they all fail
// Promise.all([promise1, promise2, promise3])
// 	.catch(e => console.log("Error: " + e))
// 	.then(result => console.log(result))
// .finally(() => console.log("finally"));

// // Brain Teaser:  why did we get "undefined" in our console log??
// // but not here
// Promise.all([promise1, promise2, promise3])
// 	.then(result => console.log(result))  // nothing on the "then" stack
// 	.catch(e => console.log("Error: " + e))
// 	.finally(() => console.log("finally"));

// So lets Fix our promises so they will all finish
promise1 = myPromise(1).catch(e => e);
promise2 = myPromise(-1).catch(e => e);
promise3 = myPromise(2).catch(e => e);

// Notice we don't need a catch here.  It would never fire
Promise.all([promise1, promise2, promise3])
	.then(result => console.log(result))
	.finally(() => console.log("finally"));
