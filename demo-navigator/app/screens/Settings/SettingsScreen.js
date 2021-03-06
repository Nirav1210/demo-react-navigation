import styles from '../styles';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

function SettingsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Settings",
      headerStyle: styles.header,
      headerLeft: () => (
        Platform.select({
          ios: (<Button onPress={() => {}} title="Log Out" type="clear" />),
          android: null
        })
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>This is the SettingsScreen.</Text>
      <Button
        title="Go Back"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default SettingsScreen;