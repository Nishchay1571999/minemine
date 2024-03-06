import { View, Text, StyleSheet, ToastAndroid, } from 'react-native'
import React from 'react'
import Cell from './Cell'
import { createBoard } from '../utils/createBoad'
import { gameReducer } from '../reducers/gameReducer'




const Board: React.FC<Board> = ({ bombs, height, width }) => {
    const [gameState, dispatch] = React.useReducer(gameReducer, {
        board: createBoard({ bombs: bombs, height: height, width: width }),
    })


    const handleCellpress = (row: number, col: number) => {
        // ToastAndroid({text:"Hello"})
        dispatch({
            type: "HANDLE_CELL_PRESS", row, col
        })
    }
    return (
        <View style={styles.container}>
            {
                gameState.board.map((row, rowIndex) => {
                    return <View key={rowIndex} style={styles.boardRowContainer}>
                        {
                            row.map((col, colIndex) => {
                                return <Cell {...col} handlePress={handleCellpress} />
                            })
                        }
                    </View>
                })
            }
        </View>
    )
}

export default Board


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    boardRowContainer: {
        flexDirection: 'row'
    }
})