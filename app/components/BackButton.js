import React from 'react';
import { Button, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

const BackButton = ({ navigation }) => (
  <Button transparent onPress={() => navigation.goBack(null)}>
    <Icon name="arrow-back" />
    <Text>Back</Text>
  </Button>
);

export default withNavigation(BackButton);
