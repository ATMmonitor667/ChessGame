import { movePawn } from './movePawn';
import { moveRook } from './moveRook';
import { moveKnight } from './moveKnight';
import { moveBishop } from './moveBishop';
import { moveQueen } from './moveQueen';
import { moveKing } from './moveKing';


export function moveValidPiece(start, end, board) {
    const piece = board[start[0]][start[1]];
    const pieceName = piece[1]

    function changeBoard() {
        let newBoard = board;
        let piece = newBoard[start[0]][start[1]];
        newBoard[start[0]][start[1]] = '.';
        newBoard[end[0]][end[1]] = piece;
        return newBoard;
    }
    switch (pieceName) {
        case "p":
            if (movePawn(start, end, board))
            {
                return changeBoard();
            }
            break;
        case "r":
            if (moveRook(start, end, board))
                {
                    return changeBoard();
                }
                break;
        case "n":
            if (moveKnight(start, end, board))
                {
                    return changeBoard();
                }
                break;
        case "b":
            if (moveBishop(start, end, board))
                {
                    return changeBoard();
                }
                break;
        case "q":
            if (moveQueen(start, end, board))
                {
                    return changeBoard();
                }
                break;
        case "k":
            if (moveKing(start, end, board))
                {
                    return changeBoard();
                }
                break;
        default:
            return;
    }
   
}