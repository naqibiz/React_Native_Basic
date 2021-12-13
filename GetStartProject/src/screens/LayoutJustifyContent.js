import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

const LayoutJustifyContent = () => {
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
        Layout Justify Content
      </Text>
      <ScrollView style={{marginBottom: 40}}>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Justify Content By Default Flex Start
        </Text>
        <View style={styles.parentview}>
          <Text style={styles.textstyle}>Child View One</Text>
          <Text style={styles.textstyle}>Child View Two</Text>
          <Text style={styles.textstyle}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Justify Content center
        </Text>
        <View style={styles.parentview2}>
          <Text style={styles.textstyle2}>Child View One</Text>
          <Text style={styles.textstyle2}>Child View Two</Text>
          <Text style={styles.textstyle2}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Justify Content Flex End
        </Text>
        <View style={styles.parentview3}>
          <Text style={styles.textstyle3}>Child View One</Text>
          <Text style={styles.textstyle3}>Child View Two</Text>
          <Text style={styles.textstyle3}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Justify Content Space Between
        </Text>
        <View style={styles.parentview4}>
          <Text style={styles.textstyle4}>Child View One</Text>
          <Text style={styles.textstyle4}>Child View Two</Text>
          <Text style={styles.textstyle4}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Justify Content Space Around
        </Text>
        <View style={styles.parentview5}>
          <Text style={styles.textstyle5}>Child View One</Text>
          <Text style={styles.textstyle5}>Child View Two</Text>
          <Text style={styles.textstyle5}>Child View Three</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentview: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
  },
  parentview2: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
    justifyContent: 'center',
  },
  parentview3: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
    justifyContent: 'flex-end',
  },
  parentview4: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
    justifyContent: 'space-between',
  },
  parentview5: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
    justifyContent: 'space-around',
  },
  textstyle: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   -------------------
  textstyle2: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   -------------------
  textstyle3: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle4: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle5: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default LayoutJustifyContent;
