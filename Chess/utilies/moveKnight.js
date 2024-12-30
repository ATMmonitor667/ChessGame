export function moveBishop(start, end, board) {
    let moveSet = Set();
    function generateKnightMoves(start, moveSet, board) {
        let {row, col} = start;
        let directions = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                let newSquare = board[newRow][newCol];
                if (newSquare === null) {
                    moveSet.add(newSquare);
                } else {
                    if (newSquare.color !== start.color) {
                        moveSet.add(newSquare);
                    }
                }
            }
        }

}
    generateKnightMoves(start, moveSet, board);
    if (moveSet.has(end)) {
        return true;
    }else {
        return false;
    }
}