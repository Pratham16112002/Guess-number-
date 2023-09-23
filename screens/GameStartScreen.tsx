import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../utils/Colors'
import Title from '../components/Title'
import MediumTitle from '../components/MediumTitle'
import Card from '../components/Card'

interface StartScreenProps {
  onPickNumber: (pickedNumber: number) => void
}

const StartScreen: React.FC<StartScreenProps> = ({ onPickNumber }) => {
  const [enteredValue, setEnteredValue] = useState<string>('0')
  const numberInputHandler = (enteredText: string): void => {
    setEnteredValue(enteredText)
  }
  const resetInputHandler = (): void => {
    setEnteredValue('')
  }
  const confirmInputHandler = (): void => {
    const choosenNumber = parseInt(enteredValue)
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('Error', 'Enter a valid number between 0 and 100', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
      return
    }
    onPickNumber(choosenNumber)
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number ? </Title>
      <Card>
        <MediumTitle>Enter a number</MediumTitle>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          placeholder=""
          autoCapitalize="none"
          value={enteredValue}
          onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 52,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartScreen
