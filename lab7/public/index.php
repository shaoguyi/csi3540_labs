<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Yatzy Game avec tableau de scores</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

<h2>Yatzy Game</h2>
<button id="rollDice">Lancer les dés</button>
<div id="diceResults"></div>
<h3>Tableau de Scores</h3>
<ul id="scoreBoard">
    <li>Ones: <span id="score-ones">0</span></li>
    <li>Twos: <span id="score-twos">0</span></li>
    <li>Threes: <span id="score-threes">0</span></li>
    <li>Fours: <span id="score-fours">0</span></li>
    <li>Fives: <span id="score-fives">0</span></li>
    <li>Sixes: <span id="score-sixes">0</span></li>
    <li>Total: <strong id="score-total">0</strong></li>
</ul>

<script>
$(document).ready(function() {
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
                
                // Mettre à jour le tableau de scores
                $('#score-ones').text(response.scores[1]);
                $('#score-twos').text(response.scores[2]);
                $('#score-threes').text(response.scores[3]);
                $('#score-fours').text(response.scores[4]);
                $('#score-fives').text(response.scores[5]);
                $('#score-sixes').text(response.scores[6]);
                $('#score-total').text(response.scores['total']);
            }
        });
    });
});
</script>

</body>
</html>
