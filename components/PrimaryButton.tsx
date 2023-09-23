import React from 'react'

import { View, Text, Pressable, StyleSheet } from 'react-native'

import Colors from '../utils/Colors'

interface PrimaryButtonProps {
  children: React.ReactNode
  onPress: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed
            ? [styles.pressed, styles.outerContainer]
            : styles.outerContainer
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    margin: 4
  },

  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 28,
    shadowOpacity: 0.25
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})
export default PrimaryButton
