import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import { TopNav } from "../components/TopNav";
import { TopNavSecond } from "../components/TopNavSecond";
import { Stories } from "../components/Stories";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TopNav />
      <TopNavSecond />
      <Stories />
      <Text style={tw``}></Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
