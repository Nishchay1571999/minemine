import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Cell: React.FC<Cell> = ({ col, isBomb, isFlipped, isLife, row, value, handlePress }) => {
    return (
        <Pressable style={[styles.container, !isFlipped && styles.containerIsFlipped]} onPress={() => {
            handlePress && handlePress(row, col)
        }}>
            <Text style={styles.textValue}>{isFlipped && (isBomb ? '💣' : value)}</Text>
        </Pressable>
    )
}

export default Cell

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIsFlipped: {
        backgroundColor: 'lightblue'
    },
    textValue: {
        fontSize: 22,
        color: 'black',
        fontWeight: '800'
    }
})
