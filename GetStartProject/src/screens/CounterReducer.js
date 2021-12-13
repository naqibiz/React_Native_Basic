import React, {useReducer} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const reducer = (state, action) => {
  // state === (count: number)
  // action === {type: 'increment' || 'decrement', payload: 1 OR payload: -1}

  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View style={{marginTop: 50}}>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'increment', payload: 1});
        }}>
        <Text style={styles.counterbtn}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'decrement', payload: 1});
        }}>
        <Text style={styles.counterbtn}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.counterres}>Current Count: {state.count}</Text>
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

export default CounterReducer;
