import React from 'react';
import { Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RefugeeViewProject = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('RefugeeProjectDetails')}
    >
      <Text>Project [Project Status]</Text>
    </Button>
  );
};

RefugeeViewProject.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="Project List" left={<BackButton />} />
});

export default RefugeeViewProject;
