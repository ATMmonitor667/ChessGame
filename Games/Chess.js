//Chess game logic
import Movement from "./Movement";
const gameMoves = [
    "e4", "d6", "d4", "Nf6", "Nc3", "g6", "Be3", "Bg7", "Qd2", "c6", "f3", "b5", "Nge2", "Nbd7", "Bh6", "Bxh6", "Qxh6", "Bb7", "a3", "e5", "O-O-O", "Qe7", 
    "Kb1", "a6", "Nc1", "O-O-O", "Nb3", "exd4", "Rxd4", "c5", "Rd1", "Nb6", "g3", "Kb8", "Na5", "Ba8", "Bh3", "Ka7", "Rhe1", "Qe5", "f4", "Qh5", "e5", "Nfd5", 
    "Nxd5", "Nxd5", "Bg2", "Ne3", "Rxe3", "Qxd1+", "Ka2", "d5", "exd6", "Bd5+", "c4", "Rhe8", "Re7+", "Kf6", "Ka6", "Bxc4+", "dxc4", "Rxd6", "d7", "Rd8", 
    "dxe8=Q+", "Qxe8", "Bxe8", "Rd1#", "c5", "dxc5", "Bxb5+", "Kxb5", "b3+", "Ka5", "d5", "Ra1", "dxc5+", "Ka4", "c5", "Ka3"
];
//---------------------------------------------------------------------------------------------------------------------------------------
//This is the implementation of the Chess Board
const boardPosition = []
const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const row = ['1', '2', '3', '4', '5', '6', '7', '8']
for(let i = row.length-1; i >= 0 ; i--)
{
    let interrow = []
    for(let j = 0; j < col.length; j++)
    {
        interrow.push(col[i]+row[j])
    }
    interrow = interrow.join(' ')
    boardPosition.push(interrow)
}
boardPosition.join('\n')
const pawn = 'P'
const rook = 'R'
const knight = 'N'
const bishop = 'B'
const queen = 'Q'
const king = 'K'
const bpawn = 'p'
const brook = 'r'
const bknight = 'n'
const bbishop = 'b'
const bqueen = 'q'
const bking = 'k'
const empty = '.'
const initialBoard = [
    [brook, bknight, bbishop, bqueen, bking, bbishop, bknight, brook],
    [bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn, bpawn],
    [empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty],
    [empty, empty, empty, empty, empty, empty, empty, empty],
    [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
    [rook, knight, bishop, queen, king, bishop, knight, rook]
];
const printBoard = (intiialBoard) => {
    let string = ''
    for(let i = 0; i < intiialBoard.length; i++)
    {
        let row = ''
        for(let j = 0; j <  intiialBoard[i].length; j++)
        {
            string += intiialBoard[i][j]
        }
        string += '\n'
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
//This is the implementation of the Chess Position

function Valid(peice)
{
    const [pieceType, pieceX, pieceY] = piece.split('')
    let move = (pieceX + pieceY).join('')
    const movement = Movement()
    switch(peice)
    {
        case 'p':
            let w = movement.pawnMove()
            if(move in w)
            {
                return true
            }
            break;
        case 'r':
            w = movement.Rook()
            if(move in w)
            {
                return true
            }
            break;
        case 'n':
            w = movement.moveKnight()
            if(move in w)
            {
                return true
            }
            break;
        case 'b':
            w = movement.Bishop()
            if(move in w)
            {
                return true
            }
            break;

        case 'queen':
            w = movement.queenMove()
            if(move in w)
            {
                return true
            }
            break;

        case 'k':
            w = movement.King()
            if(move in w)
                {
                    return true
                }
            break;
        case 'K':
            w = movement.King()
            if(move in w)
                {
                    return true
                }
            break;
        case 'Q':
            w = movement.queenMove()
            if(move in w)
                {
                    return true
                }
                break;
        case 'B':
            w = movement.Bishop()
            if(move in w)
                {
                    return true
                }
                break;
        case 'N':
            w = movement.Knight()
            if(move in w)
                {
                    return true
                }
                break;
        case 'R':
            w = movement.Rook()
            if(move in w)
                {
                    return true
                    }
                    break;
        default:
            return false;
            break;

    }
}
//---------------------------------------------------------------------------------------------------------------------------------------

