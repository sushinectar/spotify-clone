import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function mode() {
  return (
    <ImageBackground
      source={require("../../assets/mode-bg.png")}
      style={styles.background}
    >
      <Image
        style={styles.logo}
        source={require("../../assets/vector.png")}
      ></Image>
      <View style={styles.container}>
        <Text style={styles.text}>Choose mode</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
