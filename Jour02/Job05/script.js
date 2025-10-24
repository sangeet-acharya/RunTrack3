// je recupere mon footer
const footer = document.getElementById("footer");

// j'ecoute le scroll de la fenetre du navigateur (window).
window.addEventListener("scroll", () => {
  //recupere la position vertical de ma fenetre du nav.
  const position = window.scrollY;

  // Ici, tu calcules une valeur d’opacité basée sur la position de défilement.
  // document.body.offsetHeight correspond à la hauteur totale du contenu de la page (en pixels).
  // En divisant la position (scrollY) par cette hauteur, tu obtiens un ratio entre 0 et 1
  // (ou parfois un peu plus si on scrolle au-delà du contenu).
  // Exemple :
  // Si la page fait 2000px de haut et que tu es descendu de 500px :
  // 👉 opacity = 500 / 2000 = 0.25
  const opacity = position / document.body.offsetHeight - window.innerHeight;

  //la couleur devient de plus en plus opaque en descendant.
  footer.style.backgroundColor = `rgba(0,0,0, ${opacity})`;

  // Affiche dans la console la position et l'opacité
  //console.log(`Position : ${position}px | Opacité : ${opacity.toFixed(2)}`);
});
