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
import { useMovie, searchMovie } from "../../hooks/useMovie";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/header";

export default function App() {
  const [valor, setValor] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const { defaultShows } = useMovie(page);
  const { shows } = searchMovie(search);
  const prevNum = page - 1;
  const nextNum = page + 1;

  if (page < 0) {
    setPage(0);
  }

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
        <Pressable style={styles.rightButton} onPress={handleSearch}>
          <Ionicons color={"#fff"} name="search-outline" size={20} />
          <Text style={styles.buttonText}>Buscar</Text>
        </Pressable>
      </View>
      <View style={styles.nav}>
        <Pressable
          style={styles.leftButton}
          onPress={() => {
            setPage(prevNum);
          }}
        >
          <Text>◄</Text>
        </Pressable>
        <View style={styles.pageNumContain}>
          <Text style={styles.pageNum}>{page}</Text>
        </View>
        <Pressable
          style={styles.rightButton}
          onPress={() => {
            setPage(nextNum);
          }}
        >
          <Text>►</Text>
        </Pressable>
      </View>
      {!search ? (
        <FlatList
          data={defaultShows}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieTitle
              image={item.image?.medium}
              name={item.name}
              rating={item.rating?.average || "0"}
            />
          )}
        />
      ) : (
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
      )}
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
  nav: {
    flexDirection: "row",
    margin: 1,
  },
  pageNumContain: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 50,
    width: 50,
  },
  pageNum: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
  leftButton: {
    borderColor: "#000",
    backgroundColor: "#ce2000",
    borderWidth: 1,
    borderColor: "#000",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: 50,
    alignItems: "center",
    padding: 10,
    gap: 5,
    flexDirection: "row",
  },
  rightButton: {
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
