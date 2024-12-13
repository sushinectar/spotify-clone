import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function home() {
  return (
    <View className="flex m-auto">
      <Link href={"/started"}>
        <View> 
          <Image source={require("../../assets/vector-md.png")} />
        </View>
      </Link>
    </View>
  );
}
