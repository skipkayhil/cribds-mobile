import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const style = StyleSheet.create({
  button: {
    margin: 5,
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const HomeButton = ({ text, ...props }) => {
  const { width } = Dimensions.get('window');

  return (
    <Button
      style={[style.button, { width: width / 2 - 15, height: width / 2 - 15 }]}
      {...props}
    >
      <Text style={style.text}>{text}</Text>
    </Button>
  );
};

export default HomeButton;
