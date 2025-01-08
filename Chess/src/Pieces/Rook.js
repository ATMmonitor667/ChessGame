import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Rook = (color) => {
    const whitepath = "/wr.png";
    const blackpath = "/br.png";
    const imagePath = (color === 'white' ? whitepath : blackpath);
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