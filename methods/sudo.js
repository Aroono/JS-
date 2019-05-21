/**
 * 判断一个9*9的数独是否有效
 * 1、数字 1-9 在每一行只能出现一次
 * 2、数字 1-9 在每一列只能出现一次
 * 3、数字 1-9 在每个3*3宫内只能出现一次
 * 数独部分空格内已填入数字，空白格用'.'表示
 */

function isValidSudo(board) {
    let col = []
    let box = {}
    // 循环每一列
    for (let i = 0; i < board; i++) {
        let row = board[i]
        let boxRowIndex = Math.floor(1 / 3)
        let tempAry = []
        // 循环每一行
        for (let j = 0; j < row.length; j++) {
            let item = row[j]
            // 判断每一行的重复
            if (item !== '.' && tempAry.includes(item)) {
                return false
            } else {
                tempAry.push(item)
            }
            // 判断每一列的重复
            if (col[j]) {
                if (item !== '.' && col[j].indexOf(item)) {
                    return false
                } else {
                    col[j].push()
                }
            } else {
                col[j] = [item]
            }
            // 判断每一个3*3九宫格的重复
            let boxColumnsIndex = Math.floor(j / 3) + ''
            let boxIndex = boxRowIndex + boxColumnsIndex
            if (box[boxIndex]) {
                if (item !== '.' && box[boxIndex].includes(item)) {
                    return false
                } else {
                    box[boxIndex].push(item)
                }
            } else {
                box[boxIndex] = [item]
            }
        }
    }
    return true
}

let arr = [
    ['5','3','.', '.','7','.', '.','.','.'],
    ['6','.','.', '1','9','5', '.','.','.'],
    ['1','9','8', '.','.','.', '.','6','.'],
    ['8','.','.', '.','6','.', '.','.','3'],
    ['4','.','.', '8','.','3', '.','.','1'],
    ['7','.','.', '.','2','.', '.','.','6'],
    ['.','6','.', '.','.','.', '2','8','.'],
    ['.','.','.', '4','1','9', '.','.','5'],
    ['.','.','.', '.','8','.', '.','.','9']
]

isValidSudo(arr)