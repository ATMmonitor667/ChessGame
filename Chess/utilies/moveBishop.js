export function moveBishop(start, end, board) {
    let moveSet = Set();
    function generateBishopMoves(start, moveSet, board) {
        let {row, col} = start;
        let directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;
            while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                let newSquare = board[newRow][newCol];
                if (newSquare === null) {
                    moveSet.add(newSquare);
                } else {
                    if (newSquare.color !== start.color) {
                        moveSet.add(newSquare);
                    }
                    break;
                }
                newRow += dx;
                newCol += dy;
            } // possible mistake and thing to implement in here is that if the king is the opposite
            // color of the bishop, then the bishop should be able to move to the king's square which is against the rule
            // of chess
            }
        }
        generateBishopMoves(start, moveSet, board);
        if (moveSet.has(end)) {
            return true;
        }else {
            return false;
        }

}