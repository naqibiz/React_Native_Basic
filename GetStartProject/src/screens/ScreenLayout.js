import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const ScreenLayout = ({navigation}) => {
  return (
    <View>
      <View>
        {/* ==================================== */}
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.multiplescreen}>
            Screen Layouts Using Flex Properties
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FlexAlignment')}>
            <Text style={styles.clickhere}>Click Here Flex Alignment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FlexDirection')}>
            <Text style={styles.clickhere}>
              Click Here Flex Direction Properties
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LayoutJustifyContent')}>
            <Text style={styles.clickhere}>
              Click Here Justify Content Layout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FlexValue')}>
            <Text style={styles.clickhere}>
              Click Here Flex
            </Text>
          </TouchableOpacity>
        </View>
        {/* ==================================== */}
      </View>
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
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#000',
    marginTop: 15,
    marginBottom: 10,
  },
});
export default ScreenLayout;
