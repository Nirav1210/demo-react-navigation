import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native-elements';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

function BurgerMenu(props)  {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem 
                icon={({ color, size }) => <Ionicons name='md-log-out' size={size} color={color} />} 
                label={() => {return <Text>{'Log Out'}</Text>}}
                onPress={() => {}} 
            />
        </DrawerContentScrollView>
    );
}

export default BurgerMenu;