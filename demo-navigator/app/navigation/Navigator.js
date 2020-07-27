import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import { Platform } from "react-native";
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-elements';
import BurgerMenu from '../components/BurgerMenu'

const Stack = createStackNavigator();

function HomeStack() {
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SettingsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      );
}

const MainTabs =
  Platform.select({
    ios: () => (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName = 'ios-home';
                } else if (route.name === 'SettingsStack') {
                    iconName = 'ios-settings';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarLabel: () => {
              let label;

              if (route.name === 'HomeStack') {
                  label = 'Home';
              } else if (route.name === 'SettingsStack') {
                  label = 'Settings';
              }

              return <Text>{label}</Text>;
          }
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} />
      </Tab.Navigator>
    ),
    android: () => (
      <Drawer.Navigator
        screenOptions={({ route }) => ({
            drawerIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName = 'md-home';
                } else if (route.name === 'SettingsStack') {
                    iconName = 'md-cog';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            drawerLabel: () => {
                let label;

                if (route.name === 'HomeStack') {
                    label = 'Home';
                } else if (route.name === 'SettingsStack') {
                    label = 'Settings';
                }

                return <Text>{label}</Text>;
            }
        })}
        drawerContent={(props) => <BurgerMenu {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="SettingsStack" component={SettingsStack} />
      </Drawer.Navigator>
    ),
});

function RootSwitch() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default RootSwitch;
