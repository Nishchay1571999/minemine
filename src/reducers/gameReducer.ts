import React from "react"
import { DefaultBoardSize } from "../constants/Appconstants"
import { createBoard } from "../utils/createBoad"

export const gameReducer = (state: any, action: any) => {
    const { type, row, col } = action
    switch (type) {
        case "HANDLE_CELL_PRESS": {
            if (state[row][col].isBomb) {
                return {
                    ...state,
                }
            }
        }
    }
    const updatedBoard = {
        bombs: DefaultBoardSize.bombs,
        height: DefaultBoardSize.size,
        width: DefaultBoardSize.size
    }
    return {
        board: createBoard(updatedBoard)
    }
}