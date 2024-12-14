import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="flex m-auto">
      <Link href={"/start/started"}>
        <View> 
          <Image source={require("../../assets/vector-md.png")} />
        </View>
      </Link>
    </View>
  );
}
