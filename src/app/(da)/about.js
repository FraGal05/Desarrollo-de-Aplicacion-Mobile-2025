import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Este proyecto fue desarrollado bajo las siguientes condiciones:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
