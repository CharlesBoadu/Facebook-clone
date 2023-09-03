import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import { TopNav } from "../components/TopNav";
import { TopNavSecond } from "../components/TopNavSecond";
import { Stories } from "../components/Stories";
import { Post } from "../components/Post";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TopNav />
      <TopNavSecond />
      <Stories />
      <Text style={tw``}></Text>
      <Post />
    </SafeAreaView>
  );
};
