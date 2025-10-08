import { Link } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MovieInfo({ image, name, rating, summary, link }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.text}>
        <Text style={styles.superText}>{name}</Text>
        <Text style={styles.rating}>
          Califación:{" "}
          <Text>
            {rating}/10 {"\u2605"}
          </Text>
        </Text>
        <Text style={styles.summaryText}>{summary}</Text>
        <Link href={link} style={styles.url}>
          {link}
        </Link>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#be2929",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 350,
    width: 250,
    borderWidth: 5,
    borderColor: "#000",
  },
  text: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  superText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  summaryText: {
    color: "#000",
    fontWeight: "black",
    fontWeight: "bold",
    fontSize: 12,
    margin: 10,
    padding: 10,
  },
  rating: {
    color: "#fff",
  },
  url: {
    fontSize: 10,
    color: "#fff",
    textDecorationLine: "underline",
  },
});
