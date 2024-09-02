import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function GameScreen({ route }) {
  const range = route?.params?.range || 100;
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * range) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numberGuess = parseInt(guess, 10);
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
    setTargetNumber(Math.floor(Math.random() * range) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/background-image.jpg' }} // Replace with a valid image URL or local file
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Guess the Number (1-{range})</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={guess}
          onChangeText={setGuess}
          placeholder="Enter your guess"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button} onPress={handleGuess}>
          <Text style={styles.buttonText}>Submit Guess</Text>
        </TouchableOpacity>
        <Text style={styles.feedback}>{feedback}</Text>
        <Text style={styles.attempts}>Attempts: {attempts}</Text>
        {feedback.includes('Correct') && (
          <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%', // Adjust width as needed
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#333', // Dark background for input
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#32cd32', // Green for restart button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedback: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  attempts: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
});
