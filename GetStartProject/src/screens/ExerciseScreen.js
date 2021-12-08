import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ExerciseScreen = () => {
  const name = 'Muhammad Naqi';
  const email = 'muhammadnaqi@gmail.com';
  const number = 921331471;
  return (
    <View style={styles.container}>
      <Text style={styles.yourinfo}>Your Information</Text>
      <Text style={styles.info}>My Name is {name}</Text>
      <Text style={styles.info}>This is my email {email} </Text>
      <Text style={styles.info}>This is my contact {number} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  yourinfo: {
    paddingBottom: 7,
    fontSize: 18,
    color: '#000',
  },
});

export default ExerciseScreen;
