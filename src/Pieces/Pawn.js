import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Pawn = (color) => {
    const imagePath = (color === 'white' ? '/wp.png' : '/bp.png');
    return {
        color: color,
        type: 'pawn',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default Pawn;