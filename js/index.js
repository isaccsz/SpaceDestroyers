const spaceship = document.querySelector('#playerIcon');
const missile = document.querySelector('#missile');

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
    const missilePositionLeft = missile.offsetLeft;
    const missilePositionBottom = window.getComputedStyle(missile).bottom;
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

function playerMoving(direction){
    if(direction==='right'){
        spaceship.style.left = (spaceship.offsetLeft + 20 ) + 'px';
        missile.style.left = (spaceship.offsetLeft + 1 ) + 'px';
        console.log(spaceship.style.left);
    }else if(direction==='left'){
        spaceship.style.left = (spaceship.offsetLeft - 20 ) + 'px';
        missile.style.left = (spaceship.offsetLeft - 1 ) + 'px';
        console.log(spaceship.style.left);
    }
}

const generateAsteroidsIcons = setInterval(generateAsteroids, 1000);

const loop = setInterval(asteroidTracking, 500);
