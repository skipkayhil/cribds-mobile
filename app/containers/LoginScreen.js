import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

const LoginScreen = props => {
  return (
    <Container style={styles.container}>
      <Text>Login Screen</Text>
      <Button full onPress={() => props.navigation.navigate('Employee')}>
        <Text>HSS Employee</Text>
      </Button>
      <Button full>
        <Text>Refugee</Text>
      </Button>
    </Container>
  );
};

export default LoginScreen;
