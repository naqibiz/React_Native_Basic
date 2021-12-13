import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const LayoutFlexDirection = () => {
  return (
    // By default alignment stretch.
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
        Layout Flex Direction
      </Text>
      <ScrollView style={{marginBottom: 40}}>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Flex Direction Default Column
        </Text>
        <View style={styles.parentview}>
          <Text style={styles.textstyle}>Child View One</Text>
          <Text style={styles.textstyle}>Child View Two</Text>
          <Text style={styles.textstyle}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Custom Style Flex Direction Column
        </Text>
        <View style={styles.parentview2}>
          <Text style={styles.textstyle2}>Child View One</Text>
          <Text style={styles.textstyle2}>Child View Two</Text>
          <Text style={styles.textstyle2}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Custom Style Flex Direction Row
        </Text>
        <View style={styles.parentview3}>
          <Text style={styles.textstyle3}>Child View One</Text>
          <Text style={styles.textstyle3}>Child View Two</Text>
          <Text style={styles.textstyle3}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Alignment flex start in Flex Direction Row
        </Text>
        <View style={styles.parentview4}>
          <Text style={styles.textstyle4}>Child View One</Text>
          <Text style={styles.textstyle4}>Child View Two</Text>
          <Text style={styles.textstyle4}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Alignment flex center in Flex Direction Row
        </Text>
        <View style={styles.parentview5}>
          <Text style={styles.textstyle5}>Child View One</Text>
          <Text style={styles.textstyle5}>Child View Two</Text>
          <Text style={styles.textstyle5}>Child View Three</Text>
        </View>

        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Alignment flex end in Flex Direction Row
        </Text>
        <View style={styles.parentview6}>
          <Text style={styles.textstyle6}>Child View One</Text>
          <Text style={styles.textstyle6}>Child View Two</Text>
          <Text style={styles.textstyle6}>Child View Three</Text>
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
  },
  parentview2: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    flexDirection: 'column',
  },
  parentview3: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    flexDirection: 'row',
  },
  parentview4: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 100,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  parentview5: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  parentview6: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 100,
    alignItems: 'flex-end',
    flexDirection: 'row',
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
  //   -------------------
  textstyle4: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   -------------------
  textstyle5: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle6: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default LayoutFlexDirection;
