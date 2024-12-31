import React from 'react';
import PropTypes from 'prop-types';
import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Rook from '../Pieces/Rook';
import Pawn from '../Pieces/Pawn';
import useDragAndDrop from '../Hooks/useDragnDrop';
import './Square.css';

const Square = ({ pieceType, position, color, movePiece }) => {
  const { color: pieceColor, piece } = pieceType || {};
  let Piece;
  const imgColor = pieceColor === 'w' ? 'white' : 'black';

  switch (piece) {
    case 'k':
      Piece = King(imgColor);
      break;
    case 'q':
      Piece = Queen(imgColor);
      break;
    case 'b':
      Piece = Bishop(imgColor);
      break;
    case 'r':
      Piece = Rook(imgColor);
      break;
    case 'n':
      Piece = Knight(imgColor);
      break;
    case 'p':
      Piece = Pawn(imgColor);
      break;
    default:
      Piece = null;
  }

  const { isDragging, isOver, drag, drop } = useDragAndDrop(Piece, position, movePiece);

  return (
    <div ref={drop} id={color} className={`Square ${color}`} style={{ backgroundColor: isOver ? 'yellow' : '' }}>
      {Piece && <img ref={drag} src={Piece.image} alt={`${Piece.color} ${Piece.type}`} style={{ opacity: isDragging ? 0.5 : 1 }} />}
    </div>
  );
};

Square.propTypes = {
  pieceType: PropTypes.shape({
    color: PropTypes.string,
    piece: PropTypes.string,
  }),
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
  movePiece: PropTypes.func.isRequired,
};

export default Square;