export default function Board() {
    const board = Array.from({ length: 8 }, () => Array(8).fill(('.')));
    
    function printBoard(board) {
        for (let i = 0; i < 8; i++) {
        console.log(board[i].join(''));
        }
    }

    const boardPosition = []
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const row = ['1', '2', '3', '4', '5', '6', '7', '8']
    
    //--------------------Creating the board position---------------------
    for(let i = row.length-1; i >= 0 ; i--)
        {
            let interrow = []
            for(let j = 0; j < col.length; j++)
            {
                interrow.push(col[i]+row[j])      
            }
            boardPosition.push(interrow)
        }
    //---------------------Printing the board position---------------------
    function printBoardState(boardPosition){
        let newBoard = []
        let interrow = []
    for(let i = row.length-1; i >= 0 ; i--)
    {
        interrow = boardPosition[i].join(' ')
        newBoard.push(interrow)
    }
    let printBoard = newBoard.join('\n')
    return printBoard
    }
    //---------------------Finding index of board position---------------------
    function indexAt(board, find) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === find) {
                    return [i, j];
                }
            }
        }
    }
    const boardContainer = [boardPosition, board]
    return {printBoard, boardContainer , printBoardState, indexAt}

}