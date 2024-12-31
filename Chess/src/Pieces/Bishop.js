import { moveValidPiece } from '../utilities/moveValidPiece.js';

const Bishop = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wb.png' : '/Chess/public/assets/bb.png');
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