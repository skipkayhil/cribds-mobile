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

const SelfRefugeeProfile = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <Text> John Doe </Text>
      <Text> ID: </Text>
      <Text>  ID goes here </Text>
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

SelfRefugeeProfile.navigationOptions = ({ navigation }) => {
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
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default SelfRefugeeProfile;
