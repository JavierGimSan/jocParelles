//DECLARAR OBJECTES

const btnPartida = document.getElementById("btn-partida");
const btnBorrar = document.getElementById("btn-borrar");
const nomJugadorObj = document.getElementById("nom-jugador"); //Casella del nom(fer .value per agafar lo de dins)
const infoNavegadorObj = document.getElementById("info-navegador");
const infoUrlObj = document.getElementById("info-url");
const infoJugadorObj = document.getElementById("info-jugador");


//DECLARAR EVENTS

btnPartida.addEventListener("click", comencarPartida);
btnBorrar.addEventListener("click", borrarPartida);

//DECLARAR VARIABLES I CONSTANTS
let win

//FUNCIONALITAT

function comencarPartida(){
    if(nomJugadorObj.value){
        document.cookie = nomJugadorObj.value;         
        win = window.open("joc.html");
        //infoJugadorObj.value = "Nom: " + nomJugadorObj.value + punts +" ESTAT PARTIDA: En joc" FALTA: ENLLAÇAR PUNTS.
        //localStorage.setItem("nom", "javi")
    }
    else{
        alert("Has d'informar un nom");
    }     
}

function borrarPartida(){
    win.close("joc.html");
}

function informacioNavegador(){
    const color = "orange";
    const usrAgent = navigator.userAgent;
    infoNavegadorObj.textContent = usrAgent;
}

function infoURL(){
    const url = location.origin;
    infoUrlObj.textContent = url;
}

informacioNavegador();
infoURL();  