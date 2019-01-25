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

const SelfRefugeeProfile = props => {
  return (
    <React.Fragment>
      <Text> Name: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> John Doe </TextInput>
      <Text> Password: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> **** </TextInput>
      <Text> Email: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> refugee@email.here </TextInput>
      <Text> Phone #: </Text>
      <TextInput style={{borderColor: 'gray', borderWidth: 1}}> ***-***-**** </TextInput>
      <Button
        full
        success
        onPress={() => props.navigation.navigate('RefugeeEditProf')}
      >
        <Text>Submit (Not implemented yet)</Text>
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
