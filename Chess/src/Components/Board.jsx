import React, { useState } from 'react';
import Square from './Square';
import './Board.css';
import { moveValidPiece } from '../utilities/moveValidPiece.js';
import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Rook from '../Pieces/Rook';
import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Pawn from '../Pieces/Pawn';

const Board = (props) => {
  const [board, setBoard] = useState(createBoard());
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [numClicks, setNumClicks] = useState(0);
  const [moveString, setMoveString] = useState('');

  const movePiece = (start, end) => {
    const newBoard = [...board];
    const piece = newBoard[start.x][start.y];
    newBoard[start.x][start.y] = { color: null, piece: null };
    newBoard[end.x][end.y] = piece;
    setBoard(newBoard);
  };
  const chessPostion = (x, y) => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
    const returnString = files[y] + String(ranks[x]);
    return returnString;
  };

  function handleClickLogics(squareInfo) {
    if (numClicks === 0) {
      setSelectedPosition(squareInfo.position);
      const string = chessPostion(squareInfo.position.x, squareInfo.position.y);
      console.log(squareInfo.position);
      setMoveString(`${squareInfo.position.x}${squareInfo.position.y}`);
    } else if (numClicks === 1) {
      movePiece(selectedPosition, squareInfo.position);
      setMoveString(`${moveString} ${squareInfo.position.x}${squareInfo.position.y}`);
      setNumClicks(0);
    }
  }

  const handleClick = (squareInfo) => {
    const value = squareInfo
    
    setNumClicks(numClicks + 1);
    handleClickLogics(squareInfo);

 
  };
  const getPieceObject = (color, pieceType) => {
    switch (pieceType) {
      case 'k':
        return King(color);
      case 'q':
        return Queen(color);
      case 'r':
        return Rook(color);
      case 'b':
        return Bishop(color);
      case 'n':
        return Knight(color);
      case 'p':
        return Pawn(color);
      default:
        return null;
    }
  };


  const boardMap = () => {
    return board.map((row, x) => {
      return row.map((piece, y) => {
        return (
          <Square
            key={`${x}-${y}`}
            pieceType={piece}
            position={{ x, y }}
            color={colorBoard[x][y]}
            onClick={() => handleClick({ pieceType: piece, position: { x, y }, color: colorBoard[x][y] })}
          />
        );
      });
    });
  };

  function createBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        if (i === 1) {
          row.push({ color: 'b', piece: 'p' }); // Black pawns
        } else if (i === 6) {
          row.push({ color: 'w', piece: 'p' }); // White pawns
        } else if (i === 0) {
          switch (j) {
            case 0:
            case 7:
              row.push({ color: 'b', piece: 'r' }); // Black rooks
              break;
            case 1:
            case 6:
              row.push({ color: 'b', piece: 'n' }); // Black knights
              break;
            case 2:
            case 5:
              row.push({ color: 'b', piece: 'b' }); // Black bishops
              break;
            case 3:
              row.push({ color: 'b', piece: 'q' }); // Black queen
              break;
            case 4:
              row.push({ color: 'b', piece: 'k' }); // Black king
              break;
            default:
              row.push({ color: null, piece: null });
          }
        } else if (i === 7) {
          switch (j) {
            case 0:
            case 7:
              row.push({ color: 'w', piece: 'r' }); // White rooks
              break;
            case 1:
            case 6:
              row.push({ color: 'w', piece: 'n' }); // White knights
              break;
            case 2:
            case 5:
              row.push({ color: 'w', piece: 'b' }); // White bishops
              break;
            case 3:
              row.push({ color: 'w', piece: 'q' }); // White queen
              break;
            case 4:
              row.push({ color: 'w', piece: 'k' }); // White king
              break;
            default:
              row.push({ color: null, piece: null });
          }
        } else {
          row.push({ color: null, piece: null });
        }
      }
      board.push(row);
    }
    return board;
  }

  function createColorBoard() {
    let colorBoard = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push('w'); // White square
        } else {
          row.push('b'); // Black square
        }
      }
      colorBoard.push(row);
    }
    return colorBoard;
  }

  const colorBoard = createColorBoard();
  

  return (
    <div className='board'>
      {boardMap()}
    </div>
  );
};

export default Board;