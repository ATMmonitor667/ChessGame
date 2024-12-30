import { moveRook } from "../Utilities/moveRook";

const Pawn = (color) => {
    const imagePath = (color === 'white' ? '/assets/wp.png' : '/assets/bp.png');
    return {
        color: color,
        type: 'rook',
        image: imagePath,
        move: (start, end, board) => {
            return moveRook(start, end, board);
        }
    };
};

export default Rook;