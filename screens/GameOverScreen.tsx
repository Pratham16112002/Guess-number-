import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import HeadingTitle from '../components/Title'
import Colors from '../utils/Colors'
import RestartButton from '../components/RestartButton'

interface Props {
  userNumber: number
  guessRounds: number
  restartGame: () => void
}

const GameOverScreen: React.FC<Props> = ({
  userNumber,
  guessRounds,
  restartGame
}) => {
  return (
    <View style={styles.rootContainer}>
      <HeadingTitle>GAME OVER!</HeadingTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        You need <Text style={styles.highlight}>{guessRounds}</Text> number of
        guess to guess <Text style={styles.highlight}>{userNumber}</Text>{' '}
        number.
      </Text>
      <RestartButton onPress={restartGame}>Restart</RestartButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    margin: 24
  },
  image: {
    height: '100%',
    width: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans-r',
    fontSize: 24,
    marginVertical: 12,
    textAlign: 'center'
  },

  highlight: {
    fontFamily: 'open-sans-r',
    fontWeight: 'bold',
    color: Colors.primary600
  }
})

export default GameOverScreen
