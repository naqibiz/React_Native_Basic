import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      {/* ==================================== */}
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.multiplescreen}>Below The Multiple Screens</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ComponentScreen')}>
          <Text style={styles.clickhere}>Click Here Component Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
          <Text style={styles.clickhere}>Click Here List Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImageScreen')}>
          <Text style={styles.clickhere}>
            Click Here Parent-Child Relationship In Image Example & Reuse
            Component
          </Text>
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
    color: 'teal',
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

export default HomeScreen;
