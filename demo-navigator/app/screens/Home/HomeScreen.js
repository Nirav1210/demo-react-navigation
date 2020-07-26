import styles from '../styles';
import React from 'react';
import { View } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerStyle: styles.header,
      headerLeft: () => (
        Platform.select({
          ios: null,
          android: (
            <Icon
              name="md-menu"
              type="ionicon"
              containerStyle={styles.icon}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          )
        })
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text h5>This is the HomeScreen.</Text>
      <Button
        title="Go to Details"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to Options"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Options')}
      />
    </View>
  );
}

export default HomeScreen;