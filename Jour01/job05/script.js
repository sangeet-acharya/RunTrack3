//on cree une function nommée afficherJoursSemaines.
function afficherJoursSemaines() {
  // on cree un tableau dedans. avec les jours de la semaines.
  const joursSemaines = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  //on cree un boucle for pour afficher les jours de la semaines 1 par 1.
  for (i = 0; i < joursSemaines.length; i++) {
    console.log(joursSemaines[i]);
  }
}
// on appel la function.
afficherJoursSemaines();
