import React from 'react';
import { Button, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const AdministrateProjects = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('AdministrateProjectDetail')}
    >
      <Text>Project [Camp]</Text>
    </Button>
  );
};

AdministrateProjects.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader title="Accepted Projects List" left={<BackButton />} />
  )
});

export default AdministrateProjects;
