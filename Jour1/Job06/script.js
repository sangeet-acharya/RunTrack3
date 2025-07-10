function fizzbuzz() {
  for (let i = 0; i < 151; i++) {
    console.log([i]);
    if (i % 3 == 0) {
      console.log("fizz");
    }
    if (i % 5 == 0) {
      console.log("buzz");
    }
    if (i % 3 && i % 5 == 0) {
      console.log("fizzbuzz");
    }
  }
}
fizzbuzz();
