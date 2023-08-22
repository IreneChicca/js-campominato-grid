// RECUPERO ELEMENTI DI INTERESSE E LI INSERISCO ALL'INTERNO DI VARIABILI

const cellContainer = document.getElementById('cell-container');

// definisco il numero di celle da stampare
const cellTotal = 10 * 10;

// CREO LA CELLA

// E CICLO SULLA CELLA TANTE VOLTE QUANTE CELLE VOGLIO STAMPARE
for (let i = 1; i <= cellTotal; i++) {

    generateCell(cellContainer, i);

}


// CREO UNA FUNZIONE E LA COLLEGO AL CICLO CHE GENERA LE CELLE

function generateCell(container, i) {

    const cell = document.createElement('li');

    // scrivo all'interno della cella
    cell.innerText = i;

    // assegno classe alla cella così da poter modificare lo stile della cella in css
    cell.classList.add('cell');

    // INSERISCO/APPENDO LA CELLA ALL'INTERNO DELLA PAGINA

    container.append(cell);



}