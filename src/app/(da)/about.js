import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Este proyecto fue desarrollado bajo las siguientes condiciones:
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.littleText}>
          Crear una aplicacion usando React Native que muestre un listado de
          peliculas usando la API https://www.tvmaze.com/api#show-search
        </Text>
        <Text style={styles.littleText}>Esta aplicacion debera:</Text>
        <Text style={styles.littleText}>
          Mostrar un listado por pelicula o series. Cada pelicula debe mostrar:
          imagen de cartelera, nombre, calificacion, y un enlace para redirigir
          a la pagina de informacion de la pelicula.
        </Text>
        <Text style={styles.littleText}>
          La calificacion debe mostrarse siguiendo los parametros de la api, y
          con algun componente visual como estrellas o iconografia a gusto.
        </Text>
        <Text style={styles.littleText}>
          Algun componente header que indique de que trata la aplicacion. Con un
          titulo explicativo alcanza.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 2,
  },
  littleText: {
    color: "#fff",
    margin: 2,
    fontSize: 10,
  },
});
