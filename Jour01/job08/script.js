function primeNumber(num) {
  //on commence par 2 parce que le 1 et 0 est toujours divisible par tous les nombres.
  //ducoup si le i dois pas etre divisible par le num
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
  //en bref si entre 2 et le numero de parametre il est divisble par autre nombre que lui meme
  //alors on retourne faux car cest pas un nombre premier.
}

function sumPrimeNumber(var1, var2) {
  //si le variable 1 et 2 est nombre premier alors on.
  if (primeNumber(var1) && primeNumber(var2)) {
    // retourne le variable 1 + 2.
    return var1 + var2;
    //sinon
  } else {
    // retourne faux
    return false;
  }
}

// je log ma function avec les 2 parametre (jai mis 2 nombre premier).
console.log(sumPrimeNumber(59, 73));
// je log ma function avec les 2 parametre (jai lus in nombre premier et un nombre pas premier).
console.log(sumPrimeNumber(4, 5));
