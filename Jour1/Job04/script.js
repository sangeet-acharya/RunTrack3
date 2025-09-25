function bisextile(année) {
  //divisible par 4 et non divisible par 100, sauf si divisible par 400
  if ((année % 4 == 0 && année % 100 !== 0) || année % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(bisextile(2000));
console.log(bisextile(1800));
console.log(bisextile(1900));
console.log(bisextile(2024));
