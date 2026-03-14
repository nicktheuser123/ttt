
const gameboard = (()=>{

    let board =  [[],[],[]]

    const getBoard = () => board;
    
    const clearBoard = (board) => {
        board = [[],[],[]];
    }

    return {board, getBoard, clearBoard}

})();

const player = function (name) {
    const score = 0;

    return {name, score}
}

const game = function (player1, player2) {
    let board;

    const start = function (){        
        board = gameboard.getBoard()
        gameboard.clearBoard(board);

        return board;
    }


    const turn = function (player, positionX, positionY, board){

        console.log(board);
    }

    return {start, turn}
}


const p1 = player("Ronny");

const p2 = player("Yotty");

const board = game.start(p1,p2)
console.log(board);

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