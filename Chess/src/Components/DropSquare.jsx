// filepath: /C:/Users/ATM Rahat Hossain/Desktop/ChessGame/Chess/src/Components/DroppableSquare.jsx
import React from 'react';
import { useDrop } from 'react-dnd';
import Square from './Square';

const DroppableSquare = ({ pieceType, position, color, movePiece }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PIECE',
    drop: (item) => movePiece(item.position, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`Square ${color}`} style={{ backgroundColor: isOver ? 'yellow' : '' }}>
      <Square pieceType={pieceType} color={color} />
    </div>
  );
};

export default DroppableSquare;