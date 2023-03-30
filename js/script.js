/* Cose da fare
1. Creare la griglia
2. Creare le celle
3. Con un ciclo for assegnare a ogni cella un numero progressivo a seconda della difficoltà scelta



*/





// Variabili
const btnStart  = document.querySelector('.btn-start');
const main = document.querySelector('.game');
const select = document.querySelector('#level');

const cells = document.getElementsByClassName('square');
const cell = document.createElement('div');                // celle

const arrDifficulties = [100, 81, 49];


btnStart.addEventListener('click', play)






/******************* FUNCTIONS ******************/
function play(){

    // reset();

    const cellNumbers = arrDifficulties[select.value];

    generateGrid(cellNumbers);
    const grid = document.createElement('div');
    grid.className = 'grid';
    

    for (let i = 1; i <= cellNumbers; i++) {
        const cell = generateCells(cellNumbers, i);
        grid.append(cell);
    }
    
    main.append(grid);
}


function generateGrid(cellsNumber){
    //creo la griglia
    const grid = document.createElement('div');
    
    grid.className = 'grid';
    
}

function generateCells(cellNumbers, id){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add('square' + cellNumbers);
    cell.cellId = id;
    cell.innerHTML = `<span>${id}</span>`;
    cell.addEventListener('click', clickCells)
    console.log(cell);
    return cell;
}

function clickCells(){



    this.classList.add('clicked');
}