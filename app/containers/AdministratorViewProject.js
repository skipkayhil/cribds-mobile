import React from 'react';
import { Button, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const AdministratorViewProject = props => {
  return (
    <React.Fragment>
      <Text> Title: </Text>
      <Text> My Project </Text>
      <Text> Created by: </Text>
      <Text> John Doe </Text>
      <Text> Project Status: </Text>
      <Text> Pending/Accepted/Rejected(reason for rejection) </Text>
      <Text> Location: </Text>
      <Text> Camp A </Text>
      <Text> Details: </Text>
      <Text> Here's the relevant information </Text>
      <Text> Contact info: </Text>
      <Text> Phone Number or Email or something </Text>
      <Button
        success
        onPress={() => props.navigation.navigate('AdministratorHome')}
      >
        <Text>Delete Project (Not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

AdministratorViewProject.navigationOptions = ({ navigation }) => ({
  header: <NavigationHeader title="Project Details" left={<BackButton />} />
});

export default AdministratorViewProject;
