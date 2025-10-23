// on met dans une variable textCitation = Recuperer le contenu avec le id
//et .textContent cest recuperer tout les textes dans cette contenu
const textCitation = document.getElementById("citation").textContent;
// pareil sauf quon recupere le button
const button = document.getElementById("button");
// on crée une function citation
function citation() {
  // ou on ecoute le evenement de button (quand on click et on crée une function dedans
  button.addEventListener("click", function () {
    // ou on dis de console log le textCitation).
    console.log(textCitation);
  });
}

citation();
