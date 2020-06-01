
// The classic callback async function
setTimeout(function (p1, p2) {
  console.log("Timeout Complete:", p1, p2);
}, 1000, "hey", "hi");


// We all recognise the callback waterfall
setTimeout(
  function (p1) {
    console.log("Timeout 1 Complete:", p1);

    setTimeout(function () {
      console.log("Timeout 2 Complete");

      setTimeout(function () {
        console.log("Timeout 3 Complete");

        setTimeout(function () {
          console.log("Timeout 4 Complete");

          setTimeout(function () {
            console.log("Timeout 4 Complete");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  },
  1000,
  "hey"
);
