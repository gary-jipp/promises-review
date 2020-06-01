# Promises Review

In this session we will talk about Promises
- why we prefer to use them instead of callbacks
- how and why we create them (spoiler: rarely)
- how and when we use them (spoiler: often!)
- using "finally"
- what a "return" from then() and catch() really does
	- Whatever is returned gets pushed onto the "then" of the promise
	- The returned item does NOT have to be another Promise!
	- Can even be a value, still creates another live "then" (live = has a result)
	- We can use this behavior for some cool tricks
- promiseAll() trick

## Important Takeaways
- Javascript "async" means your program has to run through all your code  to the end, non-stop!
- Remember what the return from a then or catch actually does => makes another "live "then" available in the chain.

