import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ComponentScreen = ({navigation}) => {
  const reactnative = 'React Native';
  const First = 'Component';
  const Second = 'second';
  const Third = 'third';
  const Fourth = 'fourth';
  return (
    <View>
      <Text style={styles.mainheading}>Getting start with {reactnative}</Text>
      <Text style={styles.text}>This is {First} Screen</Text>
      <Text style={styles.text}>This is {Second} element</Text>
      <Text style={styles.text}>This is {Third} element</Text>
      <Text style={styles.text}>This is {Fourth} element</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ExerciseScreen')}>
        <Text style={styles.exercisebtn}>Click Here Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

{
  /* import libraries this is Component
       and second component const function in the return jsx and jsx like HTML
       and third component StyleSheet & 
       fourth component export default outof this area and after the StyleSheet component. */
  //    ==============================
  // if add the one of more element so all element show in the View element because this rule of jsx
}

const styles = StyleSheet.create({
  mainheading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  exercisebtn: {
    marginTop: 10,
    color: 'teal',
    fontSize: 18,
  },
});

export default ComponentScreen;
