import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/gradient-mystery-box-illustration_23-2149532750.jpg?w=740&t=st=1725251524~exp=1725252124~hmac=7bf41a1428dad6ef8094f1eaeb0b5b4fb497b7c306f877bf8beb1487f6fdb7e1' }} // Replace with a valid image URL or local file
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Number Guessing Game</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Difficulty')}
        >
          <Text style={styles.startButtonText}>Start Game</Text>
        </TouchableOpacity>
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  startButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
