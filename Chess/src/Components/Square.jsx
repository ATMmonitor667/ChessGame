import React from 'react';
import PropTypes from 'prop-types';
import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Rook from '../Pieces/Rook';
import Pawn from '../Pieces/Pawn';
import './Square.css';

const Square = ({ pieceType, position, color, onClick }) => {
  const { color: pieceColor, piece } = pieceType || {};
  let Piece = null;
  const imgColor = pieceColor === 'w' ? 'white' : 'black';
  const img = pieceColor;
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
return (
    <div className={`Square ${color}`} onClick={onClick}  id={color} >
      {Piece && <img src={Piece.image} alt={`${pieceColor} ${piece}`} />}
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
  onClick: PropTypes.func.isRequired,
};

export default Square;