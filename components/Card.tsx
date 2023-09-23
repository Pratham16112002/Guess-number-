import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../utils/Colors'

interface PropsWithChildren {
  children: React.ReactNode
}

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 7, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
