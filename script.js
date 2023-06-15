const grid = document.querySelector('.grid')
const button = document.getElementById('resetButton')




function createGrid() {

    
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('grid')
        div.classList.add('cell')
        grid.appendChild(div)
        div.addEventListener("mouseover", function(event){event.target.style.backgroundColor = 'black'})
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }

    createGrid()
}


button.addEventListener("click", clearGrid);















createGrid()