
const gameboard = (()=>{

    let board =  [] ;
    
    const setBoard = (board) => {

        for (let x = 0; x<3; x++){
            board.push([]);
            for(let y = 0; y<3; y++){
                board[x].push([])
            }        
        }
    }
    setBoard(board);

        // let board =  [[[],[],[]],[[],[],[]],[[],[],[]]] ;

    const getBoard = () => board;
    
    const clearBoard = (board) => {
        // board = [[],[],[]];
        // board =  [[[],[],[]],[[],[],[]],[[],[],[]]] ;
        board = [];
        setBoard(board);
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
         checkRow("O", board);
         checkCol("O", board);
         checkCol("X", board);
         checkDiagonal("O", board);
         checkDiagonal("X", board);
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
                break                          
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
            return win = true                                                          
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
              return win = true                                          
            }                               
        
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

//diagonal top left to bot right
game1.turn(p1, 0, 1, currentBoard);
game1.turn(p2, 0, 0, currentBoard);

game1.turn(p1, 2, 0, currentBoard);
game1.turn(p2, 1, 1, currentBoard);

game1.turn(p1, 2, 1, currentBoard);
game1.turn(p2, 2, 2, currentBoard);

const game2 = game(p1,p2);
 currentBoard = game2.start();
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

done - gameboard as an array on G B object

done - players also on objects

done - game object to control the flow of the game

rules
1 no global code

Get it to work in console first
done - game end logic 
3 in a rows and ties

Rest dom and ui related tasks 

low prio 
- make the board using for loops not static array

*/