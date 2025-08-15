import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Link } from "expo-router";

export default function started() {
  return (
    <ImageBackground
      source={require("../../../assets/started-bg.png")}
      className="background flex object-cover w-screen h-screen"
    >
      <Image
        className="m-auto mt-20"
        source={require("../../../assets/vector-md.png")}
      ></Image>
      <View className="flex m-auto mb-20">
        <View className="flex justify-center items-center">
          <View className="flex flex-col items-center justify-center w-96 gap-8">
            <Text className="text text-zinc-200 text-3xl font-bold">
              Enjoy Listening To Music
            </Text>
            <Text className="text-center text-zinc-500 text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
            </Text>
            <Link className="w-96 h-28" href={"./mode"}>
              <View>
                <TouchableOpacity className="btn-bg flex justify-center items-center w-96 h-28">
                  <Text className="text-2xl text-zinc-50 font-bold">
                    Get Started
                  </Text>
                </TouchableOpacity>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
