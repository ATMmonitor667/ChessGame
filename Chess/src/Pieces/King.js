import { moveValidPiece } from '../utilities/moveValidPiece.js';

const King = (color) => {
    const whitepath = "/wk.png";
    const blackpath = "/bk.png";
    const imagePath = (color === 'white' ? whitepath : blackpath);
    return {
        color: color,
        type: 'king',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default King;