import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import styles from '../screens/styles';
import { Platform } from "react-native";
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text } from 'react-native-elements';


const Stack = createStackNavigator();

function HomeStack() {
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title: "Home",
                headerStyle: styles.header,
            }}
        />
        <Stack.Screen 
            name="Detail" 
            component={DetailScreen}
            options={{
                title: "Detail",
                headerStyle: styles.header,
            }}
        />
        <Stack.Screen 
            name="Options" 
            component={OptionsScreen}
            options={{
                title: "Options",
                headerStyle: styles.header,
            }} 
        />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SettingsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerStyle: styles.header,
                }}
            />
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
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
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="SettingsStack" component={SettingsStack} />
      </Drawer.Navigator>
    ),
});

function RootSwitch() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Loading" 
        component={LoadingScreen} 
        options={{
            title: "Loading",
            headerStyle: styles.header,
        }}
    />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default RootSwitch;
