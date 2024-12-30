import { moveKing } from "../utilies/moveKing"

const King = (color, move, board) =>
{
    const imagePath = (color === 'white' ? '/Chess/public/assets/wk.png' : '/Chess/public/assets/bk.png');
    const [start, end] = move;
    return {
        color: color,
        type: 'king',
          imagePath: imagePath,
        move: (start, end, board) => {
            return moveKing(start, end, board);
        }
    }

}
export default King;