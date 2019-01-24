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

const CreateProject = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('RefugeeHome')}
    >
      <Text>Submit Project</Text>
    </Button>
  );
};

CreateProject.navigationOptions = ({ navigation }) => {
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
          <Title>Create Project</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default CreateProject;
