import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Home Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const FriendsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Friends Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const WatchScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Watch Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const MenuScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Menu Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const GamingScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Gaming Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue-500 flex-1 justify-center items-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>Settings Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#2290e5",
        inactiveTintColor: "gray",
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gaming"
        component={GamingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="game-controller-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
