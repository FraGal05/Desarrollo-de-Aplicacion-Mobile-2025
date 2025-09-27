import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import useMovie from '../hooks/useMovie';
import { Link } from "expo-router";

export default function MovieTitle (){
    const { movies } = useMovie("Batman");
    return (
        <View style={styles.container}>
            <FlatList
            data={movies}
            keyExtractor={(item) => item.show.id}
            renderItem={({ item }) => (
                <View style={styles.movie}>
                    <Image
                    source={{uri:item.show.image?.medium}}
                    style={styles.image}
                    />
                    <Text style={styles.item}>{item.show.name}</Text>
                    <Text style={styles.item}>{item.show.rating.average}</Text>
                    <Link href={item.show.url} style={styles.url}>{item.show.url}</Link>
                </View>
                )}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movie: {
    alignItems:"center",
    margin: 10,
    padding: 10,
    backgroundColor:"#cececeff",
  },
    item: {
    fontSize: 16,
    padding: 5,
    margin: 10
  },
  image: {
    alignContent:"center",
    height: 350,
    width: 250
  },
  url: {
    fontSize:10,
    color:"#42c",
    textDecorationLine:"underline"
  }
})