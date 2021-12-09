import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ComponentScreen')}>
        <Text style={styles.clickhere}>
          Click here and go to Component Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  clickhere: {
    marginTop: 10,
    color: 'teal',
    fontSize: 17,
  },
});

export default HomeScreen;
