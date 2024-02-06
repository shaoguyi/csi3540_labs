function toggleLock(diceNumber) {
    diceLocked[diceNumber - 1] = !diceLocked[diceNumber - 1];
    const button = document.getElementById(`dice${diceNumber}`).querySelector("button");
    if (diceLocked[diceNumber - 1]) {
      button.textContent = "Unlock";
    } else {
      button.textContent = "Lock";
    }
  }