import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import MovieTitle from '../../components/movieTitle';
import useMovie from '../../hooks/useMovie';

export default function App() {
  const { movies } = useMovie("Batman");
  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Hola Mundo !</Text>

       <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => (
          <MovieTitle
            image={item.show.image?.medium}
            name={item.show.name}
            rating={item.show.rating?.average || "0"}
            link={item.show.url}
          />
        )}
        />

      <StatusBar style="auto"/>
    </View>
  );
}

export const styles = StyleSheet.create({
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