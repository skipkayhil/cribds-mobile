import React from 'react';
import { Button, Content, Icon, List, ListItem, Text } from 'native-base';
import { NavigationHeader, BackButton } from '../components';

const ViewRefugees = props => {
  return (
    <Content>
      <List>
        <ListItem button>
          <Text>John Smith</Text>
        </ListItem>
        <ListItem>
          <Text>James White</Text>
        </ListItem>
        <ListItem>
          <Text>Jim Brown</Text>
        </ListItem>
        <ListItem>
          <Text>Jack Green</Text>
        </ListItem>
        <ListItem>
          <Text>Jed Black</Text>
        </ListItem>
      </List>
    </Content>
  );
};

ViewRefugees.navigationOptions = ({ navigation }) => ({
  header: (
    <NavigationHeader
      right={
        <Button transparent>
          <Icon name="search" />
        </Button>
      }
      left={<BackButton navigation={navigation} />}
      title="View Refugees"
    />
  )
});

export default ViewRefugees;
