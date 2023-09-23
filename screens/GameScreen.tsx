import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, FlatList } from 'react-native'
import HeadingTitle from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import MediumTitle from '../components/MediumTitle'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import Card from '../components/Card'
import Colors from '../utils/Colors'
import GuessLogItem from '../components/GuessLogItem'

interface GameScreenProps {
  userNumber: number
  gameEnd: () => void
  calScore: (noOfRounds: number) => void
}

enum Direction {
  lower,
  higher
}

let maxNumber: number = 100
let minNumber: number = 1

const GameScreen: React.FC<GameScreenProps> = ({
  userNumber,
  gameEnd,
  calScore
}) => {
  const randomGuessGenerator = (
    min: number,
    max: number,
    exclude: number
  ): number => {
    let randomNumber: number = Math.floor(Math.random() * (max - min)) + min
    do {
      randomNumber = Math.floor(Math.random() * (max - min)) + min
    } while (randomNumber === exclude)
    return randomNumber
  }
  const initialGuess = randomGuessGenerator(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])
  const nextGuessHandler = (direction: Direction): void => {
    if (
      (direction === Direction.lower && currentGuess < userNumber) ||
      (direction === Direction.higher && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know this is wrong', [
        { text: 'Sorry!', style: 'cancel' }
      ])
      return
    }
    if (direction === Direction.lower) {
      maxNumber = currentGuess
    } else {
      minNumber = currentGuess + 1
    }
    const nextRandomNumber = randomGuessGenerator(
      minNumber,
      maxNumber,
      currentGuess
    )
    setCurrentGuess(nextRandomNumber)
    setGuessRounds((previousState: number[]) => [
      nextRandomNumber,
      ...previousState
    ])
  }

  useEffect(() => {
    console.log(currentGuess)
    if (currentGuess === userNumber) {
      gameEnd()
      const score = guessRounds.length
      calScore(score)
    }
  }, [currentGuess, userNumber, gameEnd])
  useEffect(() => {
    minNumber = 1
    maxNumber = 100
  }, [])
  const noOfRounds = guessRounds.length
  return (
    <View style={styles.screen}>
      <HeadingTitle>Opponent&apos;s Guess</HeadingTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <MediumTitle>Higher or Lower ?</MediumTitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, Direction.higher)}
            >
              <AntDesign
                name="pluscircle"
                size={24}
                color={Colors.secondary500}
              />{' '}
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, Direction.lower)}
            >
              <MaterialCommunityIcons
                name="minus-circle"
                size={24}
                color={Colors.secondary500}
              />{' '}
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              choosenNumber={itemData.item}
              guessNumber={noOfRounds - itemData.index}
            />
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})

export default GameScreen
