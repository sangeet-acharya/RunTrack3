function phrase() {
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    fetch("expression.txt")
      .then((reponse) => reponse.text())
      .then((commeJeVeux) => {
        document.getElementById("paragraphe").innerHTML = commeJeVeux;
      });
  });
}

phrase();
