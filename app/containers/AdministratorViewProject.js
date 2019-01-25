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

const AdministratorViewProject = props => {
  return (
    <React.Fragment>
      <Text> Title: </Text>
      <Text> My Project </Text>
      <Text> Created by: </Text>
      <Text>  John Doe </Text>
      <Text> Project Status: </Text>
      <Text>  Pending/Accepted/Rejected(reason for rejection) </Text>
      <Text> Location: </Text>
      <Text>  Camp A </Text>
      <Text> Details: </Text>
      <Text> Here's the relevant information </Text>
      <Text> Contact info: </Text>
      <Text> Phone Number or Email or something </Text>
      <Button
        success
        onPress={() => props.navigation.navigate('AdministratorHome')}
      >
        <Text>Delete Project (Not implemented yet)</Text>
      </Button>
    </React.Fragment>
  );
};

AdministratorViewProject.navigationOptions = ({ navigation }) => {
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
          <Title>Details of project</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default AdministratorViewProject;
