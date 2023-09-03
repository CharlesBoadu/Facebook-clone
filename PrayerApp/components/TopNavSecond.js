import { Image, SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";


export const TopNavSecond = () => {
  return (
    <SafeAreaView style={tw`mt-2 mr-3 ml-2`}>
        <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-row`}>
                <View style={tw`bg-gray-200 rounded-full h-16 w-16 mr-2`}>
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  style={tw`h-16 w-16 rounded-full`}
                />
                </View>
                <View>
                    <Text style={tw`font-bold text-base my-auto`}>What's on your mind?</Text>
                </View>
            </View>
            <View style={tw`my-auto`}>
              <Ionicons name="image" size={30} color={'#0fc430'}/>
            </View>
        </View>
    </SafeAreaView>
  )
}
