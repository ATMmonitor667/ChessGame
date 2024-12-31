import { moveValidPiece } from '../utilities/moveValidPiece.js';
const Knight = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wn.png' : '/Chess/public/assets/bn.png');
    return {
        color: color,
        type: 'knight',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default Knight;