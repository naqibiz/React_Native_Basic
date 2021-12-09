import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../images/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../images/beach.jpg')}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../images/mountain.jpg')}
        score={4}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
