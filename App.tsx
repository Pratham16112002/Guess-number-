import React, { useState } from 'react'
import StartScreen from './screens/GameStartScreen'
import GameScreen from './screens/GameScreen'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const App: React.FC = () => {
  const [userNumber, setUserNumber] = useState<number>(0)
  const [gameIsOver, setGameIsOver] = useState<boolean>(true)
  const [guessRounds, setGuessRounds] = useState<number>(0)

  const pickedNumberHandler = (pickedNumber: number): void => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/open-sans.ttf'),
    'open-sans-r': require('./assets/fonts/open-sans-2.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  let screen = <StartScreen onPickNumber={pickedNumberHandler} />
  const gameOverHandler = (): void => {
    setGameIsOver(true)
  }
  const gameStartHandler = (): void => {
    setUserNumber(0)
    setGuessRounds(0)
  }
  const calculateScore = (noOfRounds: number): void => {
    setGuessRounds(noOfRounds)
  }
  if (userNumber !== 0) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameEnd={gameOverHandler}
        calScore={calculateScore}
      />
    )
  }
  if (gameIsOver && userNumber !== 0) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        guessRounds={guessRounds}
        restartGame={gameStartHandler}
      />
    )
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={['#cf3476', '#ddb52f']}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBGStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  imageBGStyle: {
    opacity: 0.15
  }
})
