import styles from '../styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the LoginScreen.</Text>
      <Button
        title="Go Back"
        type="solid"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default LoginScreen;