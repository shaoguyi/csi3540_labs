<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Yatzy Game avec Leaderboard</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        
        body { font-family: Arial, sans-serif; }
        #leaderboard { margin-top: 20px; }
        #leaderboard ul { list-style-type: none; padding: 0; }
        #leaderboard li { margin-bottom: 5px; }
    </style>
</head>
<body>

<h2>Yatzy Game</h2>
<button id="rollDice">Lancer les dés</button>
<div id="diceResults"></div>
<h3>Score: <span id="currentScore">0</span></h3>

<button id="showLeaderboard">Afficher le Leaderboard</button>
<div id="leaderboard"></div>

<script>
$(document).ready(function() {
    $.get('api.php?action=reset', function(response) {
        console.log(response); 
    });

    $('#rollDice').click(function() {
        $.ajax({
            url: 'api.php?action=roll', 
            type: 'GET',
            success: function(response) {
                let diceResults = "Résultats des dés: ";
                response.dice.forEach(function(die) {
                    diceResults += die + " ";
                });
                $('#diceResults').text(diceResults);
                $('#currentScore').text(response.currentScore);
            },
            error: function() {
                alert("Erreur lors de la requête de lancer de dés.");
            }
        });
    });

    $('#showLeaderboard').click(function() {
        $.ajax({
            url: 'api.php?action=leaderboard',
            type: 'GET',
            success: function(response) {
                let leaderboardHtml = "<h3>Leaderboard</h3><ul>";
                response.forEach(function(player) {
                    leaderboardHtml += `<li>${player.name}: ${player.score}</li>`;
                });
                leaderboardHtml += "</ul>";
                $('#leaderboard').html(leaderboardHtml);
            },
            error: function() {
                alert("Erreur lors de la récupération du leaderboard.");
            }
        });
    });
});
</script>

</body>
</html>
