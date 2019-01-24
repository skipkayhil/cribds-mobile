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

const RefugeeViewProject = props => {
  return (
    <Button
      full
      success
      onPress={() => props.navigation.navigate('RefugeeProjectDetails')}
    >
      <Text>Project</Text>
    </Button>
  );
};

RefugeeViewProject.navigationOptions = ({ navigation }) => {
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
          <Title>List of projects</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default RefugeeViewProject;
