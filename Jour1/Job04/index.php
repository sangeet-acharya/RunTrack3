<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test Bisextile</title>
</head>
<body>
    <h1>Vérification d'une année bisextile</h1>

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
