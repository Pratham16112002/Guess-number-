import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

interface Props {
  children: React.ReactNode
}

const NumberContainer: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: 'bold'
  }
})
export default NumberContainer
