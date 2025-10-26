export function moveQueen(start, end, board) {
    let moveSet = new Set();

    function generateQueenMoves(start, moveSet, board) {
        let { x, y } = start;
        let piece = board[x][y];
        let directions = [
            [1, 0], [-1, 0], [0, 1], [0, -1],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            while (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                if (newSquare === null || (newSquare.color === null && newSquare.piece === null)) {
                    moveSet.add(`${newX},${newY}`);
                } else if (newSquare.color !== piece.color) {
                    moveSet.add(`${newX},${newY}`);
                    break;
                } else {
                    break;
                }
                newX += dx;
                newY += dy;
            }
        }
    }

    generateQueenMoves(start, moveSet, board);

    if (moveSet.has(`${end.x},${end.y}`)) {
        return true;
    } else {
        return false;
    }
}