// RECUPERO ELEMENTI DI INTERESSE E LI INSERISCO ALL'INTERNO DI VARIABILI

const cellContainer = document.getElementById('cell-container');
const btnGreed = document.getElementById('grid-btn');

// definisco il numero di celle da stampare
const cellTotal = 10 * 10;

// RICHIAMO LA FUNZIONE CHE GENERA LA GRIGLIA ON LOAD

generateGrid(cellTotal, cellContainer);

// E CICLO SULLA CELLA TANTE VOLTE QUANTE CELLE VOGLIO STAMPARE


// collego al bottone la creazione della griglia

btnGreed.addEventListener('click', function () {
    generateGrid(cellTotal, cellContainer)

})


// CREO UNA FUNZIONE E LA COLLEGO AL CICLO CHE GENERA LE CELLE

function generateCell(container, i) {
    // CREO LA CELLA
    const cell = document.createElement('li');

    // scrivo all'interno della cella
    cell.innerText = i;

    // assegno classe alla cella così da poter modificare lo stile della cella in css
    cell.classList.add('cell');

    // INSERISCO/APPENDO LA CELLA ALL'INTERNO DELLA PAGINA

    container.append(cell);



}

// GENERIAMO UNA NUOVA FUNZIONE CHE RICHIEDA COME PARAMETRI IL NUMERO DI CELLE E IL CONTAINER PER RICHIAMARLA AL CLICK DEL BOTTONE

function generateGrid(cellsNum, container) {

    container.innerHTML = ''; // svuoto la griglia ugni volta che genero una nuova griglia

    for (let i = 1; i <= cellsNum; i++) {

        generateCell(container, i);

    }

}