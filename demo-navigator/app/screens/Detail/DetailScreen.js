import styles from '../styles';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';


function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the DetailScreen.</Text>
      <Button
        title="Go Back"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default DetailScreen;