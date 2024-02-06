let currentRound = 1;
    let diceLocked = [false, false, false, false, false, false];

    function rollDice() {
      if (currentRound >= 3) {
        alert("You could just roll three times!");
        document.getElementById("rollButton").disabled = true;
        return;
      }

      for (let i = 1; i <= 6; i++) {
        if (!diceLocked[i - 1]) {
          const diceElement = document.getElementById(`dice${i}`);
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          diceElement.innerHTML = ""; 
          for (let j = 1; j <= randomNumber; j++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (randomNumber === 1) {
              dot.classList.add("middle");
            } else if (randomNumber === 2) {
              if (j === 1) dot.classList.add("left-top");
              if (j === 2) dot.classList.add("right-bottom");
            } else if (randomNumber === 3) {
              if (j === 1) dot.classList.add("left-top");
              if (j === 2) dot.classList.add("middle");
              if (j === 3) dot.classList.add("right-bottom");
            } else if (randomNumber === 4) {
              if (j === 1) dot.classList.add("left-top");
              if (j === 2) dot.classList.add("left-bottom");
              if (j === 3) dot.classList.add("right-bottom");
              if (j === 4) dot.classList.add("right-top");
            } else if (randomNumber === 5) {
              if (j === 1) dot.classList.add("left-top");
              if (j === 2) dot.classList.add("left-bottom");
              if (j === 3) dot.classList.add("middle");
              if (j === 4) dot.classList.add("right-bottom");
              if (j === 5) dot.classList.add("right-top");
            } else if (randomNumber === 6) {
              if (j === 1) dot.classList.add("left-top");
              if (j === 2) dot.classList.add("left-middle");
              if (j === 3) dot.classList.add("left-bottom");
              if (j === 4) dot.classList.add("right-bottom");
              if (j === 5) dot.classList.add("right-middle");
              if (j === 6) dot.classList.add("right-top");
            }
            diceElement.appendChild(dot);
          }
        }
      }

      currentRound++;
      document.getElementById("round").textContent = `Round ${currentRound}`;
    }