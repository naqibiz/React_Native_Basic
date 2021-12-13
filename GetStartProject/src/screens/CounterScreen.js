import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{marginTop: 50}}>
      <TouchableOpacity
        onPress={() => {
          //   console.log(counter);
          setCounter(counter + 1);
        }}>
        <Text style={styles.counterbtn}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //   console.log(counter);
          setCounter(counter - 1);
        }}>
        <Text style={styles.counterbtn}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.counterres}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterbtn: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 10,
  },
  counterres: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
  },
});

export default CounterScreen;
