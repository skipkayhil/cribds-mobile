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

const ViewEmployee = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <Text> Employee Name </Text>
      <Text> ID: </Text>
      <Text>  ID goes here </Text>
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

ViewEmployee.navigationOptions = ({ navigation }) => {
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
          <Title>Employee Name goes here</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default ViewEmployee;
