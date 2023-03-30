/* Cose da fare
1. Creare la griglia
2. Creare le celle
3. Con un ciclo for assegnare a ogni cella un numero progressivo a seconda della difficoltà scelta
4.


*/





// Variabili
const btnStart  = document.querySelector('.btn-start');
const main = document.querySelector('.game');
const select = document.querySelector('#level');

const cells = document.getElementsByClassName('square');
const cell = document.createElement('div');                // celle

const arrDifficulties = [100, 81, 49];
let arrBombs = [];
let bombs = [];
const NUM_BOMBS = 16;

btnStart.addEventListener('click', play)






//! ******************* FUNCTIONS ******************/
function play(){

    // reset per azzerare tutto
    reset();

    // creare le celle in base alla difficoltà scelta
    const cellNumbers = arrDifficulties[select.value];
    generateGrid(cellNumbers);
    const grid = document.createElement('div');
    grid.className = 'grid';
    
    //bombe
    bombs = generateBombs(cellNumbers);
    console.log(bombs);

    // crea le celle con un numero compreso tra 1 e il numero massimo predefinito dalla difficoltà
    for (let i = 1; i <= cellNumbers; i++) {
        const cell = generateCells(cellNumbers, i, bombs);
        grid.append(cell);
    }
    
    main.append(grid);
}


function generateGrid(cellsNumber){
    //creo la griglia
    const grid = document.createElement('div');
    grid.className = 'grid';
    
}

function generateCells(cellNumbers, id, bombs){
    //genero la cella con numero corrispondente alla variabile i
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add('square' + cellNumbers);
    cell.cellId = id;

    cell.innerHTML = `<span>${id}</span>`;

    // invece di creare una nuova funzione esterna l'ho creata internamente e anonimamente, e mostra le bombe
    cell.addEventListener('click', function() {
        if (bombs.includes(id)) {
            cell.isBomb = true;
            cell.classList.add('bomb');
        }
    
        if (this.isBomb) {    //todo
            bombUp()
        }
    
        console.warn(this.cellId);
        this.classList.add('clicked');
    });
    return cell;
}

function reset(){
    main.innerHTML= '';
}


function generateBombs(cellNumbers){

    const bombs = [];

    while(bombs.length < NUM_BOMBS){
        
        const bomb = getRandomNumber(1, cellNumbers);

        //la bomba viene pushata solo se quello spazio non è già occupato
        if(!bombs.includes(bomb)) bombs.push(bomb);
        console.log(this,'sono una bomba');
    }
    
    return bombs;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function bombUp(){

}