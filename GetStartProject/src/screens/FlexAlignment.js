import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexAlignment = () => {
  return (
    // By default alignment stretch.
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
        Screen layout Using FLex Properties
      </Text>
      <Text style={{marginTop: 10, fontWeight: 'bold'}}>Alignment By Default Stretch</Text>
      <View style={styles.parentview}>
        <Text style={styles.textstyle}>Child View One</Text>
        <Text style={styles.textstyle}>Child View Two</Text>
        <Text style={styles.textstyle}>Child View Three</Text>
      </View>

      <Text style={{marginTop: 10, fontWeight: 'bold'}}>alignItems flex start</Text>
      <View style={styles.parentview2}>
        <Text style={styles.textstyle2}>Child View One</Text>
        <Text style={styles.textstyle2}>Child View Two</Text>
        <Text style={styles.textstyle2}>Child View Three</Text>
      </View>

      <Text style={{marginTop: 10, fontWeight: 'bold'}}>alignItems center</Text>
      <View style={styles.parentview3}>
        <Text style={styles.textstyle3}>Child View One</Text>
        <Text style={styles.textstyle3}>Child View Two</Text>
        <Text style={styles.textstyle3}>Child View Three</Text>
      </View>

      <Text style={{marginTop: 10, fontWeight: 'bold'}}>alignItems flex end</Text>
      <View style={styles.parentview4}>
        <Text style={styles.textstyle4}>Child View One</Text>
        <Text style={styles.textstyle4}>Child View Two</Text>
        <Text style={styles.textstyle4}>Child View Three</Text>
      </View>
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
    alignItems: 'flex-start',
  },
  parentview3: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    alignItems: 'center',
  },
  parentview4: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    alignItems: 'flex-end',
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
});

export default FlexAlignment;
