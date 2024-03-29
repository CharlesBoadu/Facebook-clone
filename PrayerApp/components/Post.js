import { ScrollView, SafeAreaView, View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Post = () => {
  const posts = [
    {
      id: 1,
      name: "Joel Osteen",
      hours: "2 hrs",
      image: "https://picsum.photos/600/600",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. QuisquamLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    },
    {
      id: 2,
      name: "Charles Boadu",
      hours: "3 hrs",
      image: "https://picsum.photos/500",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    },
    {
      id: 3,
      name: "Frank Boadu",
      hours: "4 hrs",
      image: "https://picsum.photos/400/300",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    },
    {
      id: 4,
      name: "Richmond Boadu",
      hours: "5 hrs",
      image: "https://picsum.photos/300",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    },
    {
      id: 5,
      name: "Jeremiah Quaynor",
      hours: "6 hrs",
      image: "https://picsum.photos/300/300",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    },
  ];

  return (
    <ScrollView>
      {posts.map((post) => (
        <View
          key={post.id}
          style={tw`border-t-8 border-b-8 border-gray-200 pt-4`}
        >
          <View style={tw`flex-row justify-between mr-2 ml-2`}>
            <View style={tw`flex-row`}>
              <View style={tw`bg-gray-200 rounded-full h-12 w-12 mr-2`}>
                <Image
                  source={{ uri: post.image }}
                  style={tw`w-12 h-12 rounded-full`}
                />
              </View>
              <View style={tw`my-auto`}>
                <Text style={tw`font-semibold`}>{post.name}</Text>
                <Text style={tw`text-gray-500`}>{post.hours}</Text>
              </View>
            </View>
            <View style={tw`flex-row`}>
              <View style={tw`mr-5`}>
                <Ionicons name="ellipsis-horizontal" size={30} />
              </View>
              <View>
                <Ionicons name="close" size={30} />
              </View>
            </View>
          </View>
          <View style={tw`m-4`}>
            <Text style={tw`leading-5`}>{post.content}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
