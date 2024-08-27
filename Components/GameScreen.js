import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function GameScreen() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numberGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numberGuess === targetNumber) {
      setFeedback(`Correct! You guessed the number in ${attempts + 1} attempts.`);
    } else if (numberGuess < targetNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Too high! Try again.');
    }

    setGuess('');
  };

  const handleRestart = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number (1-100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      <Text style={styles.feedback}>{feedback}</Text>
      <Text style={styles.attempts}>Attempts: {attempts}</Text>
      {feedback.includes('Correct') && <Button title="Play Again" onPress={handleRestart} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  feedback: {
    fontSize: 18,
    marginTop: 20,
  },
  attempts: {
    fontSize: 18,
    marginTop: 10,
  },
});
