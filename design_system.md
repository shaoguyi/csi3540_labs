# Yatzy Game Design System

`![yatzy web](./yatzy_web.png)`
## Overview
Yatzy is a dice game where the objective is to score points by rolling five dice to make certain combinations. The game consists of 13 rounds. After each round, the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again.

## Game Components

### Title :Yatzy game
- title color : `#FFA500`

### Dice
- Five six-sided dice are used.
- Dice colors: `#5E9CF8`

### Scorecard
- The scorecard is used to keep track of each player's scores.
- Categories include: Ones, Twos, Threes, Fours, Fives, Sixes, Three-Of-A-Kind, Four-Of-A-Kind, Full House, Small Straight, Large Straight, Yatzy, and Chance.

## User Interface

### Play Area
- Background color: `#c0c0c0` 
- Text color: `#0000FF` 
- Button to roll dice: `#59ECF8` 

### Scorecard UI
- Background color: `#0000FF` 
- Category text color: `#0E1332` 
- Score input field: `#FFFFFF`

### Buttons
- "Roll Dice" button: `#5E9CF8` (Blue) with text `#FFFFFF`
- "Score Category" selection buttons: `#59ECF8`  with text `#FFFFFF` 

## Colours

| HEX Code  | Display                                                                 | Description       |
|-----------|-------------------------------------------------------------------------|-------------------|
| `#59ECF8` | ![#59ECF8](https://via.placeholder.com/15/59ECF8/59ECF8.png)             | Dice & Buttons    |
| `#c0c0c0` | ![#c0c0c0](https://via.placeholder.com/15/0E1332/0E1332.png)             | Background & Text |
| `#0000FF` | ![#0000FF](https://via.placeholder.com/15/F6F8FC/F6F8FC.png)             | Scorecard & Text  |

## Gameplay Instructions

1. Each player takes a turn rolling the dice up to three times.
2. After each roll, the player can choose to re-roll any number of dice.
3. After the third roll or earlier if the player chooses, they must select a scoring category for this round.
4. If the dice do not satisfy the chosen category's requirements, the player scores zero in that category.

## Scoring Example

```plaintext
Ones: 2
Twos: 4
Threes: 9
Fours: 8
Fives: 10
Sixes: 12
Bonus: 0
One Pair: 8
Two Pairs: 16
Three of a Kind: 9
Four of a Kind: 16
Small Straight: 15
Large Straight: 20
Full House: 18
Chance: 23
Yatzy: 50

## Game End

The game ends once all players have filled all their categories on the scorecard. The player with the highest total score wins the game.

