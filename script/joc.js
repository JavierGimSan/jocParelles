//DECLARAR OBJECTES
const nomObj = document.getElementById("nom-partida");
const containerQuadrats = document.getElementById("quadrats-container");
const puntsPartidaObj = document.getElementById("punts-partida");
const numPuntsObj = document.getElementById("num-punts"); //Puntuació de la partida.
const bodyObj = document.getElementById("body");

//DECLARAR VARIABLES I CONSTANTS
const NUMCASELLES = 20;
const nomStorage = document.cookie;
nomObj.textContent = nomStorage;
const nomNavegador = 'Chrome';
let lletres = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
let lletresJugades = [];
let parella = [];
let quadratsSeleccionats = []; //Array per introduir una parella de quadrats i poder canviar els colors.
let winInstr;

//DECLARAR EVENTS
const botoInstruccions = document.getElementById("btn-instruccions");
botoInstruccions.addEventListener('click', mostrarInstruccions);

//COLOR DE FONS DEPENENT DEL NAVEGADOR:
if(navigator.userAgent.includes(nomNavegador)){
    bodyObj.style.backgroundColor = 'green';
}else {
    bodyObj.style.backgroundColor = 'orange';
}

//ORDRE ALEATORI PER A L'ARRAY LLETRES:
lletres = lletres.sort(function(){return Math.random() -0.5});

//BUCLE PER CREAR LES CASELLES DEL JOC
for(i=0; i<NUMCASELLES; i++){
    const quadrat = document.createElement("div"); //Crea un div que representará un quadrat, un dels dos elements de cada parella.
    quadrat.classList.add('quadrat') //Assigno una class al div.
    quadrat.id = 'quadrat' + (i+1); //Assigno un id al div.
    quadrat.textContent = lletres[i]; //Introdueixo una lletra de l'array 'lletres' a cada casella.
    containerQuadrats.appendChild(quadrat); //Introdueixo un quadrat al tauler.
    quadrat.addEventListener('click', comprovarParella);
}

function comprovarParella(){ //Si son iguals, es posen verd. Si no, vermelles durant un segon i després es tornen a amagar.
    parella.push(this.textContent); //Amb 'this' selecciono l'element clicat.
    quadratsSeleccionats.push(this);
    this.style.color = 'white';
    console.log(parella);
    this.style.pointerEvents = 'none'; //He trobat aquesta propietat amb la que, quan una casella està clicada, no es pugui tornar a clicar.
    if(parella.length == 2){ //Quan hem seleccionat el segon element...
        if(parella[0] == parella[1]){
            numPuntsObj.textContent = parseInt(numPuntsObj.textContent) + 10; //SUMA 10 PUNTS SI ES CORRECTE
            console.log(numPuntsObj.textContent);
            lletresJugades.push(parella);
            console.log('lletres' + lletresJugades);
            for(i=0; i<parella.length; i++){ //Bucle per canviar el color de les caselles si son iguals.
                quadratsSeleccionats[i].style.backgroundColor = 'green';
            }
            parella = [];
            quadratsSeleccionats = [];
        }else if(parella[0] != parella[1]){
            if(parseInt(numPuntsObj.textContent)>=3){
                numPuntsObj.textContent = parseInt(numPuntsObj.textContent) -3; //RESTA 3 PUNTS SI ES INCORRECTE.
            }
            quadratsSeleccionats[0].style.backgroundColor = 'red';
            quadratsSeleccionats[1].style.backgroundColor = 'red';
            setTimeout(() =>{ //TEMPORITZADOR: Torna les caselles al seu color inicial al cap d'un segon.
                quadratsSeleccionats[0].style.backgroundColor = 'blue';
                quadratsSeleccionats[1].style.backgroundColor = 'blue';
                quadratsSeleccionats[0].style.pointerEvents = 'auto'; //Si no son iguals torno a activar el click.
                quadratsSeleccionats[1].style.pointerEvents = 'auto';
                quadratsSeleccionats[0].style.color = 'blue';
                quadratsSeleccionats[1].style.color = 'blue';
                parella = [];
                quadratsSeleccionats = [];
            }, 300);                       
        }        
    }
}

function mostrarInstruccions(){
    window.open('instruccions.html', '_blank', 'width=400, height=400');
}

