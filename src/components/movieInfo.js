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
        <Text style={styles.url}>{link}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c20",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#fff",
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
    color: "#fff",
    fontWeight: "bold",
    margin: 30,
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
