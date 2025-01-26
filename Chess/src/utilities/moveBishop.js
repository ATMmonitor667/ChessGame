export function moveBishop(start, end, board) {
    let moveSet = new Set();

    function generateBishopMoves(start, moveSet, board) {
        let { x, y } = start; // x = row, y = column
        console.log("Start square:", x, y);
        let directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            //console.log("newX:", newX, "newY:", newY);
            while (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                if (newSquare === null || newSquare.color !== board[x][y].color) {
                    console.log(`Bishop move to empty square: ${newX},${newY}`);

                    moveSet.add(`${newX},${newY}`);
                } 
                newX += dx;
                newY += dy;
                console.log("newX:", newX, "newY:", newY);
            }
        }
    }

    // Generate possible bishop moves
    generateBishopMoves(start, moveSet, board);

    // Log moveSet for debugging
    console.log("Generated moveSet:", moveSet);

    // Check if the target square is reachable
    if (moveSet.has(`${end.x},${end.y}`)) {
        console.log("Bishop can move to the end square:", end);
        return true;
    } else {
        console.log("Bishop cannot move to the end square:", end);
        return false;
    }
}