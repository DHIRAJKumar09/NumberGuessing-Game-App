import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function DifficultyScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://png.pngtree.com/background/20231018/original/pngtree-businesswoman-climbing-mountain-snow-difficulty-concentration-photo-picture-image_5604067.jpg' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Select Difficulty</Text>
        <TouchableOpacity
          style={[styles.button, styles.easyButton]}
          onPress={() => navigation.navigate('Game', { range: 50 })}
        >
          <Text style={styles.buttonText}>Easy (1-50)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.mediumButton]}
          onPress={() => navigation.navigate('Game', { range: 100 })}
        >
          <Text style={styles.buttonText}>Medium (1-100)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.hardButton]}
          onPress={() => navigation.navigate('Game', { range: 200 })}
        >
          <Text style={styles.buttonText}>Hard (1-200)</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
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
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  easyButton: {
    backgroundColor: '#32cd32', 
  },
  mediumButton: {
    backgroundColor: '#ffa500', 
  },
  hardButton: {
    backgroundColor: '#ff4500', 
  },
});
