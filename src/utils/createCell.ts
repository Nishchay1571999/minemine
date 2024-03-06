export const createCell = ({ col, row, isBomb, isLife, value, isFlipped }: Cell) => {
    return {
        row,
        col,
        isBomb,
        isLife,
        value,
        isFlipped
    }
}