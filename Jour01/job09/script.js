function tri(number, order) {
  if (order === "asc") {
    //.sort(petit, grand) => grand - petit.
    //on met sort et () et on met les 2 string quon veut
    //apres on les met en ordre quon veut par exemple si on met petit en 2eme
    // alors il feras de grand au peit.
    number.sort((petit, grand) => grand - petit);
  } else if (order === "desc") {
    number.sort((petit, grand) => petit - grand);
  } else {
    console.log("erreur !");
  }
  return number;
}
const number = [1, 15, 3, 9, 20, 17, 50, 25];
console.log(tri(number, "desc"));
