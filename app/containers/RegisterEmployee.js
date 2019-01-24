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

const RegisterEmployee = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('AdministratorHome')}
    >
      <Text>Submit</Text>
    </Button>
  );
};

RegisterRefugee.navigationOptions = ({ navigation }) => {
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
