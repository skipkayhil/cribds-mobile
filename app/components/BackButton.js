import React from 'react';
import { Button, Icon, Text } from 'native-base';

const BackButton = ({ navigation }) => (
  <Button transparent onPress={() => navigation.goBack()}>
    <Icon name="arrow-back" />
    <Text>Back</Text>
  </Button>
);

export default BackButton;
