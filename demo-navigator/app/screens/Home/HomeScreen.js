import styles from '../styles';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';


function HomeScreen({ navigation }) {
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