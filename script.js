
const gameboard = (() => {
    let rows = 3;
    let columns = 3;
    let board = [] ;
    
    const setBoard = (board) => {

        for (let x = 0; x < rows; x++){
            board.push([]);
            for(let y = 0; y < columns; y++){
                board[x].push([])
            }        
        }
    }
    
    const getBoard = () => board;
    
    const clearBoard = (board) => {
        // console.log("IN Clear Board p1 ", board );
        board.length = 0;
        // console.log("IN Clear Board p2", board);

        setBoard(board);
        // console.log("IN Clear Board p3", board)
    }

    return { getBoard, clearBoard, setBoard}

})();

const player = function (name, symbol) {
    let score = 0;    
    
    const getScore = () => score;
    
    const resetScore = (score) => {         
        score = 0;
    }


    const incrementScore = (score) => {         
        console.log ("Inside Score increment",score);
        score++

        if(score === 3) {
            console.log ("Game Complete")
            resetScore(score);
        }
    }

    return {name, getScore, symbol, score, incrementScore, resetScore}
}



//Controls the turns, checks for wins etc

const gameController = function (player1, player2) {
    let board;

    let currentPlayer = player1;

    console.log("in gameController")
    const start = function (){        
        
        board = gameboard.getBoard()
        gameboard.setBoard(board)        
        gameboard.clearBoard(board);
        
        return board;
    }

    const switchTurns = function (currentPlayer){
        if(currentPlayer.symbol==="X") {
             
        } else {

        }

    }

    const checkWin = function (board,player){
        let tie = true;
        console.log("Inside checkWin", board);
        
         if (checkRow("X", board) || checkCol("X", board) || checkDiagonal("X", board)) player.incrementScore(player.getScore())
         if (checkRow("O", board) || checkCol("O", board) || checkDiagonal("O", board)) player.incrementScore(player.getScore())
         
         for (let x = 0; x < 3; x++){            
            for(let y = 0; y < 3; y++){
                if (board[x][y].length === 0) {
                    tie = false
                }                
            }        
        }

        if(tie) console.log("TIE");

    }

    const checkRow = function (symbol,board) {
        let win = false;        

        for (const row of board) {
            let i = 0; //for row check
           
            // console.log("IN F1 - ITEM", row);
            for (const item of row) {
            //  console.log("IN F2 - ITEM", item);
                 if (item[0] === symbol) i++;
                           
            }
            if (i === 3){                
                win = true;
                console.log("YOU WON")
                break;
            }                 

        };

    };

    const checkCol = function (symbol,board) {
        let win = false;
        for (let x = 0; x < 3; x++ ) {
            let i = 0;
            
            for (let y=0; y<3; y++) {
            //  console.log(`BOARD value ${board[y][x]}, X = ${x}, Y = ${y}`)
                if (board[y][x][0] === symbol) {
                i++ ;
            //  console.log("I in CC", i)
                  
             }
            }
            if (i===3){
                win = true
                console.log(`YOU WON!!!!!!!!! ${symbol}`);
                return win;
                // break                          
            }

        }

        
    };

    const checkDiagonal = function (symbol, board) {
        let win = false;
        let i = 0;
        //simplified hardcoded check
        //check diagonal top left to bot right

        for(x=0; x<3; x++){
            if (board[x][x][0] === symbol) i++;                                    
        }
        
        if (i===3){
            console.log(`YOU WON!!!!!!!!! ${symbol}`);
            return true                                                          
        }
        
        // reset 
        i=0;

        //check diagonal bot left to top right
        let y = 2;
        for(x=0; x<3; x++){
            if (board[x][y][0] === symbol) i++;                                    
            y--
        }
            
        if (i===3){
              console.log(`YOU WON!!!!!!!!! ${symbol}`);
              return true                                          
            }                               
        
    };

    const turn = function (player, positionX, positionY, board){
        console.log("PLAYER",positionX)
        board[positionY][positionX].push(player.symbol);        
        //how do I get the board?
        console.log("Turn", board);
        checkWin(board,player);
    }

    return {start, turn, checkWin}
}

const screenController = (() => {
    
    const p1 = player("Ronny", "X");
    const p2 = player("Yotty", "O");

    const currentPlayer = p1;
    const game1 = gameController(p1,p2);
    const currentBoard = game1.start();
    
    const getPlayer = (symbol) => {



    }

    const renderScreen = (board) => {

        const boardElement = document.getElementsByClassName("board-container")[0];
        // console.log(boardElement)
        for (let x = 0; x < 3; x++){
            const rowDiv = document.createElement('div');
            rowDiv.classList.add(`row-${x}`);
            rowDiv.setAttribute("data-id",x);            

            for(let y = 0; y < 3; y++){
                createButton(x, y ," ", rowDiv);                
            }        
            // console.log()
            boardElement.appendChild(rowDiv)
        }

    };

    renderScreen(currentBoard);

    function createButton(x,y, text, parent){
        // console.log("increate!")
        const button = document.createElement('button');
        button.classList.add(`cell`);
        // console.log("parent",parent)
        button.setAttribute("data-x",x);
        button.setAttribute("data-y",y);
        if(text) button.textContent = text; 
        if(parent) parent.appendChild(button);
        button.addEventListener('click', (e)=>{
        game1.turn(p1, Number(e.target.dataset.x) , Number(e.target.dataset.y), currentBoard);

        })
        return button;
    }   


})()




//diagonal top left to bot right
// game1.turn(p1, 0, 0, currentBoard); // X
// game1.turn(p2, 1, 1, currentBoard); // O
// game1.turn(p1, 2, 0, currentBoard); // X
// game1.turn(p2, 1, 0, currentBoard); // O
// game1.turn(p1, 1, 2, currentBoard); // X
// game1.turn(p2, 0, 1, currentBoard); // O
// game1.turn(p1, 2, 1, currentBoard); // X
// game1.turn(p2, 2, 2, currentBoard); // O
// game1.turn(p1, 0, 2, currentBoard); // X

// const game2 = gameController(p1,p2);
//  currentBoard = game2.start();
 
//diagonal bot left to top right
// game1.turn(p1, 0, 1, currentBoard);
// game1.turn(p2, 2, 0, currentBoard);

// game1.turn(p1, 2, 0, currentBoard);
// game1.turn(p2, 1, 1, currentBoard);

// game1.turn(p1, 2, 1, currentBoard);
// game1.turn(p2, 0, 2, currentBoard);


// console.log(board);

/*
Todo 
add switch round logic, to change the players and then simplify check win logic

dynamically generate UI with coordinate ids
-event listeners on each button
Then when button is pressed, extract data attributes containing coordinates
Then call the turn function

nice to have

*/