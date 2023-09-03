import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export const Stories = (props) => {
  const data = [
    {
      id: 1,
      name: "Charles Boadu",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Jeremiah Quaynor",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Samuel Kissi",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Gifty Sowah",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Andrews Darko",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <SafeAreaView style={tw`mt-4`}>
      <ScrollView horizontal style={`rounded-lg h-20 w-20 bg-black`}>
        {data.map((item) => (
            <View
            key={item.id}
            style={tw`w-32 h-40 bg-gray-200 rounded-xl ml-4`}
          >
            <View style={tw`w-8 h-8 rounded-full bg-white z-10 m-4`}></View>
            <Image
              source={{ uri: item.image }}
              style={tw`w-32 h-full rounded-xl -mt-16`}
            />
            <Text style={tw`-top-12 ml-2 text-white`}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
