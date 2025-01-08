import { moveValidPiece } from '../utilities/moveValidPiece.js';
import pieceImages from '../peicesimages.js';
const Rook = (color) => {
    const white = pieceImages.whiteRook;
    const black = pieceImages.blackRook;

    const imagePath = (color === 'white' ? white : black);
    return {
        color: color,
        type: 'rook',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default Rook;