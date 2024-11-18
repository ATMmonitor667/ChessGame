
function Movement(){
const board = Array.from({ length: 8 }, () => Array(8).fill('.'));
board[3][4] = 'Q';
function indexAt(board, find) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === find) {
                return [i, j];
            }
        }
    }
}

function printBoard(board) {
    for (let i = 0; i < 8; i++) {
        console.log(board[i].join(''));
    }
}

const diction = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7
};
function pawnMove(row, col, board) {
    let seen = new Set();
    const piece = board[row][col];
    const isWhite = piece === 'P';
    const direction = isWhite ? -1 : 1;
    const startRow = isWhite ? 6 : 1;

    // Move forward one square
    if (row + direction >= 0 && row + direction < 8 && board[row + direction][col] === '.') {
        seen.add([row + direction, col]);
    }

    // Move forward two squares from the starting position
    if (row === startRow && board[row + direction][col] === '.' && board[row + 2 * direction][col] === '.') {
        seen.add([row + 2 * direction, col]);
    }

    // Capture diagonally
    if (row + direction >= 0 && row + direction < 8) {
        if (col - 1 >= 0 && board[row + direction][col - 1] !== '.' && board[row + direction][col - 1].toLowerCase() !== piece.toLowerCase()) {
            seen.add([row + direction, col - 1]);
        }
        if (col + 1 < 8 && board[row + direction][col + 1] !== '.' && board[row + direction][col + 1].toLowerCase() !== piece.toLowerCase()) {
            seen.add([row + direction, col + 1]);
        }
    }

    return seen;
}
function Cross(row, col, move, board) {
    let addpos = true;
    for (let i = 0; i < board.length; i++) {
        if (row + i >= 0 && row + i < 8 && board[row + i][col] === '.' && addpos) {
            seen.add([row + i, col]);
        } else if (row + i >= 0 && row + i < 8 && board[row + i][col] !== '.') {
            seen.add([row + i, col]);
            addpos = false;
        }
    }
    addpos = true;
    for (let i = 0; i < board.length; i++) {
        if (row + i >= 0 && row + i < 8 && board[row + i][col] === '.' && addpos) {
            seen.add([i, col]);
        } else if (row + i >= 0 && row + i < 8 && board[row + i][col] !== '.') {
            seen.add([i, col]);
            addpos = false;
        }
    }
    addpos = true;
    for (let i = 0; i < board.length; i++) {
        if (col + i >= 0 && col + i < 8 && board[row][col + i] === '.' && addpos) {
            seen.add([row, i + col]);
        } else if (col + i >= 0 && col + i < 8 && board[row][col + i] !== '.') {
            seen.add([row, i + col]);
            addpos = false;
        }
    }
    addpos = true;
    for (let i = 0; i < board.length; i++) {
        if (col + i >= 0 && col + i < 8 && board[row][col - i] === '.' && addpos) {
            seen.add([row, i]);
        } else if (col + i >= 0 && col + i < 8 && board[row][col - i] !== '.') {
            seen.add([row, i]);
            addpos = false;
        }
    }
}

function Diagnol(row, col, move, board) {
    let addpos = true;
    for (let i = row; i < board.length; i++) {
        for (let j = col; j < board[0].length; j++) {
            if (board[i][j] === '.' && i - j === val && addpos) {
                seen.add([i, j]);
            } else if (board[i][j] !== '.' && i - j === val) {
                seen.add([i, j]);
                addpos = false;
            }
        }
    }
    addpos = true;
    for (let i = row; i >= 0; i--) {
        for (let j = col; j >= 0; j--) {
            if (board[i][j] === '.' && i - j === val && addpos) {
                seen.add([i, j]);
            } else if (board[i][j] !== '.' && i - j === val) {
                seen.add([i, j]);
                addpos = false;
            }
        }
    }
    addpos = true;
    let points = [row, col];
    for (let i = row; i >= 0; i--) {
        for (let j = col; j < board.length; j++) {
            if (board[i][j] === '.' && (points[0] - 1 === i && points[1] + 1 === j) && addpos) {
                seen.add([i, j]);
                points.pop();
                points.pop();
                points.push(i);
                points.push(j);
            } else if (board[i][j] !== '.' && (row - 1 === i && col + 1 === j)) {
                seen.add([i, j]);
                addpos = false;
            }
        }
    }
    addpos = true;
    points = [row, col];
    for (let i = row + 1; i < board.length; i++) {
        for (let j = col; j >= 0; j--) {
            if (board[i][j] === '.' && (points[0] + 1 === i && points[1] - 1 === j) && addpos) {
                console.log(i, j);
                console.log(board[i][j]);
                seen.add([i, j]);
                points.pop();
                points.pop();
                points.push(i);
                points.push(j);
            } else if (board[i][j] !== '.' && (row + 1 === i && col - 1 === j)) {
                console.log(i, j);
                console.log(board[i][j]);
                seen.add([i, j]);
                addpos = false;
            }
        }
    }
}
function queenMove(row, col, move, board) {
    let seen = new Set();
    board[row][col] = '.';
    const pos1 = diction[move[0]];
    const pos2 = parseInt(move[1]) - 1;

    if (pos1 >= 8 || pos2 >= 8) {
        return false;
    }
    seen = new Set();
    const val = row - col;
    Diagnol(row, col, move, board);
    Cross(row, col, move, board);
    for (let i of seen) {
        board[i[0]][i[1]] = 'Q';
    }

    return false;
}
function Bishop(row, col, move, board) {
    let seen = new Set();
    Diagnol(row, col, move, board);
}

function Rook(row, col, move, board) {
    let seen = new Set();
    Cross(row, col, move, board);
}
function moveKnight(row, col, move, board) {
    let seen = new Set();
    board[row][col] = '.';
    const pos1 = diction[move[0]];
    const pos2 = parseInt(move[1]) - 1;

    // Possible knight moves
    const knight_moves = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];

    // Check all knight moves
    for (let [dr, dc] of knight_moves) {
        const new_row = row + dr;
        const new_col = col + dc;
        if (0 <= new_row && new_row < board.length && 0 <= new_col && new_col < board[0].length) {
            seen.add([new_row, new_col]);
        }
    }

    if (seen.has([pos1, pos2])) {
        board[pos1][pos2] = 'K';
        return true;
    }
}

function moveKing(row, col, board) {
    let seen = new Set();
    board[row][col] = '.';

    // Possible king moves
    const king_moves = [
        [1, 0], [-1, 0],  // Vertical moves
        [0, 1], [0, -1],  // Horizontal moves
        [1, 1], [1, -1],  // Diagonal moves
        [-1, 1], [-1, -1] // Diagonal moves
    ];

    // Check all king moves
    for (let [dr, dc] of king_moves) {
        const new_row = row + dr;
        const new_col = col + dc;
        if (0 <= new_row && new_row < board.length && 0 <= new_col && new_col < board[0].length) {
            seen.add([new_row, new_col]);
        }
    }

    return seen;
}
   return {indexAt, printBoard, queenMove, moveKnight, moveKing, Bishop, Rook, pawnMove, Cross, Diagnol}
}

export default Movement;
