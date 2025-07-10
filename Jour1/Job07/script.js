const joursferie = [
  new Date(Date.UTC(2020, 0, 1)),
  new Date(Date.UTC(2020, 3, 13)),
  new Date(Date.UTC(2020, 4, 1)),
  new Date(Date.UTC(2020, 4, 8)),
  new Date(Date.UTC(2020, 4, 21)),
  new Date(Date.UTC(2020, 5, 1)),
  new Date(Date.UTC(2020, 6, 14)),
  new Date(Date.UTC(2020, 7, 15)),
  new Date(Date.UTC(2020, 10, 1)),
  new Date(Date.UTC(2020, 10, 11)),
  new Date(Date.UTC(2020, 11, 25)),
];
var a = new Date(prompt("date 20XX-MM-DD"));
let day = a.getDay();

function jourstravaille(a) {
  for (let i = 0; i < joursferie.length; i++) {
    if (a <= joursferie[i]) {
      console.log(a + "C'est un jour ferie");
    } else {
      console.log(a + "C'est un jour travaille");
    }
  }
  if (day == 0 || day == 6) {
    console.log(a + "its a weekend");
  }
}

jourstravaille();
