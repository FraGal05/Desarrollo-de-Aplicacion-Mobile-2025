import { StyleSheet, Text, View } from "react-native";
import MovieInfo from "../components/movieInfo";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function movie() {
  const { image, name, rating, summary, link } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name || "Película",
    });
  }, [name]);

  return (
    <View style={styles.container}>
      <MovieInfo
        image={image}
        name={name}
        rating={rating}
        summary={summary}
        link={link}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
