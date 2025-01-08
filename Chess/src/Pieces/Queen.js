import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Queen = (color) => {
    const whitepath = "/wq.png";
    const blackpath = "/bq.png";
    const imagePath = (color === 'white' ? whitepath : blackpath);
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