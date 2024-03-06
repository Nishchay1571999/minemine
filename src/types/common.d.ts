type Cell = {
    row: number,
    col: number,
    isBomb: boolean,
    isLife: boolean,
    value: number,
    isFlipped: boolean,
    handlePress?: (row: number, col: number) => void
}

type Board = {
    width: number,
    height: number,
    bombs: number,
}