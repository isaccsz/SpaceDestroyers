const spaceship = document.querySelector('#playerIcon');
let playerPosition;

document.addEventListener('keydown', function(event) {
    const key = event.key; 

    switch (event.key) {
    
      case "ArrowLeft":
          playerMoving('left');
          break;
      case "ArrowRight":
          playerMoving('right');
          break;
     }
});

function asteroidTracking(){
   
}

function generateAsteroids(){
    const section = document.querySelector('.gameboard');
    const createElement = document.createElement('img');
    let size = 80;
    createElement.style.width = size + 'px';
    createElement.src = './Img/asteroid.png';
    createElement.className = 'asteroides';
    createElement.style.top = -76 + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px'
    section.appendChild(createElement);
    setTimeout(() => {
        createElement.remove()
    },4000)
}

function playerShooting(){
    const container = document.querySelector('.gameboard');
    const createShoot = document.createElement('img');

    createShoot.style.width = 35 + 'px';
    createShoot.src = './Img/missile.png';
    createShoot.className = 'missile';
    createShoot.style.bottom = 100 + 'px';
    createShoot.style.left = playerPosition + 'px';
    container.appendChild(createShoot);
    setTimeout(() => {
        createShoot.remove()
    },500)
}

function playerMoving(direction){
    playerPosition = 0;

    if(direction==='right'){
        spaceship.style.left = (spaceship.offsetLeft + 20 ) + 'px';
        playerPosition = spaceship.offsetLeft;
    }else if(direction==='left'){
        spaceship.style.left = (spaceship.offsetLeft - 20 ) + 'px';
        playerPosition = spaceship.offsetLeft;
    }
}

const generateShoot = setInterval(playerShooting, 500);

const generateAsteroidsIcons = setInterval(generateAsteroids, 1000);

const loop = setInterval(asteroidTracking, 500);
