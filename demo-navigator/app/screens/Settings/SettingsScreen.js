import styles from '../styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

function SettingsScreen({ navigation }) {
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