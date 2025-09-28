import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function MovieTitle ({image, name, rating, link}){
    return (
        <View style={styles.container}>
            <View style={styles.movie}>
                    <Image
                    source={{uri: image}}
                    style={styles.image}
                    />
                    <View style={styles.itemContainer}>
                      <Text style={styles.item}>{name}</Text>
                      <Text style={styles.item}>Califación: <Text style={styles.score}>{rating}/10</Text> </Text>
                      <Link href={link} style={styles.url}>{link}</Link>
                    </View>
                </View>
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
    borderRadius: 10
  },
  item: {
    fontSize: 16,
    padding: 5,
    margin: 5
  },
  itemContainer:{
    flex: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    width:300,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  image: {
    flex: 1,
    alignContent:"center",
    height: 350,
    width: 300,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  url: {
    fontSize:10,
    color:"#42c",
    textDecorationLine:"underline"
  },
  score: {
    color:"#DAA520",
    textDecorationLine:"underline"
  }
})