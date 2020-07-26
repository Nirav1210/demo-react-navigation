import styles from '../styles';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

function SettingsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        Platform.select({
          ios: (<Button onPress={() => {}} title="Logout" type="clear" />),
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