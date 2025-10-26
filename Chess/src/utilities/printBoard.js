export function printBoard(board) {
    for (let i = 0; i < 8; i++) {
        if(i == 0 || i == 1 || i == 6 || i == 7)
        {
            console.log(board[i].join(' ')); // Corrected join usage
        }
       else{
        console.log(board[i].join('  ')); // Corrected join usage
       }
    }
}