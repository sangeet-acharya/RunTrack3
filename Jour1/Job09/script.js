function tri(order, number) {
  if (order == "asc") {
    console.log(
      number.sort(function (a, b) {
        return a - b;
      })
    );
  } else {
    console.log(
      number.sort(function (a, b) {
        return b - a;
      })
    );
  }
}

var order = "asc";
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tri("desc", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
