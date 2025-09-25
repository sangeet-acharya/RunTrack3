// Créez une fonction “afficherjourssemaines”. Cette fonction ne prend pas de paramètre.
// Créez un tableau de strings “jourssemaines” qui contient l’ensemble des jours de la
// semaine, du Lundi au Dimanche. Ensuite à l’aide d’une boucle for (for!)Affichez un par
// un ces jours.
function afficherjourssemaines() {
  let jourssemaines = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  // Boucle qui parcourt chaque élément du tableau
  for (let i = 0; i < jourssemaines.length; i++) {
    console.log(jourssemaines[i]); // Affiche chaque jour dans la console
  }
}
// Appel de la fonction
afficherjourssemaines();
