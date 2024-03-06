import { View, Text } from 'react-native'
import React from 'react'
import Cell from './src/components/Cell'
import Board from './src/components/Board'
import { DefaultBoardSize } from './src/constants/Appconstants'

const App = () => {
  return (
    <View>
      <Board width={DefaultBoardSize.size} height={DefaultBoardSize.size} bombs={DefaultBoardSize.bombs} />
    </View>
  )
}

export default App