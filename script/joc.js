//DECLARAR OBJECTES
const nomObj = document.getElementById("nom-partida");
const containerQuadrats = document.getElementById("quadrats-container");

//DECLARAR VARIABLES I CONSTANTS
const NUMCASELLES = 20;
const nomStorage = document.cookie;
nomObj.textContent = nomStorage;
let lletres = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
let parella = [];

//BUCLE PER CREAR LES CASELLES DEL JOC
for(i=0; i<NUMCASELLES; i++){
    const quadrat = document.createElement("div"); //Crea un div que representará un quadrat, un dels dos elements de cada parella.
    const text = document.createElement("p");
    quadrat.classList.add('quadrat')
    quadrat.id = 'quadrat' + (i+1);
    text.id = 'text' + (i+1);
    text.textContent = lletres[i];
    containerQuadrats.appendChild(quadrat);
    quadrat.appendChild(text);
}

function comprovarParella(){
    
}

