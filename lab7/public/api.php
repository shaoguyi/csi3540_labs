<?php
session_start(); // Démarrer ou reprendre une session

// Initialiser le tableau de scores dans la session si non défini
if (!isset($_SESSION['scores'])) {
    $_SESSION['scores'] = [
        'ones' => 0,
        'twos' => 0,
        'threes' => 0,
        'fours' => 0,
        'fives' => 0,
        'sixes' => 0,
        'total' => 0
    ];
}

// Traiter un lancer de dés
if ($_GET['action'] == 'roll') {
    $diceRolls = [];
    for ($i = 0; $i < 5; $i++) {
        $diceRolls[] = rand(1, 6);
    }

    // Mettre à jour le tableau de scores basé sur le lancer
    foreach ($diceRolls as $roll) {
        $_SESSION['scores'][$roll - 1] += $roll;
    }
    $_SESSION['scores']['total'] = array_sum($_SESSION['scores']) - $_SESSION['scores']['total']; // Calculer le total

    // Renvoyer les résultats et le tableau de scores
    header('Content-Type: application/json');
    echo json_encode(['dice' => $diceRolls, 'scores' => $_SESSION['scores']]);
}
