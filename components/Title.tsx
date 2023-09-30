import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

interface Props {
  children: React.ReactNode
}
const HeadingTitle: React.FC<Props> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontFamily: 'open-sans-r',
    fontSize: 24,
    color: Colors.whiteSmoky,
    borderColor: Colors.whiteSmoky,
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    textAlign: 'center',
    width: 300,
    maxWidth: '80%'
  }
})

export default HeadingTitle
