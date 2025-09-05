import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function LoginView() {
  return (
    <View style={styles.container}>
        <StatusBar style="dark"></StatusBar>
      <View style={styles.form}>
        <Text style={styles.titleText}>Login</Text>
        <TextInput style={styles.input} keyboardType='default' placeholder='username'></TextInput>
        <TextInput style={styles.input} placeholder='password'></TextInput>

        <View style={styles.button}>
          <Button color="#000000" title="Login" onPress={() => Alert.alert('Ha ingresado con exito! 👍')}/>
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
  },
  button: {
    color: "#fff",
    width: 200,
    margin:10
  }
});