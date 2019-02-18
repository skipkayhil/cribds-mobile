import React from 'react';
import { Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const ListEmployees = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('AdministratorEmployeeView')}
    >
      <Text>Employee Name</Text>
    </Button>
  );
};

ListEmployees.navigationOptions = ({ navigation }) => {
  return {
    header: <NavigationHeader title="List of Employees" left={<BackButton />} />
  };
};

export default ListEmployees;
