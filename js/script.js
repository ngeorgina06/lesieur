/* const = variables un peu comme let? */

const btPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector('.conteneur-transports');

btPlus.addEventListener('click',fouvreferme);

/* function = mettre du code en attente */

function fouvreferme(){

    /* si le conteneur existe dans l'état ou il est, rajoute cette classe. Sinon enlève. */
    conteneur.classList.toggle('conteneur-transports-invisible')

};

/* point virgule après accolades */