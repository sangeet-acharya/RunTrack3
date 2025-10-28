function jsonValueKey(json, key) {
  // cest une chaine donc on parse quand on parse sa le transforme en objet.
  // objet = manipulable (acceder, modifier, parcourir).
  // pour convertir un objet en chaine json cest stringify.
  let convertionObj = JSON.parse(json);
  // on a creer une variable et on lui assigne le variable obj et on met un tableau a coter
  //pour cibler que les clé de l'objet.
  let cibleClé = convertionObj[key];
  return cibleClé;
}
//une chaine de caractere en format json!!!!
let chaineDeCarac = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
  }`;
// on console log la chainedecaractere et la clé quon veut.
console.log(jsonValueKey(chaineDeCarac, "city"));
