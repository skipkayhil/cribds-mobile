import React from 'react';
import { Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const SelfRefugeeProfile = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <Text> John Doe </Text>
      <Text> ID: </Text>
      <Text> ID goes here </Text>
      <Text> Email: </Text>
      <Text> refugee@email.here </Text>
      <Text> Phone #: </Text>
      <Text> ***-***-**** </Text>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('RefugeeEditProf')}
      >
        <Text>Update Info</Text>
      </Button>
    </React.Fragment>
  );
};

SelfRefugeeProfile.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Profile"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default SelfRefugeeProfile;
