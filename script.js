
const gameboard = (()=>{

    // let board =  [[],[],[]] ;
        let board =  [[[],[],[]],[[],[],[]],[[],[],[]]] ;

    const getBoard = () => board;
    
    const clearBoard = (board) => {
        // board = [[],[],[]];
        board =  [[[],[],[]],[[],[],[]],[[],[],[]]] ;
    }

    return {board, getBoard, clearBoard}

})();

const player = function (name, symbol) {
    const score = 0;
    
    return {name, score, symbol}
}

const game = function (player1, player2) {
    let board;
    console.log("in game")
    const start = function (){        
        board = gameboard.getBoard()
        
        gameboard.clearBoard(board);
        console.log("in start",board)
        return board;
    }

    const checkWin = function (board){
        let count = 0;
        console.log("Inside checkWin", board);
        
        checkRow("X", board);
        // checkRow("O", board);
        //check for x first then o?
        //check rows first
        //check collumns        

    }

    const checkRow = function (symbol,board) {
        let win = false;        

        for (const row of board) {
            let i = 0; 
            console.log("IN F1 - ITEM", row);
            for (const item of row) {
            console.log("IN F2 - ITEM", item);
                if (item[0] = symbol) i++;
            
            }
            if (i === 3){                
                win = true;
                console.log("YOU WON")
                break;
            } 
                

        };

    };

    const checkCol = function (symbol) {

        
    };

    const checkDiagonal = function (symbol) {

        
    };

    const turn = function (player, positionX, positionY, board){
        console.log("PLAYER",positionX)
        board[positionY][positionX].push(player.symbol);        
        //how do I get the board?
        console.log("Turn", board);
        checkWin(board);
    }

    return {start, turn, checkWin}
}


const p1 = player("Ronny", "X");

const p2 = player("Yotty", "O");

const game1 = game(p1,p2);
let currentBoard = game1.start();
game1.turn(p1, 0, 0, currentBoard);




// console.log(board);

/*
Todo 
gameboard as an array on GB object

players also on objects

game object to control the flow of the game

rules
1 no global code

Get it to work in console first
game end logic
3 in a rows and ties

Rest dom and ui related tasks 

*/