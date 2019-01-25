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

const AdministrateProjects = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('AdministrateProjectDetail')}
    >
      <Text>Project [Camp]</Text>
    </Button>
  );
};

AdministrateProjects.navigationOptions = ({ navigation }) => {
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
          <Title>Accepted Projects List</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default AdministrateProjects;
