import { moveQueen } from "../Utilities/moveQueen";

const Queen = (color) => {
    const imagePath = (color === 'white' ? '/assets/wq.png' : '/assets/bq.png');
    return {
        color: color,
        type: 'queen',
        image: imagePath,
        move: (start, end, board) => {
            return moveQueen(start, end, board);
        }
    };
};

export default Queen;