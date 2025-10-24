//on met dans une variable un tableau avec les lettre .
const konami = ["s", "h", "o", "w"];
// tableau vide pour recuperer les touches appuyer.
const box = [];
// tableau vide pour contenir en forme de string.
let boxString = "";
// jecoute les touches appuyer sur mon clavier.
document.addEventListener("keyup", (e) => {
  //on ajoute les touches dans le tableau box avec la methode push(),
  // e.key nous permet de detecter quelle touche on a appuyer sur le clavier
  box.push(e.key);
  //   La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau).
  //   La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
  boxString = konami.join("");

  // on met box join() car le box est en format tableau ducoup on le transforme en string
  // car quand on met includes faut que les 2 sois de meme type
  // ducoup on compare un string avec un string.
  if (box.join("").includes(boxString)) {
    //syntaxe pour ajouter du style dans le html (si on veut changer de style on met un autre truc
    // a la place de backgroundColor = "").
    document.body.style.backgroundColor = "#0565fc";
  }
});
