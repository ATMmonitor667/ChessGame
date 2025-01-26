export function movePawn(start, end, board) 
{
    let moveSet = new Set();
    //TODO: also implement a castling function, is castling possible? and a check function and a checkmate function
    function generatePawnMove()
    {
        let {row, col} = start;
        let directions = [[1,0], [2,0]]
        for (let [dx, dy] of directions)
        {
            let newRow = row + dx;
            let newCol = col + dy;
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8)
            {
                let newSquare = board[newRow][newCol];
                if (newSquare === null)
                {
                    moveSet.add(newSquare);
                }
                else
                {
                    if (newSquare.color !== start.color)
                    {
                        moveSet.add(newSquare);
                    }
                }
            }
        }
    }
    generatePawnMove(start, moveSet, board);
    if (moveSet.has(end)) {
        return true;
        }
    else {
        return false;
    }
}