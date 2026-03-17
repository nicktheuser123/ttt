
const gameboard = (()=>{

    // let board =  [[],[],[]] ;
        let board =  [[[],[],[]],[[],[],[]],[[],[],[]]] ;

    const getBoard = () => board;
    
    const clearBoard = (board) => {
        board = [[],[],[]];
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

    

        console.log("checkWin", board);
    }

    const turn = function (player, positionX, positionY, board){
        board[positionY][positionX].push(player.symbol);        

        console.log("Turn", board);
    }

    return {start, turn, checkWin}
}


const p1 = player("Ronny", "X");

const p2 = player("Yotty", "O");

const game1 = game(p1,p2);
game1.start();
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