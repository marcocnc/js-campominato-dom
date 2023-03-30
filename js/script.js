/* Cose da fare
1. Creare la griglia
2. Creare le celle
3. Con un ciclo for assegnare a ogni cella un numero progressivo a seconda della difficoltà scelta



*/





// Variabili
const btnStart  = document.querySelector('.btn-start');
const main = document.querySelector('.game');
const select = document.querySelector('#level');

const cells = document.getElementsByClassName('cell');
const cell = document.createElement('div');                // celle

const cellsNumber = [100, 81, 49];


btnStart.addEventListener('click', play)






/******************* FUNCTIONS ******************/
function play(){

    // reset();

    generateGrid(cellsNumber);

    for (let i = 0; i < cellsNumber[select.value]; i++) {
        cell.classList = 'square';
        
    }

}


function generateGrid(){
    //creo la griglia
    const grid = document.createElement('div');
    
    grid.className = 'grid';
    
    main.append(grid);
}