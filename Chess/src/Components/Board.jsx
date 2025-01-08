import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

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

  const handleClick = (squareInfo) => {
    console.log(squareInfo);
    setNumClicks(numClicks + 1);

    if (numClicks === 0) {
      setSelectedPosition(squareInfo.position);
      setMoveString(`${squareInfo.position.x}${squareInfo.position.y}`);
    } else if (numClicks === 1) {
      movePiece(selectedPosition, squareInfo.position);
      setMoveString(`${moveString} ${squareInfo.position.x}${squareInfo.position.y}`);
      setNumClicks(0);
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