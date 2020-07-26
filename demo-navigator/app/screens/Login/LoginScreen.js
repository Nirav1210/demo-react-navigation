import styles from '../styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

function LoginScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerStyle: styles.header,
    });
  }, [navigation]);

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