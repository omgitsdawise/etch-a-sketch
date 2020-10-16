
// get elements 
const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');
const setBtn = document.querySelector('#set');
const gridSize = document.querySelector('#grid-size');
const randomColors = document.querySelector('#random-colors');
const color = document.querySelector('#grid-color');
const randomBtn = document.querySelector('#random-fill');




// creates a div and adds a class to it
function createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;

}


// used for random color generation
const randomInteger = () => Math.ceil(Math.random() * 100);
const randomHue = () => Math.ceil(Math.random() * 360);


// decides what to do when hover
function hoverBox() {
    if (randomColors.checked) {
        this.style.backgroundColor = `hsl(${randomHue()}, ${randomInteger()}%, ${randomInteger()}%)`;
    } else
        this.style.backgroundColor = color.value;

}

// contains all boxes
const grid = [];

// creates a grid and adds it to container
function initGrid(size) {
    grid.length = 0; // clear array
    container.innerHTML = ''; // clear container contents

    // create rows
    for (let i = 0; i < size; i++) {
        const row = createDiv('grid-row');

        // create boxes and add them to each row
        for (let j = 0; j < size; j++) {
            const item = createDiv('box-item');
            grid.push(item)
            row.appendChild(item);
        }
        // add row to container
        container.appendChild(row);
    }

    grid.forEach(box => box.addEventListener('mouseover', hoverBox));
}


// resets grid
clearBtn.addEventListener('click', () => {
    grid.forEach(box => box.style.backgroundColor = document.body.style.backgroundColor);
});

// reinitialize grid with new size
setBtn.addEventListener('click', () => {
    const size = gridSize.value;
    if (size <= 1 || size > 64) return;
    initGrid(size)
});

// fills grid with random colors
randomBtn.addEventListener('click', () => {
    grid.forEach(box => box.style.backgroundColor = `hsl(${randomHue()}, ${randomInteger()}%, ${randomInteger()}%)`);
});


initGrid(4);