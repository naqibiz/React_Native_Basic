import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  // console.log(colors);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}>
        <Text style={styles.addcolor}>Add a Color</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <FlatList
          keyExtractor={item => item}
          data={colors}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  alignSelf: 'center',
                  backgroundColor: randomRgb(),
                }}
              />
            );
          }}
        />
        <FlatList
          keyExtractor={item => item}
          data={colors}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  alignSelf: 'center',
                  backgroundColor: randomRgb(),
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  addcolor: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#dcdcdc',
  },
});

export default ColorScreen;
