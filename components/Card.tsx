import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import Colors from '../utils/Colors'

interface PropsWithChildren {
  children: React.ReactNode
}

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const { height } = useWindowDimensions()

  const marginTopDistance = height < 380 ? 12 : 36
  return (
    <View style={[styles.cardContainer, { marginTop: marginTopDistance }]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 12,
    backgroundColor: Colors.primary600,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { height: 7, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})
