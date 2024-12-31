import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = (props) => {
  const [board, setBoard] = useState(createBoard());

  const movePiece = (start, end) => {
    const newBoard = [...board];
    const piece = newBoard[start.x][start.y];
    newBoard[start.x][start.y] = { color: null, piece: null };
    newBoard[end.x][end.y] = piece;
    setBoard(newBoard);
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
  console.log(board);
  console.log(colorBoard);

  return (
    <div className="board">
    {board.map((row, i) => 
      row.map((pieceType, j) => (
        <Square
          key={`${i}-${j}`}
          pieceType={pieceType}
          position={{ x: j, y: i }} // Adjusted the mapping to align correctly
          color={colorBoard[i][j]} // Color remains consistent
          movePiece={movePiece}
        />
      ))
    )}
  </div>
  );
};

export default Board;