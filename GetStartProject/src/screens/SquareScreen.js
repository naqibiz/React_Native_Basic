import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColors = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColors('red', COLOR_INCREMENT)}
        onDecrease={() => setColors('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColors('blue', COLOR_INCREMENT)}
        onDecrease={() => setColors('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColors('green', COLOR_INCREMENT)}
        onDecrease={() => setColors('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 120,
          width: 200,
          alignSelf: 'center',
          marginTop: 10,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
