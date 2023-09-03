import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";

export const WatchScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white flex-1 justify-center items-center`}>
        <Text style={tw`text-black text-2xl font-bold`}>Watch Screen</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  };