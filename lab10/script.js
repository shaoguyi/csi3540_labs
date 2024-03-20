const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const bgImage = new Image();
bgImage.src = 'image3.jpg'; 

const obstacleImage = new Image();
obstacleImage.src = 'image.jpg'; 


const playerImage = new Image();
playerImage.src = 'image2.jpg'; 

class Player {
  constructor() {
    this.x = 100;
    this.y = canvas.height - 150;
    this.width = 50;
    this.height = 50;
    this.velocityY = 0;
    this.gravity = 0.5;
    this.velocityX = 0;
    this.onGround = false;
    this.life = 3;
  }

  draw() {
    ctx.drawImage(playerImage, this.x, this.y, this.width, this.height);
  }

  update() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;
    this.x += this.velocityX;

    if (this.y + this.height >= canvas.height) {
      this.y = canvas.height - this.height;
      this.onGround = true;
      this.velocityY = 0;
    } else {
      this.onGround = false;
    }

    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;

    this.draw();
  }

  jump() {
    if (this.onGround) {
      this.velocityY = -15;
    }
  }

  moveLeft() {
    this.velocityX = -5;
  }

  moveRight() {
    this.velocityX = 5;
  }

  stopHorizontalMovement() {
    this.velocityX = 0;
  }
}

class Obstacle {
  constructor(x) {
    this.x = x;
    this.y = canvas.height - 100;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x -= 2;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }
    this.draw();
  }

  reset() {
    this.x = canvas.width;
  }
}

const player = new Player();
const obstacles = [new Obstacle(400), new Obstacle(600), new Obstacle(800)];

function drawLives() {
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Lives: ' + player.life, 20, 30);
}

function gameOver() {
  cancelAnimationFrame(animationFrameId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '40px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2);
}

let animationFrameId;

function gameLoop() {
  animationFrameId = requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (bgImage.complete) {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  }

  obstacles.forEach(obstacle => {
    obstacle.update();
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y) {
      player.life--;
      obstacle.reset();
      if (player.life <= 0) {
        gameOver();
        return;
      }
    }
  });

  player.update();
  drawLives();
}


let loadedImages = 0;
const totalImages = 3;
const images = [bgImage, playerImage, obstacleImage];
images.forEach(image => {
  image.onload = () => {
    loadedImages++;
    if (loadedImages === totalImages) {
      gameLoop();
    }
  };
});

document.addEventListener('keydown', function(event) {
  switch (event.code) {
    case 'Space':
      event.preventDefault(); 
      player.jump();
      break;
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'ArrowRight':
      player.moveRight();
  break;
}
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
    player.stopHorizontalMovement();
  }
});
