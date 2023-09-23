import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface RestartButtonProps {
  children: React.ReactNode
  onPress: () => void
}

const RestartButton: React.FC<RestartButtonProps> = ({ children, onPress }) => {
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
          <MaterialCommunityIcons
            name="restart"
            size={24}
            color={Colors.secondary500}
          />
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default RestartButton
const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    margin: 4
  },

  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 28,
    shadowOpacity: 0.25
  },
  buttonText: {
    color: Colors.secondary500,
    fontFamily: 'open-sans-r',
    fontSize: 18,
    textAlign: 'center'
  },

  pressed: {
    opacity: 0.75
  }
})
