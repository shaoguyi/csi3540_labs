<?php
namespace Yatzy;

class YatzyGame {
    private $rollCount;
    private $diceValues;
    private $diceStates; 

    public function __construct() {
        $this->rollCount = 0;
        $this->diceValues = array_fill(0, 5, null); 
        $this->diceStates = array_fill(0, 5, false); 
    }

    public function rollDices() {
        if ($this->rollCount < 3) {
            for ($i = 0; $i < 5; $i++) {
                if (!$this->diceStates[$i]) { 
                    $this->diceValues[$i] = rand(1, 6); 
                }
            }
            $this->rollCount++;
        }
    }

    public function chooseDice($diceIndex, $keep) {
        if ($diceIndex >= 0 && $diceIndex < 5) {
            $this->diceStates[$diceIndex] = $keep;
        }
    }

    public function getRollCount() {
        return $this->rollCount;
    }

    public function getDiceValues() {
        return $this->diceValues;
    }

    public function getDiceStates() {
        return $this->diceStates;
    }
}
