export function movePawn(start, end, board) {
    let moveSet = new Set();

    function generatePawnMoves(start, moveSet, board) {
        let { x, y } = start;
        let piece = board[x][y];
        let direction = piece.color === 'w' ? -1 : 1;
        let startRow = piece.color === 'w' ? 6 : 1;

        let newX = x + direction;
        if (newX >= 0 && newX < 8) {
            if (board[newX][y] === null || (board[newX][y].color === null && board[newX][y].piece === null)) {
                moveSet.add(`${newX},${y}`);

                if (x === startRow) {
                    let doubleX = x + (2 * direction);
                    if (doubleX >= 0 && doubleX < 8) {
                        if (board[doubleX][y] === null || (board[doubleX][y].color === null && board[doubleX][y].piece === null)) {
                            moveSet.add(`${doubleX},${y}`);
                        }
                    }
                }
            }
        }

        let captureMoves = [
            [direction, -1],
            [direction, 1]
        ];

        for (let [dx, dy] of captureMoves) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                if (newSquare && newSquare.color !== null && newSquare.color !== piece.color) {
                    moveSet.add(`${newX},${newY}`);
                }
            }
        }
    }

    generatePawnMoves(start, moveSet, board);

    if (moveSet.has(`${end.x},${end.y}`)) {
        return true;
    } else {
        return false;
    }
}