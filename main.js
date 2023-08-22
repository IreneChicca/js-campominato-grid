// RECUPERO ELEMENTI DI INTERESSE E LI INSERISCO ALL'INTERNO DI VARIABILI

const cellContainer = document.getElementById('cell-container');


// CREO LA CELLA

const cell = document.createElement('li');

// scrivo all'interno della cella
cell.innerText = '1';

// assegno classe alla cella così da poter modificare lo stile della cella in css
cell.classList.add('cell');

// INSERISCO/APPENDO LA CELLA ALL'INTERNO DELLA PAGINA

cellContainer.append(cell);