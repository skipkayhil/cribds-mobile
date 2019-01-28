import React from 'react';
import { Button, Text } from 'native-base';
import { TextInput } from 'react-native';
import { BackButton, NavigationHeader } from '../components';

const ManageEmployee = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        Employee Name
      </TextInput>
      <Text> Password: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        ****
      </TextInput>
      <Text> Email: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        employee@email.here
      </TextInput>
      <Text> Phone #: </Text>
      <TextInput style={{ borderColor: 'gray', borderWidth: 1 }}>
        ***-***-****
      </TextInput>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('AdministratorHome')}
      >
        <Text>Submit Changes (Not implemented yet)</Text>
      </Button>
      <Button
        success
        onPress={() => props.navigation.navigate('AdministratorHome')}
      >
        <Text>Delete Employee (Not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

ManageEmployee.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      title="Employee Name"
      left={<BackButton navigation={navigation} />}
    />
  )
});

export default ManageEmployee;
