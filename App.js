import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  
  const [number1, setNumber1] = React.useState(null);
  const [number2, setNumber2] = React.useState(null);
  const [result, setResult] = React.useState(0);

  const buttonPlus= () =>{
    if (number1 === null) {
      setResult(0 + parseInt(number2));
    } else if (number2 === null) {
      setResult(parseInt(number1) + 0);
    } else {
      setResult(parseInt(number1) + parseInt(number2));
    }
    setNumber1(null);
    setNumber2(null);
  }
  const buttonMinus= () =>{
    if (number1 === null) {
      setResult(0 - parseInt(number2));
    } else if (number2 === null) {
      setResult(parseInt(number1) - 0);
    } else {
      setResult(parseInt(number1) - parseInt(number2));
    }
    setNumber1(null);
    setNumber2(null);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}}
      onChangeText={number1=> setNumber1(number1)}
      value={number1}
      keyboardType="numeric"
      />
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}}
      onChangeText={number2=> setNumber2(number2)}
      value={number2}
      keyboardType="numeric"
      />
      <Button onPress={buttonPlus}title="+"/>
      <Button onPress={buttonMinus}title="-"/>
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
