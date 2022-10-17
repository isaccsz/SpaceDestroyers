const spaceship = document.querySelector('#playerIcon');
const missile = document.querySelector('#missile');

document.addEventListener('keydown', function(event) {
    const key = event.key; 
    
    switch (event.key) {
    
      case "ArrowLeft":
          console.log("Left arrow!")
          break;
      case "ArrowRight":
          console.log("Right arrow!")
          moveRight();
          break;
     }
});

function asteroidTracking(){
    const missilePositionLeft = missile.offsetLeft;
    const missilePositionBottom = window.getComputedStyle(missile).bottom;
    const playerPosition = spaceship.offsetLeft;
}

function generateAsteroids(){
    const section = document.querySelector('.gameboard');
    const createElement = document.createElement('img');
    let size = 80;
    createElement.style.width = size + 'px';
    createElement.src = '../img/asteroid.png';
    createElement.className = 'asteroides';
    createElement.style.top = -76 + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px'
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    },4000)
}

const generateAsteroidsIcons = setInterval(generateAsteroids, 1000);

const loop = setInterval(asteroidTracking, 500);
