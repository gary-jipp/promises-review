
// A common reason to create a promise is just to wrap a callback
const myPromise1 = function (timeout) {
	const promise = new Promise(() => {
		setTimeout(() => {
			console.log("Timeout complete");
		}, timeout * 1000);
	});
	return promise;
};

// Of course that's not very useful. Don;t know when it completed
// We can do more.  We can return stuff and notify the caller when we are done
const myPromise2 = function (timeout) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("Yay! That worked");
		}, timeout * 1000);
	});
	return promise;
};

// We can also tell the caller that the operation failed
const myPromise = function (timeout) {
	const promise = new Promise((resolve, reject) => {
		if (timeout <= 0) {
			reject("boo!  Bad value: " + timeout);
			return promise;
		}

		setTimeout(() => {
			resolve("Yay! That worked: " + timeout);
		}, timeout * 1000);
	});

	return promise;
};

module.exports = { myPromise };
