import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const StatesMultipleScreens = ({navigation}) => {
  return (
    <View>
      {/* ==================================== */}
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.multiplescreen}>State Multiple Screens</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CounterScreen')}>
          <Text style={styles.clickhere}>Click Here Counter Example</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ColorScreen')}>
          <Text style={styles.clickhere}>
            Click Here Randam Color in FlatList
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SquareScreen')}>
          <Text style={styles.clickhere}>Click Here Color Counter</Text>
        </TouchableOpacity>
      </View>
      {/* ==================================== */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  clickhere: {
    marginVertical: 10,
    color: '#777696',
    fontSize: 17,
  },
  multiplescreen: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#000',
    marginTop: 15,
    marginBottom: 10,
  },
});

export default StatesMultipleScreens;
