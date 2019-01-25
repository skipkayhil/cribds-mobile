import React from 'react';
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base';
import {TextInput} from 'react-native';

const RegisterEmployee = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> Employee Name </TextInput>
      <Text> Password: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> **** </TextInput>
      <Text> Email: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> employee@email.here </TextInput>
      <Text> Phone #: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> ***-***-**** </TextInput>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('AdministratorHome')}
      >
        <Text>Submit (Not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

RegisterEmployee.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>Register Employee</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default RegisterEmployee;
