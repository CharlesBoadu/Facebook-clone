import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";

export const TopNav = () => {
    return (
      <SafeAreaView style={tw`bg-white h-fit`}>
        <View style={tw`flex-row justify-between m-2`}>
          <View style={tw`flex-1`}>
            <Text style={tw`text-3xl text-blue-500 p-1 font-semibold`}>facebook</Text>
          </View>
          <View style={tw`flex-2 flex-row`}>
            <View style={tw`bg-gray-200 rounded-full px-2 py-2 mr-2`}>
              <Ionicons name="add-outline" size={30} />
            </View>
            <View style={tw`bg-gray-200 rounded-full px-2 py-2 mr-2`}>
              <Ionicons name="search-outline" size={30} />
            </View>
            <View style={tw`bg-gray-200 rounded-full px-2 py-2`}>
              <Ionicons name="arrow-redo-circle-outline" size={30} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };