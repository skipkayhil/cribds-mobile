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
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>List of Employees</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default ListEmployees;
