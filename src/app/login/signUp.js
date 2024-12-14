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

export default function signUp() {
  const { theme } = useTheme();
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 322,
      backgroundColor: theme === "light" ? "white" : "black",
    },
    toggleButton: {
      position: "absolute",
      right: 15,
      top: 200,
    },
    toggleImage: {
      width: 44,
      height: 44,
      padding: 10,
    },
    setPassword: {
      color: "black",
    },
    recovery: {
      position: "absolute",
      top: -2,
      left: 12,
    },
    signBtn: {
      marginTop: -70,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Link
          className="absolute top-16 left-8 rounded-full"
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
        <Image
          className="m-auto mt-20"
          source={require("../../../assets/vector-sm.png")}
        />
      </View>
      <View className="m-auto">
        <Text
          className="text-4xl text-center font-semibold mb-12"
          style={[
            {
              color:
                theme === "light"
                  ? "rgba(0, 0, 0, 0.8)"
                  : "rgba(255, 255, 255, 0.1)",
            },
          ]}
        >
          Register
        </Text>
        <View className="mb-32">
          <SafeAreaProvider>
            <SafeAreaView className="flex gap-6">
              <TextInput
                className="h-4 border border-zinc-400 p-10 rounded-3xl"
                style={styles.input}
                onChangeText={onChangeUsername}
                placeholder="Enter Username"
                placeholderTextColor="#888"
              />
              <TextInput
                className="h-4 border border-zinc-400 p-10 rounded-3xl"
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="Enter Email"
                placeholderTextColor="#888"
              />
              <TextInput
                className="h-4 border text-zinc-950 border-zinc-400 p-10 rounded-3xl"
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!isPasswordVisible)}
                style={styles.toggleButton}
              >
                <Image
                  source={
                    isPasswordVisible
                      ? require("../../../assets/hide.png")
                      : require("../../../assets/hide.png")
                  }
                  style={styles.toggleImage}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaProvider>
          <View>
            <Link style={styles.recovery} href={"./recovery"}>
              <View>
                <Text className="text-zinc-500 font-bold">
                  Recovery Password
                </Text>
              </View>
            </Link>
          </View>
        </View>
        <View style={styles.signBtn}>
          <Link href={"../main/home"}>
            <View>
              <TouchableOpacity className="btn-bg flex justify-center items-center w-96 h-28">
                <Text className="text-2xl text-zinc-50 font-bold">
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </Link>
          <View className="flex flex-row gap-2 mt-6 mb-12">
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: 152,
                marginBottom: 6,
              }}
            ></View>
            <Text>Or</Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: 152,
                marginBottom: 6,
              }}
            ></View>
          </View>
        </View>
        <View className="flex flex-row justify-center align-center items-center gap-24">
          <Link href={"../main/home"}>
            <Image
              className="mt-12"
              source={require("../../../assets/google-icon.png")}
            />
          </Link>
          <Link href={"../main/home"}>
            <Image
              className="mt-12"
              source={require("../../../assets/iphone-icon.png")}
            />
          </Link>
        </View>
        <View className="flex flex-row items-center m-auto mt-14 gap-1 z-10">
          <Text>Do You Have An Account?</Text>
          <Link href={"./signIn"}>
            <View>
              <Text className="text-blue-500 font-bold">Sign In</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
