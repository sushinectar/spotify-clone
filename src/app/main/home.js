import React from "react";
import { useState } from "react/cjs/react.development";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../../components/themeContext";

import { Link } from "expo-router";

export default function signIn() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "white" : "black",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}
