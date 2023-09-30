import React, { useState } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../utils/Colors'
import Title from '../components/Title'
import MediumTitle from '../components/MediumTitle'
import Card from '../components/Card'

interface StartScreenProps {
  onPickNumber: (pickedNumber: number) => void
}

const StartScreen: React.FC<StartScreenProps> = ({ onPickNumber }) => {
  const { height } = useWindowDimensions()
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
  const marginTopDistance = height < 400 ? 30 : 100
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
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
