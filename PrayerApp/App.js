import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "./screens/HomeScreen";
import { FriendsScreen } from "./screens/FriendsScreen";
import { WatchScreen } from "./screens/WatchScreen";
import { MenuScreen } from "./screens/MenuScreen";
import { GamingScreen } from "./screens/GamingScreen";
import { NotificationsScreen } from "./screens/NotificationScreen";
import { TopNav } from "./components/TopNav";
import { TopNavSecond } from "./components/TopNavSecond";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#2290e5",
        inactiveTintColor: "gray",
        headerShown: false,
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
    <>
      <TopNav />
      <TopNavSecond />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
