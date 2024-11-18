import Board from './Board.js'
import Movement from './Movement.js'
export default function Bishop() {

const bishop = ['B','b']
const board = Board().board;
const boardPosition = Board().boardPosition
//---------------------Movement of Bishop in the board position---------------------
const diction = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7
};
//---------------------Finding the possible moves of Bishop---------------------
function BishopMovement(row, col, board) {
    let seen = new Set();
    const values = Movement().Diagnol(row, col, board, seen);
    return values;
}
//---------------------Checking if the move is valid---------------------
function isvalidMove(currentx, currenty, newx, newy, board) {

    if (newx < 0 || newx >= 8 || newy < 0 || newy >= 8) {
        return false;
    }
    let values = BishopMovement(currentx, currenty, board);

    if([newx, newy] in values)
    {
        return true;
    }
    return false;
}
//---------------------Moving the Bishop in the board position---------------------
function move(move, board)
{

    let newx = diction[move[0]];
    let newy = Number(move[1])+1
    
    let currentx = indexAt(board, bishop)[0];
    let currenty = indexAt(board, bishop)[1];
    if (isvalidMove(currentx, currenty, newx, newy, board))
    {


        board[newx][newy] = board[currentx][currenty];
        board[currentx][currenty] = '.';
    }
}
//-----------------------------------
    return {BishopMovement, isvalidMove, move}
}
