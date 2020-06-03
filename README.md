# Promises Review

In this session we will talk about Promises
- why we prefer to use them to callbacks
- how and why we create them (spoiler: rarely)
- how and when we use them (spoiler: often!)
- you gotta be able to handle rejection. It happens!
- using "finally"
- what a "return" from then() and catch() really does
  - whatever is returned appears as a new Promise in the "then" chain
  - the return from a then (or catch) does NOT have to be another Promise!
  - when a Promise is returned, it is handled by the next "then" in the promise chain
  - when a value is returned, it gets converted a resolved Promise (thenable)
  - this even applies to "undefined" (Zombie Promise). eg: console.log(result)
  - We can use this behavior for some cool tricks
- The behavior of a then/catch return allows us to chain Promises
- we can push stuff down the "then" chain,  like objects, etc
- promiseAll() trick using .catch(e=>e)
- Some real world (and very meaningful) promise API calls using axios.

## Important Takeaways
- A return from a then or catch always returns a Promise, even undefined
- we can make Promise.all actually work!

 

