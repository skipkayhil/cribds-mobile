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

const RefugeeViewProjectDetails = props => {
  return (
    <Button
      full
    >
      <Text>Details</Text>
    </Button>
  );
};

RefugeeViewProjectDetails.navigationOptions = ({ navigation }) => {
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

export default RefugeeViewProjectDetails;
