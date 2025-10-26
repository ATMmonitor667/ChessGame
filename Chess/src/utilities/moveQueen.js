export function moveQueen(start, end, board) {
    let moveSet = new Set();

    function generateQueenMoves(start, moveSet, board) {
        let { x, y } = start; // x = row, y = column
        let directions = [
            [1, 0], [-1, 0], [0, 1], [0, -1], // Rook-like moves
            [1, 1], [1, -1], [-1, 1], [-1, -1] // Bishop-like moves
        ];

        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            while (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                if (newSquare === null || newSquare.color !== board[x][y].color) {
                    console.log(`Queen move to empty square: ${newX},${newY}`);
                    moveSet.add(`${newX},${newY}`);
                } else {
                    break;
                }
                newX += dx;
                newY += dy;
            }
        }
    }

    // Generate possible queen moves
    generateQueenMoves(start, moveSet, board);

    // Log moveSet for debugging
    console.log("Generated moveSet:", moveSet);

    // Check if the target square is reachable
    if (moveSet.has(`${end.x},${end.y}`)) {
        console.log("Queen can move to the end square:", end);
        return true;
    } else {
        console.log("Queen cannot move to the end square:", end);
        return false;
    }
}