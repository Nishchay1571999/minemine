import { createCell } from "./createCell"

export const createBoard = ({ bombs, height, width }: Board) => {
    const matrix: Array<Array<Cell>> = []
    // creating the default matrix 
    for (let row = 0; row < height; row++) {
        let rowEle: Array<Cell> = []
        for (let col = 0; col < width; col++) {
            rowEle.push(createCell({
                row: row,
                col: col,
                isBomb: false,
                isLife: false,
                value: 0,
                isFlipped: false,
            }))
        }
        matrix.push(rowEle)
    }
    // Inserting Bombs
    insertBombs(matrix, bombs)
    // Increment the Matrix according the position of the bomb
    increaseNeighboors(matrix)
    // return matrix 
    return matrix

}


const insertBombs = (matrix: Array<Array<Cell>>, bombs: number) => {
    let bombsToInsert = bombs
    while (bombsToInsert > 0) {
        let row = Math.floor(Math.random() * matrix.length)
        let col = Math.floor(Math.random() * matrix[0].length)
        if (!matrix[row][col].isBomb) {
            matrix[row][col] = {
                ...matrix[row][col],
                isBomb: true
            }
            --bombsToInsert;
        }
    }
}
const getNeighbours = (row: number, col: number, matrix: Array<Array<Cell>>) => {
    let neighbours: Array<number[]> = []
    const height = matrix.length
    const width = matrix[0].length
    // Adjacent squares
    if (row - 1 >= 0) {
        neighbours.push([row - 1, col])
    }
    if (row + 1 < height) {
        neighbours.push([row + 1, col])
    }
    if (col + 1 < width) {
        neighbours.push([row, col + 1])
    }
    if (col - 1 >= 0) {
        neighbours.push([row, col - 1])
    }


    // Diagonal Squares
    if (row - 1 >= 0 && col - 1 >= 0) {
        neighbours.push([row - 1, col - 1])
    }
    if (row - 1 >= 0 && col + 1 < width) {
        neighbours.push([row - 1, col + 1])
    }
    if (row + 1 < height && col + 1 < width) {
        neighbours.push([row + 1, col + 1])
    }
    if (row + 1 < height && col - 1 >= 0) {
        neighbours.push([row + 1, col - 1])
    }

    return neighbours
}

const increaseNeighboors = (matrix: Array<Array<Cell>>) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col].isBomb) {
                const nearbyBombs = getNeighbours(row, col, matrix)
                for (let neighbour of nearbyBombs) {
                    const [x, y] = neighbour
                    matrix[x][y] = {
                        ...matrix[x][y],
                        value: matrix[x][y].value + 1,
                    }
                }
            }
        }
    }
}