import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Queen = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wq.png' : '/Chess/public/assets/bq.png');
    return {
        color: color,
        type: 'queen',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default Queen;