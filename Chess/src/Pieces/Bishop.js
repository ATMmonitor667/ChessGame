import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Bishop = (color) => {
    const whitepath = "/wb.png";
    const blackpath = "/bb.png";
    const imagePath = (color === 'white' ? whitepath : blackpath);
    return {
        color: color,
        type: 'bishop',
        image: imagePath,
        move: (start, end, board) => {
            return moveValidPiece(start, end, board);
        }
    };
};

export default Bishop;