// filepath: /C:/Users/ATM Rahat Hossain/Desktop/ChessGame/Chess/src/Components/DraggablePiece.jsx
import React from 'react';
import PropTypes from 'prop-types';
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
DraggablePiece.propTypes = {
  piece: PropTypes.shape({
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  position: PropTypes.string.isRequired,
};

export default DraggablePiece;
