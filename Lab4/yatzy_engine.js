function scoreOnes(dice) { return dice.filter(d => d === 1).length * 1; }
function scoreTwos(dice) { return dice.filter(d => d === 2).length * 2; }
function scoreThrees(dice) { return dice.filter(d => d === 3).length * 3; }
function scoreFours(dice) { return dice.filter(d => d === 4).length * 4; }
function scoreFives(dice) { return dice.filter(d => d === 5).length * 5; }
function scoreSixes(dice) { return dice.filter(d => d === 6).length * 6; }

function scorePair(dice) {
    const counts = dice.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), {});
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 2) return i * 2;
    }
    return 0;
}

function scoreTwoPairs(dice) {
    let pairs = [];
    const counts = dice.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), {});
    Object.keys(counts).forEach(die => {
        if (counts[die] >= 2) pairs.push(+die);
    });
    return pairs.length >= 2 ? pairs.sort((a, b) => b - a).slice(0, 2).reduce((sum, die) => sum + die * 2, 0) : 0;
}

function scoreThreeOfAKind(dice) {
    const counts = dice.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), {});
    for (let die in counts) {
        if (counts[die] >= 3) return die * 3;
    }
    return 0;
}

function scoreFourOfAKind(dice) {
    const counts = dice.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), {});
    for (let die in counts) {
        if (counts[die] >= 4) return die * 4;
    }
    return 0;
}

function scoreSmallStraight(dice) {
    const uniqueDice = [...new Set(dice)];
    const smallStraight = [1, 2, 3, 4, 5];
    return smallStraight.every(num => uniqueDice.includes(num)) ? 15 : 0;
}

function scoreLargeStraight(dice) {
    const uniqueDice = [...new Set(dice)];
    const largeStraight = [2, 3, 4, 5, 6];
    return largeStraight.every(num => uniqueDice.includes(num)) ? 20 : 0;
}

function scoreFullHouse(dice) {
    const counts = dice.reduce((acc, d) => (acc[d] = (acc[d] || 0) + 1, acc), {});
    const keys = Object.keys(counts);
    if (keys.length === 2) {
        const threeOfAKind = keys.find(key => counts[key] === 3);
        const twoOfAKind = keys.find(key => counts[key] === 2);
        return threeOfAKind && twoOfAKind ? parseInt(threeOfAKind) * 3 + parseInt(twoOfAKind) * 2 : 0;
    }
    return 0;
}

function scoreChance(dice) {
    return dice.reduce((sum, d) => sum + d, 0);
}

function scoreYatzy(dice) {
    return dice.every(d => d === dice[0]) ? 50 : 0;
}
