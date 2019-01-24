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
    <Button>
      <Text>Action</Text>
    </Button>
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
