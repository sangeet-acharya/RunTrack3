const textCitation = document.getElementById("citation").textContent;
const button = document.getElementById("button");
function citation() {
  button.addEventListener("click", function () {
    console.log(textCitation);
  });
}

citation();
