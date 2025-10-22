// on crée une function qui s'appele bisextile avec le parametre (année).
function bisextile(année) {
  // si année est divisible par 4 et donne 0 a la fin ET(&&) année divisé par 100 est superieur
  // a 0 (!== pour dire different a 0) OU|| année est divisible par 400 et donne 0 a la fin
  if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
    //alors on retourne vrai
    return true;
    //sinon
  } else {
    //on retourne false
    return false;
  }
}

// on ecrit dans le console, on appel la function et on met une valeur dans le ().
console.log(bisextile(2100));
