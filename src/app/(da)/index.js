import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import MovieTitle from "../../components/movieTitle";
import useMovie from "../../hooks/useMovie";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/header";

export default function App() {
  const [valor, setValor] = useState("");
  const [search, setSearch] = useState("Star Wars");
  const { shows } = useMovie(search);

  const handleSearch = () => {
    setSearch(valor);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <Header />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          placeholder="Busque su programa..."
        />
        <Pressable style={styles.button} onPress={handleSearch}>
          <Ionicons color={"#fff"} name="search-outline" size={20} />
          <Text style={styles.buttonText}>Buscar</Text>
        </Pressable>
      </View>

      <FlatList
        data={shows}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => (
          <MovieTitle
            image={item.show.image?.medium}
            name={item.show.name}
            rating={item.show.rating?.average || "0"}
          />
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchContainer: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    backgroundColor: "#ccc",
  },
  input: {
    height: 50,
    padding: 10,
    width: 250,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  button: {
    borderColor: "#000",
    backgroundColor: "#ce2000",
    borderWidth: 1,
    borderColor: "#000",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 50,
    alignItems: "center",
    padding: 10,
    gap: 5,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
