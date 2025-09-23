<!-- Maintenant que vous savez comment inclure du javascript et que vous maitrisez la
console web, vous allez pouvoir explorer davantage la syntaxe, la grammaire et le
lexique du langage javascript.
Pour l’ensemble des exercices suivants, vous devez rendre un fichier script.js contenant
le rendu de l’exercice et un fichier index.php qui l’inclut.
Déclarez une fonction “bisextile” qui prend en paramètre une variable “année”. Si l’année
est bisextile, la fonction retourne true, sinon elle retourne false. -->
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Job04Jour01</title>
</head>

<body>
    <h1>Vérification d'une année bisextile ! Veuillez Recharger La Page</h1>
    <script src="script.js"></script>
    <script>
        // Test interactif dans le navigateur
        const annee = prompt("Entrez une année :");
        if (annee !== null) {
            if (bisextile(parseInt(annee))) {
                alert(annee + " est une année bisextile.");
            } else {
                alert(annee + " n'est pas une année bisextile.");
            }
        }
    </script>
</body>

</html>