import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View style={{marginTop: 30}}>
      <Text style={styles.headings}>{color}</Text>
      <TouchableOpacity onPress={() => onIncrease()}>
        <Text style={styles.increasebtn}>{`Increase ${color}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDecrease()}>
        <Text style={styles.decreasebtn}>{`Decrease ${color}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headings: {
    alignSelf: 'center',
    fontSize: 17,
  },
  increasebtn: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    backgroundColor: '#91a3b0',
    padding: 5,
  },
  decreasebtn: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#91a3b0',
  },
});

export default ColorCounter;
