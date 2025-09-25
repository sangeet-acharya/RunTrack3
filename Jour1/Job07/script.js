// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
// date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
// $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
// message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
// $jour $mois $année est un jour travaillé”.
// $jour correspond au numéro du jour, $mois au mois et $année à l’année.

function jourtravaille(date) {
  var jourFeriée = [
    "2020_01_01",
    "2020_04_13",
    "2020_05_01",
    "2020_05_08",
    "2020_06_01",
    "2020_07_14",
    "2020_08_15",
    "2020_11_01",
    "2020_11_11",
    "2020_12_25",
  ];
  for (let i = 0; i <= jourFeriée.length; i++) {
    if (date == jourFeriée[i]) {
      console.log(date + " est un jour férié");
      return;
    } else {
      console.log(date + " est un jour travaillé");
    }
  }
}

jourtravaille("2020_01_01");
