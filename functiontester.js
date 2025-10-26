
const boardState = []
function createBoard()
{
  let board = []
  for (let i = 0; i < 8; i++)
  {
      let row = []
      for (let j = 0; j < 8; j++)
          {
              if(i === 1 || i === 6)
              {
                  if(i === 1)
                  {
                      row.push('bp')
                  }
                  else
                  {
                      row.push('wp')
                  }
              }
              else if (i === 0 || i === 7)
              {
                  if(i === 0)
                  {
                      switch(j)
                      {
                          case 0:
                          case 7:
                              row.push('br')
                              break;
                          case 1:
                          case 6:
                              row.push('bn')
                              break;
                          case 2:
                          case 5:
                              row.push('bb')
                              break;
                          case 3:
                              row.push('bq')
                              break;
                          case 4:
                              row.push('bk')
                              break;
                      }
                  }
                      else if (i === 7)
                          {
                              switch(j)
                      {
                          case 0:
                          case 7:
                              row.push('wr')
                              break;
                          case 1:
                          case 6:
                              row.push('wn')
                              break;
                          case 2:
                          case 5:
                              row.push('wb')
                              break;
                          case 3:
                              row.push('wq')
                              break;
                          case 4:
                              row.push('wk')
                              break;
                      }

                  }
              }
              else{
              row.push('.')
              }
          }
          board.push(row)
  }
  return board
}
function printBoard(board) {
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
const board = createBoard()
printBoard(board)
//---------------------------------------------