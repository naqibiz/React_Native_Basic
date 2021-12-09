import React from 'react';
import {Text, StyleSheet, View, FlatList, ScrollView} from 'react-native';

const ListScreen = () => {
  const userinfo = [
    {username: 'username 1', age: 18},
    {username: 'username 2', age: 19},
    {username: 'username 3', age: 20},
    {username: 'username 4', age: 21},
    {username: 'username 5', age: 22},
    {username: 'username 6', age: 23},
    {username: 'username 7', age: 24},
    {username: 'username 8', age: 25},
    {username: 'username 9', age: 26},
    {username: 'username 10', age: 27},
    {username: 'username 11', age: 28},
    {username: 'username 12', age: 29},
  ];

  return (
    <View>
      <Text style={styles.listheading}>User Name</Text>
      <FlatList
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={userinfo => userinfo.username}
        data={userinfo}
        renderItem={({item}) => {
          return (
            <Text style={styles.username}>
              {item.username} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
    //Tow props required in the FlatList *data{userinfo} or *renderItem=> like item, element etc!
    // After username added the age property we can add the multiple properties like username, age, etc...
  );
};

const styles = StyleSheet.create({
  listheading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    // marginHorizontal: 20, // for horizontal
    marginVertical: 40,
    fontSize: 16,
  },
});

export default ListScreen;
