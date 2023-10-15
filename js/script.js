const button = document.querySelector('.button');
const container = document.querySelector('.container');
let numberOfSides = 16;

button.addEventListener('click', () => {
    numberOfSides = prompt("Number of Squares per side?");
    
    document.querySelectorAll('.grid').forEach(element => element.remove());

    createGrid();
});

function createGrid() {
    for (let i = 0; i < numberOfSides; i++) {
        for (let j = 0; j < numberOfSides; j++) {
            const div = document.createElement('div');
            div.style.flex = `1 0 ${(500) / numberOfSides}px`;
            div.classList.add('grid');
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = 'black';
            })
    
            container.appendChild(div);
        }
    }
};

createGrid();