import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DifficultyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Difficulty</Text>
      <Button title="Easy (1-50)" onPress={() => navigation.navigate('Game', { range: 50 })} />
      <Button title="Medium (1-100)" onPress={() => navigation.navigate('Game', { range: 100 })} />
      <Button title="Hard (1-200)" onPress={() => navigation.navigate('Game', { range: 200 })} />
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
});
