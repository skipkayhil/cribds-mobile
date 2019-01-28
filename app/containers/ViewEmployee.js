import React from 'react';
import { Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const ViewEmployee = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <Text> Employee Name </Text>
      <Text> ID: </Text>
      <Text> ID goes here </Text>
      <Text> Email: </Text>
      <Text> employee@email.here </Text>
      <Text> Phone #: </Text>
      <Text> ***-***-**** </Text>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('AdministratorEditEmployee')}
      >
        <Text>Change Info</Text>
      </Button>
    </React.Fragment>
  );
};

ViewEmployee.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Employee Name"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default ViewEmployee;
