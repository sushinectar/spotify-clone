import React from "react";
import { StyleSheet ,View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../components/themeContext";

import { Link } from "expo-router";

export default function HomePage() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "white" : "black",
    },
    text: {
      color: theme === "light" ? "black" : "white",
      fontSize: 24,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo! O tema é {theme}</Text>
      <Link className="w-96 h-28" href={"/started"}>
        <View>
          <TouchableOpacity className="btn-bg flex justify-center items-center w-96 h-28">
            <Text className="text-2xl text-zinc-50 font-bold">Voltar Tudo</Text>
          </TouchableOpacity>
        </View>
      </Link>
    </View>
  );
}
