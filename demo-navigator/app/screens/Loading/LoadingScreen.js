import styles from '../styles';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

function LodingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the LodingScreen.</Text>
      <Button
        title="Go to Home"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('MainTabs')}
      />
    </View>
  );
}

export default LodingScreen;