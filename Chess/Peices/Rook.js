import { moveRook } from "../Utilities/moveRook";

const Rook = (color) => {
    const imagePath = (color === 'white' ? '/assets/wr.png' : '/assets/br.png');
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