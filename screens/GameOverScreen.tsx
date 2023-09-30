import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  useWindowDimensions
} from 'react-native'
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
  const { height } = useWindowDimensions()
  let imageSize = 300
  if (height < 380) {
    imageSize = 150
  }
  if (height < 400) {
    imageSize = 100
  }
  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <HeadingTitle>GAME OVER!</HeadingTitle>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
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
