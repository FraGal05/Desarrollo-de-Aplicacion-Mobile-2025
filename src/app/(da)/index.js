import { Alert, Button, StyleSheet, Text, TextInput, View, StatusBar, FlatList } from 'react-native';
import usePokemons from '../../hooks/usePokemons';

export default function App() {
const { pokemons } = usePokemons(20);
  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Hola Mundo !</Text>


      <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => 
      <Text>{item.name}</Text>}
      />

      <StatusBar style="auto"/>
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