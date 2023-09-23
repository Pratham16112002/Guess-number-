import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

interface Props {
  guessNumber: number
  choosenNumber: number
}

const GuessLogItem: React.FC<Props> = ({ guessNumber, choosenNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{guessNumber}</Text>
      <Text style={styles.itemText}>Opponent Guess : {choosenNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 8,
    padding: 12,
    backgroundColor: Colors.secondary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowColor: 'black',
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 30
  },
  itemText: {
    fontFamily: 'open-sans-r',
    color: Colors.primary600
  }
})

export default GuessLogItem
