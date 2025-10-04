import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export default function MovieTitle({ image, name, rating, summary, link }) {
  return (
    <Link
      href={{
        pathname: "/movie",
        params: { image, name, rating, summary, link },
      }}
      asChild
    >
      <Pressable>
        <View style={styles.container}>
          <View style={styles.movie}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{name}</Text>
              <Text style={styles.item}>
                Califación:{" "}
                <Text style={styles.score}>
                  {rating}/10 {"\u2605"}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movie: {
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#000000ff",
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 25,
    padding: 5,
    margin: 5,
  },
  item: {
    fontSize: 16,
    padding: 5,
    margin: 5,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: 300,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
  },
  image: {
    flex: 1,
    alignContent: "center",
    height: 350,
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
  score: {
    color: "#DAA520",
    textDecorationLine: "underline",
  },
});
