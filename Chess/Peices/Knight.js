import { moveKnight } from "../Utilities/moveKnight";

const Knight = (color) => {
    const imagePath = (color === 'white' ? '/assets/wn.png' : '/assets/bn.png');
    return {
        color: color,
        type: 'knight',
        image: imagePath,
        move: (start, end, board) => {
            return moveKnight(start, end, board);
        }
    };
};

export default Knight;