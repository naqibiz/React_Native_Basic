import React, {useReducer} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//Below the function second argument (How to change state object and this called "action")
const reducer = (state, action) => {
  //  state === {red: number, green: number, blue: number} this is initialValues
  //  action === {coloToChange: 'red' || 'green' || 'blue', amount: 15 || -15} this is RunMyReducer and this called dispatch
  // ----------------------------------------------------------
  //    ↡↡↡ Reducer community Convention Type and payload ↡↡↡
  // ----------------------------------------------------------
  //  action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15} this is RunMyReducer and this called dispatch
  // type: this string and the described that operation we want to change
  // payload: like a amount, Some data that is critical to the change operation

  switch (action.coloToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};

    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};

    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};

    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  // const {red, green, blue} = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({coloToChange: 'red', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({coloToChange: 'red', amount: -1 * COLOR_INCREMENT})
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({coloToChange: 'blue', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({coloToChange: 'blue', amount: -1 * COLOR_INCREMENT})
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({coloToChange: 'green', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({coloToChange: 'green', amount: -1 * COLOR_INCREMENT})
        }
        color="Green"
      />
      <View
        style={{
          height: 120,
          width: 200,
          alignSelf: 'center',
          marginTop: 10,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
    //useReducer is basically like a useState.
    //But useReducer hook requires 2 arguments, and 3rd argument optional.
    //1st arguments reducer and 2nd argument initialState, like a useState
    // ----------------------------------------
    // useReducer hook returns the current state, and a (dispatch function) to update the state.
  );
};

const styles = StyleSheet.create({});

export default Reducer;
