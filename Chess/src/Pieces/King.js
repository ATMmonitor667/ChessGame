import { moveKing } from '../utilities/moveKing.js';

const King = (color) => {
    const imagePath = (color === 'white' ? '/Chess/public/assets/wk.png' : '/Chess/public/assets/bk.png');
    return {
        color: color,
        type: 'king',
        image: imagePath,
        move: (start, end, board) => {
            return moveKing(start, end, board);
        }
    };
};

export default King;