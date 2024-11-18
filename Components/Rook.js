import Board from "./Board.js";
import Movement from "./Movement.js";
export default function Rook() {
    const Rook = ['R','r']
    const board = Board()
    const movement = Movement()
    //---------------------Finding the possible moves of Rook---------------------
    function RookMoves(row, col, move, board) {
        let seen = new Set();
        const values = Movement().Cross(row, col, move, board, seen);
        return values;
    }
    //---------------------Checking if the move is valid---------------------
    
        function isvalidMove(currentx, currenty, newx, newy, board) {

            if (newx < 0 || newx >= 8 || newy < 0 || newy >= 8) {
                return false;
            }
            let values = RookMoves(currentx, currenty, board);
        
            if([newx, newy] in values)
            {
                return true;
            }
            return false;
        }
    //---------------------Movement of Rook in the board position---------------------
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
//----------------------------------------------
   return  {    RookMoves, isvalidMove, move}


}