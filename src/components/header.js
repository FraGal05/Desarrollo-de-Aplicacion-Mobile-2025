import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Buscador de TV Maze</Text>
      <Text style={styles.subtitle}>
        Busca tus series o películas favoritas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#ccc",
    marginTop: 5,
  },
});
