import { movePawn } from './movePawn';
import { moveRook } from './moveRook';
import { moveKnight } from './moveKnight';
import { moveBishop } from './moveBishop';
import { moveQueen } from './moveQueen';
import { moveKing } from './moveKing';

export function moveValidPiece(start, end, board) {
  const piece = board[start.x][start.y];
  const pieceName = piece.piece;

  function changeBoard() {
    const newBoard = [...board];
    const piece = newBoard[start.x][start.y];
    newBoard[start.x][start.y] = { color: null, piece: null };
    newBoard[end.x][end.y] = piece;
    return newBoard;
  }

  switch (pieceName) {
    case 'p':
      if (movePawn(start, end, board)) {
        console.log("hello this is where the pawn moves")
        return changeBoard();
      }
      break;
    case 'r':
      if (moveRook(start, end, board)) {
        return changeBoard();
      }
      break;
    case 'n':
      if (moveKnight(start, end, board)) {
        console.log("this is in the moveValidPiece.js");
        return changeBoard();
      }
      break;
    case 'b':
      if (moveBishop(start, end, board)) {
        return changeBoard();
      }
      break;
    case 'q':
      if (moveQueen(start, end, board)) {
        return changeBoard();
      }
      break;
    case 'k':
      if (moveKing(start, end, board)) {
        return changeBoard();
      }
      break;
    default:
      return false;
  }
  console.log("Invalid move");
  return false;
}