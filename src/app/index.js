import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import usePokemons from '../hooks/usePokemons';
import { Link } from 'expo-router';

export default function App() {
const { pokemons } = usePokemons(151);
  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Hola Mundo!</Text>


      <Link href="/about" style={styles.titleText}>About</Link>
      <Link href="/(tabs)/perfil" style={styles.titleText}>Perfil</Link>
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
  pkmnText: {
    gap: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    height: 350,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
