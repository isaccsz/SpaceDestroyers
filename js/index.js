const spaceship = document.querySelector('#playerIcon');
let playerPosition;
let asteroid;
let asteroidTopPosition;
let shoot;

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

function asteroidPosition(){

}

function generateAsteroids(){
    if(asteroid===undefined){
        const section = document.querySelector('.gameboard');
        const createElement = document.createElement('img');
        let size = 80;
        createElement.style.width = size + 'px';
        createElement.src = './Img/asteroid.png';
        createElement.className = 'asteroides';
        createElement.style.top = -76 + 'px';
        createElement.style.left = Math.random() * innerWidth + 'px'
        section.appendChild(createElement);
        asteroidTopPosition = -76;
        asteroid = createElement;
    }
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

    if(direction==='right' && (playerPosition < 950 || playerPosition === undefined)){
        spaceship.style.left = (spaceship.offsetLeft + 20 ) + 'px';
        playerPosition = spaceship.offsetLeft;
    }else if(direction==='left' && (playerPosition > 5 || playerPosition === undefined)){
        spaceship.style.left = (spaceship.offsetLeft - 20 ) + 'px';
        playerPosition = spaceship.offsetLeft;
    }
}

function asteroidFall(){
        if(asteroid != undefined){
            if(asteroidTopPosition < 500){
                asteroid.style.top = asteroidTopPosition + 'px';
                console.log(asteroidTopPosition);
            }else{
                asteroidTopPosition = 0;
                removeAsteroid();
            }
        }
        asteroidTopPosition += 20;
}

function removeAsteroid(){
    asteroid.remove();
    asteroid=undefined;
}

function looseCheck(){
    if(playerPosition!=undefined && asteroid!=undefined){
        if(playerPosition===asteroid.offsetLeft || (playerPosition>asteroid.offsetLeft && playerPosition < (asteroid.offsetLeft+79))){
            if(asteroidTopPosition<500 && asteroidTopPosition > 400){
                alert("looser");
                removeAsteroid();
                playerPosition=undefined;
                asteroidPosition=0;
            }
        }
    }
}

const looser = setInterval(looseCheck, 100);

const asteroidAnimation = setInterval(asteroidFall, 100);

const generateShoot = setInterval(playerShooting, 1000);

const generateAsteroidsIcons = setInterval(generateAsteroids, 3000);
