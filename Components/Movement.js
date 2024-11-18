function Movement()
{
    // Movement logic here
    // Cross and Diagnol functions can be added here
    function Cross(row, col, board, seen) {
        
        const directions = [
            [1, 0],   // Down
            [-1, 0],  // Up
            [0, 1],   // Right
            [0, -1]   // Left
        ];
    
        for (let [dr, dc] of directions) {
            let r = row + dr;
            let c = col + dc;
            while (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
                if (board[r][c] === '.') {
                    seen.add(`${r},${c}`);
                } else {
                    seen.add(`${r},${c}`);
                    break;
                }
                r += dr;
                c += dc;
            }
        }
    
        return seen;
    }

    function Diagnol(row, col, board, seen) {
        const directions = [
            [1, 1],   // Bottom-right
            [-1, -1], // Top-left
            [-1, 1],  // Top-right
            [1, -1]   // Bottom-left
        ];
        for (let [dr, dc] of directions) {
            let r = row + dr;
            let c = col + dc;
            while (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
                if (board[r][c] === '.') {
                    seen.add([r, c]);
                } else {
                    seen.add([r, c]);
                    break;
                }
                r += dr;
                c += dc;
            }
        }
        return seen;
    }
    function Combination(row, col, board, seen)
    {
        seen = Cross(row, col, board, seen);
        second = Diagnol(row, col, board, seen);
        return seen.union(second);

    }
    return {Cross, Diagnol, Combination}

}