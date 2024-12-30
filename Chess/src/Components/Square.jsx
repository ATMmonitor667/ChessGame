import React from 'react';
import { Knight, King, Bishop, Rook, Queen, Pawn } from './';

const Square = ({ position }) => {
    const { color, piece } = position;
    let Piece;
    const imgColor = color === 'w' ? 'white' : 'black';

    switch (piece) {
        case 'k':
            Piece = new King(imgColor);
            break;
        case 'q':
            Piece = new Queen(imgColor);
            break;
        case 'b':
            Piece = new Bishop(imgColor);
            break;
        case 'r':
            Piece = new Rook(imgColor);
            break;
        case 'n':
            Piece = new Knight(imgColor);
            break;
        case 'p':
            Piece = new Pawn(imgColor);
            break;
        default:
            Piece = null;
    }

    return (
        <div id={imgColor} className='Square'>
            {Piece && <img src={Piece.image} alt={`${Piece.color} ${Piece.type}`} />}
        </div>
    );
};

export default Square;