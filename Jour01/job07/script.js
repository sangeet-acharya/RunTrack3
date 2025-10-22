// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
// date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
// $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
// message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
// $jour $mois $année est un jour travaillé”.

// $jour correspond au numéro du jour, $mois au mois et $année à l’année.

// on crée une function qui sappel workday avec le parametre date.
function workDay(date) {
  //on crée un tableau dans une variable holiday et on met tout les dates
  //ferié de 2020 dans ce tableau qui est dans une variable.
  const holidays = [
    "1-1",
    "13-14",
    "1-5",
    "8-5",
    "21-5",
    "1-6",
    "14-7",
    "15-8",
    "1-11",
    "11-11",
    "25-12",
  ];

  // la on a cree des variable pour lui donner des date au format date.
  // cest a dire il a entre 1-31 jour du mois.
  const day = date.getDate();

  // la on a cree des variable pour lui donner des date au format date.
  // cest a dire il a entre 0-11 mois de l'années 0 = janvier et 11 = decembre.
  const month = date.getMonth();

  // la on a cree des variable pour lui donner des date au format date.
  const year = date.getFullYear();

  // la on a cree des variable pour lui donner des date au format date.
  // cest a dire il a entre 0-11 mois de l'années 0 = sunday et 6 = saturday cest en format anglais.
  const weekDay = date.getDay();

  // alors la on met jour + - + month pour que sa sois day-month pour que sa sois pareil
  // que dans le format de tableau de jour feriée en haut.
  const dayAndMonth = day + "-" + month;

  //La méthode includes() permet de déterminer si un tableau contient une valeur
  // et renvoie true si c'est le cas, false sinon.

  //cest a dire (holidays.includes(dayAndMonth)) on verifie si le tableau holidays est
  // true que le dayAndMonth
  if (holidays.includes(dayAndMonth)) {
    // si cest vrai on retourne la date + "string".
    return date + "its a Holiday";
    //et si jour de la semaine = 0 ou jour de la semaine = 6
  } else if (weekDay === 0 || weekDay === 6) {
    // on return la date + "string".
    return date + "its a The Weekend";
    // sinon
  } else {
    // on retourne la date + "string".
    return date + "its a WorkDay Arghh";
  }
}
// jaffiche dans ma console log ma function et
// je crée un objet comme dans la classe de php
// dans la quel je met la valeur (date).
console.log(workDay(new Date(2025, 1, 2)));
