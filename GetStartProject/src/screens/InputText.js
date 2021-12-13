import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const InputText = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{marginHorizontal: 10}}>
      <Text style={{marginTop: 10}}>Enter Your Name</Text>
      <TextInput
        placeholder="Full Name"
        autoCorrect={false}
        value={name}
        onChangeText={updatedValue => setName(updatedValue)}
        style={styles.InputText}
      />
      <Text>My Name: {name}</Text>
      <Text style={{marginTop: 10}}>Enter Your Email</Text>
      <TextInput
        placeholder="Email Address"
        autoCorrect={false}
        value={email}
        onChangeText={emailValue => setEmail(emailValue)}
        style={styles.InputText}
      />
      <Text>My Email: {email}</Text>
      <Text style={{marginTop: 10}}>Enter Password</Text>
      <TextInput
        placeholder="Password"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
        onChangeText={passValue => setPassword(passValue)}
        style={styles.InputText}
      />
      {password.length < 8 ? null : (
        <Text style={{color: 'green'}}>Your Password is Corrected ✅</Text>
      )}
      <Text>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  InputText: {
    borderWidth: 1,
    marginTop: 10,
  },
});

export default InputText;
