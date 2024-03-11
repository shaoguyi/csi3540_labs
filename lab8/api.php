<?php
session_start();

if ($_GET['action'] == 'reset') {
    $_SESSION['leaderboard'] = [];
    $_SESSION['playerId'] = 1; 
    echo json_encode(['message' => 'Leaderboard and player ID reset']);
    exit;
}

if ($_GET['action'] == 'roll') {
    $diceRolls = [];
    for ($i = 0; $i < 5; $i++) {
        $diceRolls[] = rand(1, 6);
    }

    $currentScore = array_sum($diceRolls);

    
    $maxId = 0;
    foreach ($_SESSION['leaderboard'] as $player) {
        preg_match("/Player(\d+)/", $player['name'], $matches);
        $id = (int)$matches[1];
        if ($id > $maxId) {
            $maxId = $id;
        }
    }
    
    $newId = $maxId + 1;
    $playerName = "Player" . $newId;

    
    $_SESSION['leaderboard'][] = ['name' => $playerName, 'score' => $currentScore];

    
    usort($_SESSION['leaderboard'], function($a, $b) {
        return $b['score'] - $a['score'];
    });

    
    $_SESSION['leaderboard'] = array_slice($_SESSION['leaderboard'], 0, 5);

    header('Content-Type: application/json');
    echo json_encode(['dice' => $diceRolls, 'currentScore' => $currentScore]);
}
if ($_GET['action'] == 'leaderboard') {
   
    header('Content-Type: application/json');
    echo json_encode($_SESSION['leaderboard']);
}
