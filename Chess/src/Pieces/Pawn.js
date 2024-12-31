import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Pawn = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wp.png' : '/Chess/public/assets/bp.png');
    return {
        color: color,
        type: 'rook',
        image: imagePath,
        move: (start, end, board) => {
          return moveValidPiece(start, end, board);
        }
    };
};

export default Pawn;