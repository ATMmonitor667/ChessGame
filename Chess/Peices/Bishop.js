import { moveBishop } from "../Utilities/moveBishop";

const Bishop = (color) => {
    const imagePath = (color === 'white' ? '/assets/wb.png' : '/assets/bb.png');
    return {
        color: color,
        type: 'bishop',
        image: imagePath,
        move: (start, end, board) => {
            return moveBishop(start, end, board);
        }
    };
};

export default Bishop;