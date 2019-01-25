import React from 'react';
import { Button, Text } from 'native-base';
import { BackButton, NavigationHeader } from '../components';

const RegisterRefugee = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('EmployeeHome')}
    >
      <Text>Submit</Text>
    </Button>
  );
};

RegisterRefugee.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      left={<BackButton navigation={navigation} />}
      title="Register Refugee"
    />
  )
});

export default RegisterRefugee;
