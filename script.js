//game starts with player 1 picking for x and player 2 picking for circle
//players will continue to place their markers until a line is completed or the board is filled and a tie happens
//if line complete, display winning message for either player one or player two
//if tie happens, display tie message

//objects: Gameboard(module), player(factory)

//Gameboard
    //need to set up click events for each cell
        //when each cell is clicked, place a marker
            //add class x to cell for x 
            //add class o to cell for o
        //check for win
        //check for draw
        //switch turn

const gameBoard = (() => {
    const cellElements = document.querySelectorAll('[data-cell]');
    const X_CLASS = 'x';
    const O_CLASS = 'o';
    const board = document.getElementById('board');

    cellElements.forEach(cell => {
        cell.addEventListener('click', (e) => {
            console.log('clicked');
        }, { once:true })
    })
    
})();