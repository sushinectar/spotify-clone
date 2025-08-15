import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { useTheme } from "../../components/themeContext";

export default function mode() {
  const { theme, toggleTheme } = useTheme();

  const isLightTheme = theme === "light";

  return (
    <ImageBackground
      source={require("../../../assets/mode-bg.png")}
      className="background flex object-cover w-screen h-screen"
      style={[{ backgroundColor: isLightTheme ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.1)" }]}
    >
      <Image
        className="m-auto mt-20"
        source={require("../../../assets/vector-md.png")}
      />
      <View className="flex justify-center items-center mb-20 gap-16">
        <View className="flex items-center gap-12">
          <Text className="text text-3xl font-bold" style={{ color: "white" }}>
            Choose mode
          </Text>
          <View className="flex flex-row m-auto gap-24">
            <TouchableOpacity
              className="flex items-center gap-6"
              onPress={() => toggleTheme("light")}
            >
              <Image
                className="w-20 h-20 p-6 rounded-full bg-zinc-600"
                source={require("../../../assets/light.png")}
              />
              <Text className="text-lg text-zinc-50">Light Mode</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex items-center gap-6"
              onPress={() => toggleTheme("dark")}
            >
              <Image
                className="w-20 h-20 p-6 rounded-full bg-zinc-600"
                source={require("../../../assets/dark.png")}
              />
              <Text className="text-lg text-zinc-50">Dark Mode</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Link className="w-96 h-28" href={"../login/sign"}>
          <View>
            <TouchableOpacity className="btn-bg flex justify-center items-center w-96 h-28">
              <Text className="text-2xl text-zinc-50 font-bold">Continue</Text>
            </TouchableOpacity>
          </View>
        </Link>
      </View>
    </ImageBackground>
  );
}
