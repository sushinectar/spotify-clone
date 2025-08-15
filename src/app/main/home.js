import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../../components/themeContext";

export default function signIn() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("News");
  const [activeOp, setActiveOp] = useState("");
  const [activeSu, setActiveSu] = useState("");
  const [activeEf, setActiveEf] = useState("");
  const [activeJd, setActiveJd] = useState("");
  const [activeWc, setActiveWc] = useState("");
  const [activeMm, setActiveMm] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "#eee" : "black",
    },
    bannerBillie: {
      width: 360,
      height: 120,
      borderRadius: 30,
      backgroundColor: "#42c83c",
    },
    imgBannerBillie: {
      position: "absolute",
      top: -63,
    },
    category: {
      fontWeight: "600",
      fontSize: 20,
      color: "#888",
    },
    activeCategory: {
      color: "black",
      borderBottomWidth: 4,
      borderBottomColor: "#42c83c",
    },
    iconActive: {
      tintColor: "#42c83c",
    },
    home: {
      tintColor: "#42c83c",
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
          >
            <View className="flex flex-row items-center justify-center gap-24 mt-6">
              <Image
                className="w-8 h-8"
                source={require("../../../assets/search.png")}
              />
              <Image
                className=""
                source={require("../../../assets/vector-sm.png")}
              />
              <Image
                className="w-8 h-8"
                source={require("../../../assets/dots.png")}
              />
            </View>
            <View>
              <View
                className="flex flex-row mt-8 px-8 py-4"
                style={styles.bannerBillie}
              >
                <View className="flex flex-col gap-1">
                  <Text className="font-semibold text-sm text-zinc-50">
                    New Album
                  </Text>
                  <Text className="font-bold text-xl text-zinc-50">
                    Happier Than{"\n"}Ever
                  </Text>
                  <Text className="text-md text-zinc-50">Billie Eilish</Text>
                </View>
                <Image
                  style={styles.imgBannerBillie}
                  source={require("../../../assets/banner-billie.png")}
                />
              </View>
            </View>

            <View className="flex items-center mx-2 my-10">
              <View className="flex flex-row gap-16">
                <Text
                  style={[
                    styles.category,
                    selectedCategory === "News" && styles.activeCategory,
                  ]}
                  onPress={() => setSelectedCategory("News")}
                >
                  News
                </Text>
                <Text
                  style={[
                    styles.category,
                    selectedCategory === "Video" && styles.activeCategory,
                  ]}
                  onPress={() => setSelectedCategory("Video")}
                >
                  Video
                </Text>
                <Text
                  style={[
                    styles.category,
                    selectedCategory === "Artists" && styles.activeCategory,
                  ]}
                  onPress={() => setSelectedCategory("Artists")}
                >
                  Artists
                </Text>
              </View>
            </View>

            <View>
              <SafeAreaProvider>
                <SafeAreaView>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate="fast"
                  >
                    <View className="flex-row w-14 gap-4">
                      <View className="gap-1">
                        <Image
                          className="mb-3"
                          source={require("../../../assets/billie-bad.png")}
                        />
                        <Text className="font-bold ml-2">Bad Guy</Text>
                        <Text className="ml-2">Billie Eilish</Text>
                      </View>
                      <View>
                        <Image
                          className="mb-4"
                          source={require("../../../assets/drake-scorp.png")}
                        />
                        <Text className="font-bold ml-2">Scorpion</Text>
                        <Text className="ml-2">Drake</Text>
                      </View>
                      <View>
                        <Image
                          className="mb-4"
                          source={require("../../../assets/billie-when.png")}
                        />
                        <Text className="font-bold ml-2">i love you</Text>
                        <Text className="ml-2">Billie Eilish</Text>
                      </View>
                    </View>
                  </ScrollView>
                </SafeAreaView>
              </SafeAreaProvider>
            </View>
            <View className="mt-12">
              <View className="flex-row justify-around items-center gap-60">
                <Text className="font-bold text-xl">Playlist</Text>
                <TouchableOpacity>
                  <Text className="text-sm">See more</Text>
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mt-6 mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-20">
                  <Text className="font-bold text-lg">Oposição</Text>
                  <Text className="text-sm">sushi, TKKONOY, Luv</Text>
                </View>
                <Text className="mr-14">2:11</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveOp((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeOp === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-28">
                  <Text className="font-bold text-lg">Suíte 44</Text>
                  <Text className="text-sm">sushi, TWELVE</Text>
                </View>
                <Text className="ml-2 mr-14">2:28</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveSu((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeSu === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-20">
                  <Text className="font-bold text-lg">Eles Falam</Text>
                  <Text className="text-sm">TKKONOY, Nebrugg</Text>
                </View>
                <Text className="ml-2 mr-14">2:24</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveEf((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeEf === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-16">
                  <Text className="font-bold text-lg">Japanese Denim</Text>
                  <Text className="text-sm">Daniel Caesar</Text>
                </View>
                <Text className="ml-3 mr-14">4:31</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveJd((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeJd === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-20">
                  <Text className="font-bold text-lg">White Christmas</Text>
                  <Text className="text-sm">Frank Sinatra</Text>
                </View>
                <Text className="mr-14">2:38</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveWc((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeWc === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="flex-row justify-around items-center mb-8">
                <View className="items-center justify-center w-10 h-10 mr-6 rounded-full bg-zinc-200">
                  <Image
                    className="w-4 h-4"
                    source={require("../../../assets/play.png")}
                  />
                </View>
                <View className="mr-32">
                  <Text className="font-bold text-lg">Mal de Mim</Text>
                  <Text className="text-sm">Djavan</Text>
                </View>
                <Text className="mr-14">3:17</Text>
                <TouchableOpacity
                  className="py-2 pl-2"
                  onPress={() =>
                    setActiveMm((prev) =>
                      prev === "love-fill" ? "" : "love-fill"
                    )
                  }
                >
                  <Image
                    className="w-6 h-6"
                    style={{
                      tintColor: activeMm === "love-fill" ? "#42c83c" : "#888",
                    }}
                    source={require("../../../assets/love-fill.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      <View className="flex-row justify-center items-center w-screen h-24 gap-20 bg-zinc-50">
        <Image
          className="w-8 h-8"
          style={styles.home}
          source={require("../../../assets/home.png")}
        />
        <Image
          className="w-8 h-8"
          source={require("../../../assets/search.png")}
        />
        <Image
          className="w-8 h-8"
          source={require("../../../assets/love.png")}
        />
        <Image
          className="w-8 h-8"
          source={require("../../../assets/user.png")}
        />
      </View>
    </View>
  );
}
