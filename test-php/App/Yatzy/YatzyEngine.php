<?php
namespace App\Yatzy;

class YatzyEngine {
    const SCORE_TYPES = [
        'ones' => 1,
        'twos' => 2,
        'threes' => 3,
        'fours' => 4,
        'fives' => 5,
        'sixes' => 6
    ];

    public static function calculateScore($game, $scoreType) {
        $diceValues = $game->getDiceValues();
        $score = 0;

        if (array_key_exists($scoreType, self::SCORE_TYPES)) {
            $valueToMatch = self::SCORE_TYPES[$scoreType];
            foreach ($diceValues as $value) {
                if ($value === $valueToMatch) {
                    $score += $valueToMatch;
                }
            }
        }

        return $score;
    }

    public static function updateGlobalScore($game) {
        $score = 0; 
        $bonusThreshold = 63;
        $upperSectionScore = 0; 

        foreach (self::SCORE_TYPES as $type => $value) {
            $upperSectionScore += self::calculateScore($game, $type);
        }

        if ($upperSectionScore >= $bonusThreshold) {
            $score += 50; 
        }

        $score += $upperSectionScore; 

        return $score;
    }
}
