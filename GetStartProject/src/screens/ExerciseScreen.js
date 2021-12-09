import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ExerciseScreen = ({navigation}) => {
  const name = 'Muhammad Naqi';
  const email = 'muhammadnaqi@gmail.com';
  const number = 921331471;
  return (
    <View style={styles.container}>
      <Text style={styles.yourinfo}>Your Information</Text>
      <Text style={styles.info}>My Name is {name}</Text>
      <Text style={styles.info}>This is my email {email} </Text>
      <Text style={styles.info}>This is my contact {number} </Text>

      <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
        <Text style={styles.nextscreen}>Next Screen</Text>
      </TouchableOpacity>
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
  nextscreen: {
    marginTop: 10,
    color: 'teal',
    fontSize: 18,
  },
});

export default ExerciseScreen;
