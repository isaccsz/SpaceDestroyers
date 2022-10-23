const spaceship = document.querySelector('#playerIcon');
let playerPosition;
let asteroid;
let asteroidTopPosition;
let shoot;
let shootTopPosition;

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

    if(playerPosition!=undefined){
    
        const container = document.querySelector('.gameboard');
        const createShoot = document.createElement('img');

        createShoot.style.width = 35 + 'px';
        createShoot.src = './Img/missile.png';
        createShoot.className = 'missile';
        createShoot.style.top = 390 + 'px';
        createShoot.style.left = playerPosition + 'px';
        container.appendChild(createShoot);
        shootTopPosition = 390;
        shoot = createShoot;

    }
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

function removeShoot(){
    shoot.remove();
    shoot=undefined;
}

function shootTrack(){
    if(shoot!=undefined){   
        if(shootTopPosition >= -10){
            shoot.style.top = shootTopPosition + 'px';
        }else{
            shootTopPosition = 0;
            removeShoot();
        }
    }

    shootTopPosition -= 12;

}

function looseCheck(){
    if(playerPosition!=undefined && asteroid!=undefined){
        if(playerPosition===asteroid.offsetLeft || (playerPosition>(asteroid.offsetLeft - 30) && playerPosition < (asteroid.offsetLeft+79))){
            if(asteroidTopPosition < 420  && asteroidTopPosition>380){
                console.log(asteroidTopPosition);
                clearTimeout(looser);
                clearTimeout(shootAnimation);
                clearTimeout(asteroidAnimation);
                clearTimeout(generateShoot);
                clearTimeout(generateAsteroidsIcons);
                alert("looser");
                removeShoot();
                removeAsteroid();
            }
        }
    }
}

function hitCheck(){
    if(asteroid!=undefined && shoot!=undefined){
        if(asteroid.offsetLeft===shoot.offsetLeft || (shoot.offsetLeft>(asteroid.offsetLeft - 30)) && shoot.offsetLeft< (asteroid.offsetLeft+79)){
            if(shootTopPosition<asteroidTopPosition && shootTopPosition>asteroidTopPosition - 50){
                const createExplosion = document.createElement('img');
                const table = document.querySelector('.gameboard');
                createExplosion.style.width = 35 + 'px';
                createExplosion.src = './Img/explosao.png';
                createExplosion.className = 'explosao';
                createExplosion.style.width = 150 + 'px';
                createExplosion.style.top = (asteroidTopPosition - 50) + 'px';
                createExplosion.style.left = (asteroid.offsetLeft - 50)  + 'px';

                table.appendChild(createExplosion);
                setTimeout(() => {
                    createExplosion.remove();
                },1000);
                removeShoot();
                removeAsteroid();
            }
        }
    }
}

const hitTrack = setInterval(hitCheck, 10);

const looser = setInterval(looseCheck, 100);

const shootAnimation = setInterval(shootTrack, 25);

const asteroidAnimation = setInterval(asteroidFall, 100);

const generateShoot = setInterval(playerShooting, 1000);

const generateAsteroidsIcons = setInterval(generateAsteroids, 3000);
