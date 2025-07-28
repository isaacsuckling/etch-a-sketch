const container = document.querySelector('.container');
const promtButton = document.querySelector('.promt-button');


function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;
    
    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'red';
        });

        container.appendChild(square);
    }

}


promtButton.addEventListener('click', () => {
    let size = prompt('How many squares per side? (max 100)');
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100.')
        return;
    }

    createGrid(size);
});


// Default Grid
createGrid(16);