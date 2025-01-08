import { moveValidPiece } from '../utilities/moveValidPiece.js';
const Knight = (color) => {
    const whitepath = "/wn.png";
    const blackpath = "/bn.png";
    const imagePath = (color === 'white' ? whitepath : blackpath);
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