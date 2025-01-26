

export function changeBoard(start, end, board) {
    const newBoard = [...board];
    const piece = newBoard[start.x][start.y];
    newBoard[start.x][start.y] = { color: null, piece: null };
    newBoard[end.x][end.y] = piece;
    return newBoard;
}