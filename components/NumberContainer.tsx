import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import Colors from '../utils/Colors'

interface Props {
  children: React.ReactNode
}

const NumberContainer: React.FC<Props> = ({ children }) => {
  const { height } = useWindowDimensions()
  const fontSizeTotal = height < 380 ? 12 : 36
  return (
    <View style={[styles.container, { marginVertical: 24, padding: 36 }]}>
      <Text style={[styles.text, { fontSize: fontSizeTotal }]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.secondary500,
    fontWeight: 'bold'
  }
})
export default NumberContainer
