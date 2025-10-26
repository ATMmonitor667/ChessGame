export function moveKnight(start, end, board) {
    let moveSet = new Set();
    console.log("End square:", end);
    function generateKnightMoves(start, moveSet, board) {
        let { x, y } = start; // start should have {x, y} format
        let directions = [
            [1, 2], [1, -2], [-1, 2], [-1, -2],
            [2, 1], [2, -1], [-2, 1], [-2, -1]
        ];

        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;

            // Ensure move is within bounds of the board
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];

                // Check if the square is empty or has an opponent's piece
                if (newSquare === null || newSquare.color !== board[x][y].color) {
                    moveSet.add(`${newX},${newY}`); // Use string representation for the move
                }
            }
        }
    }

    // Generate possible knight moves
    generateKnightMoves(start, moveSet, board);

    // Log moveSet for debugging
    console.log("Generated moveSet:", moveSet);

    // Check if the target square is reachable
    if (moveSet.has(`${end.x},${end.y}`)) {
        console.log("Knight can move to the end square:", end);
        return true;
    } else {
        console.log("Knight cannot move to the end square:", end);
        return false;
    }
}