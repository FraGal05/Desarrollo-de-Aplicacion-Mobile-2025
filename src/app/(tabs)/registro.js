import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';


export default function Registro() {
  const { register, error } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


  const handleRegister = () => {
    console.log(`${name}, ${username}, ${password}`);
      register({ username, password, name});
  }

  return (
    <View style={styles.container}>
        <StatusBar></StatusBar>
      <View style={styles.form}>

        <Text style={styles.titleText}>Register</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} keyboardType='default' placeholder='username'></TextInput>
        <TextInput style={styles.input} value={name} onChangeText={setName} keyboardType="default" placeholder='name'></TextInput>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder='password'></TextInput>

        <View style={styles.button}>
          <Button color="#000000" title="Register" onPress={handleRegister}/>
        </View>
        
      </View>
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
  titleText: {
    margin: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    height: 400,
    padding: 10,
    width: 250,
    borderWidth:1,
    borderColor: "#808080",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    height: 40,
    width: 200,
    borderColor: "#808080",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  button: {
    color: "#fff",
    width: 200,
    margin:10
  }
});