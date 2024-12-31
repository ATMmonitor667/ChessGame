import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Rook = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wr.png' : '/Chess/public/assets/br.png');
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