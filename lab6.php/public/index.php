<?php
require_once(__DIR__ . '/../_config.php');
require_once __DIR__ . '/../App/Models/Dice.php';

use App\Models\Dice;

$d = new Dice();

for ($i = 1; $i <= 5; $i++) {
  echo "ROLL {$i}: {$d->roll()}<br>";
}

echo "<br>";

require_once __DIR__ . '/../App/Yatzy/YatzyGame.php';

use Yatzy\YatzyGame;

$yatzyGame = new YatzyGame();

$yatzyGame->rollDices();
echo "Après le premier lancer : ";
print_r($yatzyGame->getDiceValues());

$yatzyGame->chooseDice(2, true); 
$yatzyGame->rollDices(); 

echo "<br>";

echo "Après le deuxième lancer : ";
print_r($yatzyGame->getDiceValues());

echo "<br>";
echo "<br>";

require_once __DIR__ . '/../App/Yatzy/YatzyGame.php';
require_once __DIR__ . '/../App/Yatzy/YatzyEngine.php';


use App\Yatzy\YatzyEngine;

$game = new YatzyGame();

$game->rollDices(); 

$scoreType = 'ones';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$scoreType = 'twos';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$scoreType = 'threes';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$scoreType = 'fours';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$scoreType = 'fives';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$scoreType = 'sixes';
$score = YatzyEngine::calculateScore($game, $scoreType);
echo "Score for $scoreType: $score<br>\n";

$globalScore = YatzyEngine::updateGlobalScore($game);
echo "Global score (including any bonuses): $globalScore\n";
