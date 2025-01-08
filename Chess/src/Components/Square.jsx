import React from 'react';
import PropTypes from 'prop-types';
import pieceImages from '../peicesimages';
import './Square.css';

const Square = ({ pieceType, position, color, movePiece ,onClick}) => {
  const { color: pieceColor, piece } = pieceType || {};
  let pieceImage = null;
 
  if (piece && pieceColor) {
    switch (piece) {
      case 'k':
        pieceImage = pieceColor === 'w' ? pieceImages.whiteKing : pieceImages.blackKing;
        break;
      case 'q':
        pieceImage = pieceColor === 'w' ? pieceImages.whiteQueen : pieceImages.blackQueen;
        break;
      case 'b':
        pieceImage = pieceColor === 'w' ? pieceImages.whiteBishop : pieceImages.blackBishop;
        break;
      case 'r':
        pieceImage = pieceColor === 'w' ? pieceImages.whiteRook : pieceImages.blackRook;
        break;
      case 'n':
        pieceImage = pieceColor === 'w' ? pieceImages.whiteKnight : pieceImages.blackKnight;
        break;
      case 'p':
        pieceImage = pieceColor === 'w' ? pieceImages.whitePawn : pieceImages.blackPawn;
        break;
      default:
        pieceImage = null;
    }
  }


  return (
    <div id={color} className={`Square ${color}`} onClick = {onClick}>
      {pieceImage && <img src={pieceImage} alt={`${pieceColor} ${piece}`} />}
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