import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.titleText}>Login</Text>
        <TextInput style={styles.input} keyboardType='email-address' placeholder='email address'></TextInput>
        <TextInput style={styles.input} placeholder='password'></TextInput>
        <Button title='Login'/>
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
    height: 350,
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
  }
});
