import { SafeAreaView, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Post = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex-row justify-between mr-2 ml-2`}>
        <View style={tw`flex-row`}>
            <View style={tw`bg-gray-200 rounded-full h-12 w-12 mr-2`}></View>
            <View style={tw`my-auto`}>
                <Text style={tw`font-semibold`}>Name</Text>
                <Text style={tw`text-gray-200`}>Hours</Text>
            </View>
        </View>
        <View style={tw`flex-row`}>
            <View style={tw`mr-5`}>
              <Ionicons name="ellipsis-horizontal" size={30}/>
            </View>
            <View>
              <Ionicons name="close" size={30}/>
            </View>
        </View>
      </View>
      <View style={tw`m-4`}>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Text>
      </View>
    </SafeAreaView>
  );
};
