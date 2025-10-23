// on crée une function showhide
function showhide() {
  // on ecoute les evenements de bouton (quand on click et on crée une function
  button.addEventListener("click", () => {
    // on crée une variable et on met dedans = de recuperer le contenue ("article");)
    const existingArticle = document.querySelector("article");
    // si (! = si sa nexiste pas) contenue qu'on a mis dans la variable existingArticle.
    if (!existingArticle) {
      // on crée une variable newArticle = on crée un contenue ("article")
      const newArticle = document.createElement("article");
      // et dedans le newArticle on crée un text avec .textContent = "";
      newArticle.textContent =
        "L'important n'est pas la chute, mais l'atterrissage.";
      // on l'ajoute dans le body (document.body.append(contenue)) le contenue qu'on a crée.
      document.body.append(newArticle);
      //sinon
    } else {
      // on enleve le article de existant avec (contenue.remove();).
      existingArticle.remove();
    }
  });
}

showhide();
