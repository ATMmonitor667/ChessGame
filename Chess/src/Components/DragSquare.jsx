// filepath: /C:/Users/ATM Rahat Hossain/Desktop/ChessGame/Chess/src/Components/DraggablePiece.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggablePiece = ({ piece, position }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PIECE',
    item: { piece, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={piece.image}
      alt={`${piece.color} ${piece.type}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
};

export default DraggablePiece;