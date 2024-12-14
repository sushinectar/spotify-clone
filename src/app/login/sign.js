import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../../components/themeContext";

import { Link } from "expo-router";

export default function sign() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "light" ? "white" : "black",
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Image
          className="absolute top-0 right-0"
          source={require("../../../assets/union-top.png")}
        />
        <Link
          className="absolute top-16 left-8 z-20 rounded-full"
          href={"../start/mode"}
          style={[
            {
              backgroundColor:
                theme === "light"
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.1)",
            },
          ]}
        >
          <View>
            <TouchableOpacity className="flex justify-center items-center w-10 h-10">
              <Image className="" source={require("../../../assets/arrow.png")} />
            </TouchableOpacity>
          </View>
        </Link>
      </View>
      <View className="flex h-screen justify-center items-center z-10">
        <View className="flex items-center mb-28 gap-8">
          <Image
            className="m-auto mt-50 mb-10"
            source={require("../../../assets/vector-lg.png")}
          />
          <View className="flex items-center gap-6 w-96">
            <Text
              className="text-3xl font-semibold"
              style={[
                {
                  color:
                    theme === "light"
                      ? "rgba(0, 0, 0, 0.7)"
                      : "rgba(255, 255, 255, 1)",
                },
              ]}
            >
              Enjoy Listening To Music
            </Text>
            <Text className="text-lg text-zinc-400 font-light">
              Spotify is a proprietary Swedish audio streaming and media
              services provider
            </Text>
          </View>
          <View className="flex flex-row items-center m-auto gap-20">
            <Link href={"./signUp"}>
              <View>
                <TouchableOpacity className="btn-bg flex justify-center items-center w-44 h-20">
                  <Text className="text-xl text-zinc-50 font-semibold">
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </Link>
            <Link href={"./signIn"}>
              <View>
                <TouchableOpacity className="flex justify-center items-center w-24 h-12">
                  <Text
                    className="text-xl text-zinc-700 font-semibold"
                    style={[
                      {
                        color:
                          theme === "light"
                            ? "rgba(0, 0, 0, 0.7)"
                            : "rgba(255, 255, 255, 1)",
                      },
                    ]}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </Link>
          </View>
        </View>
      </View>
      {/* Imagem de fundo */}
      <Image
        className="absolute bottom-0 left-0"
        source={require("../../../assets/billie-sign.png")}
      />
      <Image
        className="absolute bottom-0 right-0"
        source={require("../../../assets/union-bot.png")}
      />
    </View>
  );
}
