import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

interface Props {
  children: React.ReactNode
}

const MediumTitle: React.FC<Props> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: Colors.secondary500,
    fontFamily: 'open-sans-r',
    fontSize: 24
  }
})

export default MediumTitle
