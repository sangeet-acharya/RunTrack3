// on met dans une variable = on recupere le contenu avec le id ('button').
const clickBtn = document.getElementById("button");
// on crée une function addone(){}.
function addone() {
  //on ecoute le contenu avec le id clickBtn quand on click le button , et on crée une function.
  clickBtn.addEventListener("click", () => {
    // on a mis dans une variable = on parse[convertir string en int] le contenu avec le id ('compteur')
    //le text dedans ce contenu
    let i = parseInt(document.getElementById("compteur").textContent);
    //on cible le contenu avec le id ('compteur').innerText(a linterieur de contenue avec le id "compteur")
    // et on affecte i + 1 dans mon contenu.
    document.getElementById("compteur").innerText = i + 1;
  });
}
// on appele la function.
addone();
