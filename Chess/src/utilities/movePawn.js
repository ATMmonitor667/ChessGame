export function movePawn(start, end, board) {
    let moveSet = new Set();

    function generatePawnMoves(start, moveSet, board) {
        let { x, y } = start; // x = row, y = column
        let piece = board[x][y];
        let direction = piece.color === 'w' ? -1 : 1; // White moves up (-1), Black moves down (+1)
        let startRow = piece.color === 'w' ? 6 : 1; // Starting row for white and black pawns

        // Single move forward
        
        // Double move forward from starting position
        
        // Capture moves (diagonal movement to capture opponent pieces)
        let captureMoves = [
            [direction, 1], // Diagonal right
            [direction, 0] // Diagonal left
        ];
        if(piece.color === 'w'){
        for (let [dx, dy] of captureMoves) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                console.log("firstSquare", newX, newY)
                if (newSquare !== null && newSquare.color !== piece.color) {
                    if (x === startRow ) {
                    moveSet.add(`${newX-1},${newY-1}`)
                    moveSet.add(`${newX},${newY}`)
                    //console.log("This is why it moves Twice",`${newX-1},${newY-1}`)
                    }
                    else
                    {
                        moveSet.add(`${newX},${newY-1}`);
                    };
                }
            }
        }
    }
    else{
        for (let [dx, dy] of captureMoves) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                let newSquare = board[newX][newY];
                if (newSquare !== null && newSquare.color !== piece.color) {
                    if (x === startRow ) {
                    moveSet.add(`${newX+1},${newY+1}`)
                    }
                    else
                    {
                        moveSet.add(`${newX},${newY-1}`);
                    };
                }
            }
        }

    }
    }

    // Generate possible pawn moves
    generatePawnMoves(start, moveSet, board);

    // Log moveSet for debugging
    console.log("Generated moveSet:", moveSet);

    // Check if the target square is reachable
    if (moveSet.has(`${end.x},${end.y}`)) {
        console.log("Pawn can move to the end square:", end);
        return true;
    } else {
        console.log("Pawn cannot move to the end square:", end);
        return false;
    }
}