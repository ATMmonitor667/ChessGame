// filepath: /C:/Users/ATM Rahat Hossain/Desktop/ChessGame/Chess/src/Components/DroppableSquare.jsx
import React from 'react';
import PropTypes from 'prop-types';
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
DroppableSquare.propTypes = {
  pieceType: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  movePiece: PropTypes.func.isRequired,
};

export default DroppableSquare;
