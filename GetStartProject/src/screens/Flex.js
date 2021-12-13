import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

const Flex = () => {
  return (
    // Flex Working Like a Column in Bootstrap in Html
    // FLex Value 1 to 10
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>
        Flex
      </Text>
      <ScrollView style={{marginBottom: 35}}>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Flex Value 1 Child two
        </Text>
        <View style={styles.parentview}>
          <Text style={styles.textstyle_one}>Child View One</Text>
          <Text style={styles.textstyle_two}>Child View Two</Text>
          <Text style={styles.textstyle_three}>Child View Three</Text>
        </View>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Flex Value 1 Child two in flex direction (row)
        </Text>
        <View style={styles.parentview2}>
          <Text style={styles.textstyle_one_1}>Child View One</Text>
          <Text style={styles.textstyle_two_2}>Child View Two</Text>
          <Text style={styles.textstyle_three_3}>Child View Three</Text>
        </View>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Both Child Flex Value Equal Value 2
        </Text>
        <View style={styles.parentview3}>
          <Text style={styles.textstyle_one_1_2}>Child View One</Text>
          <Text style={styles.textstyle_two_2_2}>Child View Two</Text>
          <Text style={styles.textstyle_three_3_2}>Child View Three</Text>
        </View>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>
          Child One and Two Flex Value 4 and three Value 2
        </Text>
        <View style={styles.parentview4}>
          <Text style={styles.textstyle_one_1_3}>Child View One</Text>
          <Text style={styles.textstyle_two_2_3}>Child View Two</Text>
          <Text style={styles.textstyle_three_3_3}>Child View Three</Text>
        </View>
      </ScrollView>
    </View>

    // alignSelf property for child views and alignItems property for parent views
    // postion properties relative and absolute and default property relative
    // if apply postion properties in view so for spacing not use marginTop, marginBottom, marginLeft & marginRight
    // only use Top , bottom , left , right
    // -------------
    // if we want show the any one view all on the views so use postion property absolute and top, bottom, left, right value (0),
    // The work similear (...StyleSheet.absoluteFillObject).
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
    flexDirection: 'row',
  },
  parentview3: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
  },
  parentview4: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    height: 170,
  },
  //   ---------------
  textstyle_one: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle_two: {
    padding: 5,
    borderWidth: 1,
    flex: 1,
    borderColor: 'black',
  },
  textstyle_three: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   ---------------
  textstyle_one_1: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle_two_2: {
    padding: 5,
    borderWidth: 1,
    flex: 1,
    borderColor: 'black',
  },
  textstyle_three_3: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   ---------------
  textstyle_one_1_2: {
    padding: 5,
    borderWidth: 1,
    flex: 2,
    borderColor: 'black',
  },
  textstyle_two_2_2: {
    padding: 5,
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle_three_3_2: {
    padding: 5,
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  //   ---------------
  textstyle_one_1_3: {
    padding: 5,
    borderWidth: 1,
    flex: 4,
    borderColor: 'black',
  },
  textstyle_two_2_3: {
    padding: 5,
    flex: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  textstyle_three_3_3: {
    padding: 5,
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Flex;
